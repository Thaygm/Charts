<template>
    <div>
        <Line :data="chartData" :options="chartOptions"/>
    </div>
</template>


<script setup lang="ts">
import { PropType, ref } from 'vue'
import {  Line } from 'vue-chartjs'
import { ChartData, ChartOptions, Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
            backgroundColor: ['#793FDF'],
            borderColor: 'rgb(221, 230, 237)',
        },
    ],
});

const chartOptions = ref<ChartOptions>({
    responsive: true,
    maintainAspectRatio: false,
});


</script>



