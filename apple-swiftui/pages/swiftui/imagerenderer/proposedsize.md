> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/imagerenderer/proposedsize](https://developer.apple.com/documentation/swiftui/imagerenderer/proposedsize)

# proposedSize

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The size proposed to the root view.

## Declaration

```swift
@MainActor final var proposedSize: ProposedViewSize { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property, [unspecified](../proposedviewsize/unspecified.md), produces an image that matches the original view size. You can provide a custom [ProposedViewSize](../proposedviewsize.md) to override the view’s size in one or both dimensions.

## See Also

### Accessing renderer properties

- [scale](scale.md): The scale at which to render the image.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the alpha channel of the image is fully opaque.
- [colorMode](colormode.md): The working color space and storage format of the image.
- [allowedDynamicRange](alloweddynamicrange.md): The allowed dynamic range of the image, or nil to mark that the dynamic range of the image should be unrestricted. This property defaults to `sdr`, i.e. HDR content will be tone mapped to SDR.
