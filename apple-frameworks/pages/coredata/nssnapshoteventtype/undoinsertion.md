> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssnapshoteventtype/undoinsertion](https://developer.apple.com/documentation/coredata/nssnapshoteventtype/undoinsertion)

# undoInsertion (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to undo from insertion.

## Declaration

```swift
static var undoInsertion: NSSnapshotEventType { get }
```

## See Also

### Event Types

- [undoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [undoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [rollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [refresh](refresh.md): Specifies a change due to the managed object being refreshed.
- [mergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.

# NSSnapshotEventUndoInsertion (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to undo from insertion.

## Declaration

```objectivec
NSSnapshotEventUndoInsertion
```

## See Also

### Event Types

- [NSSnapshotEventUndoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [NSSnapshotEventUndoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [NSSnapshotEventRollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [NSSnapshotEventRefresh](refresh.md): Specifies a change due to the managed object being refreshed.
- [NSSnapshotEventMergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.
