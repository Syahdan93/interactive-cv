<script setup>
import Navbar from '@/components/theNavbar.vue';
import Hero from '@/components/theHero.vue';
import Education from '@/components/theEducation.vue';
import Skills from '@/components/theSkills.vue';
import Projects from '@/components/theProjects.vue';
import Contact from '@/components/theContact.vue';
</script>
<template>
<div>
<Navbar />
<main>
<Hero />
<div v-animate-on-scroll><Education /></div>
<div v-animate-on-scroll><Skills /></div>
<div v-animate-on-scroll><Projects /></div>
<div v-animate-on-scroll><Contact /></div>
</main>
</div>

</template>