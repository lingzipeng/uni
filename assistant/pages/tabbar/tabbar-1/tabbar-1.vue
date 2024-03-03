<template>
	<view class="content">
		<h1>{{title}}</h1>
		<button @click="handle">点击</button>
		<text>总数{{total}}</text>
		<view v-for="item in list" :key="item.name">
			<h2>{{item.name}}</h2>
			<h3>{{item.num}}</h3>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { computed, reactive, ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	const title = ref('nihao')
	onLoad(() => {
		console.log('nihao')
	})
	let list = reactive([
		{ name: 'aa', num: 11 },
		{ name: 'bb', num: 22 },
	])
	const handle = () => {
		list.forEach(item => {
			item.num++
		})
	}
	
	const total = computed(() => {
		return list.reduce((total,cur) => total + cur.num,0)
	})
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>