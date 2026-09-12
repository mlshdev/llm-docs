> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/gradientoptions](https://developer.apple.com/documentation/swiftui/graphicscontext/gradientoptions)

# GraphicsContext.GradientOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that affect the rendering of color gradients.

## Declaration

```swift
@frozen struct GradientOptions
```

<a id="overview"></a>

## Overview

Use these options to affect how SwiftUI manages a gradient that you create for a [GraphicsContext.Shading](shading.md) instance for use in a [GraphicsContext](../graphicscontext.md).

## Topics

### Getting gradient options

- [linearColor](gradientoptions/linearcolor.md): An option that interpolates between colors in a linear color space.
- [mirror](gradientoptions/mirror.md): An option that repeats the gradient outside its nominal range, reflecting every other instance.
- [repeat](gradientoptions/repeat.md): An option that repeats the gradient outside its nominal range.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Drawing a path

- [stroke(\_:with:lineWidth:)](stroke%28__with_linewidth_%29.md): Draws a path into the context with a specified line width.
- [stroke(\_:with:style:)](stroke%28__with_style_%29.md): Draws a path into the context with a specified stroke style.
- [fill(\_:with:style:)](fill%28__with_style_%29.md): Draws a path into the context and fills the outlined region.
- [GraphicsContext.Shading](shading.md): A color or pattern that you can use to outline or fill a path.
