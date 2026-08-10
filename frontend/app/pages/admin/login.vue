<template>
    <div class="bg-slate-600 h-screen flex items-center justify-center">
        <div class="w-72 bg-slate-800 p-8 py-10 shadow-lg rounded-2xl flex flex-col border-5 border-slate-300">
            <img
                src="/images/logo.png"
                alt="Web POS"
                class="w-20 mx-auto mb-3"
            >
            <h1 class="text-center text-white text-xl font-bold tracking-wide">ADMIN LOGIN</h1>
            <span class="text-xs text-center text-slate-300">Login to your admin account</span>
            <br>
            <div class="bg-slate-600 p-2.5 px-3 flex items-center rounded-md mb-2 shadow">
                <input type="text" placeholder="Username" class="text-xs text-white tracking-wide focus:outline-none">
                <font-awesome-icon :icon="['fas', 'envelope']" class="ml-auto text-xs text-white" />
            </div>
            <div class="bg-slate-600 p-2.5 px-3 flex items-center rounded-md shadow">
                <input type="password" placeholder="Password" class="text-xs text-white tracking-wide focus:outline-none">
                <font-awesome-icon :icon="['fas', 'lock']" class="ml-auto text-xs text-white" />
            </div>
            <div class="flex items-center text-[11px] text-white my-4">
                <label class="flex items-center gap-1">
                    <input type="checkbox">
                    Save Password
                </label>
                <a href="#" class="ml-auto text-amber-200 hover:text-amber-300">Forgot Password</a>
            </div>
            <button class="bg-emerald-600 p-2.5 px-3 rounded-md text-center text-white text-xs font-bold tracking-wide shadow">Login Account</button>
        </div>
    </div>
</template>