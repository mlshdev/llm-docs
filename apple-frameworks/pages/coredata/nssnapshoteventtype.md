> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nssnapshoteventtype](https://developer.apple.com/documentation/coredata/nssnapshoteventtype)

# NSSnapshotEventType (Swift)

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the reason the managed object may need to reinitialize its values.

## Declaration

```swift
struct NSSnapshotEventType
```

## Topics

### Event Types

- [undoInsertion](nssnapshoteventtype/undoinsertion.md): Specifies a change due to undo from insertion.
- [undoDeletion](nssnapshoteventtype/undodeletion.md): Specifies a change due to undo from deletion.
- [undoUpdate](nssnapshoteventtype/undoupdate.md): Specifies a change due to a property-level undo.
- [rollback](nssnapshoteventtype/rollback.md): Specifies a change due to the managed object context being rolled back.
- [refresh](nssnapshoteventtype/refresh.md): Specifies a change due to the managed object being refreshed.
- [mergePolicy](nssnapshoteventtype/mergepolicy.md): Specifies a change due to conflict resolution during a save operation.

### Initializers

- [init(rawValue:)](nssnapshoteventtype/init%28rawvalue_%29.md): Creates a snapshot event using a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# NSSnapshotEventType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the reason the managed object may need to reinitialize its values.

## Declaration

```objectivec
enum NSSnapshotEventType : NSUInteger;
```

## Topics

### Event Types

- [NSSnapshotEventUndoInsertion](nssnapshoteventtype/undoinsertion.md): Specifies a change due to undo from insertion.
- [NSSnapshotEventUndoDeletion](nssnapshoteventtype/undodeletion.md): Specifies a change due to undo from deletion.
- [NSSnapshotEventUndoUpdate](nssnapshoteventtype/undoupdate.md): Specifies a change due to a property-level undo.
- [NSSnapshotEventRollback](nssnapshoteventtype/rollback.md): Specifies a change due to the managed object context being rolled back.
- [NSSnapshotEventRefresh](nssnapshoteventtype/refresh.md): Specifies a change due to the managed object being refreshed.
- [NSSnapshotEventMergePolicy](nssnapshoteventtype/mergepolicy.md): Specifies a change due to conflict resolution during a save operation.
