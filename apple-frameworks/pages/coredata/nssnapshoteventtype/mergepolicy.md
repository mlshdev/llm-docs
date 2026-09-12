> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssnapshoteventtype/mergepolicy](https://developer.apple.com/documentation/coredata/nssnapshoteventtype/mergepolicy)

# mergePolicy (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to conflict resolution during a save operation.

## Declaration

```swift
static var mergePolicy: NSSnapshotEventType { get }
```

## See Also

### Event Types

- [undoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [undoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [undoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [rollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [refresh](refresh.md): Specifies a change due to the managed object being refreshed.

# NSSnapshotEventMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to conflict resolution during a save operation.

## Declaration

```objectivec
NSSnapshotEventMergePolicy
```

## See Also

### Event Types

- [NSSnapshotEventUndoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [NSSnapshotEventUndoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [NSSnapshotEventUndoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [NSSnapshotEventRollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [NSSnapshotEventRefresh](refresh.md): Specifies a change due to the managed object being refreshed.
