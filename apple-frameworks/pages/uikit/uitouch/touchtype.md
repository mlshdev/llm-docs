> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/touchtype](https://developer.apple.com/documentation/uikit/uitouch/touchtype)

# UITouch.TouchType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The type of touch received.

## Declaration

```swift
enum TouchType
```

## Topics

### Touch types

- [UITouch.TouchType.direct](touchtype/direct.md): A touch resulting from direct contact with the screen.
- [UITouch.TouchType.indirect](touchtype/indirect.md): A touch that doesn’t result from contact with the screen.
- [UITouch.TouchType.pencil](touchtype/pencil.md): A touch from Apple Pencil.
- [UITouch.TouchType.indirectPointer](touchtype/indirectpointer.md): A touch resulting from a button-based, indirect input device that describes the input sequence from button press to button release.

### Deprecated

- [stylus](touchtype/stylus.md): Deprecated. A touch from a stylus.

### Initializers

- [init(rawValue:)](touchtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [phase](phase-swift.property.md): The phase of the touch.
- [UITouch.Phase](phase-swift.enum.md): The phase of a touch event.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngle(in:)](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.

# UITouchType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The type of touch received.

## Declaration

```objectivec
enum UITouchType : NSInteger;
```

## Topics

### Touch types

- [UITouchTypeDirect](touchtype/direct.md): A touch resulting from direct contact with the screen.
- [UITouchTypeIndirect](touchtype/indirect.md): A touch that doesn’t result from contact with the screen.
- [UITouchTypePencil](touchtype/pencil.md): A touch from Apple Pencil.
- [UITouchTypeIndirectPointer](touchtype/indirectpointer.md): A touch resulting from a button-based, indirect input device that describes the input sequence from button press to button release.

### Deprecated

- [UITouchTypeStylus](touchtype/stylus.md): Deprecated. A touch from a stylus.

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [phase](phase-swift.property.md): The phase of the touch.
- [UITouchPhase](phase-swift.enum.md): The phase of a touch event.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngleInView:](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
