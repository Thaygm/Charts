<template>
    <div>
        <Pie :data="chartData" :options="chartOptions"/>
    </div>
</template>


<script setup lang="ts">
import { PropType, ref } from 'vue'
import {  Pie } from 'vue-chartjs'
import { ChartData, ChartOptions, Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
    labels: {
        type: Array as PropType<string[]>,
        required: true
    },
})

const chartData = ref<ChartData>({
    labels: props.labels,
    datasets: [
        {
            label: 'Valores',
            data: [10, 90, 20, 80, 30],
            backgroundColor: ['#FFFBAF', '#FF5656', '#CD0A0A', '#FADB3F', '#42CFC4'],
            borderColor: 'rgb(221, 230, 237)',
        },
    ],
});

const chartOptions = ref<ChartOptions>({
    responsive: true,
    maintainAspectRatio: false,
});


</script>



