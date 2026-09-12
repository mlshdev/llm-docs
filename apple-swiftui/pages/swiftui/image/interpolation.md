> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/image/interpolation](https://developer.apple.com/documentation/swiftui/image/interpolation)

# Image.Interpolation

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The level of quality for rendering an image that requires interpolation, such as a scaled image.

## Declaration

```swift
enum Interpolation
```

<a id="overview"></a>

## Overview

The [interpolation(\_:)](interpolation%28__%29.md) modifier specifies the interpolation behavior when using the [resizable(capInsets:resizingMode:)](resizable%28capinsets_resizingmode_%29.md) modifier on an [Image](../image.md). Use this behavior to prioritize rendering performance or image quality.

## Topics

### Getting interpolation options

- [Image.Interpolation.high](interpolation/high.md): A value that indicates a high level of interpolation quality, which may slow down image rendering.
- [Image.Interpolation.low](interpolation/low.md): A value that indicates a low level of interpolation quality, which may speed up image rendering.
- [Image.Interpolation.medium](interpolation/medium.md): A value that indicates a medium level of interpolation quality, between the low- and high-quality values.
- [Image.Interpolation.none](interpolation/none.md): A value that indicates SwiftUI doesn’t interpolate image data.

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
- [Image.TemplateRenderingMode](templaterenderingmode.md): A type that indicates how SwiftUI renders images.
