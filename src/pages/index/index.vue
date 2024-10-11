<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList"/>
</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]> ([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const getHomeCategoryData = async() => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
})
</script>
<style lang="scss">
page{
  background-color: #f7f7f7;
}
</style>
