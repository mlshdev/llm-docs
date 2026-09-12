> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/plusdarker](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/plusdarker)

# plusDarker

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that adds the inverse of the color components of the source and background images, and then inverts the result, producing a darkened composite.

## Declaration

```swift
static var plusDarker: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

This mode implements the equation `R = MAX(0, 1 - ((1 - D) + (1 - S)))` where

- `R` is the composite image.
- `S` is the source image.
- `D` is the background.

## See Also

### Darkening

- [darken](darken.md): A mode that creates composite image samples by choosing the darker samples from either the source image or the background.
- [multiply](multiply.md): A mode that multiplies the source image samples with the background image samples.
- [colorBurn](colorburn.md): A mode that darkens background image samples to reflect the source image samples.
