> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/antialiased(_:)](https://developer.apple.com/documentation/swiftui/image/antialiased(_:))

# antialiased(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Specifies whether SwiftUI applies antialiasing when rendering the image.

## Declaration

```swift
func antialiased(_ isAntialiased: Bool) -> Image
```

## Parameters

- `isAntialiased`: A Boolean value that specifies whether to allow antialiasing. Pass `true` to allow antialising, `false` otherwise.

<a id="return-value"></a>

## Return Value

An image with the antialiasing behavior set.

## See Also

### Specifying rendering behavior

- [symbolRenderingMode(\_:)](symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [renderingMode(\_:)](renderingmode%28__%29.md): Indicates whether SwiftUI renders an image as-is, or by using a different mode.
- [interpolation(\_:)](interpolation%28__%29.md): Specifies the current level of quality for rendering an image that requires interpolation.
- [Image.TemplateRenderingMode](templaterenderingmode.md): A type that indicates how SwiftUI renders images.
- [Image.Interpolation](interpolation.md): The level of quality for rendering an image that requires interpolation, such as a scaled image.
