> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/setgravity(_:)](https://developer.apple.com/documentation/gamecontroller/gcmotion/setgravity(_:))

# setGravity(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the controller’s gravity data.

## Declaration

```swift
func setGravity(_ gravity: GCAcceleration)
```

## Parameters

- `gravity`: A gravity acceleration vector from the controller’s reference frame.

## See Also

### Setting Snapshot Values

- [setStateFrom(\_:)](setstatefrom%28__%29.md): Copies the input values from a specified motion profile to a snapshot of a motion profile.
- [setAttitude(\_:)](setattitude%28__%29.md): Sets the controller’s attitude.
- [setRotationRate(\_:)](setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration(\_:)](setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setUserAcceleration(\_:)](setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.

# setGravity: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the controller’s gravity data.

## Declaration

```objectivec
- (void) setGravity:(GCAcceleration) gravity;
```

## Parameters

- `gravity`: A gravity acceleration vector from the controller’s reference frame.

## See Also

### Setting Snapshot Values

- [setStateFromMotion:](setstatefrom%28__%29.md): Copies the input values from a specified motion profile to a snapshot of a motion profile.
- [setAttitude:](setattitude%28__%29.md): Sets the controller’s attitude.
- [setRotationRate:](setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration:](setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setUserAcceleration:](setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.
