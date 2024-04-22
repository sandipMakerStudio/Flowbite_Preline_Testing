import React from "react";

const Input_Field = () => {
  return (
    <div class="max-w-sm space-y-4">
      <div>
        <label
          for="hs-validation-name-error"
          class="block text-sm font-medium mb-2 dark:text-white"
        >
          Email
        </label>
        <div class="relative">
          <input
            type="text"
            id="hs-validation-name-error"
            name="hs-validation-name-error"
            class="py-3 px-4 block w-full border-red-500 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400"
            required=""
            aria-describedby="hs-validation-name-error-helper"
          />
          <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
            <svg
              class="flex-shrink-0 h-4 w-4 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
        </div>
        <p
          class="text-sm text-red-600 mt-2"
          id="hs-validation-name-error-helper"
        >
          Please enter a valid email address.
        </p>
      </div>

      <div>
        <label
          for="hs-validation-name-success"
          class="block text-sm font-medium mb-2 dark:text-white"
        >
          Email
        </label>
        <div class="relative">
          <input
            type="text"
            id="hs-validation-name-success"
            name="hs-validation-name-success"
            class="py-3 px-4 block w-full border-teal-500 rounded-lg text-sm focus:border-teal-500 focus:ring-teal-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400"
            required=""
            aria-describedby="hs-validation-name-success-helper"
          />
          <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
            <svg
              class="flex-shrink-0 h-4 w-4 text-teal-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <p
          class="text-sm text-teal-600 mt-2"
          id="hs-validation-name-success-helper"
        >
          Looks good!
        </p>
      </div>
    </div>
  );
};

export default Input_Field;
