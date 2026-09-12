> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/acceleration](https://developer.apple.com/documentation/gamecontroller/gcmotion/acceleration)

# acceleration (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total acceleration of the controller that includes gravity and the acceleration the user applies to the controller.

## Declaration

```swift
var acceleration: GCAcceleration { get }
```

## See Also

### Accessing Gravity and Acceleration Data

- [gravity](gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](useracceleration.md): The acceleration that the user applies to the controller.
- [GCAcceleration](../gcacceleration.md): A three-dimensional acceleration vector.

# acceleration (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The total acceleration of the controller that includes gravity and the acceleration the user applies to the controller.

## Declaration

```objectivec
@property (nonatomic, readonly) GCAcceleration acceleration;
```

## See Also

### Accessing Gravity and Acceleration Data

- [gravity](gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](useracceleration.md): The acceleration that the user applies to the controller.
- [GCAcceleration](../gcacceleration.md): A three-dimensional acceleration vector.
