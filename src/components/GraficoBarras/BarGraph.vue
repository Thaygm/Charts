<template>
    <div>
        <Bar :data="chartData" :options="chartOptions"/>
    </div>
</template>


<script setup lang="ts">
import { PropType, ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { ChartData, ChartOptions, Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
            data: [10, 90, 20, 80, 30, 70, 40],
            backgroundColor: 'rgb(255, 109, 40)',
            borderColor: 'rgb(234, 4, 126)',
            borderWidth: 1,
        },
    ],
});

const chartOptions = ref<ChartOptions>({
    responsive: true,
    maintainAspectRatio: false,
});


</script>



