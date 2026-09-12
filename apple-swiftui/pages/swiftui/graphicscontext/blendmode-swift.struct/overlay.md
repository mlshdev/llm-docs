> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/blendmode-swift.struct/overlay](https://developer.apple.com/documentation/swiftui/graphicscontext/blendmode-swift.struct/overlay)

# overlay

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A mode that either multiplies or screens the source image samples with the background image samples, depending on the background color.

## Declaration

```swift
static var overlay: GraphicsContext.BlendMode { get }
```

<a id="discussion"></a>

## Discussion

Drawing in this mode overlays the existing image samples while preserving the highlights and shadows of the background. The background color mixes with the source image to reflect the lightness or darkness of the background.

## See Also

### Adding contrast

- [softLight](softlight.md): A mode that either darkens or lightens colors, depending on the source image sample color.
- [hardLight](hardlight.md): A mode that either multiplies or screens colors, depending on the source image sample color.
