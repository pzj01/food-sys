<script setup>
const chartData = ref()
const chartOptions = ref()
onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
function setChartData() {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: ['面包', '苹果', '蔬菜', '香蕉', '鸡蛋', '牛奶'],
    datasets: [
      {
        label: '上一季度',
        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
        data: [65, 59, 80, 81, 56, 55],
      },
      {
        label: '本季度',
        backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        data: [28, 48, 40, 19, 86, 27],
      },
    ],
  }
}
function setChartOptions() {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    },
  }
}
</script>

<template>
  <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
</template>
