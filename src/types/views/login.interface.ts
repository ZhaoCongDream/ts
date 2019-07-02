import login from '@/store/module/login';

// login.Data 参数类型
export interface LoginData {
  pageName: string
}

// VUEX login.State 参数类型
export interface LoginState {
  data?: any,
  login?:any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

