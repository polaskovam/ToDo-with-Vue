<script setup></script>

<template>
  <div
    style="
      width: 100%;
      height: 1px;
      background-image: linear-gradient(
        to right,
        transparent,
        lightgrey,
        transparent
      );
    "
  ></div>
  <div
    class="flex items-center relative group leading-8 grow justify-between hover:bg-gradient-to-r from-white via-gray-100 to-white"
  >
    <div class="flex items-center pl-2">
      <!-- ThreeDotsIcon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
        class="icon-style opacity-0 group-hover:opacity-100 hidden custom:flex"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
        />
      </svg>
      <!-- AlertIcon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
        class="icon-style opacity-0 group-hover:opacity-100 h-6 w-6 hidden custom:flex"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
        />
      </svg>

      <input
        type="checkbox"
        class="form-checkbox ml-2 rounded-sm border-gray-400 h-5 w-5"
      />
      <span class="ml-2 hover:text-blue-700">Task 1</span>

      <!-- ChatIcon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        data-slot="icon"
        class="icon-style ml-2 group-hover:ml-8 opacity-10 mr-1 fill-blue-on-hover hidden md:flex"
      >
        <path
          fill-rule="evenodd"
          d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
          clip-rule="evenodd"
        />
      </svg>

      <div class="flex opacity-0 group-hover:opacity-100 left-0">
        <!-- UserIcon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          data-slot="icon"
          class="icon-style mr-1 blue-on-hover hidden custom:flex"
          data-tooltip-target="user-tooltip"
          data-tooltip-trigger="hover"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <div
          id="user-tooltip"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-light text-white transition-opacity duration-1000 bg-gray-800 rounded shadow-sm opacity-0 tooltip"
        >
          Přidat řešitele
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <!-- CalendarIcon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          data-slot="icon"
          class="icon-style mr-1 blue-on-hover hidden custom:flex"
          data-tooltip-target="calendar-tooltip"
          data-tooltip-trigger="hover"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
        <div
          id="calendar-tooltip"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-light text-white transition-opacity duration-1000 bg-gray-800 rounded shadow-sm opacity-0 tooltip"
        >
          Nastavit datum
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <!-- PlayIcon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          data-slot="icon"
          class="icon-style mr-1 green-on-hover hidden custom:flex"
          data-tooltip-target="play-tooltip"
          data-tooltip-trigger="hover"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
        <div
          id="play-tooltip"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-light text-white transition-opacity duration-1000 bg-gray-800 rounded shadow-sm opacity-0 tooltip"
        >
          Start/Stop
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <!-- PencilIcon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          data-slot="icon"
          class="icon-style mr-1 blue-on-hover hidden custom:flex"
          data-tooltip-target="pencil-tooltip"
          data-tooltip-trigger="hover"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
        <div
          id="pencil-tooltip"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-light text-white transition-opacity duration-1000 bg-gray-800 rounded shadow-sm opacity-0 tooltip"
        >
          Upravit
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <!-- LabelIcon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          data-slot="icon"
          class="icon-style blue-on-hover hidden custom:flex"
          data-tooltip-target="label-tooltip"
          data-tooltip-trigger="hover"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6h.008v.008H6V6Z"
          />
        </svg>
        <div
          id="label-tooltip"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-light text-white transition-opacity duration-1000 bg-gray-800 rounded shadow-sm opacity-0 tooltip"
        >
          Štítky
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
    <div class="flex pr-2">
      <!-- ClockIcon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
        class="icon-style blue-on-hover mr-1 opacity-0 group-hover:opacity-100 hidden custom:flex"
        data-tooltip-target="clock-tooltip"
        data-tooltip-trigger="hover"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <div
        id="clock-tooltip"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-light text-white transition-opacity duration-1000 bg-gray-800 rounded shadow-sm opacity-0 tooltip"
      >
        Reporty
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <!-- BinIcon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
        class="icon-style opacity-0 group-hover:opacity-100 hidden custom:flex"
        data-tooltip-target="bin-tooltip"
        data-tooltip-trigger="hover"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
      <div
        id="bin-tooltip"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-2 py-1 text-xs font-light text-white transition-opacity duration-1000 bg-gray-800 rounded shadow-sm opacity-0 tooltip"
      >
        Smazat
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <!-- ThreeDotsIcon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        data-slot="icon"
        class="icon-style custom:hidden"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
        />
      </svg>
    </div>
  </div>
  <div
    style="
      width: 100%;
      height: 1px;
      background-image: linear-gradient(
        to right,
        transparent,
        lightgrey,
        transparent
      );
    "
  ></div>
</template>

<style scoped>
.icon-style {
  height: 1rem;
  width: 1rem;
  color: #6b7280;
}

.blue-on-hover:hover {
  stroke: #1d4ed8;
}

.fill-blue-on-hover:hover {
  fill: #60a5fa;
  opacity: 0.6;
}

.green-on-hover:hover {
  stroke: #0eb847;
}

input[type="checkbox"]:checked + label {
  background-color: #333;
  color: #fff;
}

.gradient-border::before,
.gradient-border::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px; /* Adjust the thickness of the border as needed */
}

.gradient-border::before {
  top: 0;
  background: linear-gradient(to right, white, rgba(107, 114, 128, 0), white);
}

.gradient-border::after {
  bottom: 0;
  background: linear-gradient(to right, white, rgba(107, 114, 128, 0), white);
}
</style>
