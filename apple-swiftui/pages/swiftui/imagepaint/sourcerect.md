> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/imagepaint/sourcerect](https://developer.apple.com/documentation/swiftui/imagepaint/sourcerect)

# sourceRect

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A unit-space rectangle defining how much of the source image to draw.

## Declaration

```swift
var sourceRect: CGRect
```

<a id="discussion"></a>

## Discussion

The results are undefined if this rectangle selects areas outside the `[0, 1]` range in either axis.

## See Also

### Configuring the image paint style

- [image](image.md): The image to be drawn.
- [scale](scale.md): A scale factor applied to the image while being drawn.
