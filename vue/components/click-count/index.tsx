import { red } from './module.js'
import { ref, withModifiers, defineComponent } from 'vue'

// see https://vuejs.org/guide/extras/render-function.html#jsx-tsx
// see https://github.com/vuejs/babel-plugin-jsx
export default defineComponent({
  setup() {
    const count = ref(0)

    const inc = () => {
      count.value += 1
    }

    return () => (
      <div class={red} onClick={withModifiers(inc, ['self'])}> {count.value}</div >
    )
  }
})
