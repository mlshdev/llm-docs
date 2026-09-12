> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkannotationview/collisionmode-swift.enum](https://developer.apple.com/documentation/mapkit/mkannotationview/collisionmode-swift.enum)

# MKAnnotationView.CollisionMode (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicates how to interpret the collision frame rectangle of an annotation view.

## Declaration

```swift
enum CollisionMode
```

## Topics

### Enumeration Cases

- [MKAnnotationView.CollisionMode.rectangle](collisionmode-swift.enum/rectangle.md): A constant that indicates that the annotation view uses the full collision frame rectangle for detecting collisions.
- [MKAnnotationView.CollisionMode.circle](collisionmode-swift.enum/circle.md): A constant that indicates that the annotation view uses an inscribed circle in the collision frame rectangle to determine collisions.
- [MKAnnotationView.CollisionMode.none](collisionmode-swift.enum/none.md): A constant indicating that collisions can’t occur.
- [MKAnnotationView.CollisionMode.rectangle](collisionmode-swift.enum/rectangle.md): A constant that indicates that the annotation view uses the full collision frame rectangle for detecting collisions.
- [MKAnnotationView.CollisionMode.circle](collisionmode-swift.enum/circle.md): A constant that indicates that the annotation view uses an inscribed circle in the collision frame rectangle to determine collisions.
- [MKAnnotationView.CollisionMode.none](collisionmode-swift.enum/none.md): A constant indicating that collisions can’t occur.

### Initializers

- [init(rawValue:)](collisionmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing collisions between annotation views

- [collisionMode](collisionmode-swift.property.md): The collision mode to use when interpreting the collision frame rectangle.

# MKAnnotationViewCollisionMode (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Constants that indicates how to interpret the collision frame rectangle of an annotation view.

## Declaration

```objectivec
enum MKAnnotationViewCollisionMode : NSInteger;
```

## Topics

### Enumeration Cases

- [MKAnnotationViewCollisionModeRectangle](collisionmode-swift.enum/rectangle.md): A constant that indicates that the annotation view uses the full collision frame rectangle for detecting collisions.
- [MKAnnotationViewCollisionModeCircle](collisionmode-swift.enum/circle.md): A constant that indicates that the annotation view uses an inscribed circle in the collision frame rectangle to determine collisions.
- [MKAnnotationViewCollisionModeNone](collisionmode-swift.enum/none.md): A constant indicating that collisions can’t occur.
- [MKAnnotationViewCollisionModeRectangle](collisionmode-swift.enum/rectangle.md): A constant that indicates that the annotation view uses the full collision frame rectangle for detecting collisions.
- [MKAnnotationViewCollisionModeCircle](collisionmode-swift.enum/circle.md): A constant that indicates that the annotation view uses an inscribed circle in the collision frame rectangle to determine collisions.
- [MKAnnotationViewCollisionModeNone](collisionmode-swift.enum/none.md): A constant indicating that collisions can’t occur.

## See Also

### Managing collisions between annotation views

- [collisionMode](collisionmode-swift.property.md): The collision mode to use when interpreting the collision frame rectangle.
