> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/limits-swift.struct](https://developer.apple.com/documentation/dockkit/dockaccessory/limits-swift.struct)

# DockAccessory.Limits

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Soft limits on multiple axes of rotation.

## Declaration

```swift
struct Limits
```

## Topics

### Creating limits

- [init(yaw:pitch:roll:)](limits-swift.struct/init%28yaw_pitch_roll_%29.md): Creates the limit object.

### Specifying limits

- [DockAccessory.Limits.Limit](limits-swift.struct/limit.md): A description of a limit placed on an axis of rotation.

### Getting properties

- [pitch](limits-swift.struct/pitch.md): The up and down limit.
- [roll](limits-swift.struct/roll.md): The side to side limit.
- [yaw](limits-swift.struct/yaw.md): The left and right limit.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting position and limits

- [motionStates](motionstates-swift.property.md): Motion information from the dock accessory that includes current orientation and velocity of all axes.
- [limits](limits-swift.property.md): Current limits for the axes of rotation and maximum angular velocity.
- [DockAccessory.MotionState](motionstate.md): An event that indicates the state of a dock accessory’s current position and speed.
- [DockAccessory.MotionStates](motionstates-swift.struct.md): An asynchronous sequence of orientation and velocity updates from the device.
