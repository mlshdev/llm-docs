> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/statechange](https://developer.apple.com/documentation/dockkit/dockaccessory/statechange)

# DockAccessory.StateChange

**Framework:** DockKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An event that indicates a change in the state of a dock accessory.

## Declaration

```swift
struct StateChange
```

<a id="overview"></a>

## Overview

DockKit generates this event when a device docks or undocks from the dock accessory, or when a person presses the tracking button. To iterate the stream of state changes, see [accessoryStateChanges](../dockaccessorymanager/accessorystatechanges.md).

## Topics

### Getting properties

- [accessory](statechange/accessory.md): The dock accessory that generated the event.
- [state](statechange/state.md): The state of the dock accessory associated with the event.

### Instance Properties

- [trackingButtonEnabled](statechange/trackingbuttonenabled.md): The state of the tracking button on the dock accessory.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting accessory information

- [firmwareVersion](firmwareversion.md): The firmware version of the dock accessory.
- [hardwareModel](hardwaremodel.md): The model of the dock accessory.
- [identifier](identifier-swift.property.md): The name and unique identifer of the dock accessory.
- [DockAccessory.Identifier](identifier-swift.struct.md): Information that uniquely identifies the dock accessory.
- [DockAccessory.Category](category.md): Types of supported dock accesories.
- [DockAccessory.State](state.md): The state of a dock accessory.
- [DockAccessory.StateChanges](statechanges.md): An asynchronous sequence of dock accessory state changes.
