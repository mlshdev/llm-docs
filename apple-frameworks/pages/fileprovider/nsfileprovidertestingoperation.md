> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingoperation](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingoperation)

# NSFileProviderTestingOperation (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

An operation that the system can schedule.

## Declaration

```swift
protocol NSFileProviderTestingOperation : NSObjectProtocol
```

## Topics

### Access the Operation Type

- [type](nsfileprovidertestingoperation/type.md): The operation’s type.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md)
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md)
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md)
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md)
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md)
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md)
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md)
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md)

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
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.

# NSFileProviderTestingOperation (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

An operation that the system can schedule.

## Declaration

```objectivec
@protocol NSFileProviderTestingOperation <NSObject>
```

## Topics

### Access the Operation Type

- [type](nsfileprovidertestingoperation/type.md): The operation’s type.
- [asChildrenEnumeration](nsfileprovidertestingoperation/aschildrenenumeration.md): Returns the operation if it enumerates contained items.
- [asCollisionResolution](nsfileprovidertestingoperation/ascollisionresolution.md): Returns the operation if it resolves a collision by renaming the new item.
- [asContentFetch](nsfileprovidertestingoperation/ascontentfetch.md): Returns the operation if it fetches an item’s content.
- [asCreation](nsfileprovidertestingoperation/ascreation.md): Returns the operation if it propagates the creation of an item.
- [asDeletion](nsfileprovidertestingoperation/asdeletion.md): Returns the operation if it propagates the deletion of an item.
- [asIngestion](nsfileprovidertestingoperation/asingestion.md): Returns the operation if it alerts the system to changes.
- [asLookup](nsfileprovidertestingoperation/aslookup.md): Returns the operation if it looks up an item.
- [asModification](nsfileprovidertestingoperation/asmodification.md): Returns the operation if it propagates a change.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md)
- [NSFileProviderTestingCollisionResolution](nsfileprovidertestingcollisionresolution.md)
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md)
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md)
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md)
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md)
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md)
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md)

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
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.
