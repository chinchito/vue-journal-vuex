<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input
                type="text"
                class="form-control"
                placeholder="Buscar entrada"
            />
        </div>
        <div class="entry-scrollarea">
            <h2 v-for="(item, itemIdx) in 100" :key="itemIdx">
                <entry />
            </h2>
        </div>
    </div>
  <h1>Entry List</h1>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Entry: defineAsyncComponent(() => import(/* webpackChunkName: "EntryComponent" */'@/modules/daybook/components/EntryComponent.vue'))
    }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}
.entry-scrollarea {
    height: calc(100vh - 100px);
    overflow: scroll;
}
</style>