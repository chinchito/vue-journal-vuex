<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({name: 'entry-selected', params:{id: 10}})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">{{ new Date().getDate() }}</span>
            <span class="mx-1 fs-5">{{ new Date().toLocaleString('es-ES',{month:'long'}) }}</span>
            <span class="mx-2 fw-light">{{ new Date().getFullYear() }}</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae harum enim reiciendis iure illum delectus soluta a,
            nulla quam dolore recusandae modi nobis, deserunt eveniet?
            Nesciunt quo officiis repudiandae consequatur.
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.entry-container {
    border: 1px solid #2c3e50;
    transform: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transform: 0.2s all ease-in;
    }
    
    .entry-description{
        font-size: 14px;
    }
}
</style>