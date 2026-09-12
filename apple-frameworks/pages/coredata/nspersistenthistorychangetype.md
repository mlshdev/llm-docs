> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychangetype](https://developer.apple.com/documentation/coredata/nspersistenthistorychangetype)

# NSPersistentHistoryChangeType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The types of changes to managed objects reflected in persistent history.

## Declaration

```swift
enum NSPersistentHistoryChangeType
```

## Topics

### Change Types

- [NSPersistentHistoryChangeType.delete](nspersistenthistorychangetype/delete.md): The deletion of a managed object from the persistent store.
- [NSPersistentHistoryChangeType.insert](nspersistenthistorychangetype/insert.md): The insertion of a managed object into the persistent store.
- [NSPersistentHistoryChangeType.update](nspersistenthistorychangetype/update.md): An update to a managed object’s properties in the persistent store.

### Initializers

- [init(rawValue:)](nspersistenthistorychangetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting Change Details

- [changeID](nspersistenthistorychange/changeid.md): The change’s numeric identifier.
- [changeType](nspersistenthistorychange/changetype.md): The type of change to the managed object in the persistent store.
- [changedObjectID](nspersistenthistorychange/changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](nspersistenthistorychange/tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](nspersistenthistorychange/transaction.md): The persistent history transaction containing this change.
- [updatedProperties](nspersistenthistorychange/updatedproperties.md): The set of properties that were updated on the managed object.

# NSPersistentHistoryChangeType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The types of changes to managed objects reflected in persistent history.

## Declaration

```objectivec
enum NSPersistentHistoryChangeType : NSInteger;
```

## Topics

### Change Types

- [NSPersistentHistoryChangeTypeDelete](nspersistenthistorychangetype/delete.md): The deletion of a managed object from the persistent store.
- [NSPersistentHistoryChangeTypeInsert](nspersistenthistorychangetype/insert.md): The insertion of a managed object into the persistent store.
- [NSPersistentHistoryChangeTypeUpdate](nspersistenthistorychangetype/update.md): An update to a managed object’s properties in the persistent store.

## See Also

### Inspecting Change Details

- [changeID](nspersistenthistorychange/changeid.md): The change’s numeric identifier.
- [changeType](nspersistenthistorychange/changetype.md): The type of change to the managed object in the persistent store.
- [changedObjectID](nspersistenthistorychange/changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](nspersistenthistorychange/tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](nspersistenthistorychange/transaction.md): The persistent history transaction containing this change.
- [updatedProperties](nspersistenthistorychange/updatedproperties.md): The set of properties that were updated on the managed object.
