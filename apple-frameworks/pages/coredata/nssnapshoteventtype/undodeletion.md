> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssnapshoteventtype/undodeletion](https://developer.apple.com/documentation/coredata/nssnapshoteventtype/undodeletion)

# undoDeletion (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to undo from deletion.

## Declaration

```swift
static var undoDeletion: NSSnapshotEventType { get }
```

## See Also

### Event Types

- [undoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [undoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [rollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [refresh](refresh.md): Specifies a change due to the managed object being refreshed.
- [mergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.

# NSSnapshotEventUndoDeletion (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to undo from deletion.

## Declaration

```objectivec
NSSnapshotEventUndoDeletion
```

## See Also

### Event Types

- [NSSnapshotEventUndoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [NSSnapshotEventUndoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [NSSnapshotEventRollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [NSSnapshotEventRefresh](refresh.md): Specifies a change due to the managed object being refreshed.
- [NSSnapshotEventMergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.
