> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/canvas/isopaque](https://developer.apple.com/documentation/swiftui/canvas/isopaque)

# isOpaque

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A Boolean that indicates whether the canvas is fully opaque.

## Declaration

```swift
nonisolated var isOpaque: Bool { get set }
```

<a id="discussion"></a>

## Discussion

You might be able to improve performance by setting this value to `true`, making the canvas is fully opaque. However, in that case, the result of drawing a non-opaque image into the canvas is undefined.

## See Also

### Managing opacity and color

- [colorMode](colormode.md): The working color space and storage format of the canvas.
