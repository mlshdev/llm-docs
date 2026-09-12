> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssnapshoteventtype/refresh](https://developer.apple.com/documentation/coredata/nssnapshoteventtype/refresh)

# refresh (Swift)

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to the managed object being refreshed.

## Declaration

```swift
static var refresh: NSSnapshotEventType { get }
```

## See Also

### Event Types

- [undoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [undoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [undoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [rollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [mergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.

# NSSnapshotEventRefresh (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies a change due to the managed object being refreshed.

## Declaration

```objectivec
NSSnapshotEventRefresh
```

## See Also

### Event Types

- [NSSnapshotEventUndoInsertion](undoinsertion.md): Specifies a change due to undo from insertion.
- [NSSnapshotEventUndoDeletion](undodeletion.md): Specifies a change due to undo from deletion.
- [NSSnapshotEventUndoUpdate](undoupdate.md): Specifies a change due to a property-level undo.
- [NSSnapshotEventRollback](rollback.md): Specifies a change due to the managed object context being rolled back.
- [NSSnapshotEventMergePolicy](mergepolicy.md): Specifies a change due to conflict resolution during a save operation.
