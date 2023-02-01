<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">{{ new Date().getDate() }}</span>
            <span class="mx-1 fs-3">{{ new Date().toLocaleString('es-ES',{month:'long'}) }}</span>
            <span class="mx-2 fs-4 fw-light">{{ new Date().getFullYear() }}</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir Foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que hay de nuevo viejo?"></textarea>

    </div>
    <fab icon="fa-save" />
    <img src="https://static.bandainamcoent.eu/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_game-thumbnail.jpg"
        alt="DBZ Entry Picture"
        class="img-thumbnail"
    />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Fab: defineAsyncComponent(() => import(/* webpackChunkName: "FabComponent" */'@/modules/daybook/components/FabComponent.vue'))
    }
}
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus {
            outline: none;
        }
    }
    img {
        width: 400px;
        position: fixed;
        bottom: 150px;
        right: 120px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>