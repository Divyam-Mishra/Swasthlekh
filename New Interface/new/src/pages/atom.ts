import { atom } from "recoil";

export const navState = atom({
  key:"navState",
  default:true
})

export const load = atom({
  key:"laod",
  default:''
})

export const backendDown = atom({
  key:"backendDown",
  default:false
})

export const numwords = atom({
  key:"numwords",
  default:0
})


export const wordss = atom({
  key:"wordss",
  default:[]
})


export const typereffectt = atom({
  key:"typereffect",
  default:''
})


export const currentindex = atom({
  key:"currentIndex",
  default:0
})

export const actions = atom({
  key:"actions",
  default:''
})


export const home = atom({
  key:'home',
  default:false
})

export const log = atom({
  key:'log',
  default:false
})

export const requestt = atom({
  key:'request',
  default:false
})

export const uploadedState = atom({
  key:'uploadedState',
  default:false
})