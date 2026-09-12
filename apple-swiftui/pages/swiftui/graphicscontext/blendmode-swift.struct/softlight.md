> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/softlight](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/softlight)

# softLight

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that either darkens or lightens colors, depending on the source image sample color.

## Declaration

```swift
static var softLight: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

If the source image sample color is lighter than 50% gray, the background is lightened, similar to dodging. If the source image sample color is darker than 50% gray, the background is darkened, similar to burning. If the source image sample color is equal to 50% gray, the background is not changed. Image samples that are equal to pure black or pure white produce darker or lighter areas, but do not result in pure black or white. The overall effect is similar to what you’d achieve by shining a diffuse spotlight on the source image. Use this to add highlights to a scene.

## See Also

### Adding contrast

- [overlay](overlay.md): A mode that either multiplies or screens the source image samples with the background image samples, depending on the background color.
- [hardLight](hardlight.md): A mode that either multiplies or screens colors, depending on the source image sample color.
