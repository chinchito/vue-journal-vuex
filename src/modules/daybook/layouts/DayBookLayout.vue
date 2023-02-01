<template>
    <day-book-navbar />
    <div class="d-flex">
        <div class="col-4">
            <entry-list />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        DayBookNavbar: defineAsyncComponent(() => import(/* webpackChunkName: "DayBookNavbar" */'@/modules/daybook/components/DayBookNavbar.vue')),
        EntryList: defineAsyncComponent(() => import(/* webpackChunkName: "EntryList" */'@/modules/daybook/components/EntryListComponent.vue')),
    }
}
</script>