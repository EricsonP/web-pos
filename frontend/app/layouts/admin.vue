<template>
    <div class="min-h-screen bg-gray-100 flex">
        <aside
            :class="[
                'fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto',
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            ]"
        >
            <div class="h-16 flex items-center px-6 border-b border-slate-700">
                <div class="w-full flex justify-center items-center gap-3">
                    <img
                        src="/images/logo.png"
                        alt="Web POS"
                        class="w-10 -ml-5"
                    >
                    <span class="text-md font-semibold">
                        MyPOS
                    </span>
                </div>
            </div>
            <div class="flex items-center gap-3 p-6 pb-4">
                <font-awesome-icon :icon="['fas', 'circle-user']" class="text-3xl" />
                <h6 class="leading-4">
                    Ericson Paciente
                    <small class="block text-xs">Administrator</small>
                </h6>
            </div>
            <nav class="p-4 text-sm">
                <NuxtLink
                    to="/admin"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-emerald-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-gauge" />
                    <span>Dashboard</span>
                </NuxtLink>
                <div class="pt-4 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Inventory
                </div>
                <NuxtLink
                    to="/admin/products"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-box" />
                    <span>Products</span>
                </NuxtLink>
                <NuxtLink
                    to="/admin/categories"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-layer-group" />
                    <span>Categories</span>
                </NuxtLink>
                <NuxtLink
                    to="/admin/inventories"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-warehouse" />
                    <span>Inventory</span>
                </NuxtLink>
                <NuxtLink
                    to="/admin/suppliers"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-truck-field" />
                    <span>Suppliers</span>
                </NuxtLink>
                <NuxtLink
                    to="/admin/purchases"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-boxes-stacked" />
                    <span>Purchases</span>
                </NuxtLink>
                <div class="pt-4 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Sales
                </div>
                <NuxtLink
                    to="/admin/sales"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-peso-sign" />
                    <span>Sales</span>
                </NuxtLink>
                <NuxtLink
                    to="/admin/returns"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-shop-slash" />
                    <span>Returns</span>
                </NuxtLink>
                <div class="pt-4 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Customers
                </div>
                <NuxtLink
                    to="/admin/customers"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-users" />
                    <span>Customers</span>
                </NuxtLink>
                <div class="pt-4 pb-2 px-4 text-xs font-semibold text-slate-500 uppercase">
                    Management
                </div>
                <NuxtLink
                    to="/admin/users"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-user" />
                    <span>Users</span>
                </NuxtLink>
                <NuxtLink
                    to="/admin/users"
                    class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 transition"
                    active-class="bg-blue-600 hover:bg-blue-600"
                >
                    <font-awesome-icon icon="fa-solid fa-unlock" />
                    <span>Roles & Permissions</span>
                </NuxtLink>
            </nav>
            <div class="absolute bottom-0 left-0 right-0 px-4 border-t border-slate-700 text-sm">
                <button
                    class="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-left"
                >
                    <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
        <div
            v-if="sidebarOpen"
            class="fixed inset-0 z-30 bg-black/50 lg:hidden"
            @click="sidebarOpen = false"
        ></div>
        <div class="flex-1 min-w-0">
            <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
                <div class="flex items-center gap-4">
                    <button
                        class="lg:hidden text-gray-600 hover:text-gray-900"
                        @click="sidebarOpen = !sidebarOpen"
                    >
                        <font-awesome-icon icon="fa-solid fa-bars" size="lg" />
                    </button>
                    <h1 class="text-lg font-semibold text-gray-800">
                        Dashboard
                    </h1>
                </div>
                <div class="flex items-center gap-3">
                    <button class="text-gray-500 hover:text-gray-700">
                        <font-awesome-icon icon="fa-solid fa-bell" />
                    </button>
                </div>
            </header>
            <main class="p-4 lg:p-6">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
const sidebarOpen = ref(false)
</script>