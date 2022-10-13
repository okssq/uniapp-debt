<template>
	<view class="page-wrap">
		<view class="q-nav-bar">
			<uni-nav-bar status-bar backgroundColor="transparent"  color="white" leftWidth="100%">
				<template #left>
					<view class="text-bold text-lg">债务查查</view>
				</template>
			</uni-nav-bar>
		</view>
		<view class="flex1 flex flex-direction overflow-hidden">
			<view class="bg-white flex1  overflow-auto">
				<view class="cu-list menu">
					<view class="cu-item" v-for="(item,index) in billList" :key="index" @click="viewItem(item)">
						<button class="cu-btn content">
							<text :class="item.done ? 'text-olive cuIcon-roundcheckfill' : 'text-red cuIcon-roundclosefill'"></text>
							<text class="text-grey">{{item.label}}</text>
							<view class="flex1 text-left">
								<text class="cu-tag  margin-left light" :class="item.done ? 'bg-olive' : 'bg-red'">￥{{item.jkje}}</text>
							</view>
							<text class="lg text-grey cuIcon-right"></text>
						</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		billList
	} from '../../assets/util.js'
	
	const viewItem = (item) => {
		uni.navigateTo({
			url:`/pages/detail/detail?id=${item.id}`
		})
	}
</script>
<style scoped lang="scss">
	.q-nav-bar {
		background: linear-gradient(to top right, #39b54a, #8dc63f);

		.q-nav-bar-title {
			color: #ffffff;
			font-size: 32rpx;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
