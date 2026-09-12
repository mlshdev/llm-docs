> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatialpreview/usdpreviewsession/updateundoredocounts(undo:redo:)](https://developer.apple.com/documentation/spatialpreview/usdpreviewsession/updateundoredocounts(undo:redo:))

# updateUndoRedoCounts(undo:redo:)

**Framework:** SpatialPreview  
**Kind:** Instance Method  
**Availability:** macOS 27.0+ · visionOS

Update the count of undoable and redoable actions in the USDPreviewSession which is reflected in the UI on visionOS.

## Declaration

```swift
final nonisolated(nonsending) func updateUndoRedoCounts(undo: UInt, redo: UInt) async throws
```
