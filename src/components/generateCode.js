import { getFormCode } from './renderHtml/getCode'
export default function (data) {
  return getFormCode(data);
//   const funcList = []

//   const tokenFuncList = []

//   const blankList = []

//   findRemoteFunc(JSON.parse(data).list, funcList, tokenFuncList, blankList)
//   let funcTemplate = ''

//   let blankTemplate = ''

//   for(let i = 0; i < funcList.length; i++) {
//     funcTemplate += `
//             ${funcList[i].func} (resolve) {
//               // ${funcList[i].label} ${funcList[i].model}
//               // Call callback function once get the data from remote server
//               // resolve(data)
//             },
//     `
//   }
//   for(let i = 0; i < tokenFuncList.length; i++) {
//     funcTemplate += `
//             ${tokenFuncList[i].func} (resolve) {
//               // ${tokenFuncList[i].label} ${tokenFuncList[i].model}
//               // Call callback function once get the token
//               // resolve(token)
//             },
//     `
//   }

//   for (let i = 0; i < blankList.length; i++) {
//     blankTemplate += `
//         <template slot="${blankList[i].name}" slot-scope="scope">
//           <!-- ${blankList[i].label} -->
//           <!-- use v-model="scope.model.${blankList[i].name}" to bind data -->
//         </template>
//     `
//   }
//   let template;
//   if (type == 'vue') {
//     template = `<template>
//   <div>
//     <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm">
//       ${blankTemplate}
//     </fm-generate-form>
//     <el-button type="primary" @click="handleSubmit">提交</el-button>
//   </div>
// </template>

// <script>
//   export default {
//     data () {
//       return {
//         jsonData: ${data},
//         editData: {},
//         remoteFuncs: {
//           ${funcTemplate}
//         }
//       }
//     },
//     methods: {
//       handleSubmit () {
//         this.$refs.generateForm.getData().then(data => {
//           // data check success
//           // data - form data
//         }).catch(e => {
//           // data check failed
//         })
//       }
//     }
//   }
// </script>`
//   } else {
//     template = `<!DOCTYPE html>
//   <html>
//   <head>
//     <meta charset="UTF-8">
//     <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
//     <link rel="stylesheet" href="https://unpkg.com/form-making/dist/FormMaking.css">
//   </head>
//   <body>
//     <div id="app">
//       <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm">
//         ${blankTemplate}
//       </fm-generate-form>
//       <el-button type="primary" @click="handleSubmit">提交</el-button>
//     </div>
//     <script src="https://unpkg.com/vue/dist/vue.js"></script>
//     <script src="https://unpkg.com/element-ui/lib/index.js"></script>
//     <script src="https://unpkg.com/form-making/dist/FormMaking.umd.js"></script>
//     <script>
//       new Vue({
//         el: '#app',
//         data: {
//           jsonData: ${data},
//           editData: {},
//           remoteFuncs: {
//             ${funcTemplate}
//           }
//         },
//         methods: {
//           handleSubmit () {
//             this.$refs.generateForm.getData().then(data => {
//               // data check success
//               // data - form data
//             }).catch(e => {
//               // data check failed
//             })
//           }
//         }
//       })
//     </script>
//   </body>
//   </html>`
//   }
//   return template
}