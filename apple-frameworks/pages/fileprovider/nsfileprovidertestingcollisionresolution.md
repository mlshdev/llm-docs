> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingcollisionresolution](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingcollisionresolution)

# NSFileProviderTestingCollisionResolution (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

An operation that resolves a collision by renaming the new item.

## Declaration

```swift
protocol NSFileProviderTestingCollisionResolution : NSFileProviderTestingOperation
```

## Topics

### Accessing the Operation’s Data

- [renamedItem](nsfileprovidertestingcollisionresolution/renameditem.md): A description of the renamed item.
- [side](nsfileprovidertestingcollisionresolution/side.md): The item’s location.

## Relationships

### Inherits From

- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.

# NSFileProviderTestingCollisionResolution (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

An operation that resolves a collision by renaming the new item.

## Declaration

```objectivec
@protocol NSFileProviderTestingCollisionResolution <NSFileProviderTestingOperation>
```

## Topics

### Accessing the Operation’s Data

- [renamedItem](nsfileprovidertestingcollisionresolution/renameditem.md): A description of the renamed item.
- [side](nsfileprovidertestingcollisionresolution/side.md): The item’s location.

## Relationships

### Inherits From

- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md)

## See Also

### Testing protocols

- [NSFileProviderTestingChildrenEnumeration](nsfileprovidertestingchildrenenumeration.md): An operation that lists a directory’s content.
- [NSFileProviderTestingContentFetch](nsfileprovidertestingcontentfetch.md): An operation that fetches an item’s content.
- [NSFileProviderTestingCreation](nsfileprovidertestingcreation.md): An operation that syncs the creation of the source item to the target location.
- [NSFileProviderTestingDeletion](nsfileprovidertestingdeletion.md): An operation that syncs the deletion of the source item to the target location.
- [NSFileProviderTestingIngestion](nsfileprovidertestingingestion.md): An operation that alerts the system to either local or remote storage changes.
- [NSFileProviderTestingLookup](nsfileprovidertestinglookup.md): An operation that looks up an item.
- [NSFileProviderTestingModification](nsfileprovidertestingmodification.md): An operation that syncs the modification of the source item to the target location.
- [NSFileProviderTestingOperation](nsfileprovidertestingoperation.md): An operation that the system can schedule.
- [NSFileProviderUserInteractionSuppressing](nsfileprovideruserinteractionsuppressing.md): Support for suppressing user-interaction alerts.
- [NSFileProviderTestingOperationSide](nsfileprovidertestingoperationside.md): The location where the operation takes place.
- [NSFileProviderTestingOperationType](nsfileprovidertestingoperationtype.md): The action that an operation performs.
- [com.apple.developer.fileprovider.testing-mode](../bundleresources/entitlements/com.apple.developer.fileprovider.testing-mode.md): A Boolean value that indicates whether you can place domains in testing mode.
