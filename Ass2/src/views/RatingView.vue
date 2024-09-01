<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  value: 5;
  totalRating: 10;
}>();


const emit = defineEmits<(event: "update-rating", value: number) => void>();
</script>

<template>
  <div class="wrapper">
    Please give feedback here
    <span v-for="star in 10" :key="star" class="star">★</span>
    AVG rating
    <span v-for="star in 10" :key="star" class="star" :class="{ filled: star <= 4 }">★</span>
  </div>



</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 2px;
}

.star {
  cursor: pointer;
  color: #d8d8d8;
}

.star:hover,
.star:active,
.star.filled {
  color: black;
}
</style>