> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/safari-release-notes/safari-13_1-release_notes](https://developer.apple.com/documentation/safari-release-notes/safari-13_1-release_notes)

# Safari 13.1 Release Notes

**Kind:** Article

Released March 24, 2020 — Version 13.1 (15609.1.20)

<a id="Overview"></a>

## Overview

Safari 13.1 ships with iOS 13.4 and macOS 10.15.4. It’s also available for macOS 10.14.6 and 10.13.6.

<a id="General"></a>

### General

<a id="New-Features"></a>

#### New Features

- Made significant improvements to the Web Platform Tests pass rate in several components, including CSS, Service Workers, SVG, and Fetch.
- Added Close Tabs to the Right.
- Added Duplicate Tab.
- Added support for bundled content blockers in Mac apps built with Mac Catalyst.
- Added support for importing passwords from Google Chrome.

<a id="Performance"></a>

### Performance

<a id="New-Features"></a>

#### New Features

- Improved the performance speed of IndexedDB operations.
- Improved back-forward responsiveness.
- Improved the speed of WebAssembly and JavaScript.
- Improved the speed of JavaScript Promises.
- Made media query updates more efficient.
- Reduced the startup time of Service Workers.

<a id="Privacy"></a>

### Privacy

<a id="New-Features"></a>

#### New Features

- Prevented several potential approaches to circumventing Intelligent Tracking Prevention.
- Added cookie blocking for all cross-site resources by default.

<a id="Security"></a>

### Security

<a id="New-Features"></a>

#### New Features

- Added the “Not Secure” warning for sites using TLS 1.1 and 1.0.
- Fixed many bugs identified by fuzz testing.

<a id="JavaScript"></a>

### JavaScript

<a id="New-Features"></a>

#### New Features

- Added support for the nullish coalescing operator ??.
- Added support for the `String.prototype.replaceAll` method.

<a id="Web-API"></a>

### Web API

<a id="New-Features"></a>

#### New Features

- Added support for Web Animations.
- Added support for the Async Clipboard API.
- Added support for GenericCue.
- Added support for Resize Observer.
- Added support for HDR video using the Media Capabilities API.
- Added support for the Remote Playback API.
- Added support for the Picture-in-Picture API.

<a id="WebRTC"></a>

### WebRTC

<a id="New-Features"></a>

#### New Features

- Added support for DTMF codec and proxies.

<a id="HTML"></a>

### HTML

<a id="New-Features"></a>

#### New Features

- Added support for the `enterkeyhint` attribute.

<a id="Web-Components"></a>

### Web Components

<a id="New-Features"></a>

#### New Features

- Added support for CSS Shadow Parts.

<a id="CSS"></a>

### CSS

<a id="New-Features"></a>

#### New Features

- Added support for font keywords: `ui-serif`, `ui-sans-serif`, `ui-monospace`, `ui-rounded`.
- Added support for the `line-break: anywhere;` property value.
- Added support for the `dynamic-range` media query.

<a id="Web-Inspector"></a>

### Web Inspector

<a id="New-Features"></a>

#### New Features

- Added a new Sources tab that combines Resources and Debugger.
- Added a new Layers tab.
- Added support for bootstrap scripts and local resource overrides in the Sources tab.
- Added script black boxing in the Settings tab.
- Redesigned color choosing in the Styles sidebar with support for wide gamut colors.
- Added a new CSS Animation/Transition timeline in the Timelines tab.

## See Also

### Version 13

- [Safari 13 Release Notes](safari-13-release-notes.md): Released September 19, 2019 — Version 13 (15608.2.11)
