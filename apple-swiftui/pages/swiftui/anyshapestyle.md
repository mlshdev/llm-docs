> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anyshapestyle](https://developer.apple.com/documentation/swiftui/anyshapestyle)

# AnyShapeStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type-erased ShapeStyle value.

## Declaration

```swift
@frozen struct AnyShapeStyle
```

## Topics

### Creating a shape style

- [init(\_:)](anyshapestyle/init%28__%29.md): Create an instance from `style`.

## Relationships

### Conforms To

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
- [Gradient](gradient.md): A color gradient represented as an array of color stops, each having a parametric location value.
- [MeshGradient](meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [AnyGradient](anygradient.md): A color gradient.
- [ShadowStyle](shadowstyle.md): A style to use when rendering shadows.
- [Glass](glass.md): A structure that defines the configuration of the Liquid Glass material.
