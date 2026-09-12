> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registercloudkitshare(_:container:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registercloudkitshare(_:container:))

# registerCloudKitShare(\_:container:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Registers a CloudKit share for the user to modify.

## Declaration

```swift
func registerCloudKitShare(_ share: CKShare, container: CKContainer)
```

## Parameters

- `share`: The CloudKit share to modify.
- `container`: The CloudKit container that stores the shared records.

<a id="Discussion"></a>

## Discussion

Use this method when the CloudKit share already exists on the server and you want to update it. The behavior of the sharing service depends on the role of the current user. An owner can edit the share’s configuration, which includes managing participants and their permissions. A participant can view the share’s configuration and choose to stop participating.

If you’re unsure which container to use, fetch the share’s metadata using [CKFetchShareMetadataOperation](../../cloudkit/ckfetchsharemetadataoperation.md). Then initialize an instance of [CKContainer](../../cloudkit/ckcontainer.md) using the metadata’s [containerIdentifier](../../cloudkit/ckshare/metadata/containeridentifier.md) property.

Use the [NSCloudSharingServiceDelegate](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate) protocol to respond to any changes the sharing service makes.

> **Note**

>  To create a new share, use the [registerCloudKitShare(preparationHandler:)](registercloudkitshare%28preparationhandler_%29.md) method instead.

The following example shows how to create an item provider with an existing share. It then invokes the cloud-sharing service with the provider and presents the share’s configuration to the user.

```swift
func modifyShare(_ share: CKShare, in container: CKContainer) {

    // Create an item provider and register a share that
    // already exists on the server.
    let itemProvider = NSItemProvider()
    itemProvider.registerCloudKitShare(share, container: container)
        
    // Create and invoke the cloud-sharing service to
    // present the share configuration to the user.
    if let service = NSSharingService(named: .cloudSharing),
       service.canPerform(withItems: [itemProvider]) {
        service.perform(withItems: [itemProvider])
    }
}
```

## See Also

### Registering CloudKit shares

- [registerCloudKitShare(preparationHandler:)](registercloudkitshare%28preparationhandler_%29.md): Registers a handler that prepares a new CloudKit share.
- [registerCKShare(\_:container:allowedSharingOptions:)](registerckshare%28__container_allowedsharingoptions_%29.md): Registers an existing collaboration object on a server.
- [registerCKShare(container:allowedSharingOptions:preparationHandler:)](registerckshare%28container_allowedsharingoptions_preparationhandler_%29.md): Creates and registers a new collaboration object using a collection of records to share.

# registerCloudKitShare:container: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Registers a CloudKit share for the user to modify.

## Declaration

```objectivec
- (void) registerCloudKitShare:(CKShare *) share container:(CKContainer *) container;
```

## Parameters

- `share`: The CloudKit share to modify.
- `container`: The CloudKit container that stores the shared records.

<a id="Discussion"></a>

## Discussion

Use this method when the CloudKit share already exists on the server and you want to update it. The behavior of the sharing service depends on the role of the current user. An owner can edit the share’s configuration, which includes managing participants and their permissions. A participant can view the share’s configuration and choose to stop participating.

If you’re unsure which container to use, fetch the share’s metadata using [CKFetchShareMetadataOperation](../../cloudkit/ckfetchsharemetadataoperation.md). Then initialize an instance of [CKContainer](../../cloudkit/ckcontainer.md) using the metadata’s [containerIdentifier](../../cloudkit/ckshare/metadata/containeridentifier.md) property.

Use the [NSCloudSharingServiceDelegate](https://developer.apple.com/documentation/appkit/nscloudsharingservicedelegate) protocol to respond to any changes the sharing service makes.

> **Note**

>  To create a new share, use the [registerCloudKitShareWithPreparationHandler:](registercloudkitshare%28preparationhandler_%29.md) method instead.

The following example shows how to create an item provider with an existing share. It then invokes the cloud-sharing service with the provider and presents the share’s configuration to the user.

```swift
func modifyShare(_ share: CKShare, in container: CKContainer) {

    // Create an item provider and register a share that
    // already exists on the server.
    let itemProvider = NSItemProvider()
    itemProvider.registerCloudKitShare(share, container: container)
        
    // Create and invoke the cloud-sharing service to
    // present the share configuration to the user.
    if let service = NSSharingService(named: .cloudSharing),
       service.canPerform(withItems: [itemProvider]) {
        service.perform(withItems: [itemProvider])
    }
}
```

## See Also

### Registering CloudKit shares

- [registerCloudKitShareWithPreparationHandler:](registercloudkitshare%28preparationhandler_%29.md): Registers a handler that prepares a new CloudKit share.
- [registerCKShare:container:allowedSharingOptions:](registerckshare_container_allowedsharingoptions_.md): Registers an existing collaboration object on a server.
- [registerCKShareWithContainer:allowedSharingOptions:preparationHandler:](registercksharewithcontainer_allowedsharingoptions_preparationhandler_.md): Creates and registers a new collaboration object using a collection of records to share.
