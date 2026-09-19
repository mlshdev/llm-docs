> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/changelistdelegate

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

### Responding to changes

- [willApplyChanges(instanceIdentifier:operationIdentifier:)](changelistdelegate/willapplychanges%28instanceidentifier_operationidentifier_%29.md): An event emitted to the ChangeListDelegate indicating the start of a USD change.
- [didApplyChanges(instanceIdentifier:operationIdentifier:)](changelistdelegate/didapplychanges%28instanceidentifier_operationidentifier_%29.md): An event emitted to the ChangelistDelegate indicating the end of a USD change.

### Handling undo and redo

- [onUndoRequest()](changelistdelegate/onundorequest%28%29.md): An undo has been requested in the session
- [onRedoRequest()](changelistdelegate/onredorequest%28%29.md): An redo has been requested in the session

### Deprecated

- [didApplyChanges(\_:)](changelistdelegate/didapplychanges%28__%29.md): Deprecated.
- [willApplyChanges(\_:)](changelistdelegate/willapplychanges%28__%29.md): Deprecated.
