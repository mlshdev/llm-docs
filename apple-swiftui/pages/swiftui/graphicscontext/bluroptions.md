> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/bluroptions](https://developer.apple.com/documentation/swiftui/graphicscontext/bluroptions)

# GraphicsContext.BlurOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that configure the graphics context filter that creates blur.

## Declaration

```swift
@frozen struct BlurOptions
```

<a id="overview"></a>

## Overview

You can use a set of these options when you call [blur(radius:options:)](filter/blur%28radius_options_%29.md) to create a [GraphicsContext.Filter](filter.md) that adds blur to an object that you draw into a [GraphicsContext](../graphicscontext.md).

## Topics

### Getting blur options

- [dithersResult](bluroptions/dithersresult.md): An option that causes the filter to dither the result, to reduce banding.
- [opaque](bluroptions/opaque.md): An option that causes the filter to ensure the result is completely opaque.

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

### Filtering

- [addFilter(\_:options:)](addfilter%28__options_%29.md): Adds a filter that applies to subsequent drawing operations.
- [GraphicsContext.Filter](filter.md): A type that applies image processing operations to rendered content.
- [GraphicsContext.FilterOptions](filteroptions.md): Options that configure a filter that you add to a graphics context.
- [GraphicsContext.ShadowOptions](shadowoptions.md): Options that configure the graphics context filter that creates shadows.
