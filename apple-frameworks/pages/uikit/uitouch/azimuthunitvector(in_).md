> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/azimuthunitvector(in:)](https://developer.apple.com/documentation/uikit/uitouch/azimuthunitvector(in:))

# azimuthUnitVector(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a unit vector that points in the direction of the azimuth of the stylus.

## Declaration

```swift
func azimuthUnitVector(in view: UIView?) -> CGVector
```

## Parameters

- `view`: The view that contains the stylus’s touch. Pass `nil` to get the unit vector for the azimuth that is relative to the touch’s window.

<a id="return-value"></a>

## Return Value

The unit vector that points in the direction of the azimuth of the stylus.

<a id="Discussion"></a>

## Discussion

It is less expensive to get the azimuth unit vector than the azimuth angle. If you’re creating transform matrices, the unit vector can also be more useful.

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
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.

# azimuthUnitVectorInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a unit vector that points in the direction of the azimuth of the stylus.

## Declaration

```objectivec
- (CGVector) azimuthUnitVectorInView:(UIView *) view;
```

## Parameters

- `view`: The view that contains the stylus’s touch. Pass `nil` to get the unit vector for the azimuth that is relative to the touch’s window.

<a id="return-value"></a>

## Return Value

The unit vector that points in the direction of the azimuth of the stylus.

<a id="Discussion"></a>

## Discussion

It is less expensive to get the azimuth unit vector than the azimuth angle. If you’re creating transform matrices, the unit vector can also be more useful.

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
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
