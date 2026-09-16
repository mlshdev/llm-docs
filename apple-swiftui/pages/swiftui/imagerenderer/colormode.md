> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/imagerenderer/colormode

# colorMode

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The working color space and storage format of the image.

## Declaration

```swift
@MainActor final var colorMode: ColorRenderingMode { get set }
```

## See Also

### Accessing renderer properties

- [proposedSize](proposedsize.md): The size proposed to the root view.
- [scale](scale.md): The scale at which to render the image.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the alpha channel of the image is fully opaque.
- [allowedDynamicRange](alloweddynamicrange.md): The allowed dynamic range of the image, or nil to mark that the dynamic range of the image should be unrestricted. This property defaults to `sdr`, i.e. HDR content will be tone mapped to SDR.
