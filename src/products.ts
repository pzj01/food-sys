import { Category } from './types'

export interface Product {
  id: number
  name: string
  category: Category
  price: number
  unit: string
  image: string
  testReport?: string
}

export const products: Product[] = [
  {
    id: 27,
    name: '可靠的大米',
    category: Category.OIL,
    price: 99.9,
    unit: '袋',
    image: '/reports/可靠的大米/可靠的大米.jpeg',
    testReport: '/reports/可靠的大米/大米出厂检测报告.jpg',
  },
  {
    id: 1,
    name: '福禄花鲜香压榨菜籽油5L',
    category: Category.OIL,
    price: 159.8,
    unit: '桶',
    image: '/reports/福禄花鲜香压榨菜籽油5L/福禄花鲜香压榨菜籽油5L.webp',
    testReport: '/reports/福禄花鲜香压榨菜籽油5L/产品检测报告.pdf',
  },
  {
    id: 2,
    name: '福禄花鲜香压榨玉米油5L',
    category: Category.OIL,
    price: 112,
    unit: '桶',
    image: '/reports/福禄花鲜香压榨玉米油5L/福禄花鲜香压榨玉米油5L.jpeg',
    testReport: '/reports/福禄花鲜香压榨玉米油5L/产品检测报告.pdf',
  },
  {
    id: 3,
    name: '福禄花压榨葵花籽油10L',
    category: Category.OIL,
    price: 215,
    unit: '桶',
    image: '/reports/福禄花压榨葵花籽油10L/福禄花压榨葵花籽油10L.jpeg',
    testReport: '/reports/福禄花压榨葵花籽油10L/产品检测报告.pdf',
  },
  {
    id: 4,
    name: '福禄花压榨花生油10L',
    category: Category.OIL,
    price: 180,
    unit: '桶',
    image: '/reports/福禄花压榨花生油10L/福禄花压榨花生油10L.jpeg',
    testReport: '/reports/福禄花压榨花生油10L/产品检测报告.pdf',
  },
  {
    id: 5,
    name: '玲珑心压榨玉米油5L',
    category: Category.OIL,
    price: 120,
    unit: '桶',
    image: '/reports/玲珑心压榨玉米油5L/玲珑心压榨玉米油5L.jpeg',
    testReport: '/reports/玲珑心压榨玉米油5L/产品检测报告.pdf',
  },
  {
    id: 6,
    name: '福禄花玉米油5L',
    category: Category.OIL,
    price: 120,
    unit: '桶',
    image: '/reports/福禄花玉米油5L/福禄花玉米油5L.jpg',
    testReport: '/reports/福禄花玉米油5L/产品检测报告.pdf',
  },
  {
    id: 7,
    name: '玲珑心玉米油5L',
    category: Category.OIL,
    price: 120,
    unit: '桶',
    image: '/reports/玲珑心玉米油5L/玲珑心玉米油5L.jpg',
    testReport: '/reports/玲珑心玉米油5L/产品检测报告.pdf',
  },
  {
    id: 8,
    name: '西王纯香压榨菜籽油5L（中百、特渠）',
    category: Category.OIL,
    price: 130,
    unit: '桶',
    image: '/reports/西王纯香压榨菜籽油5L（中百、特渠）/西王纯香压榨菜籽油5L（中百、特渠）.jpg',
    testReport: '/reports/西王纯香压榨菜籽油5L（中百、特渠）/产品检测报告.pdf',
  },
  {
    id: 9,
    name: '西王低芥酸浓香菜籽油5L',
    category: Category.OIL,
    price: 109,
    unit: '桶',
    image: '/reports/西王低芥酸浓香菜籽油5L/西王低芥酸浓香菜籽油5L.jpg',
    testReport: '/reports/西王低芥酸浓香菜籽油5L/产品检测报告.pdf',
  },
  {
    id: 10,
    name: '西王好鲜生玉米胚芽油5L',
    category: Category.OIL,
    price: 110,
    unit: '桶',
    image: '/reports/西王好鲜生玉米胚芽油5L/西王好鲜生玉米胚芽油5L.jpg',
    testReport: '/reports/西王好鲜生玉米胚芽油5L/产品检测报告.pdf',
  },
  {
    id: 11,
    name: '西王经典玉米胚芽油5L',
    category: Category.OIL,
    price: 189.9,
    unit: '桶',
    image: '/reports/西王经典玉米胚芽油5L/西王经典玉米胚芽油5L.jpg',
    testReport: '/reports/西王经典玉米胚芽油5L/产品检测报告.pdf',
  },
  {
    id: 12,
    name: '西王葵花籽油5L（优选）',
    category: Category.OIL,
    price: 108.69,
    unit: '桶',
    image: '/reports/西王葵花籽油5L（优选）/西王葵花籽油5L（优选）.avif',
    testReport: '/reports/西王葵花籽油5L（优选）/产品检测报告.pdf',
  },
  {
    id: 13,
    name: '西王食用植物调和油5L（玉橄）',
    category: Category.OIL,
    price: 148,
    unit: '桶',
    image: '/reports/西王食用植物调和油5L（玉橄）/西王食用植物调和油5L（玉橄）.avif',
    testReport: '/reports/西王食用植物调和油5L（玉橄）/产品检测报告.pdf',
  },
  {
    id: 14,
    name: '西王小榨原香菜籽油5L',
    category: Category.OIL,
    price: 116.6,
    unit: '桶',
    image: '/reports/西王小榨原香菜籽油5L/西王小榨原香菜籽油5L.jpeg',
    testReport: '/reports/西王小榨原香菜籽油5L/产品检测报告.pdf',
  },
  {
    id: 15,
    name: '西王小榨甄香菜籽油5L',
    category: Category.OIL,
    price: 99.9,
    unit: '桶',
    image: '/reports/西王小榨甄香菜籽油5L/西王小榨甄香菜籽油5L.jpeg',
    testReport: '/reports/西王小榨甄香菜籽油5L/产品检测报告.pdf',
  },
  {
    id: 16,
    name: '西王压榨菜籽油5L',
    category: Category.OIL,
    price: 99.9,
    unit: '桶',
    image: '/reports/西王压榨菜籽油5L/西王压榨菜籽油5L.jpeg',
    testReport: '/reports/西王压榨菜籽油5L/产品检测报告.pdf',
  },
  {
    id: 17,
    name: '西王压榨花生油5L',
    category: Category.OIL,
    price: 99.9,
    unit: '桶',
    image: '/reports/西王压榨花生油5L/西王压榨花生油5L.jpeg',
    testReport: '/reports/西王压榨花生油5L/产品检测报告.pdf',
  },
  {
    id: 18,
    name: '西王压榨葵花籽油5.27L（惠 悦味上品）',
    category: Category.OIL,
    price: 67.9,
    unit: '桶',
    image: '/reports/西王压榨葵花籽油5.27L（惠 悦味上品）/西王压榨葵花籽油5.27L（惠 悦味上品）.jpg',
    testReport: '/reports/西王压榨葵花籽油5.27L（惠 悦味上品）/产品检测报告.pdf',
  },
  {
    id: 19,
    name: '西王压榨葵花籽油5L',
    category: Category.OIL,
    price: 99.9,
    unit: '桶',
    image: '/reports/西王压榨葵花籽油5L/西王压榨葵花籽油5L.jpg',
    testReport: '/reports/西王压榨葵花籽油5L/产品检测报告.pdf',
  },
  {
    id: 20,
    name: '西王压榨玉米油5L',
    category: Category.OIL,
    price: 149,
    unit: '桶',
    image: '/reports/西王压榨玉米油5L/西王压榨玉米油5L.avif',
    testReport: '/reports/西王压榨玉米油5L/产品检测报告.pdf',
  },
  {
    id: 21,
    name: '西王油酸多黑花生油5L',
    category: Category.OIL,
    price: 550,
    unit: '桶',
    image: '/reports/西王油酸多黑花生油5L/西王油酸多黑花生油5L.jpg',
    testReport: '/reports/西王油酸多黑花生油5L/产品检测报告.pdf',
  },
  {
    id: 22,
    name: '西王玉米胚芽油5.27L（惠 悦味上品）',
    category: Category.OIL,
    price: 37.9,
    unit: '桶',
    image: '/reports/西王玉米胚芽油5.27L（惠 悦味上品）/西王玉米胚芽油5.27L（惠 悦味上品）.jpg',
    testReport: '/reports/西王玉米胚芽油5.27L（惠 悦味上品）/产品检测报告.pdf',
  },
  {
    id: 23,
    name: '西王玉米胚芽油5L（零反式脂肪）',
    category: Category.OIL,
    price: 99.9,
    unit: '桶',
    image: '/reports/西王玉米胚芽油5L（零反式脂肪）/西王玉米胚芽油5L（零反式脂肪）.avif',
    testReport: '/reports/西王玉米胚芽油5L（零反式脂肪）/产品检测报告.pdf',
  },
  {
    id: 24,
    name: '西王玉米胚芽油5L（普胚）',
    category: Category.OIL,
    price: 89.9,
    unit: '桶',
    image: '/reports/西王玉米胚芽油5L（普胚）/西王玉米胚芽油5L（普胚）.avif',
    testReport: '/reports/西王玉米胚芽油5L（普胚）/产品检测报告.pdf',
  },
  {
    id: 25,
    name: '西王玉米胚芽油鲜胚5L',
    category: Category.OIL,
    price: 99.9,
    unit: '桶',
    image: '/reports/西王玉米胚芽油鲜胚5L/西王玉米胚芽油鲜胚5L.avif',
    testReport: '/reports/西王玉米胚芽油鲜胚5L/产品检测报告.pdf',
  },
  {
    id: 26,
    name: '西王玉米油5L（尊享、优选）',
    category: Category.OIL,
    price: 199.9,
    unit: '桶',
    image: '/reports/西王玉米油5L（尊享、优选）/西王玉米油5L（尊享、优选）.avif',
    testReport: '/reports/西王玉米油5L（尊享、优选）/产品检测报告.pdf',
  },
  {
    id: 28,
    name: '统一桶装方便面',
    category: Category.OTHER,
    price: 5,
    unit: '桶',
    image: '/reports/统一桶装方便面/统一桶装方便面.jpg',
    testReport: '/reports/统一桶装方便面/统一桶装方便面.pdf',
  },
  {
    id: 29,
    name: '面条',
    category: Category.OTHER,
    price: 6,
    unit: '袋',
    image: '/reports/面条/面条.avif',
    testReport: '/reports/面条/面条.pdf',
  },
  {
    id: 30,
    name: '猪肉',
    category: Category.MEAT,
    price: 10,
    unit: '斤',
    image: '/reports/可靠的猪产品来源/可靠的猪产品来源.webp',
    testReport: '/reports/可靠的猪产品来源/可靠的猪产品来源.jpg',
  },
  {
    id: 31,
    name: '鸡肉',
    category: Category.MEAT,
    price: 10,
    unit: '斤',
    image: '/reports/肉鸡/肉鸡.jpg',
    testReport: '/reports/肉鸡/肉鸡.pdf',
  },
  {
    id: 32,
    name: '肉鸭',
    category: Category.MEAT,
    price: 10,
    unit: '斤',
    image: '/reports/肉鸭/肉鸭.jpg',
    testReport: '/reports/肉鸭/肉鸭.pdf',
  },
  {
    id: 33,
    name: '鲈鱼',
    category: Category.MEAT,
    price: 10,
    unit: '斤',
    image: '/reports/鲈鱼/鲈鱼.jpg',
    testReport: '/reports/鲈鱼/鲈鱼.pdf',
  },
  {
    id: 34,
    name: '基围虾',
    category: Category.MEAT,
    price: 10,
    unit: '斤',
    image: '/reports/基围虾/基围虾.jpg',
    testReport: '/reports/基围虾/基围虾.pdf',
  },
  {
    id: 35,
    name: '豆角',
    category: Category.FRUITS,
    price: 3,
    unit: '斤',
    image: '/reports/豆角/豆角.jpg',
    testReport: '/萍乡市优达配送-生鲜农产品配送.pdf',
  },
]
