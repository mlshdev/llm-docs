> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/destinationout](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/destinationout)

# destinationOut

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that you use to erase any of the background that is covered by opaque source pixels.

## Declaration

```swift
static var destinationOut: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

This mode implements the equation `R = D*(1 - Sa)` where

- `R` is the composite image.
- `D` is the background.
- `Sa` is the source image’s alpha value.

## See Also

### Accessing Porter-Duff modes

- [clear](clear.md): A mode that clears any pixels that the source image overwrites.
- [copy](copy.md): A mode that replaces background image samples with source image samples.
- [sourceIn](sourcein.md): A mode that you use to paint the source image, including its transparency, onto the opaque parts of the background.
- [sourceOut](sourceout.md): A mode that you use to paint the source image onto the transparent parts of the background, while erasing the background.
- [sourceAtop](sourceatop.md): A mode that you use to paint the opaque parts of the source image onto the opaque parts of the background.
- [destinationOver](destinationover.md): A mode that you use to paint the source image under the background.
- [destinationIn](destinationin.md): A mode that you use to erase any of the background that isn’t covered by opaque source pixels.
- [destinationAtop](destinationatop.md): A mode that you use to paint the source image under the background, while erasing any of the background not matched by opaque pixels from the source image.
- [xor](xor.md): A mode that you use to clear pixels where both the source and background images are opaque.
