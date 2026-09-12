> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/disabledcapabilities](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/disabledcapabilities)

# disabledCapabilities

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS

The aspects of a photo picker’s default appearance that your app can disable.

## Declaration

```swift
var disabledCapabilities: PHPickerCapabilities { get set }
```

## See Also

### Customizing picker appearance and behavior

- [mode](mode.md): A layout type for the photos in the picker’s view.
- [PHPickerMode](../phpickermode-swift.struct.md): Layout options that determine how the picker orders photos visually.
- [PHPickerCapabilities](../phpickercapabilities.md): Options that customize the look and behavior of the photos picker.
- [edgesWithoutContentMargins](edgeswithoutcontentmargins.md): The portions of a photo picker’s perimeter that are borderless.
- [PHPickerConfiguration.Update](update.md): An object that defines the aspects of a photo picker’s appearance that can change while it’s presented.
