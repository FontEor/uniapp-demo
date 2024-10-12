import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'
//定义交叉类型 &  ---在原来的类型的基础上进行扩展
type hotParam = PageParams & { subType: string }
export const getHotPreferenceApi = (url: string, data?: hotParam) => {
  return http<HotResult>({
    url,
    method: 'GET',
    data,
  })
}
