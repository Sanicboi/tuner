<template>
    <h1 class="text-2xl font-bold text-center mt-8">Tuner</h1>
    <div class="mt-16 rounded-xl bg-neutral-300 p-10 mx-16">
        <p>Note: {{ note }}</p>
        <p>Accuracy: {{ acc }}</p>
    </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import { createTuner } from '@chordbook/tuner'


let note = ref('');
let acc = ref('');

let tuner: {
    start: () => Promise<void>;
    stop: () => Promise<void>;
    context: AudioContext;
    analyser: AnalyserNode;
} | null = null;
onMounted(async () => {
    const media = await navigator.mediaDevices.getUserMedia({
        audio: true
    });
    tuner = createTuner({
        onNote: (n) => {
            console.log(n);
            note.value = n.name + String(n.octave);
            acc.value = String(n.cents);
        },
        updateInterval: 50,

        // The frequency of middle A. Defaults to 440Hz.
        a4: 440,

        // The minimum clarity threshold. Anything below this will be ignored
        clarityThreshold: 0.9,

        // The minimum volume threshold. -1000 means 1/1000th the volume of the loudest sound.
        minVolumeDecibels: -10000,

        // The minimum and maximum frequencies to detect. To reduce noise, everything else is
        // filtered out using a lowpass and highpass filter.
        minFrequency: 27.5, // A0, Lowest note on a piano
        maxFrequency: 4186.01, // C8, Highest note on a piano

        // The sample rate to use for the audio context.
        // https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/sampleRate
        sampleRate: 44100,

        // The size of buffer to use for frequency analysis, which maps to the `fftSize`:
        // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize
        bufferSize: 8192,

        // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/smoothingTimeConstant
        smoothingTimeConstant: 0.8

    })
    await tuner.start();

})



</script>
<style scoped></style>