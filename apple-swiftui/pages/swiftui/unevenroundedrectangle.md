> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/unevenroundedrectangle](https://developer.apple.com/documentation/swiftui/unevenroundedrectangle)

# UnevenRoundedRectangle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A rectangular shape with rounded corners with different values, aligned inside the frame of the view containing it.

## Declaration

```swift
@frozen struct UnevenRoundedRectangle
```

## Topics

### Creating an uneven rounded rectangle

- [init(cornerRadii:style:)](unevenroundedrectangle/init%28cornerradii_style_%29.md): Creates a new rounded rectangle shape with uneven corners.
- [init(topLeadingRadius:bottomLeadingRadius:bottomTrailingRadius:topTrailingRadius:style:)](unevenroundedrectangle/init%28topleadingradius_bottomleadingradius_bottomtrailingradius_toptrailingradius_style_%29.md): Creates a new rounded rectangle shape with uneven corners.

### Getting the shape’s characteristics

- [cornerRadii](unevenroundedrectangle/cornerradii.md): The radii of each corner of the rounded rectangle.
- [style](unevenroundedrectangle/style.md): The style of corners drawn by the rounded rectangle.

### Supporting types

- [animatableData](unevenroundedrectangle/animatabledata.md): The data to animate.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InsettableShape](insettableshape.md)
- [RoundedRectangularShape](roundedrectangularshape.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Shape](shape.md)
- [View](view.md)

## See Also

### Creating rectangular shapes

- [Rectangle](rectangle.md): A rectangular shape aligned inside the frame of the view containing it.
- [RoundedRectangle](roundedrectangle.md): A rectangular shape with rounded corners, aligned inside the frame of the view containing it.
- [RoundedCornerStyle](roundedcornerstyle.md): Defines the shape of a rounded rectangle’s corners.
- [RoundedRectangularShape](roundedrectangularshape.md): A protocol of [InsettableShape](insettableshape.md) that describes a rounded rectangular shape.
- [RoundedRectangularShapeCorners](roundedrectangularshapecorners.md): A type describing the corner styles of a [RoundedRectangularShape](roundedrectangularshape.md).
- [RectangleCornerRadii](rectanglecornerradii.md): Describes the corner radius values of a rounded rectangle with uneven corners.
- [RectangleCornerInsets](rectanglecornerinsets.md): The inset sizes for the corners of a rectangle.
- [ConcentricRectangle](concentricrectangle.md): A shape whose corners you configure, individually or uniformly, to be squared, rounded, or concentric relative to a container shape’s corners.
