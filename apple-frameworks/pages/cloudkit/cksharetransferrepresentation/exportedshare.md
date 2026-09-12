> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharetransferrepresentation/exportedshare](https://developer.apple.com/documentation/cloudkit/cksharetransferrepresentation/exportedshare)

# CKShareTransferRepresentation.ExportedShare

**Framework:** CloudKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

An intermediate structure that returns an existing share or prepares a new one if it doesn’t exist.

## Declaration

```swift
struct ExportedShare
```

## Topics

### Accessing share attributes

- [transferRepresentation](exportedshare/transferrepresentation.md): The representation the system uses to import and export the item.

### Preparing an exported share

- [existing(\_:container:allowedSharingOptions:)](exportedshare/existing%28__container_allowedsharingoptions_%29.md): Allows the user to view or make modifications to the share settings.
- [prepareShare(container:allowedSharingOptions:preparationHandler:)](exportedshare/prepareshare%28container_allowedsharingoptions_preparationhandler_%29.md): Creates a share when the system calls the specified handler.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../../coretransferable/transferable.md)

## See Also

### Accessing transfer representation attributes

- [body](body.md): The transfer representation for the share item.
