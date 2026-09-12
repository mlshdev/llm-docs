> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registercksharewithcontainer:allowedsharingoptions:preparationhandler:](https://developer.apple.com/documentation/foundation/nsitemprovider/registercksharewithcontainer:allowedsharingoptions:preparationhandler:)

# registerCKShareWithContainer:allowedSharingOptions:preparationHandler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and registers a new collaboration object using a collection of records to share.

## Declaration

```objectivec
- (void) registerCKShareWithContainer:(CKContainer *) container allowedSharingOptions:(CKAllowedSharingOptions *) allowedOptions preparationHandler:(CKSharePreparationHandler) preparationHandler;
```

## Parameters

- `container`: A [CKContainer](../../cloudkit/ckcontainer.md) the system uses to coordinate all the interactions between your app and the server.
- `allowedOptions`: The [CKAllowedSharingOptions](../../cloudkit/ckallowedsharingoptions.md). The standard option is the default.
- `preparationHandler`: The handler the system calls in your app to create a new [CKShare](../../cloudkit/ckshare.md).

<a id="Discussion"></a>

## Discussion

Use this method to share a collection of [CKRecord](../../cloudkit/ckrecord.md) objects that aren’t assigned to an existing [CKShare](../../cloudkit/ckshare.md). When the system calls the `preparationHandler`, your app creates a new `CKShare` with the appropriate root `CKRecord` or [CKRecordZoneID](../../cloudkit/ckrecordzone/id.md).

After the server successfully saves the share, invoke the [CKSharePreparationCompletionHandler](../../cloudkit/cksharepreparationcompletionhandler.md) with either the resulting `CKShare` or an `NSError,` if the save failed.

When the system invokes the share sheet with a `CKShare` registered with this method, it prompts the user to start sharing.

## See Also

### Registering CloudKit shares

- [registerCloudKitShare:container:](registercloudkitshare%28__container_%29.md): Registers a CloudKit share for the user to modify.
- [registerCloudKitShareWithPreparationHandler:](registercloudkitshare%28preparationhandler_%29.md): Registers a handler that prepares a new CloudKit share.
- [registerCKShare:container:allowedSharingOptions:](registerckshare_container_allowedsharingoptions_.md): Registers an existing collaboration object on a server.
