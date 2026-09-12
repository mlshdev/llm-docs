> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/multiply](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/multiply)

# multiply

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that multiplies the source image samples with the background image samples.

## Declaration

```swift
static var multiply: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

Drawing in this mode results in colors that are at least as dark as either of the two contributing sample colors.

## See Also

### Darkening

- [darken](darken.md): A mode that creates composite image samples by choosing the darker samples from either the source image or the background.
- [colorBurn](colorburn.md): A mode that darkens background image samples to reflect the source image samples.
- [plusDarker](plusdarker.md): A mode that adds the inverse of the color components of the source and background images, and then inverts the result, producing a darkened composite.
