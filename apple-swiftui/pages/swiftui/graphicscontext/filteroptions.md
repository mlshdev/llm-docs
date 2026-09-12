> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/filteroptions](https://developer.apple.com/documentation/swiftui/graphicscontext/filteroptions)

# GraphicsContext.FilterOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that configure a filter that you add to a graphics context.

## Declaration

```swift
@frozen struct FilterOptions
```

<a id="overview"></a>

## Overview

You can use filter options to configure a [GraphicsContext.Filter](filter.md) that you apply to a [GraphicsContext](../graphicscontext.md) with the [addFilter(\_:options:)](addfilter%28__options_%29.md) method.

## Topics

### Getting filter options

- [linearColor](filteroptions/linearcolor.md): An option that causes the filter to perform calculations in a linear color space.

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
- [GraphicsContext.BlurOptions](bluroptions.md): Options that configure the graphics context filter that creates blur.
- [GraphicsContext.ShadowOptions](shadowoptions.md): Options that configure the graphics context filter that creates shadows.
