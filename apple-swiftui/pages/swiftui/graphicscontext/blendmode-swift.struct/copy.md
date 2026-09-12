> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/copy](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/copy)

# copy

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that replaces background image samples with source image samples.

## Declaration

```swift
static var copy: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

Unlike the [normal](normal.md) mode, the source image completely replaces the background, so that even transparent pixels in the source image replace opaque pixels in the background, rather than letting the background show through.

This mode implements the equation `R = S` where

- `R` is the composite image.
- `S` is the source image.

## See Also

### Accessing Porter-Duff modes

- [clear](clear.md): A mode that clears any pixels that the source image overwrites.
- [sourceIn](sourcein.md): A mode that you use to paint the source image, including its transparency, onto the opaque parts of the background.
- [sourceOut](sourceout.md): A mode that you use to paint the source image onto the transparent parts of the background, while erasing the background.
- [sourceAtop](sourceatop.md): A mode that you use to paint the opaque parts of the source image onto the opaque parts of the background.
- [destinationOver](destinationover.md): A mode that you use to paint the source image under the background.
- [destinationIn](destinationin.md): A mode that you use to erase any of the background that isn’t covered by opaque source pixels.
- [destinationOut](destinationout.md): A mode that you use to erase any of the background that is covered by opaque source pixels.
- [destinationAtop](destinationatop.md): A mode that you use to paint the source image under the background, while erasing any of the background not matched by opaque pixels from the source image.
- [xor](xor.md): A mode that you use to clear pixels where both the source and background images are opaque.
