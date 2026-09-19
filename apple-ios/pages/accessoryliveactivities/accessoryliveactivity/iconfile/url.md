> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryliveactivities/accessoryliveactivity/iconfile/url

# url

**Framework:** Accessory Live Activities  
**Kind:** Instance Property  
**Availability:** iOS 26.5+ · iPadOS 26.5+

A URL that locates the icon file’s data.

## Declaration

```swift
var url: URL { get async throws }
```

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](../../receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Use this URL to retrieve the file’s data and include its contents in your transmission to the accessory.
