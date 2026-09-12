> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychange](https://developer.apple.com/documentation/coredata/nspersistenthistorychange)

# NSPersistentHistoryChange (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A change representing the insertion, update, or deletion of a managed object in the persistent store.

## Declaration

```swift
class NSPersistentHistoryChange
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Inspecting Change Metadata

- [fetchRequest](nspersistenthistorychange/fetchrequest.md): A fetch request that has the persistent history change as the entity.
- [entityDescription](nspersistenthistorychange/entitydescription.md): The entity description of the persistent history change entity.
- [entityDescription(with:)](nspersistenthistorychange/entitydescription%28with_%29.md): Requests an entity description for the managed object type affected by the change using the provided context.

### Inspecting Change Details

- [changeID](nspersistenthistorychange/changeid.md): The change’s numeric identifier.
- [changeType](nspersistenthistorychange/changetype.md): The type of change to the managed object in the persistent store.
- [NSPersistentHistoryChangeType](nspersistenthistorychangetype.md): The types of changes to managed objects reflected in persistent history.
- [changedObjectID](nspersistenthistorychange/changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](nspersistenthistorychange/tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](nspersistenthistorychange/transaction.md): The persistent history transaction containing this change.
- [updatedProperties](nspersistenthistorychange/updatedproperties.md): The set of properties that were updated on the managed object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Reading History

- [NSPersistentHistoryTransaction](nspersistenthistorytransaction.md): A set of changes in the persistent history based on a context save or batch operation.

# NSPersistentHistoryChange (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A change representing the insertion, update, or deletion of a managed object in the persistent store.

## Declaration

```objectivec
@interface NSPersistentHistoryChange : NSObject
```

## Mentioned In

- [Consuming relevant store changes](consuming-relevant-store-changes.md)

## Topics

### Inspecting Change Metadata

- [fetchRequest](nspersistenthistorychange/fetchrequest.md): A fetch request that has the persistent history change as the entity.
- [entityDescription](nspersistenthistorychange/entitydescription.md): The entity description of the persistent history change entity.
- [entityDescriptionWithContext:](nspersistenthistorychange/entitydescription%28with_%29.md): Requests an entity description for the managed object type affected by the change using the provided context.

### Inspecting Change Details

- [changeID](nspersistenthistorychange/changeid.md): The change’s numeric identifier.
- [changeType](nspersistenthistorychange/changetype.md): The type of change to the managed object in the persistent store.
- [NSPersistentHistoryChangeType](nspersistenthistorychangetype.md): The types of changes to managed objects reflected in persistent history.
- [changedObjectID](nspersistenthistorychange/changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](nspersistenthistorychange/tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](nspersistenthistorychange/transaction.md): The persistent history transaction containing this change.
- [updatedProperties](nspersistenthistorychange/updatedproperties.md): The set of properties that were updated on the managed object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Reading History

- [NSPersistentHistoryTransaction](nspersistenthistorytransaction.md): A set of changes in the persistent history based on a context save or batch operation.
