> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anygradient](https://developer.apple.com/documentation/swiftui/anygradient)

# AnyGradient

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A color gradient.

## Declaration

```swift
@frozen struct AnyGradient
```

<a id="overview"></a>

## Overview

When used as a [ShapeStyle](shapestyle.md), this type draws a linear gradient with start-point \[0.5, 0\] and end-point \[0.5, 1\].

## Topics

### Creating a gradient

- [init(\_:)](anygradient/init%28__%29.md): Creates a new instance from the specified gradient.

### Working with color spaces

- [colorSpace(\_:)](anygradient/colorspace%28__%29.md): Returns a version of the gradient that will use a specified color space for interpolating between its colors.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ScaleRange](https://developer.apple.com/documentation/charts/scalerange)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [ShapeStyle](shapestyle.md)

## See Also

### Styling content

- [border(\_:width:)](view/border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [foregroundStyle(\_:)](view/foregroundstyle%28__%29.md): Sets a view’s foreground elements to use a given style.
- [foregroundStyle(\_:\_:)](view/foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [foregroundStyle(\_:\_:\_:)](view/foregroundstyle%28______%29.md): Sets the primary, secondary, and tertiary levels of the foreground style.
- [backgroundStyle(\_:)](view/backgroundstyle%28__%29.md): Sets the specified style to render backgrounds within the view.
- [backgroundStyle](environmentvalues/backgroundstyle.md): An optional style that overrides the default system background style when set.
- [ShapeStyle](shapestyle.md): A color or pattern to use when rendering a shape.
- [AnyShapeStyle](anyshapestyle.md): A type-erased ShapeStyle value.
- [Gradient](gradient.md): A color gradient represented as an array of color stops, each having a parametric location value.
- [MeshGradient](meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [ShadowStyle](shadowstyle.md): A style to use when rendering shadows.
- [Glass](glass.md): A structure that defines the configuration of the Liquid Glass material.
