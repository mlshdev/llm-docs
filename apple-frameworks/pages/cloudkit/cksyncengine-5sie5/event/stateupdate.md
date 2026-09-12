> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncengine-5sie5/event/stateupdate](https://developer.apple.com/documentation/cloudkit/cksyncengine-5sie5/event/stateupdate)

# CKSyncEngine.Event.StateUpdate

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

The sync engine state was updated, and you should persist it locally.

## Declaration

```swift
struct StateUpdate
```

<a id="overview"></a>

## Overview

In order to function properly and efficiently, [CKSyncEngine](../../cksyncengine-5sie5.md) tracks some state internally. When the sync engine state changes, it gives you the latest serialized version in a [CKSyncEngine.Event.StateUpdate](stateupdate.md) event. This event happens occasionally when the sync engine modifies the state internally during normal sync operation. This event also happens when you change the state yourself.

The sync engine does not persist this state to disk, so you need to persist it alongside your own local data. The next time your process launches, use this latest state serialization in [stateSerialization](../configuration/stateserialization.md) to initialize your sync engine.

This state is directly tied to the changes you fetch and send with the sync engine. You should persist this state alongside any changes fetched prior to receiving this state.

## Topics

### Accessing the state

- [stateSerialization](stateupdate/stateserialization.md): The current state of the sync engine.

### Debugging the event

- [description](stateupdate/description.md): A textual description of the event that’s suitable for logging.

### Default Implementations

- [CustomStringConvertible Implementations](stateupdate/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### State updates

- [CKSyncEngine.Event.stateUpdate(\_:)](stateupdate%28__%29.md): The sync engine updated its state.
