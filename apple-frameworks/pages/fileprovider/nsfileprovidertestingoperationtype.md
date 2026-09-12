> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingoperationtype](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingoperationtype)

# NSFileProviderTestingOperationType (Swift)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The action that an operation performs.

## Declaration

```swift
enum NSFileProviderTestingOperationType
```

## Topics

### Types

- [NSFileProviderTestingOperationType.childrenEnumeration](nsfileprovidertestingoperationtype/childrenenumeration.md): Lists an item’s content.
- [NSFileProviderTestingOperationType.collisionResolution](nsfileprovidertestingoperationtype/collisionresolution.md): Resolves a collision by renaming the new item.
- [NSFileProviderTestingOperationType.contentFetch](nsfileprovidertestingoperationtype/contentfetch.md): Fetches an item’s content.
- [NSFileProviderTestingOperationType.creation](nsfileprovidertestingoperationtype/creation.md): Propagates the creation of a source item to the target location.
- [NSFileProviderTestingOperationType.deletion](nsfileprovidertestingoperationtype/deletion.md): Propagates the deletion of the source item from the target location.
- [NSFileProviderTestingOperationType.ingestion](nsfileprovidertestingoperationtype/ingestion.md): Alerts the system to changes to either the local or remote storage.
- [NSFileProviderTestingOperationType.lookup](nsfileprovidertestingoperationtype/lookup.md): Looks up an item.
- [NSFileProviderTestingOperationType.modification](nsfileprovidertestingoperationtype/modification.md): Propagates a change from the source item to the target location.

### Initializers

- [init(rawValue:)](nsfileprovidertestingoperationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.

# NSFileProviderTestingOperationType (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The action that an operation performs.

## Declaration

```objectivec
enum NSFileProviderTestingOperationType : NSInteger;
```

## Topics

### Types

- [NSFileProviderTestingOperationTypeChildrenEnumeration](nsfileprovidertestingoperationtype/childrenenumeration.md): Lists an item’s content.
- [NSFileProviderTestingOperationTypeCollisionResolution](nsfileprovidertestingoperationtype/collisionresolution.md): Resolves a collision by renaming the new item.
- [NSFileProviderTestingOperationTypeContentFetch](nsfileprovidertestingoperationtype/contentfetch.md): Fetches an item’s content.
- [NSFileProviderTestingOperationTypeCreation](nsfileprovidertestingoperationtype/creation.md): Propagates the creation of a source item to the target location.
- [NSFileProviderTestingOperationTypeDeletion](nsfileprovidertestingoperationtype/deletion.md): Propagates the deletion of the source item from the target location.
- [NSFileProviderTestingOperationTypeIngestion](nsfileprovidertestingoperationtype/ingestion.md): Alerts the system to changes to either the local or remote storage.
- [NSFileProviderTestingOperationTypeLookup](nsfileprovidertestingoperationtype/lookup.md): Looks up an item.
- [NSFileProviderTestingOperationTypeModification](nsfileprovidertestingoperationtype/modification.md): Propagates a change from the source item to the target location.

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.
