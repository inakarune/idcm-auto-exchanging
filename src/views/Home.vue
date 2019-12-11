<template>
<div class="window-box">
	<Titlebar />
	<div class="box-content">
		<div class="input-box">
			<label>매도금액 Max</label>
			<input type="text">
		</div>
		<div class="input-box">
			<label>매도금액 Min</label>
			<input type="text">
		</div>
		<div class="input-box">
			<label>1회당 매도수량</label>
			<input type="text">
		</div>
		<div class="input-box">
			<label>매수주기</label>
			<input type="text">
		</div>
		<div class="input-box">
			<label>변동주기</label>
			<input type="text">
		</div>
		<div class="btn-box">
			<button class="mint" @click="sellOrder">실행</button>
			<button class="red" @click="cancelOrder">전체취소</button>
			<button class="orange" @click="exit">종료</button>
		</div>
	</div>
	<div class="user-box"><span>접속 아이디 : 홍길동님</span></div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Titlebar from '@/components/Titlebar.vue';
import { orderService } from './order.service';

declare const window: any;
const electron = window.require('electron');
const { ipcRenderer, remote } = electron;
@Component({
	components: {
		Titlebar
	}
})
export default class Home extends Vue {
	
	async getOrderList(): Promise<any> {
		try {
			const response: any = await orderService.obtainOrderList({ Symbol, PageIndex, PageSize, Status });
		} catch (error) {
			console.error(error);
		}
	}

	async sellOrder(): Promise<any> {
		try {
			const response: any = await orderService.orderTransaction({ Symbol: 'CXAT-ETH', Size: '', Price: '', Side: '', Type: '', Amount: '' });
		} catch (error) {
			console.error(error);
		}
	}

	async buyOrder(): Promise<any> {
		try {
			const response: any = await orderService.orderTransaction({ Symbol: 'CXAT-ETH', Size: '', Price: '', Side: '', Type: '', Amount: '' });
		} catch (error) {
			console.error(error);
		}
	}

	async cancelOrder(): Promise<any> {
		try {
			const response: any = await orderService.cancelOrder({ Symbol: 'CXAT-ETH', OrderID: '', Side: '' });
		} catch (error) {
			console.error(error);
		}
	}

	private exit(): void {
		ipcRenderer.send('exit');
	}
}
</script>
<style lang="scss" scoped>
@import '../assets/css/window.scss';
</style>
