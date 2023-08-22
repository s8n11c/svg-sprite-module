import svgModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    // @ts-ignore
    svgModule
  ],
  svgModule: {
    addPlugin: true
  }
})
