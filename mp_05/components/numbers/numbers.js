// components/numbers/numbers.js
// 第一步导入成员
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/store'

Component({
  // 第二步： 将它在 behaviors 使用
  behaviors: [storeBindingsBehavior],
  // 第三步 提供一个 storeBindings 对象
  storeBindings: {
    // 提供 一个数据源
    store,
    // 通过 fields 映射 属性或者字段
    fields: {
      numA: 'numA',
      numB: 'numB',
      sum: 'sum'
    },
    // 用  actions 映射方法
    actions: {
      updateNum2: 'updateNum2'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandler2(e) {
      // console.log(e);
      this.updateNum2(e.target.dataset.step)
    }
  }
})