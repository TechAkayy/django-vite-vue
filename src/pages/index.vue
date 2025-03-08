<script setup lang="ts">
import { VueElement, computed, ref } from "vue";
import Framework from "../components/Framwork.vue";

defineProps<{
  packages: Array<[]>;
}>();
</script>
<template class="font-serif">
    <div className="text-center h-screen flex justify-center flex-col items-center p-4">
        <!-- <img
      className="w-full lg:w-[60%]"
      src="/static/django_breeze/django-breeze-logo.jpg"
      alt=""
    /> -->
        <h1 className="text-3xl font-bold">Welcome, Tee Kaapi.com</h1>
        <p className="text-green-600 mb-5" class="mt-2 text-primary-600">The best coffee in Melbourne</p>
        <h3 className="text-slate-500" class="mt-6">Powered by:</h3>
        <div className="lg:flex space-y-2 lg:space-y-0 lg:space-x-3 mt-3">
            <div v-for="framework in packages">
                <Framework :framework="framework"/>
            </div>
        </div>
    </div>
</template>
