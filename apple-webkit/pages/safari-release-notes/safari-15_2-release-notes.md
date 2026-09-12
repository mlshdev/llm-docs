> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/safari-release-notes/safari-15_2-release-notes](https://developer.apple.com/documentation/safari-release-notes/safari-15_2-release-notes)

# Safari 15.2 Release Notes

**Kind:** Article

Released December 13, 2021 — Version 15.2 (17612.3.6)

<a id="Overview"></a>

## Overview

Safari 15.2 ships with iOS and iPadOS 15.2 and macOS 12.1.

<a id="General"></a>

### General

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed opening local HTML or WebArchive files from the Desktop, Documents, or Downloads folder.
- Fixed broken XHR with a `requestType` of document for large HTML files.
- Fixed WebGL using an incorrect power context compared to the requested power context.

<a id="Web-API"></a>

### Web API

<a id="New-Features"></a>

#### New Features

- Added support for the File System Access API for creating and iterating files in an origin-specific storage space.
- Added Origin Private File System extension support for the File System Access API, allowing developers to read and write files in the origin-specific storage space.

<a id="Web-Extensions"></a>

### Web Extensions

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed an issue where `browser.storage.sync` entries were saved into the `browser.storage.local` storage area. If you’re unable to locate sync storage entries, check the local storage area and perform a one-time migration to the sync storage area.

<a id="WebAssembly"></a>

### WebAssembly

<a id="New-Features"></a>

#### New Features

- Expanded addressable memory to 4 GB.
- Added zero-cost exception handling.

<a id="Rendering"></a>

### Rendering

<a id="New-Features"></a>

#### New Features

- Added wide gamut support for canvas.

<a id="Private-Click-Measurement"></a>

### Private Click Measurement

<a id="New-Features"></a>

#### New Features

- Added support for using Private Click Measurement for in-app direct response advertising with [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller).

<a id="Security"></a>

### Security

<a id="New-Features"></a>

#### New Features

- Added support for COOP and COEP HTTP headers.
- Re-enabled `SharedArrayBuffer` for sites that use COOP and COEP securely to create an isolated environment.

<a id="Media"></a>

### Media

<a id="Resolved-Issues"></a>

#### Resolved Issues

- Fixed microphone switching during FaceTime calls for Safari on macOS.
- Fixed audio cutting off and `AudioContext.currentTime` drifting when connected to a Bluetooth speaker.

## See Also

### Version 15

- [Safari 15.6 Release Notes](safari-15_6-release-notes.md): Released July 20, 2022 — Version 15.6 (17613.3.9)
- [Safari 15.5 Release Notes](safari-15_5-release-notes.md): Released May 16, 2022 — Version 15.5 (17613.2.7)
- [Safari 15.4 Release Notes](safari-15_4-release-notes.md): Released March 14, 2022 — Version 15.4 (17613.1.17)
- [Safari 15 Release Notes](safari-15-release-notes.md): Released September 20, 2021 — Version 15 (17612.1.27)
