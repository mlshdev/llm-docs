> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/checkpoint](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/checkpoint)

# checkpoint

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about an undo manager reaching a checkpoint.

## Declaration

```swift
static var checkpoint: NotificationCenter.BaseMessageIdentifier<UndoManager.CheckpointMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [UndoManager.CheckpointMessage](../../undomanager/checkpointmessage.md).

## See Also

### Identifying undo manager messages

- [willUndoChange](willundochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.WillUndoChangeMessage>`. An identifier for a message about an undo manager preparing to perform an undo.
- [didUndoChange](didundochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidUndoChangeMessage>`. An identifier for a message about an undo manager having performed an undo.
- [willRedoChange](willredochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.WillRedoChangeMessage>`. An identifier for a message about an undo manager preparing to perform a redo.
- [didRedoChange](didredochange.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidRedoChangeMessage>`. An identifier for a message about an undo manager having performed a redo.
- [didOpenUndoGroup](didopenundogroup.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidOpenUndoGroupMessage>`. An identifier for a message about an undo manager having opened an undo group.
- [willCloseUndoGroup](willcloseundogroup.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.WillCloseUndoGroupMessage>`. An identifier for a message about an undo manager preparing to close an undo group.
- [didCloseUndoGroup](didcloseundogroup.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UndoManager.DidCloseUndoGroupMessage>`. An identifier for a message about an undo manager having closed an undo group.
