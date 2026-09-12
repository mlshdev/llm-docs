> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/changelistdelegate](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/changelistdelegate)

# USDPreviewSession.ChangeListDelegate

**Framework:** SpatialPreview  
**Kind:** Protocol  
**Availability:** macOS 27.0+ · visionOS

A protocol to provide shared undo/redo tracking in a USDPreviewSession.

## Declaration

```swift
@MainActor protocol ChangeListDelegate : AnyObject
```

## Topics

### Instance Methods

- [didApplyChanges(instanceIdentifier:operationIdentifier:)](changelistdelegate/didapplychanges%28instanceidentifier_operationidentifier_%29.md): An event emitted to the ChangelistDelegate indicating the end of a USD change.
- [onRedoRequest()](changelistdelegate/onredorequest%28%29.md): An redo has been requested in the session
- [onUndoRequest()](changelistdelegate/onundorequest%28%29.md): An undo has been requested in the session
- [willApplyChanges(instanceIdentifier:operationIdentifier:)](changelistdelegate/willapplychanges%28instanceidentifier_operationidentifier_%29.md): An event emitted to the ChangeListDelegate indicating the start of a USD change.
