> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/opacity](https://developer.apple.com/documentation/swiftui/graphicscontext/opacity)

# opacity

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The opacity of drawing operations in the context.

## Declaration

```swift
var opacity: Double { get set }
```

<a id="discussion"></a>

## Discussion

Set this value to affect the opacity of content that you subsequently draw into the context. Changing this value has no impact on the content you previously drew into the context.

## See Also

### Setting opacity and the blend mode

- [blendMode](blendmode-swift.property.md): The blend mode used by drawing operations in the context.
- [GraphicsContext.BlendMode](blendmode-swift.struct.md): The ways that a graphics context combines new content with background content.
