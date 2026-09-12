> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/shapemarkup/shape-swift.enum](https://developer.apple.com/documentation/paperkit/shapemarkup/shape-swift.enum)

# ShapeMarkup.Shape

**Framework:** PaperKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
enum Shape
```

## Topics

### Structures

- [ShapeMarkup.Shape.ArrowShape](shape-swift.enum/arrowshape.md)
- [ShapeMarkup.Shape.ChatBubble](shape-swift.enum/chatbubble.md)
- [ShapeMarkup.Shape.Ellipse](shape-swift.enum/ellipse-swift.struct.md)
- [ShapeMarkup.Shape.Line](shape-swift.enum/line.md)
- [ShapeMarkup.Shape.Rectangle](shape-swift.enum/rectangle-swift.struct.md)
- [ShapeMarkup.Shape.RegularPolygon](shape-swift.enum/regularpolygon.md)
- [ShapeMarkup.Shape.Star](shape-swift.enum/star-swift.struct.md)

### Enumeration Cases

- [ShapeMarkup.Shape.arrowShape(\_:)](shape-swift.enum/arrowshape%28__%29.md): An arrow shape pointing in a specific direction.
- [ShapeMarkup.Shape.chatBubble(\_:)](shape-swift.enum/chatbubble%28__%29.md): A speech bubble with a tail pointing to a specific location.
- [ShapeMarkup.Shape.ellipse(\_:)](shape-swift.enum/ellipse%28__%29.md): An ellipse.
- [ShapeMarkup.Shape.line(\_:)](shape-swift.enum/line%28__%29.md): A quadratic Bézier curve line.
- [ShapeMarkup.Shape.rectangle(\_:)](shape-swift.enum/rectangle%28__%29.md): A rectangle.
- [ShapeMarkup.Shape.regularPolygon(\_:)](shape-swift.enum/regularpolygon%28__%29.md): A regular polygon with equal sides and angles.
- [ShapeMarkup.Shape.star(\_:)](shape-swift.enum/star%28__%29.md): A star shape with alternating inner and outer points.

### Initializers

- [init(configurationType:)](shape-swift.enum/init%28configurationtype_%29.md): Creates a default shape for a category of shape.

### Instance Properties

- [configurationType](shape-swift.enum/configurationtype.md): The category of shape.
- [path](shape-swift.enum/path.md): The path of the shape.
- [supportsLineMarkers](shape-swift.enum/supportslinemarkers.md): True if this shape supports the addition of line markers.

### Type Properties

- [ellipse](shape-swift.enum/ellipse-swift.type.property.md): An ellipse that fills the shape’s bounds.
- [rectangle](shape-swift.enum/rectangle-swift.type.property.md): A rectangle with square corners.
- [star](shape-swift.enum/star-swift.type.property.md): A default 5-pointed star shape.

### Type Methods

- [arrowShape(cornerPoint:)](shape-swift.enum/arrowshape%28cornerpoint_%29.md): An arrow shape pointing in a specific direction.
- [chatBubble(tailLocation:tailAngle:)](shape-swift.enum/chatbubble%28taillocation_tailangle_%29.md): A speech bubble with a tail pointing to a specific location.
- [line(start:control:end:)](shape-swift.enum/line%28start_control_end_%29.md): A quadratic Bézier curve line.
- [regularPolygon(sides:)](shape-swift.enum/regularpolygon%28sides_%29.md): A regular polygon with equal sides and angles.
- [roundedRectangle(cornerRadius:)](shape-swift.enum/roundedrectangle%28cornerradius_%29.md): A rectangle with rounded corners.
- [star(points:innerRadius:)](shape-swift.enum/star%28points_innerradius_%29.md): A star shape with alternating inner and outer points.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Choosing a shape type

- [shape](shape-swift.property.md): The type of the shape.
- [shapeScaled](shapescaled.md): The type of the shape with values scaled to the current frame.
