<template>
    <h1 class="text-2xl font-bold text-center mt-8">Tuning fork (Camertone)</h1>
    <button @click="play" class="self-center p-4 bg-neutral-300 mt-8 rounded-lg">Play sound</button>
</template>
<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router';


let aud: HTMLAudioElement | null = null;
const play = async () => {
    aud = new Audio('/audio.mp3');
    await aud.play();
}

onBeforeRouteLeave(async () => {
    await aud?.pause();
})
</script>
<style scoped></style>