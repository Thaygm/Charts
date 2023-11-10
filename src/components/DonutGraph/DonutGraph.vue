<template>
    <div>
        <Doughnut :data="chartData" :options="chartOptions"/>
    </div>
</template>


<script setup lang="ts">
import { PropType, ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
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
            backgroundColor: ['#FFA1F5', '#F8FF95', '#BC7AF9', '#A6FF96', '#F0B86E'],
        },
    ],
});

const chartOptions = ref<ChartOptions>({
    responsive: true,
    maintainAspectRatio: false,
});


</script>



