<template>
  <div id="app">
    <div class="alertBox">
      <x-alert title="成功提示的文案" type="success"> </x-alert>
      <x-alert title="消息提示的文案" type="info"> </x-alert>
      <x-alert title="警告提示的文案" type="warning"> </x-alert>
      <x-alert title="错误提示的文案" type="error"> </x-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 800px;
  margin: 100px auto;
}
</style>
