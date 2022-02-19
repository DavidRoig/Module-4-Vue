<template>
  <section>
    <ul>
      <li v-for="member in memberList" :key="member.id">
        {{ member.login }}
        {{ member.avatar_url }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Member } from "@/types";

export default defineComponent({
  props: {
    members: {
      type: Array as PropType<Member[]>,
      default: () => [],
    },
  },
  setup(props) {
    const memberList = computed(() => props.members);

    return { memberList };
  },
});
</script>

<style scoped lang="scss"></style>
