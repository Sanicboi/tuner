<template>
    <h1 class="text-2xl font-bold text-center mt-8">Tuning fork (Camertone)</h1>
    <button @click="play" class="self-center p-4 bg-neutral-300 mt-8 rounded-lg">Play sound</button>
</template>
<script setup lang="ts">

const ctx = new window.AudioContext();
const play = () => {
    const oscillator = ctx.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = 440;
    oscillator.connect(ctx.destination);
    oscillator.start();
    setTimeout(() => {
        oscillator.stop()
    }, 1000);
}
</script>
<style scoped></style>