> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistenthistorychange/updatedproperties](https://developer.apple.com/documentation/coredata/nspersistenthistorychange/updatedproperties)

# updatedProperties (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The set of properties that were updated on the managed object.

## Declaration

```swift
var updatedProperties: Set<NSPropertyDescription>? { get }
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

This value is expected on changes of type [NSPersistentHistoryChangeType.update](../nspersistenthistorychangetype/update.md).

## See Also

### Inspecting Change Details

- [changeID](changeid.md): The change’s numeric identifier.
- [changeType](changetype.md): The type of change to the managed object in the persistent store.
- [NSPersistentHistoryChangeType](../nspersistenthistorychangetype.md): The types of changes to managed objects reflected in persistent history.
- [changedObjectID](changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](transaction.md): The persistent history transaction containing this change.

# updatedProperties (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The set of properties that were updated on the managed object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSSet<NSPropertyDescription *> * updatedProperties;
```

## Mentioned In

- [Consuming relevant store changes](../consuming-relevant-store-changes.md)

<a id="Discussion"></a>

## Discussion

This value is expected on changes of type [NSPersistentHistoryChangeTypeUpdate](../nspersistenthistorychangetype/update.md).

## See Also

### Inspecting Change Details

- [changeID](changeid.md): The change’s numeric identifier.
- [changeType](changetype.md): The type of change to the managed object in the persistent store.
- [NSPersistentHistoryChangeType](../nspersistenthistorychangetype.md): The types of changes to managed objects reflected in persistent history.
- [changedObjectID](changedobjectid.md): The identifier of the managed object that changed. (swift) Declaration: @property(readonly, copy) NSManagedObjectID \*changedObjectID; (objc) Availability: iOS: 11.0 — iPadOS: 11.0 — Mac Catalyst: 13.1 — macOS: 10.13 — tvOS: 11.0 — visionOS: 1.0 — watchOS: 4.0 (objc,swift) }
- [tombstone](tombstone.md): A dictionary of attributes marked for preservation after deletion, and their values when deleted.
- [transaction](transaction.md): The persistent history transaction containing this change.
