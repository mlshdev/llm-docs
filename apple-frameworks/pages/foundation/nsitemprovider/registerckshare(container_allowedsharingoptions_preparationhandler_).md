> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerckshare(container:allowedsharingoptions:preparationhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registerckshare(container:allowedsharingoptions:preparationhandler:))

# registerCKShare(container:allowedSharingOptions:preparationHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and registers a new collaboration object using a collection of records to share.

## Declaration

```swift
func registerCKShare(container: CKContainer, allowedSharingOptions: CKAllowedSharingOptions = CKAllowedSharingOptions.standard, preparationHandler: @escaping @Sendable () async throws -> CKShare)
```

## Parameters

- `container`: A [CKContainer](../../cloudkit/ckcontainer.md) the system uses to coordinate all the interactions between your app and the server.
- `allowedSharingOptions`: The [CKAllowedSharingOptions](../../cloudkit/ckallowedsharingoptions.md). The standard option is the default.
- `preparationHandler`: The handler the system calls in your app to create a new [CKShare](../../cloudkit/ckshare.md).

<a id="Discussion"></a>

## Discussion

Use this method to share a collection of [CKRecord](../../cloudkit/ckrecord.md) objects that don’t have an existing [CKShare](../../cloudkit/ckshare.md) assignment. When the system calls the `preparationHandler`, your app creates a new `CKShare` with the appropriate root `CKRecord` or [CKRecordZone.ID](../../cloudkit/ckrecordzone/id.md).

After the server successfully saves the share, invoke the [CKSharePreparationCompletionHandler](../../cloudkit/cksharepreparationcompletionhandler.md) with either the resulting `CKShare`, or an `NSError` if the save fails.

When the system invokes the share sheet with a `CKShare` that you register with this method, it prompts the user to start sharing.

## See Also

### Registering CloudKit shares

- [registerCloudKitShare(\_:container:)](registercloudkitshare%28__container_%29.md): Registers a CloudKit share for the user to modify.
- [registerCloudKitShare(preparationHandler:)](registercloudkitshare%28preparationhandler_%29.md): Registers a handler that prepares a new CloudKit share.
- [registerCKShare(\_:container:allowedSharingOptions:)](registerckshare%28__container_allowedsharingoptions_%29.md): Registers an existing collaboration object on a server.
