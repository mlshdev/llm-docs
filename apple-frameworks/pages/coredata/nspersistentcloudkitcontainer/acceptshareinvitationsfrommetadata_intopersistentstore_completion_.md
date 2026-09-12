> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontainer/acceptshareinvitationsfrommetadata:intopersistentstore:completion:](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontainer/acceptshareinvitationsfrommetadata:intopersistentstore:completion:)

# acceptShareInvitationsFromMetadata:intoPersistentStore:completion:

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accepts one or more invitations to participate in sharing using the specified metadata.

## Declaration

```objectivec
- (void) acceptShareInvitationsFromMetadata:(NSArray<CKShareMetadata *> *) metadata intoPersistentStore:(NSPersistentStore *) persistentStore completion:(void (^)(NSArray<CKShareMetadata *> *acceptedShareMetadatas, NSError *acceptOperationError)) completion;
```

## Parameters

- `metadata`: An array of share metadata. For more information, see [CKShareMetadata](../../cloudkit/ckshare/metadata.md).
- `persistentStore`: The persistent store that provides the CloudKit container’s identifier. The store must have the [CKDatabaseScopeShared](../../cloudkit/ckdatabase/scope/shared.md) database scope. For more information, see [NSPersistentCloudKitContainerOptions](../nspersistentcloudkitcontaineroptions.md).
- `completion`: The handler to invoke after you process the specified invitations.

<a id="Discussion"></a>

## Discussion

The `completion` handler returns no value and takes the following parameters:

- An array of accepted share metadata
- An error object that contains information about a problem, or `nil` if the method successfully accepts all invitations

You typically call this method from your scene delegate’s [windowScene:userDidAcceptCloudKitShareWithMetadata:](../../uikit/uiwindowscenedelegate/windowscene%28__userdidacceptcloudkitsharewith_%29.md) method. For SwiftUI apps, there are additional steps you need to complete before you can do this. For more information, see [Accepting Share Invitations in a SwiftUI App](../accepting-share-invitations-in-a-swiftui-app.md).

> **Note**

>  To be able to accept the share invitations, this method requires an active network connection. It executes a number of CloudKit operations, and imports any shared records into the relevant persistent stores, so it may take some time to complete.

## See Also

### Sharing Objects

- [Accepting Share Invitations in a SwiftUI App](../accepting-share-invitations-in-a-swiftui-app.md): Adapt your app to use UIKit’s application and scene delegates so it can process CloudKit share invitations.
- [fetchParticipantsMatchingLookupInfos:intoPersistentStore:completion:](fetchparticipantsmatchinglookupinfos_intopersistentstore_completion_.md): Fetches all participants that match the specified critieria.
- [fetchSharesInPersistentStore:error:](fetchsharesinpersistentstore_error_.md): Returns an array that contains all share records in the specified persistent store.
- [fetchSharesMatchingObjectIDs:error:](fetchsharesmatchingobjectids_error_.md): Returns a dictionary that contains the share records that CloudKit associates with specified managed object IDs.
- [persistUpdatedShare:inPersistentStore:completion:](persistupdatedshare_inpersistentstore_completion_.md): Saves the share record and schedules it for export to iCloud.
- [shareManagedObjects:toShare:completion:](sharemanagedobjects_toshare_completion_.md): Associates the specified managed objects with a new or existing share record.
