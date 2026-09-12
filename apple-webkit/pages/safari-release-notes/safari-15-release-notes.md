> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/safari-release-notes/safari-15-release-notes](https://developer.apple.com/documentation/safari-release-notes/safari-15-release-notes)

# Safari 15 Release Notes

**Kind:** Article

Released September 20, 2021 — Version 15 (17612.1.27)

<a id="Overview"></a>

## Overview

Safari 15 ships with iOS and iPadOS 15 and macOS 12.

<a id="General"></a>

### General

<a id="New-Features"></a>

#### New Features

- Redesigned the Safari user interface in macOS 12, iOS and iPadOS 15, along with adding Tab Groups and customization sync.

<a id="Authentication-and-Passwords"></a>

### Authentication and Passwords

<a id="New-Features"></a>

#### New Features

- Added support for Verification Codes to the iCloud Keychain Password Manager. To use verification codes with Safari and Autofill:

  - Use `autocomplete=one-time-code` to make an `<input>` eligible for AutoFill.
  - Use a standard `otpauth` URL and replace the scheme with `apple-otpauth` to link directly to the password manager for setup.
  - Use a raster image to enable contextual menus on `otpauth` QR codes that offer to set up a verification code generator.
- Added technology preview of passkeys in iCloud Keychain:

  - Passkeys are WebAuth credentials intended to replace passwords for website and apps with device sync and backup.
  - To Enable the technology preview, in Safari choose Develop \> Enable Syncing Platform Authenticator.

<a id="CSS"></a>

### CSS

<a id="New-Features"></a>

#### New Features

- Added support for `aspect-ratio` for box elements.
- Added support for `lab()`, `lch()`, `hwb()` color syntaxes.
- Added support for predefined color spaces using the `color()` syntax: [srgb](https://drafts.csswg.org/css-color-4/#valdef-color-srgb), [display-p3](https://drafts.csswg.org/css-color-4/#valdef-color-display-p3), [a98-rgb](https://drafts.csswg.org/css-color-4/#valdef-color-a98-rgb), [prophoto-rgb](https://drafts.csswg.org/css-color-4/#valdef-color-prophoto-rgb), [rec2020](https://drafts.csswg.org/css-color-4/#valdef-color-rec2020), [xyz](https://drafts.csswg.org/css-color-4/#valdef-color-xyz).
- Adjusted environment variable calculations where appropriate to adjust for the safe area of the new iOS design.

<a id="HTML"></a>

### HTML

<a id="New-Features"></a>

#### New Features

- Redesigned form controls in iOS.
- Added support for the `theme-color` meta tag to change the tab bar background and over-scroll area in macOS and iPadOS, and the status bar in iOS.
- Added support for the `media` attribute to specify `theme-color` meta tags for Dark Mode and light appearance.

  ```
  <meta name="theme-color" 
        content="#ecd96f" 
        media="(prefers-color-scheme: light)">
  <meta name="theme-color" 
        content="#0b3e05" 
        media="(prefers-color-scheme: dark)">
  ```

<a id="JavaScript"></a>

### JavaScript

<a id="New-Features"></a>

#### New Features

- Added top-level `await`.
- Added support for ES6 Modules in Workers and ServiceWorkers.
- Added support for `Error.cause`.
- Added support for private class methods and accessors (Safari 14.1 added support for private data member syntax).
- Added support for `BigInt64Array` and `BigUint64Array`.

<a id="Media"></a>

### Media

<a id="New-Features"></a>

#### New Features

- Added support for the MediaSession API to enable SharePlay experiences.
- Added Playback Speed and Chapters menus to built-in media controls.
- Added hardware accelerated VP9 and WebM in MSE on all iPads that support iPadOS 15.
- Added support for the Opus audio codec in WebM containers.

<a id="Security--Privacy"></a>

### Security & Privacy

<a id="New-Features"></a>

#### New Features

- Added support for automatic HTTPS upgrades.
- Added IP address hiding from known trackers which users can enable in Safari Preferences.
- Private Click Measurement enhancements for privacy-preserving ad click attribution:

  - Updated attribution reporting to also send reports to the click destination.
  - Added click fraud prevention with un-linkable tokens.
  - Added IP address protection for attribution reports.

<a id="Payments"></a>

### Payments

<a id="New-Features"></a>

#### New Features

- Added support for indicating an estimated arrival date for shipping methods.
- Added support for the user to enter a coupon code.
- Added support for marking the shipping method as in-store pickup.

<a id="WebAssembly"></a>

### WebAssembly

<a id="New-Features"></a>

#### New Features

- Added support for streaming compilation.
- Added support for bulk memory operations.
- Added support for reference types.
- Added support for non-trapping conversions from `float` to `int`.

<a id="Web-APIs"></a>

### Web APIs

<a id="New-Features"></a>

#### New Features

- Added support for WebGL 2. The implementation of WebGL runs on top of [Metal](https://developer.apple.com/documentation/metal) for better performance.
- Added support for Web Share level 2 enhancements to Web Share that enable sharing files from a web page to an app. See [Web Share API](https://w3c.github.io/web-share/) for more information.
- User gestures now propagate through `requestAnimationFrame` with a one second time limit.

<a id="Web-Extensions"></a>

### Web Extensions

<a id="New-Features"></a>

#### New Features

- Added support for Safari Web Extensions in iOS and iPadOS.
- Added support for `declarativeNetRequest` in Safari Web Extensions.

<a id="Web-Inspector"></a>

### Web Inspector

<a id="New-Features"></a>

#### New Features

- Added an inspected page overlay for visualizing and debugging CSS grid contexts.

## See Also

### Version 15

- [Safari 15.6 Release Notes](safari-15_6-release-notes.md): Released July 20, 2022 — Version 15.6 (17613.3.9)
- [Safari 15.5 Release Notes](safari-15_5-release-notes.md): Released May 16, 2022 — Version 15.5 (17613.2.7)
- [Safari 15.4 Release Notes](safari-15_4-release-notes.md): Released March 14, 2022 — Version 15.4 (17613.1.17)
- [Safari 15.2 Release Notes](safari-15_2-release-notes.md): Released December 13, 2021 — Version 15.2 (17612.3.6)
