<template>
  <div class="container">
    <h2>AI 翻译</h2>
    <input v-model="text" placeholder="请输入要翻译的内容">
    <button @click="translate">翻译</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref("");
const translateText = ref("");

const translate = () => {
  chrome.runtime.sendMessage({ type: "TRANSLATE_TEXT", text: text.value }, (response) => {
    translate.value = response?.translateText || "翻译失败";
  })
}
</script>

<style>
.container {
  padding: 10px;
  width: 200px;
}

input {
  width: 100%;
  margin-bottom: 5px;
}

button {
  width: 100%;
}
</style>
