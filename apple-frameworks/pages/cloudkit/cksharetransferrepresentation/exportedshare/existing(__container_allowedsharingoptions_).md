> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksharetransferrepresentation/exportedshare/existing(_:container:allowedsharingoptions:)](https://developer.apple.com/documentation/cloudkit/cksharetransferrepresentation/exportedshare/existing(_:container:allowedsharingoptions:))

# existing(\_:container:allowedSharingOptions:)

**Framework:** CloudKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

Allows the user to view or make modifications to the share settings.

## Declaration

```swift
static func existing(_ share: CKShare, container: CKContainer, allowedSharingOptions: CKAllowedSharingOptions = CKAllowedSharingOptions.standard) -> CKShareTransferRepresentation<Item>.ExportedShare
```

## Parameters

- `share`: The existing [CKShare](../../ckshare.md) object.
- `container`: The [CKContainer](../../ckcontainer.md) for the share.
- `allowedSharingOptions`: The [CKAllowedSharingOptions](../../ckallowedsharingoptions.md). The [standard](../../ckallowedsharingoptions/standard.md) option is the default.

<a id="return-value"></a>

## Return Value

The [CKShareTransferRepresentation.ExportedShare](../exportedshare.md) with updated share settings.

<a id="discussion"></a>

## Discussion

Use this method when you have a [CKShare](../../ckshare.md) that’s already saved to the server.

When your app invokes the share sheet with a [CKShare](../../ckshare.md) registered with this method, the system allows the owner to make modifications to the share settings, or allows a participant to view the share settings.

## See Also

### Preparing an exported share

- [prepareShare(container:allowedSharingOptions:preparationHandler:)](prepareshare%28container_allowedsharingoptions_preparationhandler_%29.md): Creates a share when the system calls the specified handler.
