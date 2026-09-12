> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/undomanager/didredochangemessage](https://developer.apple.com/documentation/foundation/undomanager/didredochangemessage)

# UndoManager.DidRedoChangeMessage

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A message that an undo manager sends after redoing a change.

## Declaration

```swift
struct DidRedoChangeMessage
```

<a id="overview"></a>

## Overview

The undo manager posts this message after you call [redo()](redo%28%29.md). Because this is a “did”-style message, the undo manager sends the message after it performs the redo.

Observe this message type with the identifier [didRedoChange](../notificationcenter/messageidentifier/didredochange.md), or specify its type directly to the `addObserver(of:for:using:)` method. The [Subject](../notificationcenter/mainactormessage/subject.md) of this message type is [UndoManager](../undomanager.md).

This message interoperates with the notification [NSUndoManagerDidRedoChange](../nsnotification/name-swift.struct/nsundomanagerdidredochange.md). The system notifies observers of the message when the [NotificationCenter](../notificationcenter.md) posts the notification. Similarly, the system notifies observers of the notification when it posts the message.

## Topics

### Initializers

- [init(groupIsDiscardable:)](didredochangemessage/init%28groupisdiscardable_%29.md): Creates a did undo change message.

### Instance Properties

- [groupIsDiscardable](didredochangemessage/groupisdiscardable.md): A Boolean value that indicates whether the undo group is discardable.

## Relationships

### Conforms To

- [NotificationCenter.MainActorMessage](../notificationcenter/mainactormessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with notification messages

- [UndoManager.WillUndoChangeMessage](willundochangemessage.md): A message that an undo manager sends before undoing a change.
- [UndoManager.DidUndoChangeMessage](didundochangemessage.md): A message that an undo manager sends after undoing a change.
- [UndoManager.WillRedoChangeMessage](willredochangemessage.md): A message that an undo manager sends before redoing a change.
- [UndoManager.CheckpointMessage](checkpointmessage.md): A message that an undo manager sends at certain checkpoints.
- [UndoManager.DidOpenUndoGroupMessage](didopenundogroupmessage.md): A message that an undo manager sends after opening an undo group.
- [UndoManager.WillCloseUndoGroupMessage](willcloseundogroupmessage.md): A message that an undo manager sends before closing an undo group.
- [UndoManager.DidCloseUndoGroupMessage](didcloseundogroupmessage.md): A message that an undo manager sends after closing an undo group.
