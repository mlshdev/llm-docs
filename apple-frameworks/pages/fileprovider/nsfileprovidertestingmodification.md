> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingmodification](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingmodification)

# NSFileProviderTestingModification (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

An operation that syncs the modification of the source item to the target location.

## Declaration

```swift
protocol NSFileProviderTestingModification : NSFileProviderTestingOperation
```

## Topics

### Accessing the Operation’s Data

- [sourceItem](nsfileprovidertestingmodification/sourceitem.md): A description of the source item.
- [changedFields](nsfileprovidertestingmodification/changedfields.md): A list of the fields that changed.
- [targetSide](nsfileprovidertestingmodification/targetside.md): The target location for the modification operation.
- [targetItemIdentifier](nsfileprovidertestingmodification/targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](nsfileprovidertestingmodification/targetitembaseversion.md): The version of the changed item.
- [domainVersion](nsfileprovidertestingmodification/domainversion.md): The domain’s version when the change occurred.

## Relationships

### Inherits From

- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.

# NSFileProviderTestingModification (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

An operation that syncs the modification of the source item to the target location.

## Declaration

```objectivec
@protocol NSFileProviderTestingModification <NSFileProviderTestingOperation>
```

## Topics

### Accessing the Operation’s Data

- [sourceItem](nsfileprovidertestingmodification/sourceitem.md): A description of the source item.
- [changedFields](nsfileprovidertestingmodification/changedfields.md): A list of the fields that changed.
- [targetSide](nsfileprovidertestingmodification/targetside.md): The target location for the modification operation.
- [targetItemIdentifier](nsfileprovidertestingmodification/targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](nsfileprovidertestingmodification/targetitembaseversion.md): The version of the changed item.
- [domainVersion](nsfileprovidertestingmodification/domainversion.md): The domain’s version when the change occurred.

## Relationships

### Inherits From

- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md)

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md): An operation that resolves a collision by renaming the new item.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.
