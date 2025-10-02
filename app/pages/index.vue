<template>
    <div class="min-h-screen py-10 px-5 text-center bg-[#f69252]">
        <div class="flex items-center justify-around gap-10 min-h-[400px] p-5 lg:mb-[17.5vh] ">
            <div class="p-2.5 max-w-[50%]">
                <h1 class="text-slate-800 text-[clamp(3rem,7.5vw,8rem)] -mb-5 leading-tight font-bold tracking-wider">
                    Nightmare
                </h1>
                <div class="font-black text-[max(2vw,2vh)] text-slate-700 mt-2.5 mb-0 tracking-wide">
                    <div class="flex justify-evenly">
                        <p class="event-date">Washington, DC</p>
                        <span class="event-date">|</span>
                        <p class="event-date">November 1st & 2nd</p>
                    </div>
                </div>
                <p class="font-semibold text-[clamp(1rem,3vw,2rem)] leading-relaxed">
                    This Halloween, skip the trick or treat and build something you're truly proud of.
                </p>
            </div>
            <img src="../assets/daydream-dc.png" class="w-1/2 h-[45vh] object-cover rounded-xl shadow-2xl"/>
        </div>
        <br />
        <div data-fillout-id="b5iDwkUvM3us" data-fillout-embed-type="popup" data-fillout-button-text="Sign Up" data-fillout-button-color="#000000" data-fillout-button-size="large" data-fillout-inherit-parameters data-fillout-popup-size="large" />
        <br />
        <!-- Displays below what the user can see without scrolling -->
        <div class="w-full mt-[40vh]">
            <div class="grid grid-cols-3 gap-4 w-full max-w-6xl mx-auto uppercase font-black text-2xl">

                <div class="p-4 text-center">
                    <p class="mb-4">Show up and meet 50 other like minded hackers (costumes encouraged)</p>
                </div>
                <div class="p-4 text-center">
                    <p class="mb-4">Find a team and get to learn and work on building your own horror game (beginner friendly)</p>
                </div>
                <div class="p-4 text-center">
                    <p class="mb-4">Share your game with other attendees and the world and win cool prizes</p>
                </div>
                
                <div class="p-4 text-center">
                    <video autoplay muted loop class="rounded-xl shadow-2xl aspect-square object-cover w-full max-w-80 mx-auto">
                        <source src="../assets/rehacted.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="p-4 text-center">
                    <img class="rounded-xl shadow-2xl aspect-square object-cover w-full max-w-80 mx-auto" src="../assets/rehacted-team.jpg" />
                </div>
                <div class="p-4 text-center">
                    <img class="rounded-xl shadow-2xl aspect-square object-cover w-full max-w-80 mx-auto" src="../assets/deven-orpheus-plushie.png" />
                </div>
            </div>
        </div>
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