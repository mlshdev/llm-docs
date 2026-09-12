> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/luminosity](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/luminosity)

# luminosity

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that uses the hue and saturation of the background with the luminance of the source image.

## Declaration

```swift
static var luminosity: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

This mode creates an effect that is inverse to the effect created by the [color](color.md) mode.

## See Also

### Mixing color components

- [hue](hue.md): A mode that uses the luminance and saturation values of the background with the hue of the source image.
- [saturation](saturation.md): A mode that uses the luminance and hue values of the background with the saturation of the source image.
- [color](color.md): A mode that uses the luminance values of the background with the hue and saturation values of the source image.
