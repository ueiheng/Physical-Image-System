<template>
    <div ref="chart" style="height: 400px;"></div>

    <div class="chart">
        <div class="range">
            <p>a 取值范围：<span>{{ aSliderValue }}</span></p>
            <input type="range" min="0" max="1" step="0.1" v-model="aSliderValue"><br><br>
        </div>
        <div class="range">
            <p>w 取值范围：<span>{{ wSliderValue }}</span></p>
            <input type="range" min="1" max="10" v-model="wSliderValue"><br><br>
        </div>
        <div class="range">
            <p>b 取值范围：<span>{{ bSliderValue }}</span></p>
            <input type="range" min="0" max="6.28" step="0.1" v-model="bSliderValue"><br><br>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null);
const dataX = ref([]);
const dataY = ref([]);

// 定义初始值
const aSliderValue = ref(0.5);
const wSliderValue = ref(5);
const bSliderValue = ref(3.14);

onMounted(() => {
    // 定义一个空数组用于存储 x 轴数据
    for (let i = -100; i <= 100; i++) {
        dataX.value.push(i / 10);
    }

    // 定义一个空数组用于存储 y 轴数据
    for (let i = 0; i < dataX.value.length; i++) {
        dataY.value.push(Math.sin(dataX.value[i]));
    }

    // 监听滑动块变化
    const updateChart = () => {
        var sinFunc = new SinFunction(parseFloat(aSliderValue.value), parseFloat(wSliderValue.value), parseFloat(bSliderValue.value));
        var yData = [];
        for (var i = 0; i <= 360; i++) {
            var y = sinFunc.getY(i);
            yData.push(y);
        }

        var option = {
            xAxis: {
                type: 'category',
                data: dataX.value
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                data: yData
            }]
        };
        myChart.setOption(option);
    };

    // 构造函数，根据 a、w、b 计算正弦曲线的 y 值
    function SinFunction(a, w, b) {
        this.a = a;
        this.w = w;
        this.b = b;
        this.getY = function (x) {
            return this.a * Math.sin(this.w * x / 180 * Math.PI + this.b);
        }
    }

    // 初始化滑动块值
    aSliderValue.value = 0.5;
    wSliderValue.value = 5;
    bSliderValue.value = 3.14;

    // 使用 ECharts 绘制正弦图像
    var myChart = echarts.init(chart.value);

    // 监听滑动块变化
    watch([aSliderValue, wSliderValue, bSliderValue], ([newA, newW, newB], [oldA, oldW, oldB]) => {
        updateChart();
    });

    // 第一次渲染
    updateChart();
});
</script>
  
<style lang="less" scoped>
.chart {
    display: flex;

    .range {
        flex: 1
    }
}
</style>