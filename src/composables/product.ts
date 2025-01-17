import type { Product } from '~/types'
import { defineStore } from 'pinia'
import { useManagement } from './useManagement'

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: '统一桶装方便面',
    document_number: '01',
    date: new Date('2023-12-01'),
    raw_materials: '小麦面条',
    additives: '食用盐及相关香料',
    related_name: '统一桶装方便面',
    specification: '450g/桶',
    unit: '桶',
    responsible_person: '李学碧',
    shelf_life: '12个月',
    entry_time: new Date('2021-12-01'),
    exit_time: new Date('2021-12-02'),
    production_date: new Date('2023-12-01'),
    quantity: 20,
  },
  {
    id: 2,
    name: '面条',
    document_number: '02',
    date: new Date('2023-12-01'),
    raw_materials: '面条',
    additives: '无',
    related_name: '滑面挂面',
    specification: '1kg/袋',
    unit: '袋',
    responsible_person: '李学碧',
    shelf_life: '12个月',
    entry_time: new Date('2021-12-01'),
    exit_time: new Date('2021-12-02'),
    production_date: new Date('2023-12-01'),
    quantity: 5,
  },
  {
    id: 3,
    name: '菜籽油',
    document_number: '03',
    date: new Date('2023-12-01'),
    raw_materials: '菜籽油',
    additives: '无',
    related_name: '福林门菜籽油',
    specification: '5L/桶',
    unit: '桶',
    responsible_person: '李学碧',
    shelf_life: '18个月',
    entry_time: new Date('2021-12-01'),
    exit_time: new Date('2021-12-02'),
    production_date: new Date('2023-12-01'),
    quantity: 2,
  },
  {
    id: 4,
    name: '花生油',
    document_number: '04',
    date: new Date('2023-12-05'),
    raw_materials: '花生',
    additives: '无',
    related_name: '鲁花花生油',
    specification: '5L/桶',
    unit: '桶',
    responsible_person: '王海生',
    shelf_life: '18个月',
    entry_time: new Date('2021-12-05'),
    exit_time: new Date('2021-12-06'),
    production_date: new Date('2023-12-05'),
    quantity: 3,
  },
  {
    id: 5,
    name: '大豆油',
    document_number: '05',
    date: new Date('2023-11-25'),
    raw_materials: '大豆',
    additives: '无',
    related_name: '金龙鱼大豆油',
    specification: '4L/桶',
    unit: '桶',
    responsible_person: '赵明辉',
    shelf_life: '12个月',
    entry_time: new Date('2021-11-25'),
    exit_time: new Date('2021-11-26'),
    production_date: new Date('2023-11-25'),
    quantity: 5,
  },
  {
    id: 6,
    name: '橄榄油',
    document_number: '06',
    date: new Date('2023-12-10'),
    raw_materials: '橄榄',
    additives: '无',
    related_name: '欧丽薇兰橄榄油',
    specification: '1L/瓶',
    unit: '瓶',
    responsible_person: '李静',
    shelf_life: '24个月',
    entry_time: new Date('2021-12-10'),
    exit_time: new Date('2021-12-11'),
    production_date: new Date('2023-12-10'),
    quantity: 10,
  },
  {
    id: 7,
    name: '玉米油',
    document_number: '07',
    date: new Date('2023-12-15'),
    raw_materials: '玉米',
    additives: '无',
    related_name: '多力玉米油',
    specification: '5L/桶',
    unit: '桶',
    responsible_person: '张建华',
    shelf_life: '18个月',
    entry_time: new Date('2021-12-15'),
    exit_time: new Date('2021-12-16'),
    production_date: new Date('2023-12-15'),
    quantity: 4,
  },
]

export const useProductStore = defineStore('product', () => {
  const { items, addItem, updateItem, deleteItem } = useManagement<Product>({
    items: DEFAULT_PRODUCTS,
    detailKey: 'name',
  })

  const productsMap = computed(() => {
    return items.reduce<Record<Product['id'], Product>>((acc, product) => {
      acc[product.id] = product
      return acc
    }, {})
  })

  return {
    productsMap,
    products: items,
    addProduct: addItem,
    updateProduct: updateItem,
    deleteProduct: deleteItem,
  }
})
