// 在这个js文件中 专门创建 store实例对象
import {
  observable,
  action
} from 'mobx-miniprogram'

export const store = observable({
  // 数据字段
  numA: 1,
  numB: 2,
  activeTabBarIndex: 0,
  // 计算属性
  // 加了get修饰符 说明sum的值是只读的 无法重新赋值
  get sum() {
    return this.numA + this.numB
  },
  // actions 函数  专门修改 store 中数据的值
  updateNum1: action(function (step) {
    this.numA += step
  }),
  updateNum2: action(function (step) {
    this.numB += step
  }),
  updateActiveTabBarIndex: action(function(index){
    this.activeTabBarIndex = index
  })
})