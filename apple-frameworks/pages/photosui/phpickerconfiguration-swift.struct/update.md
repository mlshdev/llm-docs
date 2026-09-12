> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/update](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/update)

# PHPickerConfiguration.Update

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS

An object that defines the aspects of a photo picker’s appearance that can change while it’s presented.

## Declaration

```swift
struct Update
```

<a id="overview"></a>

## Overview

While a photos picker is visible, you can use an instance of this structure to change its [edgesWithoutContentMargins](edgeswithoutcontentmargins.md) or [selectionLimit](selectionlimit.md) properties. To do that, create and configure an instance of this object and pass it to the [PHPickerViewController](../phpickerviewcontroller.md) method [updatePicker(using:)](../phpickerviewcontroller/updatepicker%28using_%29.md).

## Topics

### Creating an update object

- [init()](update/init%28%29.md)

### Adjusting selection limits

- [selectionLimit](update/selectionlimit.md): The maximum number of selections the user can make.

### Adjusting content margins

- [edgesWithoutContentMargins](update/edgeswithoutcontentmargins.md): The portions of a photo picker’s permiter that are borderless.

### Instance Properties

- [searchText](update/searchtext.md): The search text for the picker. Default is `nil`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing picker appearance and behavior

- [mode](mode.md): A layout type for the photos in the picker’s view.
- [PHPickerMode](../phpickermode-swift.struct.md): Layout options that determine how the picker orders photos visually.
- [disabledCapabilities](disabledcapabilities.md): The aspects of a photo picker’s default appearance that your app can disable.
- [PHPickerCapabilities](../phpickercapabilities.md): Options that customize the look and behavior of the photos picker.
- [edgesWithoutContentMargins](edgeswithoutcontentmargins.md): The portions of a photo picker’s perimeter that are borderless.
