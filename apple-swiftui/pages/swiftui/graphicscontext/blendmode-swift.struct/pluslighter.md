> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/pluslighter](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/pluslighter)

# plusLighter

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that adds the components of the source and background images, resulting in a lightened composite.

## Declaration

```swift
static var plusLighter: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

This mode implements the equation `R = MIN(1, S + D)` where

- `R` is the composite image.
- `S` is the source image.
- `D` is the background.

## See Also

### Lightening

- [lighten](lighten.md): A mode that creates composite image samples by choosing the lighter samples from either the source image or the background.
- [screen](screen.md): A mode that multiplies the inverse of the source image samples with the inverse of the background image samples.
- [colorDodge](colordodge.md): A mode that brightens the background image samples to reflect the source image samples.
