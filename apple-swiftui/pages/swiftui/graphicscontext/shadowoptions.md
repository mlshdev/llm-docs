> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shadowoptions](https://developer.apple.com/documentation/swiftui/graphicscontext/shadowoptions)

# GraphicsContext.ShadowOptions

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Options that configure the graphics context filter that creates shadows.

## Declaration

```swift
@frozen struct ShadowOptions
```

<a id="overview"></a>

## Overview

You can use a set of these options when you call [shadow(color:radius:x:y:blendMode:options:)](filter/shadow%28color_radius_x_y_blendmode_options_%29.md) to create a [GraphicsContext.Filter](filter.md) that adds a drop shadow to an object that you draw into a [GraphicsContext](../graphicscontext.md).

## Topics

### Getting shadow options

- [disablesGroup](shadowoptions/disablesgroup.md): An option that causes the filter to composite the object and its shadow separately in the current layer.
- [invertsAlpha](shadowoptions/invertsalpha.md): An option that causes the filter to invert the alpha of the shadow.
- [shadowAbove](shadowoptions/shadowabove.md): An option that causes the filter to draw the shadow above the object, rather than below it.
- [shadowOnly](shadowoptions/shadowonly.md): An option that causes the filter to draw only the shadow, and omit the source object.

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
- [GraphicsContext.BlurOptions](bluroptions.md): Options that configure the graphics context filter that creates blur.
