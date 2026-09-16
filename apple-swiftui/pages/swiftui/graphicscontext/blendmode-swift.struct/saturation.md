> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/saturation

# saturation

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that uses the luminance and hue values of the background with the saturation of the source image.

## Declaration

```swift
static var saturation: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

Areas of the background that have no saturation — namely, pure gray areas — don’t produce a change.

## See Also

### Mixing color components

- [hue](hue.md): A mode that uses the luminance and saturation values of the background with the hue of the source image.
- [color](color.md): A mode that uses the luminance values of the background with the hue and saturation values of the source image.
- [luminosity](luminosity.md): A mode that uses the hue and saturation of the background with the luminance of the source image.
