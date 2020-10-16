<template>
  <v-container grid-list-xl>
    <!-- Toolbar for processor selection/bulk operations -->
    <v-toolbar fixed v-if='selectedProcessors.length > 0' style='z-index:100'>
      <v-toolbar-items>
        <v-btn icon color='primary' class='md-raised md-dense md-primary' @click.native='clearSelection'>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn flat @click.native='selectAll()'>select all</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat color='error' @click.native='deleteSelectedProcessors'>Delete</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- End toolbar -->
    <v-layout row wrap>
      <v-flex xs12 py-5 class='headline font-weight-light'>
        A processor is an upcoming feature for executing scripts and workflows automatically when a Speckle stream is updated. If you are interested in beta testing this feature, please email <a href="mailto: david.dekoning@arup.com?subject=Speckle Processor - Beta Testing">David de Koning</a>.
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import debounce from 'lodash.debounce'
import ProcessorCard from '../components/ProcessorCard.vue'

export default {
  name: 'ProcessorView',
  components: {
    ProcessorCard
  },
  computed: {
    processors( ) {
      return this.$store.state.processors.filter( p => p.owner.indexOf(this.$store.state.user._id) !== -1)
    },
    filteredProcessors( ) {
      if ( this.searchfilter && this.searchfilter !== '' )
        return this.processors.filter( p => p.name.toLowerCase().includes( this.searchfilter.toLowerCase() ) )
      return this.processors
    },
    paginatedProcessors( ) {
      return this.filteredProcessors.slice( this.currentIndex + this.pageNumber * this.sliceSize, this.sliceSize * ( this.pageNumber + 1 ) )
    }
  },
  data( ) {
    return {
      currentIndex: 0,
      sliceSize: 6,
      pageNumber: 0,
      searchfilter: '',
      selectedProcessors: [ ],
      isSearching: false
    }
  },
  methods: {
    selectThis( processor ) {
      let index = this.selectedProcessors.findIndex( p => p._id === processor._id )
      if ( index === -1 )
        this.selectedProcessors.unshift( processor )
      else
        this.selectedProcessors.splice( index, 1 )
    },
    selectAll( ) {
      this.paginatedProcessors.forEach( processor => {
        let index = this.selectedProcessors.findIndex( s => s._id === processor._id )
        if ( index === -1 ) {
          bus.$emit( 'select-processor', processor._id )
        }
      } )
    },
    createProcessor( ) {
      this.$store.dispatch( 'createProcessor', { name: 'A brand new speckle processor' } )
        .then( res => {
          this.$router.push( `/processors/${res._id}` )
        } )
    },
    deleteSelectedProcessors( ) {
      this.selectedProcessors.forEach( processor => {
        this.$store.dispatch( 'deleteProcessor', { _id: processor._id } )
      } )
      this.selectedProcessors.splice( 0, this.selectedProcessors.length )
      this.clearSelection( )
    },
    clearSelection( ) {
      bus.$emit( 'unselect-all-processors' )
    },
    updateSearch: debounce( function( e ) {
      this.pageNumber = 0
      this.isSearching = false
      this.searchfilter = e
    }, 1000 ),
  }
}

</script>
<style scoped lang='scss'>
</style>
