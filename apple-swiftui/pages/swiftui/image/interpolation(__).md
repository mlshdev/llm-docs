> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/interpolation(_:)](https://developer.apple.com/documentation/swiftui/image/interpolation(_:))

# interpolation(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Specifies the current level of quality for rendering an image that requires interpolation.

## Declaration

```swift
func interpolation(_ interpolation: Image.Interpolation) -> Image
```

## Parameters

- `interpolation`: The quality level, expressed as a value of the `Interpolation` type, that SwiftUI applies when interpolating an image.

<a id="return-value"></a>

## Return Value

An image with the given interpolation value set.

## Mentioned In

- [Fitting images into available space](../fitting-images-into-available-space.md)

<a id="discussion"></a>

## Discussion

See the article [Fitting images into available space](../fitting-images-into-available-space.md) for examples of using `interpolation(_:)` when scaling an [Image](../image.md).

## See Also

### Specifying rendering behavior

- [antialiased(\_:)](antialiased%28__%29.md): Specifies whether SwiftUI applies antialiasing when rendering the image.
- [symbolRenderingMode(\_:)](symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [renderingMode(\_:)](renderingmode%28__%29.md): Indicates whether SwiftUI renders an image as-is, or by using a different mode.
- [Image.TemplateRenderingMode](templaterenderingmode.md): A type that indicates how SwiftUI renders images.
- [Image.Interpolation](interpolation.md): The level of quality for rendering an image that requires interpolation, such as a scaled image.
