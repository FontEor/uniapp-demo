<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
const activeIndex = ref(0)
const handleChange: UniHelper.SwiperOnChange = (event) => {
  // 非空断言 ！
  activeIndex.value = event.detail!.current
}
const props = defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="1000" @change="handleChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import '@/components/style/XtxSwiper.scss';
</style>
