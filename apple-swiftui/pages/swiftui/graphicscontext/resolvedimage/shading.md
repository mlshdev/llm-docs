> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/resolvedimage/shading](https://developer.apple.com/documentation/swiftui/graphicscontext/resolvedimage/shading)

# shading

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An optional shading to fill the image with.

## Declaration

```swift
var shading: GraphicsContext.Shading?
```

<a id="discussion"></a>

## Discussion

The value of this property defaults to [foreground](../shading/foreground.md) for template images, and to `nil` otherwise.

## See Also

### Getting the image properties

- [size](size.md): The size of the image.
- [baseline](baseline.md): The distance from the top of the image to its baseline.
