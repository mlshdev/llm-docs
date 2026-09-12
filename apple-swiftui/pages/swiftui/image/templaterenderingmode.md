> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/templaterenderingmode](https://developer.apple.com/documentation/swiftui/image/templaterenderingmode)

# Image.TemplateRenderingMode

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that indicates how SwiftUI renders images.

## Declaration

```swift
enum TemplateRenderingMode
```

## Topics

### Getting rendering modes

- [Image.TemplateRenderingMode.original](templaterenderingmode/original.md): A mode that renders pixels of bitmap images as-is.
- [Image.TemplateRenderingMode.template](templaterenderingmode/template.md): A mode that renders all non-transparent pixels as the foreground color.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying rendering behavior

- [antialiased(\_:)](antialiased%28__%29.md): Specifies whether SwiftUI applies antialiasing when rendering the image.
- [symbolRenderingMode(\_:)](symbolrenderingmode%28__%29.md): Sets the rendering mode for symbol images within this view.
- [renderingMode(\_:)](renderingmode%28__%29.md): Indicates whether SwiftUI renders an image as-is, or by using a different mode.
- [interpolation(\_:)](interpolation%28__%29.md): Specifies the current level of quality for rendering an image that requires interpolation.
- [Image.Interpolation](interpolation.md): The level of quality for rendering an image that requires interpolation, such as a scaled image.
