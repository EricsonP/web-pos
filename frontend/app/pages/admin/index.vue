<template>
  <div>
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">
        Dashboard
      </h2>

      <p class="text-gray-500 mt-1">
        Welcome back, Admin.
      </p>
    </div>

    <!-- Statistics -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      <div class="bg-white rounded-xl shadow-sm p-5">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">
              Total Sales
            </p>

            <p class="text-2xl font-bold text-gray-800 mt-1">
              ₱125,430
            </p>
          </div>

          <div class="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-peso-sign" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-5">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">
              Orders
            </p>

            <p class="text-2xl font-bold text-gray-800 mt-1">
              1,245
            </p>
          </div>

          <div class="w-11 h-11 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-5">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">
              Products
            </p>

            <p class="text-2xl font-bold text-gray-800 mt-1">
              356
            </p>
          </div>

          <div class="w-11 h-11 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-box" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-5">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">
              Customers
            </p>

            <p class="text-2xl font-bold text-gray-800 mt-1">
              892
            </p>
          </div>

          <div class="w-11 h-11 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
            <font-awesome-icon icon="fa-solid fa-users" />
          </div>
        </div>
      </div>

    </div>

    <!-- Recent orders -->
    <div class="mt-6 bg-white rounded-xl shadow-sm">

      <div class="px-5 py-4 border-b">
        <h3 class="font-semibold text-gray-800">
          Recent Orders
        </h3>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="text-left px-5 py-3 font-medium text-gray-500">
                Order
              </th>

              <th class="text-left px-5 py-3 font-medium text-gray-500">
                Customer
              </th>

              <th class="text-left px-5 py-3 font-medium text-gray-500">
                Amount
              </th>

              <th class="text-left px-5 py-3 font-medium text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="border-t">
              <td class="px-5 py-4">
                #ORD-1001
              </td>

              <td class="px-5 py-4">
                Juan Dela Cruz
              </td>

              <td class="px-5 py-4 font-medium">
                ₱1,250
              </td>

              <td class="px-5 py-4">
                <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  Completed
                </span>
              </td>
            </tr>

            <tr class="border-t">
              <td class="px-5 py-4">
                #ORD-1002
              </td>

              <td class="px-5 py-4">
                Maria Santos
              </td>

              <td class="px-5 py-4 font-medium">
                ₱850
              </td>

              <td class="px-5 py-4">
                <span class="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})
</script>