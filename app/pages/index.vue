<template>
    <div class="min-h-screen py-10 px-5 text-center bg-[#f69252]">
        <div class="flex items-center justify-around gap-10 min-h-[400px] p-5 mb-5  ">
            <div class="p-2.5 max-w-[50%]">
                <h1 class="text-slate-800 text-[clamp(3rem,7.5vw,8rem)] -mb-5 leading-tight font-bold tracking-wider">
                    Nightmare
                </h1>
                <p class="event-date font-black text-[max(2vw,2vh)] text-slate-700 mt-2.5 mb-0 tracking-wide">
                    November 1st & 2nd
                </p>
                <p class="font-semibold text-[clamp(1rem,3vw,2rem)] leading-relaxed">
                    This Halloween, skip the trick or treat and build something you're truly proud of.
                </p>
            </div>
            <img src="../assets/daydream-dc.png" class="w-1/2 h-[45vh] object-cover"/>
        </div>
        <div class="flex justify-around gap-10 uppercase font-black text-2xl">
            <p class="max-w-100">Show up and meet 50 other like minded hackers (costumes encouraged)</p>
            <p class="max-w-100">Find a team and get to learn and work on building your own horror game (beginner friendly)</p>
            <p class="max-w-100">Share your game with other attendees and the world and win cool prizes</p>
        </div>
        <br />
        <br />
        <div data-fillout-id="toWH9D3BsSus" data-fillout-embed-type="popup" data-fillout-button-text="Sign Up" data-fillout-button-color="#000000" data-fillout-button-size="medium" data-fillout-inherit-parameters data-fillout-popup-size="large"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // Load the Fillout embed script
    const script = document.createElement('script')
    script.src = 'https://server.fillout.com/embed/v1/'
    script.async = true
    document.head.appendChild(script)
})
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Jolly+Lodger&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

    h1 {
        font-family: 'Creepster', cursive;
    }

    .event-date {
        font-family: 'Jolly Lodger', cursive;
    }

    p:not(.event-date) {
        font-family: 'Nunito Sans', sans-serif;
    }
</style>