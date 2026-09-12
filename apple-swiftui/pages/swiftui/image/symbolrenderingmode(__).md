> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/symbolrenderingmode(_:)](https://developer.apple.com/documentation/swiftui/image/symbolrenderingmode(_:))

# symbolRenderingMode(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Sets the rendering mode for symbol images within this view.

## Declaration

```swift
func symbolRenderingMode(_ mode: SymbolRenderingMode?) -> Image
```

## Parameters

- `mode`: The symbol rendering mode to use.

<a id="return-value"></a>

## Return Value

A view that uses the rendering mode you supply.

## See Also

### Specifying rendering behavior

- [antialiased(\_:)](antialiased%28__%29.md): Specifies whether SwiftUI applies antialiasing when rendering the image.
- [renderingMode(\_:)](renderingmode%28__%29.md): Indicates whether SwiftUI renders an image as-is, or by using a different mode.
- [interpolation(\_:)](interpolation%28__%29.md): Specifies the current level of quality for rendering an image that requires interpolation.
- [Image.TemplateRenderingMode](templaterenderingmode.md): A type that indicates how SwiftUI renders images.
- [Image.Interpolation](interpolation.md): The level of quality for rendering an image that requires interpolation, such as a scaled image.
