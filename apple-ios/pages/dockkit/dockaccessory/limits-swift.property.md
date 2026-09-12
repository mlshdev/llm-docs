> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/limits-swift.property](https://developer.apple.com/documentation/dockkit/dockaccessory/limits-swift.property)

# limits

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Current limits for the axes of rotation and maximum angular velocity.

## Declaration

```swift
final var limits: DockAccessory.Limits { get throws }
```

<a id="return-value"></a>

## Return Value

The pitch, yaw, and roll limit. Each value can be `nil` if it’s unsupported. See [DockAccessory.Limits](limits-swift.struct.md) for more information.

<a id="discussion"></a>

## Discussion

> **Throws**

> [DockKitError.notConnected](../dockkiterror/notconnected.md) if the device has disconnected.

## See Also

### Getting position and limits

- [motionStates](motionstates-swift.property.md): Motion information from the dock accessory that includes current orientation and velocity of all axes.
- [DockAccessory.MotionState](motionstate.md): An event that indicates the state of a dock accessory’s current position and speed.
- [DockAccessory.MotionStates](motionstates-swift.struct.md): An asynchronous sequence of orientation and velocity updates from the device.
- [DockAccessory.Limits](limits-swift.struct.md): Soft limits on multiple axes of rotation.
