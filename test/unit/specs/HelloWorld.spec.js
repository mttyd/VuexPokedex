import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('PokedexShell.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PokedexShell)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
