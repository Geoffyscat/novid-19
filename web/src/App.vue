<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import * as echarts from "echarts";
import { onMounted } from "vue";
import china from "@/assets/geojson.json";
import { GeoIPCity } from "@/assets/city";
import { ref } from "vue";

const counter = useCounterStore()

const initEchaet = async () => {
  const charts = echarts.init(document.querySelector("#echarts") as HTMLElement)
  echarts.registerMap('china', china as any)
  await counter.getLists()
  const city = counter.list.diseaseh5Shelf.areaTree[0].children
  console.log(city);

  item.value = city[5].children
  const data = city.map(v => {
    const confirm = v.today.confirm
    const value = GeoIPCity[v.name]
    return {
      name: v.name,
      confirm,
      value,
      item: v.children
    }
  })
  // var data = [
  //   {
  //     name: "内蒙古",
  //     itemStyle: {
  //       areaColor: "#56b1da",
  //     },
  //     value: [110.3467, 41.4899]
  //   },
  // ];
  charts.setOption({
    // backgroundColor: "black",
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: {
        //normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        //},

      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            //normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            //},
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        zoom: 1, //当前视角的缩放比例
        // roam: true, //是否开启平游或缩放
        scaleLimit: {
          //滚轮缩放的极限控制
          min: 1,
          max: 2,
        },
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 14,
        },
        itemStyle: {
          //normal: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
          //,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [45, 45],
        label: {
          //normal: {
          show: true,
          color: '#fff',
          //}
          formatter (value: any) {
            return value.data.confirm
          },
          shadowColor: "red"

        },
        itemStyle: {
          // normal: {
          color: '#1E90FF', //标志颜色
          // }
        },
        data: data,
        // showEffectOn: 'render',
        // rippleEffect: {
        //   brushType: 'stroke'
        // },
        // hoverAnimation: true,
        // zlevel: 1
      },
    ],
  })
  charts.on('click', (e: any) => {
    if (e.seriesType != "scatter") return
    item.value = e.data.item
  })
}
let item: any = ref([])

onMounted(() => {
  initEchaet()
})

</script>

<template>
  <main class="warps">
    <aside class="left">
      <div class="left-card">
        假装是一个三列两横的card
      </div>
      <div class="left-ring">
        假装是一个echarts 的圆环图
      </div>
      <div class="left-line">
        假装是一个echarts 的xy图
      </div>
      <div></div>
    </aside>
    <article class="center">
      <div id="echarts"></div>
    </article>
    <aside class="right">
      <table class="table" cellspacing="0">
        <thead>
          <tr>
            <th>地区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>
        <TransitionGroup enter-active-class="animate__animated animate__backInUp" tag="tbody">
          <!-- <tbody> -->
          <tr :key="v.name" v-for="v in item">
            <td>{{ v.name }}</td>
            <td>{{ v.today.confirm }}</td>
            <td>{{ v.total.confirm }}</td>
            <td>{{ v.total.heal }}</td>
            <td>{{ v.total.dead }}</td>
          </tr>
          <!-- </tbody> -->
        </TransitionGroup>
      </table>
    </aside>
  </main>
</template>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}

.warps {
  display: flex;
  overflow: hidden;
  height: 100%;
  background-image: url("@/assets/wallhaven-rdv2wm.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  background-color: #999;
  backdrop-filter: opacity(20%);
}

.left,
.right {
  flex: 1;
}

.center {
  flex: 3;

  #echarts {
    width: 100%;
    height: 100%;
  }
}

.table {
  width: 100%;
  text-align: center;

  thead {
    color: white;
    background-color: rgb(14, 186, 238);

    th {
      padding: 4px;
      white-space: nowrap;
    }
  }

  tbody {
    td {
      border: 1px solid #333;
      margin: -1px;
      white-space: nowrap;
    }
  }
}
</style>
