<template>
    <h1 class="text-2xl font-bold text-center mt-8">Chord library</h1>
    <div class="mt-4 text-center text-xl rounded-lg bg-neutral-300 p-8 self-center" v-for="[name, url] in chordMap">
        <img :src="url" :alt="name" class="max-h-40">
        <p>{{ name }}</p>
    </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from 'vue';

const chordMap: Ref<Map<string, string>> = ref(new Map([
    ['Am', 'https://chordbank.com/cb4dg/artful_luigi_1_750.png'],
    ['Em', 'https://chordbank.com/cb4dg/earthy_clo_1_750.png'],
    ['C', 'https://chordbank.com/cb4dg/cagey_dani_1_750.png'],
    ['G', 'https://chordbank.com/cb4dg/notable_cora_1_750.png'],
    ['F', 'https://chordbank.com/cb4dg/grumpy_lulu_1_750.png'],
    ['Dm', 'https://chordbank.com/cb4dg/acidic_mei_1_750.png'],
    ['E', 'https://chordbank.com/cb4dg/earthy_ian_1_750.png'],
    ['D', 'https://chordbank.com/cb4dg/acidic_mel_1_750.png']
]));

</script>
<style></style>