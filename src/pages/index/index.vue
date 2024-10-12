<template>
  <CustomNavbar />
  <scroll-view scroll-y class="scroll-view" @scrolltolower="handleScrollToLower">
    <!-- 轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel :list="categoryList"/>
    <!-- 热门推荐 -->
    <HotPanel :list="hotList"/>
    <!-- 猜你喜欢 -->
    <XtxGuess ref="guessRef"/>
  </scroll-view>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const guessRef = ref<XtxGuessInstance>()

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const getHomeCategoryData = async() => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const getHomeHotData = async() => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
// 滚动触底自动触发
const handleScrollToLower = () => {
  guessRef.value?.getMore()
}
</script>
<style lang="scss">
page{
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view{
  flex: 1;
}
</style>
