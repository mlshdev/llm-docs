> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/accessoryliveactivity/iconfile](https://developer.apple.com/documentation/accessoryliveactivities/accessoryliveactivity/iconfile)

# AccessoryLiveActivity.IconFile

**Framework:** Accessory Live Activities  
**Kind:** Structure  
**Availability:** iOS 26.5+ · iPadOS 26.5+

An on-demand reference to the app icon of the app that started the Live Activity.

## Declaration

```swift
struct IconFile
```

<a id="Overview"></a>

## Overview

The system loads the app icon file asynchronously using the [url](iconfile/url.md).

## Topics

### Accessing file data

- [url](iconfile/url.md): A URL that locates the icon file’s data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the app’s icon

- [sourceBundleIcon](sourcebundleicon.md): The icon of the app that initiated the Live Activity.
