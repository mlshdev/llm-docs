> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharetransferrepresentation](https://developer.apple.com/documentation/cloudkit/cksharetransferrepresentation)

# CKShareTransferRepresentation

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

A transfer representation the system uses to share an item.

## Declaration

```swift
struct CKShareTransferRepresentation<Item> where Item : Transferable
```

## Topics

### Creating a transfer representation

- [init(exporter:)](cksharetransferrepresentation/init%28exporter_%29.md): Creates and initializes a transfer representation.

### Accessing transfer representation attributes

- [body](cksharetransferrepresentation/body.md): The transfer representation for the share item.
- [CKShareTransferRepresentation.ExportedShare](cksharetransferrepresentation/exportedshare.md): An intermediate structure that returns an existing share or prepares a new one if it doesn’t exist.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TransferRepresentation](../coretransferable/transferrepresentation.md)

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKShare](ckshare.md): A specialized record type that manages a collection of shared records.
- [CKAllowedSharingOptions](ckallowedsharingoptions.md): An object that controls participant access and permission options.
- [CKSystemSharingUIObserver](cksystemsharinguiobserver.md): An object the system uses to monitor changes in sharing.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.
