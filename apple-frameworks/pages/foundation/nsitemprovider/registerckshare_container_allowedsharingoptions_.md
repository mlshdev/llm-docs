> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerckshare:container:allowedsharingoptions:](https://developer.apple.com/documentation/foundation/nsitemprovider/registerckshare:container:allowedsharingoptions:)

# registerCKShare:container:allowedSharingOptions:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Registers an existing collaboration object on a server.

## Declaration

```objectivec
- (void) registerCKShare:(CKShare *) share container:(CKContainer *) container allowedSharingOptions:(CKAllowedSharingOptions *) allowedOptions;
```

## Parameters

- `share`: An existing [CKShare](../../cloudkit/ckshare.md) on the server.
- `container`: A [CKContainer](../../cloudkit/ckcontainer.md) the system uses to coordinate all the interactions between your app and the server.
- `allowedOptions`: The [CKAllowedSharingOptions](../../cloudkit/ckallowedsharingoptions.md). The standard option is the default.

<a id="Discussion"></a>

## Discussion

Use this method when a [CKShare](../../cloudkit/ckshare.md) currently exists on the server. When the system invokes the share sheet with a `CKShare` that you register with this method, it allows the owner to make modifications to the share settings, and allows a participant to view the share settings.

## See Also

### Registering CloudKit shares

- [registerCloudKitShare:container:](registercloudkitshare%28__container_%29.md): Registers a CloudKit share for the user to modify.
- [registerCloudKitShareWithPreparationHandler:](registercloudkitshare%28preparationhandler_%29.md): Registers a handler that prepares a new CloudKit share.
- [registerCKShareWithContainer:allowedSharingOptions:preparationHandler:](registercksharewithcontainer_allowedsharingoptions_preparationhandler_.md): Creates and registers a new collaboration object using a collection of records to share.
