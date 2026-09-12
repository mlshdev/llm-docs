> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/lighten](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/lighten)

# lighten

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that creates composite image samples by choosing the lighter samples from either the source image or the background.

## Declaration

```swift
static var lighten: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

When you draw in this mode, source image samples that are lighter than the background replace the background. Otherwise, the background image samples remain unchanged.

## See Also

### Lightening

- [screen](screen.md): A mode that multiplies the inverse of the source image samples with the inverse of the background image samples.
- [colorDodge](colordodge.md): A mode that brightens the background image samples to reflect the source image samples.
- [plusLighter](pluslighter.md): A mode that adds the components of the source and background images, resulting in a lightened composite.
