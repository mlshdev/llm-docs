> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/setangle(_:magnitude:)](https://developer.apple.com/documentation/uikit/uigravitybehavior/setangle(_:magnitude:))

# setAngle(\_:magnitude:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the angle and magnitude of the gravity vector for the behavior.

## Declaration

```swift
func setAngle(_ angle: CGFloat, magnitude: CGFloat)
```

## Parameters

- `angle`: The radian angle for the gravity vector, using standard UIKit geometry. Specify the value `pi / 2` to create a force that pulls items downward toward the bottom of the reference view.
- `magnitude`: The magnitude of the gravitational force. Specify `1.0` to get the standard UIKit gravity, which has an acceleration value of 1000 points / second².

## See Also

### Configuring a gravity behavior

- [gravityDirection](gravitydirection.md): The direction and magnitude of the gravitational force, expressed as a vector.
- [angle](angle.md): The direction of the gravity vector, expressed in radians in the reference coordinate system.
- [magnitude](magnitude.md): The magnitude of the gravity vector.

# setAngle:magnitude: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the angle and magnitude of the gravity vector for the behavior.

## Declaration

```objectivec
- (void) setAngle:(CGFloat) angle magnitude:(CGFloat) magnitude;
```

## Parameters

- `angle`: The radian angle for the gravity vector, using standard UIKit geometry. Specify the value `pi / 2` to create a force that pulls items downward toward the bottom of the reference view.
- `magnitude`: The magnitude of the gravitational force. Specify `1.0` to get the standard UIKit gravity, which has an acceleration value of 1000 points / second².

## See Also

### Configuring a gravity behavior

- [gravityDirection](gravitydirection.md): The direction and magnitude of the gravitational force, expressed as a vector.
- [angle](angle.md): The direction of the gravity vector, expressed in radians in the reference coordinate system.
- [magnitude](magnitude.md): The magnitude of the gravity vector.
