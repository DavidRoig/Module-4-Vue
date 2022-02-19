<template>
  <section>
    <ul>
      <li v-for="member in memberList" :key="member.id">
        {{ member.name }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Member } from "@/types";

export default defineComponent({
  props: {
    members: {
      type: Array as PropType<Member[]>,
      default: () => [],
    },
  },
  setup(props) {
    const memberList = ref(props.members);
    return { memberList };
  },
});
</script>

<style scoped lang="scss"></style>
