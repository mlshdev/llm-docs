> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.property](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.property)

# blendMode

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The blend mode used by drawing operations in the context.

## Declaration

```swift
var blendMode: GraphicsContext.BlendMode { get set }
```

<a id="discussion"></a>

## Discussion

Set this value to affect how any content that you subsequently draw into the context blends with content that’s already in the context. Use one of the [GraphicsContext.BlendMode](blendmode-swift.struct.md) values.

## See Also

### Setting opacity and the blend mode

- [opacity](opacity.md): The opacity of drawing operations in the context.
- [GraphicsContext.BlendMode](blendmode-swift.struct.md): The ways that a graphics context combines new content with background content.
