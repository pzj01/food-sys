/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/contact': RouteRecordInfo<'/contact', '/contact', Record<never, never>, Record<never, never>>,
    '/login': RouteRecordInfo<'/login', '/login', Record<never, never>, Record<never, never>>,
    '/products': RouteRecordInfo<'/products', '/products', Record<never, never>, Record<never, never>>,
    '/register': RouteRecordInfo<'/register', '/register', Record<never, never>, Record<never, never>>,
    '/sys': RouteRecordInfo<'/sys', '/sys', Record<never, never>, Record<never, never>>,
    '/sys/': RouteRecordInfo<'/sys/', '/sys', Record<never, never>, Record<never, never>>,
    '/sys/product': RouteRecordInfo<'/sys/product', '/sys/product', Record<never, never>, Record<never, never>>,
  }
}