<template>
	<view class="page-wrap">
		<view class="banner">
			<uni-nav-bar status-bar :border="false" leftWidth="30px" backgroundColor="transparent" color="white"
				left-icon="left" leftText="返回">
				<view class="nav-title">{{title}}</view>
				<template #left>
					<view hover-class="hover-text" @click="onBack">
						<text class="text-xl">
							<text class="cuIcon-back"></text>
						</text>
						<text class="text-df">&nbsp;&nbsp;&nbsp;</text>
					</view>
				</template>
			</uni-nav-bar>
			<view class="padding flex justify-between align-center">
				<view class="">
					<view class="padding-bottom-sm">
						<text class="t-label">借款金额&nbsp;&nbsp;</text>
						<text class="t-value">￥{{jkje}}</text>
					</view>
					<view class="padding-bottom-sm">
						<text class="t-label">帮还金额&nbsp;&nbsp;</text>
						<text class="t-value">{{bhje ? `￥${bhje}` : '-'}}</text>
					</view>
					<view class="padding-bottom-sm">
						<text class="t-label">借款日期&nbsp;&nbsp;</text>
						<text class="t-value">{{jkrq}}</text>
					</view>
				</view>
				<view class="text-xsl flex flex-direction justify-center align-center">
					<text class="text-white" :class="done ? 'cuIcon-roundcheckfill' : 'cuIcon-roundclosefill'"></text>
				</view>

			</view>
		</view>
		<scroll-view scroll-x class="bg-white nav solid-bottom ">
			<view class="flex text-center solid-bottom">
				<view class="cu-item flex-sub" :class="active==0?'text-green cur':''" @click="onTabChange(0)">
					分期计划
				</view>
				<view class="cu-item flex-sub" :class="active==1?'text-green cur':''" @click="onTabChange(1)">
					帮还记录
				</view>
			</view>
		</scroll-view>
		<view class="flex1 overflow-hidden bg-white padding-left">
			<scroll-view id="detail" class="full-height" scroll-y :scroll-top="scrollTop.current" @scroll="onScroll">
				<template v-if="active==0">
					<view class="cu-timeline" v-for="item in shouldList" :key="item.day">
						<view class="cu-time">{{item.day}}</view>
						<view class="cu-item">
							<view class="content">
								<view class="text-green text-bold text-xxl">
									￥{{item.count}}
								</view>
								<view class="text-grey">
									{{item.desc}}
								</view>
							</view>
						</view>
					</view>
				</template>
				<template v-if="active==1">
					<view class="cu-timeline" v-for="item in helpList" :key="item.day">
						<view class="cu-time">{{item.day}}</view>
						<view class="cu-item">
							<view class="content" v-for="(_item,_index) in item.list" :key="_index">
								<view class="text-green text-bold text-xxl">
									￥{{_item.count}}
								</view>
								<view class="text-grey">
									{{_item.desc}}
								</view>
							</view>
						</view>
					</view>
				</template>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		billList
	} from '../../assets/util.js'
	import {
		reactive,
		ref,
		nextTick
	} from 'vue';

	const title = ref('');
	const active = ref(0);
	const shouldList = ref([]);
	const helpList = ref([]);
	const jkje = ref(0);
	const bhje = ref(null);
	const jkrq = ref('');
	const done = ref(false);
	const scrollTop = reactive({
		old: 0,
		current: 0
	})
	const onBack = () => {
		uni.navigateBack({
			delta: 1
		})
	}

	const onScroll = (e) => {
		scrollTop.old = e.detail.scrollTop
	}
	const onTabChange = (index) => {
		active.value = index;
		scrollTop.current = scrollTop.old;
		nextTick(() => {
			scrollTop.current = 0;
		})
		// const domQuery = uni.createSelectorQuery();
		// const domDetail = domQuery.select('#detail');
		// const scrollOffset = domDetail.scrollOffset((result) => {
		// 	console.log('result', result);
		// }).exec();
		// scrollTop.value = 0;
		// console.log('domDetail', domDetail, 'scrollOffset', scrollOffset)
	}

	const formatData = (id) => {
		const findItem = billList.find(el => el.id == id);
		title.value = findItem.label;
		jkje.value = findItem['jkje'];
		bhje.value = findItem['bhje'];
		jkrq.value = findItem['jkrq'];
		done.value = findItem['done'];
		shouldList.value = findItem['hklb'];
		helpList.value = findItem['bhlb'];
		console.log('findItem:', findItem);
	}
	onLoad(param => {
		const {
			id
		} = param;
		formatData(id);

	})
</script>

<style scoped>
	.banner {
		background: linear-gradient(to top right, #39b54a, #8dc63f);
	}

	.nav-title {
		color: white;
		font-weight: bold;
		font-size: 32rpx;
		width: 100%;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	.je-wrap {
		display: flex;
		align-items: flex-end;
	}



	.t-label {
		color: rgba(244, 244, 244, .75);
		font-size: 28rpx;
	}

	.t-value {
		color: #ffffff;
		font-size: 32rpx;
		font-weight: bold;
	}
</style>
