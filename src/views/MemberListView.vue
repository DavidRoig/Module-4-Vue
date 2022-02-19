<template>
  <OrganisationSearch @loadMember="loadMemberHandler" />
  <MemberList :members="membersLoaded" />
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import OrganisationSearch from "@/components/OrganisationSearch.vue";
import MemberList from "@/components/MemberList.vue";
import { getMembers } from "@/composable/memberApi";
import { Member } from "@/types";
import { AppConstants } from "@/constants/appConstants";

export default defineComponent({
  name: "MemberListView",
  components: { OrganisationSearch, MemberList },

  setup() {
    const membersLoaded: Ref<Member[]> = ref([]);

    const loadMemberHandler = async (organisationFilter: string) => {
      membersLoaded.value = await getMembers(organisationFilter);
    };

    return { loadMemberHandler, membersLoaded };
  },
});
</script>
