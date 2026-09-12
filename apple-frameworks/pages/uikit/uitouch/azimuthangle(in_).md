> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/azimuthangle(in:)](https://developer.apple.com/documentation/uikit/uitouch/azimuthangle(in:))

# azimuthAngle(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the azimuth angle (in radians) of the stylus.

## Declaration

```swift
func azimuthAngle(in view: UIView?) -> CGFloat
```

## Parameters

- `view`: The view that contains the stylus’s touch. Pass `nil` to get the azimuth angle that is relative to the touch’s window.

<a id="return-value"></a>

## Return Value

The azimuth angle of the stylus, in radians.

<a id="Discussion"></a>

## Discussion

In the plane of the screen, the azimuth angle is the direction in which the stylus is pointing. With the tip of the stylus touching the screen, the value of this property is `0` radians when the cap end of the stylus (that is, the end opposite of the tip) points along the positive x axis of the device’s screen. The azimuth angle increases as the user swings the cap end of the stylus in a clockwise direction around the tip.

> **Note**

>  It is more expensive to get the azimuth angle (as opposed to the azimuth unit vector), but it can also be more convenient

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
- [azimuthUnitVector(in:)](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.

# azimuthAngleInView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the azimuth angle (in radians) of the stylus.

## Declaration

```objectivec
- (CGFloat) azimuthAngleInView:(UIView *) view;
```

## Parameters

- `view`: The view that contains the stylus’s touch. Pass `nil` to get the azimuth angle that is relative to the touch’s window.

<a id="return-value"></a>

## Return Value

The azimuth angle of the stylus, in radians.

<a id="Discussion"></a>

## Discussion

In the plane of the screen, the azimuth angle is the direction in which the stylus is pointing. With the tip of the stylus touching the screen, the value of this property is `0` radians when the cap end of the stylus (that is, the end opposite of the tip) points along the positive x axis of the device’s screen. The azimuth angle increases as the user swings the cap end of the stylus in a clockwise direction around the tip.

> **Note**

>  It is more expensive to get the azimuth angle (as opposed to the azimuth unit vector), but it can also be more convenient

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
- [azimuthUnitVectorInView:](azimuthunitvector%28in_%29.md): Returns a unit vector that points in the direction of the azimuth of the stylus.
- [rollAngle](rollangle.md): A value that represents the current barrel-roll angle of Apple Pencil.
