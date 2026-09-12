> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/previewlayout/fixed(width:height:)](https://developer.apple.com/documentation/developertoolssupport/previewlayout/fixed(width:height:))

# PreviewLayout.fixed(width:height:)

**Framework:** DeveloperToolsSupport  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Center the preview in a fixed size container with the given dimensions.

## Declaration

```swift
case fixed(width: CGFloat, height: CGFloat)
```

## Parameters

- `width`: The width of the container.
- `height`: The height of the container.

## See Also

### Getting a layout

- [PreviewLayout.device](device.md): Center the preview in a container the size of the device on which the preview is running.
- [PreviewLayout.fixed3D(width:height:depth:)](fixed3d%28width_height_depth_%29.md): Centers the preview in a fixed-size, 3D container.
- [PreviewLayout.sizeThatFits](sizethatfits.md): Fit the container to the size of the preview when offered the size of the device that the preview is running on.
