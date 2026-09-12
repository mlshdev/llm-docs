> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/phase-swift.property](https://developer.apple.com/documentation/uikit/uitouch/phase-swift.property)

# phase (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The phase of the touch.

## Declaration

```swift
var phase: UITouch.Phase { get }
```

<a id="Discussion"></a>

## Discussion

The property value is a constant that indicates whether the touch began, moved, ended, or was canceled. For descriptions of the possible values of this property, see [UITouch.Phase](phase-swift.enum.md).

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [UITouch.TouchType](touchtype.md): The type of touch received.
- [UITouch.Phase](phase-swift.enum.md): The phase of a touch event.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngle(in:)](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.

# phase (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The phase of the touch.

## Declaration

```objectivec
@property (nonatomic, readonly) UITouchPhase phase;
```

<a id="Discussion"></a>

## Discussion

The property value is a constant that indicates whether the touch began, moved, ended, or was canceled. For descriptions of the possible values of this property, see [UITouchPhase](phase-swift.enum.md).

## See Also

### Getting touch attributes

- [tapCount](tapcount.md): The number of times the finger was tapped for this given touch.
- [timestamp](timestamp.md): The time when the touch occurred or when it was last mutated.
- [type](type.md): The type of the touch.
- [UITouchType](touchtype.md): The type of touch received.
- [UITouchPhase](phase-swift.enum.md): The phase of a touch event.
- [force](force.md): The force of the touch, where a value of `1.0` represents the force of an average touch (predetermined by the system, not user-specific).
- [maximumPossibleForce](maximumpossibleforce.md): The maximum possible force for a touch.
- [altitudeAngle](altitudeangle.md): The altitude (in radians) of the stylus.
- [azimuthAngleInView:](azimuthangle%28in_%29.md): Returns the azimuth angle (in radians) of the stylus.
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
