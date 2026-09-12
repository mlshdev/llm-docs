> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewtrait/defaultlayout](https://developer.apple.com/documentation/developertoolssupport/previewtrait/defaultlayout)

# defaultLayout

**Framework:** DeveloperToolsSupport  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Center the preview in a container the size of the device on which the preview is running.

## Declaration

```swift
@MainActor static var defaultLayout: PreviewTrait<Preview.ViewTraits> { get }
```

<a id="discussion"></a>

## Discussion

This is the same as the [PreviewLayout.device](../previewlayout/device.md) layout, and is the default if you don’t specify a layout trait.

## See Also

### Getting a layout

- [fixedLayout(width:height:)](fixedlayout%28width_height_%29.md): Conforms when `T` is `Preview.ViewTraits`. Center the preview in a fixed size container with the given dimensions.
- [fixedLayout(width:height:depth:)](fixedlayout%28width_height_depth_%29.md): Conforms when `T` is `Preview.ViewTraits`. Centers the preview in a fixed-size, 3D container.
- [sizeThatFitsLayout](sizethatfitslayout.md): Conforms when `T` is `Preview.ViewTraits`. Fit the container to the size of the preview when offered the size of the device that the preview is running on.
