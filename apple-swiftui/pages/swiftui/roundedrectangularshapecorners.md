> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/roundedrectangularshapecorners](https://developer.apple.com/documentation/swiftui/roundedrectangularshapecorners)

# RoundedRectangularShapeCorners

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type describing the corner styles of a [RoundedRectangularShape](roundedrectangularshape.md).

## Declaration

```swift
struct RoundedRectangularShapeCorners
```

## Topics

### Initializers

- [init(all:)](roundedrectangularshapecorners/init%28all_%29.md): Create corner styles with all corner having the same style.
- [init(topLeading:topTrailing:bottomLeading:bottomTrailing:)](roundedrectangularshapecorners/init%28topleading_toptrailing_bottomleading_bottomtrailing_%29.md): Create corner styles with per-corner styles.

### Instance Properties

- [bottomLeading](roundedrectangularshapecorners/bottomleading.md): The bottom leading corner style.
- [bottomTrailing](roundedrectangularshapecorners/bottomtrailing.md): The bottom trailing corner style
- [topLeading](roundedrectangularshapecorners/topleading.md): The top leading corner style.
- [topTrailing](roundedrectangularshapecorners/toptrailing.md): The top trailing corner style.

### Subscripts

- [subscript(\_:)](roundedrectangularshapecorners/subscript%28__%29.md): Returns the corner style for a provided corner.

### Type Properties

- [concentric](roundedrectangularshapecorners/concentric.md): Corner styles will be concentric with its container, varying the radius as needed in all four corners.

### Type Methods

- [concentric(minimum:)](roundedrectangularshapecorners/concentric%28minimum_%29.md): Corner styles will be concentric with its container, varying the radius as needed in all four corners but never going below zero, or the provided minimum corner style, if provided.
- [fixed(\_:)](roundedrectangularshapecorners/fixed%28__%29.md): Corner styles with fixed radius in all four corners.

## Relationships

### Conforms To

- [Animatable](animatable.md)
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
- [UnevenRoundedRectangle](unevenroundedrectangle.md): A rectangular shape with rounded corners with different values, aligned inside the frame of the view containing it.
- [RectangleCornerRadii](rectanglecornerradii.md): Describes the corner radius values of a rounded rectangle with uneven corners.
- [RectangleCornerInsets](rectanglecornerinsets.md): The inset sizes for the corners of a rectangle.
- [ConcentricRectangle](concentricrectangle.md): A shape whose corners you configure, individually or uniformly, to be squared, rounded, or concentric relative to a container shape’s corners.
