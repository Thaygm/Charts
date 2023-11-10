import { ref, onMounted } from 'vue';
import { Bar, ChartData, ChartOptions } from 'vue-chartjs';

export default (() => {
const __VLS_setup = async () => {
const chartData = ref<ChartData>({
labels: [],
datasets: [
{
label: 'Valores',
data: [],
backgroundColor: 'rgba(255, 109, 40,0)',
borderColor: 'rgba(234, 4, 126,0)',
borderWidth: 1,
},
],
});

const chartOptions = ref<ChartOptions>({
responsive: true,
maintainAspectRatio: false,
scales: {
xAxes: [
{
ticks: {
beginAtZero: true,
},
},
],
},
});

let chartRef: Bar | null = null;

onMounted(() => {
chartData.value.labels = ['AAAAAAA', 'BBBB', 'CCCC', 'DDDDD', 'EEEEEE', 'FFFFFF', 'GGGGGG'];
chartData.value.datasets[0].data = ['10', '90', '20', '80', '30', '70', '40'];
updateChart();
});

const updateChart = () => {
if (chartRef) {
chartRef.destroy();
}
chartRef = new Bar({
ctx: document.getElementById(JÁCOLOCO) as HTMLCanvasElement.getContext
}('2d'),
data, chartData.value,
options, chartOptions.value);
};
};
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'BarGraph';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'BarChart', typeof __VLS_components, 'BarChart', 'barChart', 'bar-chart'>;
__VLS_components.BarChart; __VLS_components.BarChart; __VLS_components.barChart; __VLS_components.barChart; __VLS_components['bar-chart']; __VLS_components['bar-chart'];
// @ts-ignore
[BarChart, BarChart,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
if (__VLS_ctx.chartData.labels.length > 0) {
// @ts-ignore
[chartData,];
{
__VLS_templateComponents.BarChart;
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.BarChart>) = { data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), };
// @ts-ignore
[chartData, chartOptions,];
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
chartData: chartData,
chartOptions: chartOptions,
};
},
});
return {} as typeof __VLS_publicComponent;
});
