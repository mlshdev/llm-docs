> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/imagerenderer/alloweddynamicrange](https://developer.apple.com/documentation/swiftui/imagerenderer/alloweddynamicrange)

# allowedDynamicRange

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The allowed dynamic range of the image, or nil to mark that the dynamic range of the image should be unrestricted. This property defaults to `sdr`, i.e. HDR content will be tone mapped to SDR.

## Declaration

```swift
@MainActor final var allowedDynamicRange: Image.DynamicRange? { get set }
```

## See Also

### Accessing renderer properties

- [proposedSize](proposedsize.md): The size proposed to the root view.
- [scale](scale.md): The scale at which to render the image.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the alpha channel of the image is fully opaque.
- [colorMode](colormode.md): The working color space and storage format of the image.
