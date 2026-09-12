> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/insettableshape](https://developer.apple.com/documentation/swiftui/insettableshape)

# InsettableShape

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A shape type that is able to inset itself to produce another shape.

## Declaration

```swift
protocol InsettableShape : Shape
```

## Topics

### Setting the stroke border characteristics

- [strokeBorder(\_:lineWidth:antialiased:)](insettableshape/strokeborder%28__linewidth_antialiased_%29.md): Returns a view that is the result of filling the `lineWidth`-sized border (aka inner stroke) of `self` with `content`. This is equivalent to insetting `self` by `lineWidth / 2` and stroking the resulting shape with `lineWidth` as the line-width.
- [strokeBorder(lineWidth:antialiased:)](insettableshape/strokeborder%28linewidth_antialiased_%29.md): Returns a view that is the result of filling the `lineWidth`-sized border (aka inner stroke) of `self` with the foreground color. This is equivalent to insetting `self` by `lineWidth / 2` and stroking the resulting shape with `lineWidth` as the line-width.
- [strokeBorder(\_:style:antialiased:)](insettableshape/strokeborder%28__style_antialiased_%29.md): Returns a view that is the result of insetting `self` by `style.lineWidth / 2`, stroking the resulting shape with `style`, and then filling with `content`.
- [strokeBorder(style:antialiased:)](insettableshape/strokeborder%28style_antialiased_%29.md): Returns a view that is the result of insetting `self` by `style.lineWidth / 2`, stroking the resulting shape with `style`, and then filling with the foreground color.

### Setting the inset

- [inset(by:)](insettableshape/inset%28by_%29.md): Returns `self` inset by `amount`.
- [InsetShape](insettableshape/insetshape.md): The type of the inset shape.

## Relationships

### Inherits From

- [Animatable](animatable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

### Inherited By

- [RoundedRectangularShape](roundedrectangularshape.md)

### Conforming Types

- [ButtonBorderShape](buttonbordershape.md)
- [Capsule](capsule.md)
- [Circle](circle.md)
- [ContainerRelativeShape](containerrelativeshape.md)
- [Ellipse](ellipse.md)
- [OffsetShape](offsetshape.md)
- [Rectangle](rectangle.md)
- [RotatedShape](rotatedshape.md)
- [RoundedRectangle](roundedrectangle.md)
- [TextInputBorderShape](textinputbordershape.md)
- [UnevenRoundedRectangle](unevenroundedrectangle.md)

## See Also

### Setting a container shape

- [containerShape(\_:)](view/containershape%28__%29.md): Sets the container shape to use for any container relative shape or concentric rectangle within this view.
- [ContainerRelativeShape](containerrelativeshape.md): A shape whose dimensions the system calculates from an inset version of the current container shape.
