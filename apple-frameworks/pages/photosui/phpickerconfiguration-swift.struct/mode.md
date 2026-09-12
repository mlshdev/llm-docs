> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/mode](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/mode)

# mode

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS

A layout type for the photos in the picker’s view.

## Declaration

```swift
var mode: PHPickerMode
```

<a id="Discussion"></a>

## Discussion

This property offers two ways that photos lay out in the picker:

- A linear mode ([compact](../phpickermode-swift.struct/compact.md)), in which photos form a line in a smaller area in the picker
- A two-dimensional mode ([default](../phpickermode-swift.struct/default.md)), in which photos form a grid in a larger area in the picker

## See Also

### Customizing picker appearance and behavior

- [PHPickerMode](../phpickermode-swift.struct.md): Layout options that determine how the picker orders photos visually.
- [disabledCapabilities](disabledcapabilities.md): The aspects of a photo picker’s default appearance that your app can disable.
- [PHPickerCapabilities](../phpickercapabilities.md): Options that customize the look and behavior of the photos picker.
- [edgesWithoutContentMargins](edgeswithoutcontentmargins.md): The portions of a photo picker’s perimeter that are borderless.
- [PHPickerConfiguration.Update](update.md): An object that defines the aspects of a photo picker’s appearance that can change while it’s presented.
