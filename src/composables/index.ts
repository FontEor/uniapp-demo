import type { XtxGuessInstance } from '@/types/component'
import { ref } from 'vue'

// 猜你喜欢的组合式函数   类似react中的hooks函数
export const useGuess = () => {
  const guessRef = ref<XtxGuessInstance>()
  //猜你喜欢触底事件
  const handleScrolltolower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    handleScrolltolower,
  }
}

// TODO
export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  //猜你喜欢触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
