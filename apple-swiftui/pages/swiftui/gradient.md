> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gradient](https://developer.apple.com/documentation/swiftui/gradient)

# Gradient

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A color gradient represented as an array of color stops, each having a parametric location value.

## Declaration

```swift
@frozen struct Gradient
```

## Mentioned In

- [Adding a background to your view](adding-a-background-to-your-view.md)

## Topics

### Creating a gradient from colors

- [init(colors:)](gradient/init%28colors_%29.md): Creates a gradient from an array of colors.

### Creating a gradient from stops

- [init(stops:)](gradient/init%28stops_%29.md): Creates a gradient from an array of color stops.
- [stops](gradient/stops.md): The array of color stops.
- [Gradient.Stop](gradient/stop.md): One color stop in the gradient.

### Working with color spaces

- [colorSpace(\_:)](gradient/colorspace%28__%29.md): Returns a version of the gradient that will use a specified color space for interpolating between its colors.
- [Gradient.ColorSpace](gradient/colorspace.md): A method of interpolating between the colors in a gradient.

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
- [MeshGradient](meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [AnyGradient](anygradient.md): A color gradient.
- [ShadowStyle](shadowstyle.md): A style to use when rendering shadows.
- [Glass](glass.md): A structure that defines the configuration of the Liquid Glass material.
