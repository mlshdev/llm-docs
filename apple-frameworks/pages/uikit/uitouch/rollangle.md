> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/rollangle](https://developer.apple.com/documentation/uikit/uitouch/rollangle)

# rollAngle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 1.2+

A value that represents the current barrel-roll angle of Apple Pencil.

## Declaration

```swift
var rollAngle: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

For models of Apple Pencil that don’t support barrel-roll angle data, the value of this property is `0`.

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [UITouch.TouchType](touchtype.md): The type of touch received.
- [phase](phase-swift.property.md): The phase of the touch.
- [UITouch.Phase](phase-swift.enum.md): The phase of a touch event.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngle(in:)](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.

# rollAngle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS 1.2+

A value that represents the current barrel-roll angle of Apple Pencil.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat rollAngle;
```

<a id="Discussion"></a>

## Discussion

For models of Apple Pencil that don’t support barrel-roll angle data, the value of this property is `0`.

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [UITouchType](touchtype.md): The type of touch received.
- [phase](phase-swift.property.md): The phase of the touch.
- [UITouchPhase](phase-swift.enum.md): The phase of a touch event.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngleInView:](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
