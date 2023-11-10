<template>
  <div id="app">
    <BarGraph :labels="labels" />
    <DonutGraph :labels="labels2" />
    <PieGraph :labels="labels3" />
    <LineGraph :labels="labels4" />
  </div>
</template>

<script setup lang="ts">
import BarGraph from './components/BarGraph/BarGraph.vue'
import DonutGraph from './components/DonutGraph/DonutGraph.vue'
import PieGraph from './components/PieGraph/PieGraph.vue'
import LineGraph from './components/LineGraph/LineGraph.vue'


const labels = ['AAAAAAA', 'BBBB', 'CCCC', 'DDDDD', 'EEEEEE', 'FFFFFF', 'GGGGGG']
const labels2 = ['NNNNNN', 'OOOOOO', 'PPPPPP', 'QQQQQQ', 'RRRRRR']
const labels3 = ['SSSSS', 'TTTTTT', 'UUUUUU', 'VVVVV', 'XXXXX']
const labels4 = ['Doc1', 'Doc2', 'Doc3', 'Doc4', 'Doc5']
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>