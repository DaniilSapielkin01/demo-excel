import {storage} from "@core/utils";

const defaultState = {
  rowState: {},
  colState: {}
}

export const initialState = storage('excel-storage')
   ? storage('excel-storage')
   : defaultState
