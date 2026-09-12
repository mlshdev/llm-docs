> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/setattitude(_:)](https://developer.apple.com/documentation/gamecontroller/gcmotion/setattitude(_:))

# setAttitude(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the controller’s attitude.

## Declaration

```swift
func setAttitude(_ attitude: GCQuaternion)
```

## Parameters

- `attitude`: The orientation of a body relative to the controller’s reference frame.

## See Also

### Setting Snapshot Values

- [setStateFrom(\_:)](setstatefrom%28__%29.md): Copies the input values from a specified motion profile to a snapshot of a motion profile.
- [setRotationRate(\_:)](setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration(\_:)](setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setGravity(\_:)](setgravity%28__%29.md): Sets the controller’s gravity data.
- [setUserAcceleration(\_:)](setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.

# setAttitude: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the controller’s attitude.

## Declaration

```objectivec
- (void) setAttitude:(GCQuaternion) attitude;
```

## Parameters

- `attitude`: The orientation of a body relative to the controller’s reference frame.

## See Also

### Setting Snapshot Values

- [setStateFromMotion:](setstatefrom%28__%29.md): Copies the input values from a specified motion profile to a snapshot of a motion profile.
- [setRotationRate:](setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration:](setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setGravity:](setgravity%28__%29.md): Sets the controller’s gravity data.
- [setUserAcceleration:](setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.
