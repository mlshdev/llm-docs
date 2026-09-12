> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/bluroptions/opaque](https://developer.apple.com/documentation/swiftui/graphicscontext/bluroptions/opaque)

# opaque

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An option that causes the filter to ensure the result is completely opaque.

## Declaration

```swift
static var opaque: GraphicsContext.BlurOptions { get }
```

<a id="discussion"></a>

## Discussion

The filter ensure opacity by dividing each pixel by its alpha value. The result may be undefined if the input to the filter isn’t also completely opaque.

## See Also

### Getting blur options

- [dithersResult](dithersresult.md): An option that causes the filter to dither the result, to reduce banding.
