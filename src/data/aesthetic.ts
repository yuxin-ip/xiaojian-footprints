export const aestheticCollectionSlugs = ['heritage', 'birding'] as const;

export type AestheticCollectionSlug = (typeof aestheticCollectionSlugs)[number];

export type AestheticPhoto = {
  slug: string;
  filename: string;
  location: string;
  subject?: string;
  subjectLabel?: string;
  dateLabel: string;
  sortDate: string;
  equipment: string | null;
  quote: string;
  collectionSlugs: AestheticCollectionSlug[];
};

export type AestheticCollection = {
  slug: AestheticCollectionSlug;
  name: string;
  eyebrow: string;
  description: string;
};

export const aestheticPhotos: AestheticPhoto[] = [
  {
    slug: 'xiaoshan-nandafang',
    filename: '2019-xiaoshan-nandafang.jpg',
    location: '萧山 · 南大房',
    dateLabel: '2019年7月',
    sortDate: '2019-07',
    equipment: 'Smartisan Pro 2',
    quote: '2019年7月和姨夫的浙北文化之旅，是人生中最温暖的回忆之一。',
    collectionSlugs: ['heritage']
  },
  {
    slug: 'wuxi-jiachengli',
    filename: '2020-wuxi-jiachengli.jpg',
    location: '无锡 · 夹城里',
    dateLabel: '2020年7月',
    sortDate: '2020-07',
    equipment: null,
    quote: '用镜头记录下龟背壳中，夹城里最后一片旧时的记忆。',
    collectionSlugs: []
  },
  {
    slug: 'suzhou-zhixing-mountain',
    filename: '2020-suzhou-zhixing-mountain.jpg',
    location: '苏州 · 支硎山',
    dateLabel: '2020年12月',
    sortDate: '2020-12',
    equipment: 'Sony NEX-5N + Sigma 30mm F1.4 DC DN Contemporary',
    quote: '小光头中蕴含着高二的，思考、快乐和苦楚。',
    collectionSlugs: ['heritage']
  },
  {
    slug: 'wuxi-nanquan',
    filename: '2021-wuxi-nanquan.jpg',
    location: '无锡 · 南泉',
    dateLabel: '2021年2月',
    sortDate: '2021-02',
    equipment: 'Smartisan R1',
    quote: '用罗永浩时代锤子科技的最后一部坚果旗舰机拍下。',
    collectionSlugs: []
  },
  {
    slug: 'wuxi-xicang',
    filename: '2023-wuxi-xicang.jpg',
    location: '无锡 · 西仓',
    dateLabel: '2023年1月12日 22:00',
    sortDate: '2023-01-12',
    equipment: 'Sony A7S II + Nikon AI-S Nikkor 105mm f/2.5',
    quote: '是明代斑驳的墙根。',
    collectionSlugs: ['heritage']
  },
  {
    slug: 'yangzhou-geyuan',
    filename: '2023-yangzhou-geyuan.jpg',
    location: '扬州 · 个园',
    dateLabel: '2023年2月26日 21:50',
    sortDate: '2023-02-26',
    equipment: 'Sony A7S II + Nikon AI-S Nikkor 105mm f/2.5',
    quote: '充满大师与欢笑的城市，图为船巷。',
    collectionSlugs: ['heritage']
  },
  {
    slug: 'hangzhou-museum',
    filename: '2023-hangzhou-museum.jpg',
    location: '杭州博物馆',
    dateLabel: '2023年8月',
    sortDate: '2023-08',
    equipment: 'Contax G1 + Carl Zeiss Biogon T* 28mm f/2.8',
    quote: '镜头的虚实变化，仿佛就是流淌过的历史。',
    collectionSlugs: []
  },
  {
    slug: 'nanjing-xiuqiu-park',
    filename: '2026-nanjing-xiuqiu-park.jpg',
    location: '南京 · 绣球公园',
    subject: '鹊鸲',
    dateLabel: '2026年6月2日 17:53',
    sortDate: '2026-06-02',
    equipment: 'Nikon Z5II + NIKKOR Z 24-200mm f/4-6.3 VR',
    quote: '这是我第一次拍到鹊鸲。',
    collectionSlugs: ['birding']
  },
  {
    slug: 'fuzhou',
    filename: '2026-fuzhou.jpg',
    location: '福州 · 马尾',
    subject: '家燕',
    dateLabel: '2026年6月30日 12:39',
    sortDate: '2026-06-30',
    equipment: 'Nikon Z5II + NIKKOR Z 24-200mm f/4-6.3 VR',
    quote: '合唱团来了！',
    collectionSlugs: ['birding']
  },
  {
    slug: 'daxigang-wetland-banded-pitta',
    filename: '2026-daxigang-wetland-banded-pitta.jpg',
    location: '大溪港湿地',
    subject: '斑姬啄木鸟',
    dateLabel: '2026年7月17日 17:49',
    sortDate: '2026-07-17',
    equipment: 'Panasonic Lumix DMC-GH4 + Panasonic Lumix G Vario 100-300mm f/4-5.6 II POWER O.I.S.',
    quote: '那天最惊喜的一张，美妙的相遇总是发生在观鸟旅途快结束、以为自己一无所获的时候。',
    collectionSlugs: ['birding']
  },
  {
    slug: 'nanjing-zhongshan-mausoleum',
    filename: '2026-nanjing-zhongshan-mausoleum.jpg',
    location: '南京 · 中山陵',
    subject: '南京理工大学',
    subjectLabel: '远望',
    dateLabel: '2026年9月1日 15:57:28',
    sortDate: '2026-09-01T15:57:28',
    equipment: 'Nikon Z5II + NIKKOR Z 24-200mm f/4-6.3 VR',
    quote: '开学后，登上中山陵，眺望南京理工大学。',
    collectionSlugs: []
  },
  {
    slug: 'wuxi-northern-grey-flycatcher',
    filename: '2026-wuxi-northern-grey-flycatcher.jpg',
    location: '无锡',
    subject: '北灰鹟',
    dateLabel: '2026年8月27日 09:46:21',
    sortDate: '2026-08-27T09:46:21',
    equipment: 'Panasonic Lumix DMC-GH4 + Panasonic Lumix G Vario 100-300mm f/4-5.6 II POWER O.I.S.',
    quote: '欢迎北灰鹟经过无锡！',
    collectionSlugs: ['birding']
  }
];

export const aestheticCollections: AestheticCollection[] = [
  {
    slug: 'heritage',
    name: '行走文保',
    eyebrow: 'Cultural Heritage',
    description: '在旧建筑、园林与山径间行走，留下与地方记忆相遇的片段。'
  },
  {
    slug: 'birding',
    name: '小謇观鸟',
    eyebrow: 'Birding',
    description: '把旅途中的偶遇、初见与鸟鸣，收进镜头和时间里。'
  }
];

export function getAestheticCollection(slug: AestheticCollectionSlug) {
  const collection = aestheticCollections.find((item) => item.slug === slug);
  if (!collection) throw new Error(`Unknown aesthetic collection: ${slug}`);
  return collection;
}

export function getAestheticPhotosForCollection(slug: AestheticCollectionSlug) {
  return aestheticPhotos.filter((photo) => photo.collectionSlugs.includes(slug));
}
