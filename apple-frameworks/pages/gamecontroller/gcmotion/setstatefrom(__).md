> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/setstatefrom(_:)](https://developer.apple.com/documentation/gamecontroller/gcmotion/setstatefrom(_:))

# setStateFrom(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Copies the input values from a specified motion profile to a snapshot of a motion profile.

## Declaration

```swift
func setStateFrom(_ motion: GCMotion)
```

## Parameters

- `motion`: The motion profile to copy the input values from.

## See Also

### Setting Snapshot Values

- [setAttitude(\_:)](setattitude%28__%29.md): Sets the controller’s attitude.
- [setRotationRate(\_:)](setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration(\_:)](setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setGravity(\_:)](setgravity%28__%29.md): Sets the controller’s gravity data.
- [setUserAcceleration(\_:)](setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.

# setStateFromMotion: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Copies the input values from a specified motion profile to a snapshot of a motion profile.

## Declaration

```objectivec
- (void) setStateFromMotion:(GCMotion *) motion;
```

## Parameters

- `motion`: The motion profile to copy the input values from.

## See Also

### Setting Snapshot Values

- [setAttitude:](setattitude%28__%29.md): Sets the controller’s attitude.
- [setRotationRate:](setrotationrate%28__%29.md): Sets the controller’s rotation rate.
- [setAcceleration:](setacceleration%28__%29.md): Sets the total acceleration of the controller that includes gravity and the user’s acceleration.
- [setGravity:](setgravity%28__%29.md): Sets the controller’s gravity data.
- [setUserAcceleration:](setuseracceleration%28__%29.md): Sets the acceleration the user applies to the controller.
