<template>
    <div class="titlebar">
        <h1>IDCM Auto Exchanging</h1>
        <button class="small" @click="small">ㅡ</button>
        <button @click="closeBtn">X</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const electron = window.require('electron');
const { ipcRenderer, remote } = electron;
declare const window: any;

@Component
export default class Titlebar extends Vue {

    private closeBtn(): void {
        const window = remote.getCurrentWindow();
        window.close();
    }

    private small(): void {
        ipcRenderer.send('mini');
    }
}
</script>
<style lang="scss" scoped>
.titlebar {
    display: flex;
    -webkit-app-region: drag;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 10px;
    line-height: 180%;

    & > h1 {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        text-align: left;
        color: white;
    }

    & > button {
        -webkit-app-region: no-drag;
        border: 1px solid #767d98;
        width: 25px;
        height: 25px;
        color: #767d98;
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;
    }

    & > button:hover {
        color: white;
        background-color: #1c2755;
        cursor: pointer;
    }
}
.small {
    margin-left: auto;
    margin-right: 5px;
}
</style>
