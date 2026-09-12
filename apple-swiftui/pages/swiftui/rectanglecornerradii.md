> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rectanglecornerradii](https://developer.apple.com/documentation/swiftui/rectanglecornerradii)

# RectangleCornerRadii

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Describes the corner radius values of a rounded rectangle with uneven corners.

## Declaration

```swift
@frozen struct RectangleCornerRadii
```

## Topics

### Creating a set of radii

- [init(topLeading:bottomLeading:bottomTrailing:topTrailing:)](rectanglecornerradii/init%28topleading_bottomleading_bottomtrailing_toptrailing_%29.md): Creates a new set of corner radii for a rounded rectangle with uneven corners.

### Getting values for specific corners

- [topLeading](rectanglecornerradii/topleading.md): The radius of the top-leading corner.
- [topTrailing](rectanglecornerradii/toptrailing.md): The radius of the top-trailing corner.
- [bottomLeading](rectanglecornerradii/bottomleading.md): The radius of the bottom-leading corner.
- [bottomTrailing](rectanglecornerradii/bottomtrailing.md): The radius of the bottom-trailing corner.

### Subscripts

- [subscript(\_:)](rectanglecornerradii/subscript%28__%29.md): Returns the corner radius for a certain corner.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating rectangular shapes

- [Rectangle](rectangle.md): A rectangular shape aligned inside the frame of the view containing it.
- [RoundedRectangle](roundedrectangle.md): A rectangular shape with rounded corners, aligned inside the frame of the view containing it.
- [RoundedCornerStyle](roundedcornerstyle.md): Defines the shape of a rounded rectangle’s corners.
- [RoundedRectangularShape](roundedrectangularshape.md): A protocol of [InsettableShape](insettableshape.md) that describes a rounded rectangular shape.
- [RoundedRectangularShapeCorners](roundedrectangularshapecorners.md): A type describing the corner styles of a [RoundedRectangularShape](roundedrectangularshape.md).
- [UnevenRoundedRectangle](unevenroundedrectangle.md): A rectangular shape with rounded corners with different values, aligned inside the frame of the view containing it.
- [RectangleCornerInsets](rectanglecornerinsets.md): The inset sizes for the corners of a rectangle.
- [ConcentricRectangle](concentricrectangle.md): A shape whose corners you configure, individually or uniformly, to be squared, rounded, or concentric relative to a container shape’s corners.
