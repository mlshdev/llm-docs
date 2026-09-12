> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssnapshoteventtype/undoupdate](https://developer.apple.com/documentation/coredata/nssnapshoteventtype/undoupdate)

# undoUpdate (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to a property-level undo.

## Declaration

```swift
static var undoUpdate: NSSnapshotEventType { get }
```

## See Also

### Event Types

- [undoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [undoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [rollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [refresh](refresh.md): Specifies a change due to the managed object being refreshed.
- [mergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.

# NSSnapshotEventUndoUpdate (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to a property-level undo.

## Declaration

```objectivec
NSSnapshotEventUndoUpdate
```

## See Also

### Event Types

- [NSSnapshotEventUndoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [NSSnapshotEventUndoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [NSSnapshotEventRollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [NSSnapshotEventRefresh](refresh.md): Specifies a change due to the managed object being refreshed.
- [NSSnapshotEventMergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.
