<template>
  <section>
    <input type="text" v-model="organisationFilter" />
    <button type="button" @click="(event) => loadMemberHandler()">
      Load Members!
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { AppConstants } from "@/constants/appConstants";

export default defineComponent({
  setup(props, { emit }) {
    const organisationFilter: Ref<string> = ref(
      AppConstants.defaultOrganisation
    );

    const loadMemberHandler = () => {
      emit("load-member", organisationFilter.value);
    };

    return { organisationFilter, loadMemberHandler };
  },
});
</script>

<style scoped lang="scss"></style>
