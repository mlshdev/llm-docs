> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickermode-swift.struct](https://developer.apple.com/documentation/photosui/phpickermode-swift.struct)

# PHPickerMode

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS

Layout options that determine how the picker orders photos visually.

## Declaration

```swift
struct PHPickerMode
```

<a id="overview"></a>

## Overview

This structure defines the possible options for the photos picker configuration ([PHPickerConfiguration](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class)) property [mode](phpickerconfiguration-swift.struct/mode.md). The option you choose determines the direction that its assets scroll in the view. In addition, the linear scrolling behavior of [compact](phpickermode-swift.struct/compact.md) mode offers the best user experience in a space-constrained layout.

## Topics

### Laying out photos

- [compact](phpickermode-swift.struct/compact.md): A linear layout that’s conducive to a smaller area onscreen.
- [default](phpickermode-swift.struct/default.md): A grid-based layout that’s conducive to a larger area onscreen.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing picker appearance and behavior

- [mode](phpickerconfiguration-swift.struct/mode.md): A layout type for the photos in the picker’s view.
- [disabledCapabilities](phpickerconfiguration-swift.struct/disabledcapabilities.md): The aspects of a photo picker’s default appearance that your app can disable.
- [PHPickerCapabilities](phpickercapabilities.md): Options that customize the look and behavior of the photos picker.
- [edgesWithoutContentMargins](phpickerconfiguration-swift.struct/edgeswithoutcontentmargins.md): The portions of a photo picker’s perimeter that are borderless.
- [PHPickerConfiguration.Update](phpickerconfiguration-swift.struct/update.md): An object that defines the aspects of a photo picker’s appearance that can change while it’s presented.
