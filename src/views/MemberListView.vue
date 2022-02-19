<template>
  <OrganisationSearch @loadMember="loadMemberHandler" />
  <MemberList :members="membersLoaded.value" />
  <button type="button" @click="log(membersLoaded)">TEST</button>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import OrganisationSearch from "@/components/OrganisationSearch.vue";
import MemberList from "@/components/MemberList.vue";
import { getMembers } from "@/composable/memberApi";
import { Member } from "@/types";

export default defineComponent({
  name: "MemberListView",
  components: { OrganisationSearch, MemberList },

  setup() {
    let membersLoaded: Ref<Member[]> = ref([]);

    const loadMemberHandler = async (organisationFilter: string) => {
      membersLoaded.value = await getMembers(organisationFilter);
    };
    const log = console.log;

    return { loadMemberHandler, membersLoaded, log };
  },
});
</script>
