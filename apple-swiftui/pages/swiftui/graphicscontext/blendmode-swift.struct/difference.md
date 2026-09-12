> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/difference](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/difference)

# difference

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that subtracts the brighter of the source image sample color or the background image sample color from the other.

## Declaration

```swift
static var difference: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

Source image sample values that are black produce no change; white inverts the background color values.

## See Also

### Inverting

- [exclusion](exclusion.md): A mode that produces an effect similar to that produced by the difference blend mode, but with lower contrast.
