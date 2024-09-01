<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  value: number;
  totalRating: number;
}>();


const emit = defineEmits<(event: "update-rating", value: number) => void>();
</script>

<template>
  <div class="wrapper">
    <span v-for="star in 10" :key="star" class="star">★</span>
    <span v-for="star in totalRating" :key="star" class="star" :class="{ filled: star <= 5 }">★</span>
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