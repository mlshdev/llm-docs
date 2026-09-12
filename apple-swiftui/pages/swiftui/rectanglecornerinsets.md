> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/rectanglecornerinsets](https://developer.apple.com/documentation/swiftui/rectanglecornerinsets)

# RectangleCornerInsets

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The inset sizes for the corners of a rectangle.

## Declaration

```swift
@frozen struct RectangleCornerInsets
```

## Topics

### Initializers

- [init()](rectanglecornerinsets/init%28%29.md)
- [init(topLeading:topTrailing:bottomLeading:bottomTrailing:)](rectanglecornerinsets/init%28topleading_toptrailing_bottomleading_bottomtrailing_%29.md)

### Instance Properties

- [bottomLeading](rectanglecornerinsets/bottomleading.md): The size of the bottom-leading corner inset.
- [bottomTrailing](rectanglecornerinsets/bottomtrailing.md): The size of the bottom-trailing corner inset.
- [topLeading](rectanglecornerinsets/topleading.md): The size of the top-leading corner inset.
- [topTrailing](rectanglecornerinsets/toptrailing.md): The size of the top-trailing corner inset.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [RectangleCornerRadii](rectanglecornerradii.md): Describes the corner radius values of a rounded rectangle with uneven corners.
- [ConcentricRectangle](concentricrectangle.md): A shape whose corners you configure, individually or uniformly, to be squared, rounded, or concentric relative to a container shape’s corners.
