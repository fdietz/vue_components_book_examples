<template functional>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <button @click="listeners.click">Click me</button>
    <slot></slot>
  </div>
</template>