> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychange/changetype](https://developer.apple.com/documentation/coredata/nspersistenthistorychange/changetype)

# changeType (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type of change to the managed object in the persistent store.

## Declaration

```swift
var changeType: NSPersistentHistoryChangeType { get }
```

## See Also

### Inspecting Change Details

- [changeID](changeid.md): The change’s numeric identifier.
- [NSPersistentHistoryChangeType](../nspersistenthistorychangetype.md): The types of changes to managed objects reflected in persistent history.
- [changedObjectID](changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](transaction.md): The persistent history transaction containing this change.
- [updatedProperties](updatedproperties.md): The set of properties that were updated on the managed object.

# changeType (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The type of change to the managed object in the persistent store.

## Declaration

```objectivec
@property (readonly) NSPersistentHistoryChangeType changeType;
```

## See Also

### Inspecting Change Details

- [changeID](changeid.md): The change’s numeric identifier.
- [NSPersistentHistoryChangeType](../nspersistenthistorychangetype.md): The types of changes to managed objects reflected in persistent history.
- [changedObjectID](changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](transaction.md): The persistent history transaction containing this change.
- [updatedProperties](updatedproperties.md): The set of properties that were updated on the managed object.
