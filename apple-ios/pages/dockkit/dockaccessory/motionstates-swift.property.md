> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/motionstates-swift.property](https://developer.apple.com/documentation/dockkit/dockaccessory/motionstates-swift.property)

# motionStates

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Motion information from the dock accessory that includes current orientation and velocity of all axes.

## Declaration

```swift
final var motionStates: DockAccessory.MotionStates { get throws }
```

<a id="return-value"></a>

## Return Value

Motion states with the current orientation and velocity. The dock accessory controls the rate at which the state changes.

<a id="discussion"></a>

## Discussion

This value holds a [DockAccessory.MotionStates](motionstates-swift.struct.md) object, an asynchronous iterator used to find the desired dock accessory.

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if device is disconnected, or [DockKitError.notSupportedByDevice](../dockkiterror/notsupportedbydevice.md) if device doesn’t support updates.

## See Also

### Getting position and limits

- [limits](limits-swift.property.md): Current limits for the axes of rotation and maximum angular velocity.
- [DockAccessory.MotionState](motionstate.md): An event that indicates the state of a dock accessory’s current position and speed.
- [DockAccessory.MotionStates](motionstates-swift.struct.md): An asynchronous sequence of orientation and velocity updates from the device.
- [DockAccessory.Limits](limits-swift.struct.md): Soft limits on multiple axes of rotation.
