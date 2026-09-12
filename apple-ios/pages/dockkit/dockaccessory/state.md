> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/state](https://developer.apple.com/documentation/dockkit/dockaccessory/state)

# DockAccessory.State

**Framework:** DockKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The state of a dock accessory.

## Declaration

```swift
enum State
```

## Topics

### Getting properties

- [DockAccessory.State.docked](state/docked.md): The dock accessory doesn’t contain a device.
- [DockAccessory.State.undocked](state/undocked.md): The dock accessory contains a device.
- [debugDescription](state/debugdescription.md): The text description of the dock accessory state.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting accessory information

- [firmwareVersion](firmwareversion.md): The firmware version of the dock accessory.
- [hardwareModel](hardwaremodel.md): The model of the dock accessory.
- [identifier](identifier-swift.property.md): The name and unique identifer of the dock accessory.
- [DockAccessory.Identifier](identifier-swift.struct.md): Information that uniquely identifies the dock accessory.
- [DockAccessory.Category](category.md): Types of supported dock accesories.
- [DockAccessory.StateChange](statechange.md): An event that indicates a change in the state of a dock accessory.
- [DockAccessory.StateChanges](statechanges.md): An asynchronous sequence of dock accessory state changes.
