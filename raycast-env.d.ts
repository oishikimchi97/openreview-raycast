/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OpenReview Email - The email you log in to OpenReview with. */
  "username": string,
  /** OpenReview Password - Your OpenReview password. Stored securely in Raycast. */
  "password": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `my-submissions` command */
  export type MySubmissions = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `my-submissions` command */
  export type MySubmissions = {}
}

