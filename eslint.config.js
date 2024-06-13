// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      unocss: true,
      formatters: true,
      rules: {
        'antfu/top-level-function': 'off', // 不要有 function(){}
        'node/prefer-global/process': 'off', // 解決eslint require(process.env.XXX)問題
        'curly': 'off',
        'vue/custom-event-name-casing': 'off',
      },

    },
  ),
)
