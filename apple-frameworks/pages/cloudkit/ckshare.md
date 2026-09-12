> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare](https://developer.apple.com/documentation/cloudkit/ckshare)

# CKShare (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A specialized record type that manages a collection of shared records.

## Declaration

```swift
class CKShare
```

<a id="overview"></a>

## Overview

A share is a specialized record type that facilitates the sharing of one or more records with many participants. You store shareable records in a custom record zone in the user’s private database. As you create records in that zone, they become eligible for record zone sharing. If you want to share a specific hierarchy of related records, rather than the entire record zone, set each record’s [parent](ckrecord/parent.md) property to define the relationship with its parent. CloudKit infers the shared hierarchy using only the [parent](ckrecord/parent.md) property, and ignores any custom reference fields.

You create a share with either the ID of the record zone to share, or the root record, which defines the point in a record hierarchy where you want to start sharing. CloudKit shares all the records in the record zone, or every record in the hierarchy below the root. If you set the root record’s [parent](ckrecord/parent.md) property, CloudKit ignores it. A record can take part in only a single share. This applies to every record in the shared record zone or hierarchy. If a record is participating in another share, any attempt to save the share fails, and CloudKit returns an [alreadyShared](ckerror/alreadyshared.md) error.

Use [CKModifyRecordsOperation](ckmodifyrecordsoperation.md) to save the share to the server. The initial set of records the share includes must exist on the server or be part of the same save operation to succeed. CloudKit then updates the share’s [url](ckshare/url.md) property. Use [UICloudSharingController](../uikit/uicloudsharingcontroller.md) to present options to the user for sharing the URL. Otherwise, distribute the URL to any participants you add to the share. You can allow anyone with the URL to take part in the share by setting [publicPermission](ckshare/publicpermission.md) to a value more permissive than [CKShare.ParticipantPermission.none](ckshare/participantpermission/none.md).

> **Important**

> You must add the [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md) key to your app’s `Info.plist` file with a value of `true`. This allows the system to launch your app when a user taps or clicks the URL.

After CloudKit saves the share, a participant can fetch its corresponding metadata, which includes a reference to the share, information about the user’s participation, and, for shared hierarchies, the root record’s record ID. Create an instance of [CKFetchShareMetadataOperation](ckfetchsharemetadataoperation.md) using the share’s URL and add it to the container’s queue to execute it. The operation returns an instance of [CKShare.Metadata](ckshare/metadata.md) for each URL you provide. This is only applicable if you manually process share acceptance. If a user receives the share URL and taps or clicks it, CloudKit automatically processes their participation.

To determine the configuration of a fetched share, inspect the [recordName](ckrecord/id/recordname.md) property of its [recordID](ckrecord/recordid.md). If the value is [CKRecordNameZoneWideShare](ckrecordnamezonewideshare.md), the share is managing a shared record zone; otherwise, it’s managing a shared record hierarchy.

```swift
let isZoneWide = (metadata.share.recordID.recordName == CKRecordNameZoneWideShare)
```

CloudKit limits the number of participants in a share to 100, and each participant must have an active iCloud account. You don’t create participants. Instead, use [UICloudSharingController](../uikit/uicloudsharingcontroller.md) to manage a share’s participants and their permissions. Alternatively, create an instance of [CKUserIdentity.LookupInfo](ckuseridentity/lookupinfo-swift.class.md) for each user. Provide the user’s email address or phone number, and use [CKFetchShareParticipantsOperation](ckfetchshareparticipantsoperation.md) to fetch the corresponding participants. CloudKit queries iCloud for corresponding accounts as part of the operation. If it doesn’t find an account, the server updates the participant’s [userIdentity](ckshare/participant/useridentity.md) to reflect that by setting the [hasiCloudAccount](ckuseridentity/hasicloudaccount.md) property to [false](https://developer.apple.com/documentation/swift/false). CloudKit associates the participant with their iCloud account when they accept the share if they launch the process by tapping or clicking the share URL.

Participants with write permissions can modify or delete any record that you include in the share. However, only the owner can delete a shared hierarchy’s root record. If a participant attempts to delete the share, CloudKit removes the participant. The share remains active for all other participants. If the owner deletes a share that manages a record hierarchy, CloudKit sets the root record’s [share](ckrecord/share.md) property to `nil`. CloudKit deletes the share if the owner of the shared hierarchy deletes its root record.

You can customize the title and image the system displays when initiating a share or accepting an invitation to participate. You can also provide a custom UTI to indicate the content of the shared records. Use the keys that [CKShare.SystemFieldKey](ckshare/systemfieldkey.md) defines, as the following example shows:

```swift
let share = CKShare(rootRecord: album)

// Configure the share so the system displays the album's
// name and cover when the user initiates sharing or accepts
// an invitation to participate.
share[CKShare.SystemFieldKey.title] = album["name"]
if let cover = album["cover"] as? UIImage, let data = cover.pngData() {
    share[CKShare.SystemFieldKey.thumbnailImageData] = data
}
// Include a custom UTI that describes the share's content.
share[CKShare.SystemFieldKey.shareType] = "com.example.app.album"
```

## Topics

### Creating a Share

- [init(coder:)](ckshare/init%28coder_%29.md): Creates a share from a serialized instance.
- [init(rootRecord:)](ckshare/init%28rootrecord_%29.md): Creates a new share for the specified record.
- [init(rootRecord:shareID:)](ckshare/init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.
- [init(recordZoneID:)](ckshare/init%28recordzoneid_%29.md): Creates a new share for the specified record zone.

### Accessing the Share’s Attributes

- [owner](ckshare/owner.md): The participant that represents the share’s owner.
- [currentUserParticipant](ckshare/currentuserparticipant.md): The participant that represents the current user.
- [participants](ckshare/participants.md): An array that contains the share’s participants.
- [url](ckshare/url.md): The Uniform Resource Locator (URL) for inviting participants to the share.

### Configuring the Share

- [publicPermission](ckshare/publicpermission.md): The permission for anyone with access to the share’s URL.
- [addParticipant(\_:)](ckshare/addparticipant%28__%29.md): Adds a participant to the share.
- [removeParticipant(\_:)](ckshare/removeparticipant%28__%29.md): Removes a participant from the share.
- [CKShare.Participant](ckshare/participant.md): An object that describes a user’s participation in a share.

### Accessing Metadata

- [CKShare.Metadata](ckshare/metadata.md): An object that describes a shared record’s metadata.

### Subscripting

- [CKShare.SystemFieldKey](ckshare/systemfieldkey.md): Constants that represent the system fields of a share.

### Classes

- [CKShare.AccessRequester](ckshare/accessrequester.md)
- [CKShare.BlockedIdentity](ckshare/blockedidentity.md)

### Initializers

- [init(rootRecord:share:)](ckshare/init%28rootrecord_share_%29.md)

### Instance Properties

- [allowsAccessRequests](ckshare/allowsaccessrequests.md): Indicates whether uninvited users can request access to this share.
- [blockedIdentities](ckshare/blockedidentities.md): A list of users blocked from requesting access to this share.
- [requesters](ckshare/requesters.md): A list of all uninvited users who have requested access to this share.

### Instance Methods

- [blockRequesters(\_:)](ckshare/blockrequesters%28__%29.md): Blocks specified users from requesting access to this share.
- [denyRequesters(\_:)](ckshare/denyrequesters%28__%29.md): Denies access requests from specified users.
- [oneTimeURL(for:)](ckshare/onetimeurl%28for_%29.md)
- [unblockIdentities(\_:)](ckshare/unblockidentities%28__%29.md): Unblocks previously blocked users, allowing them to request access again.

## Relationships

### Inherits From

- [CKRecord](ckrecord.md)

### Conforms To

- [CKRecordKeyValueSetting](ckrecordkeyvaluesetting.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKShareTransferRepresentation](cksharetransferrepresentation.md): A transfer representation the system uses to share an item.
- [CKAllowedSharingOptions](ckallowedsharingoptions.md): An object that controls participant access and permission options.
- [CKSystemSharingUIObserver](cksystemsharinguiobserver.md): An object the system uses to monitor changes in sharing.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.

# CKShare (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A specialized record type that manages a collection of shared records.

## Declaration

```objectivec
@interface CKShare : CKRecord
```

<a id="overview"></a>

## Overview

A share is a specialized record type that facilitates the sharing of one or more records with many participants. You store shareable records in a custom record zone in the user’s private database. As you create records in that zone, they become eligible for record zone sharing. If you want to share a specific hierarchy of related records, rather than the entire record zone, set each record’s [parent](ckrecord/parent.md) property to define the relationship with its parent. CloudKit infers the shared hierarchy using only the [parent](ckrecord/parent.md) property, and ignores any custom reference fields.

You create a share with either the ID of the record zone to share, or the root record, which defines the point in a record hierarchy where you want to start sharing. CloudKit shares all the records in the record zone, or every record in the hierarchy below the root. If you set the root record’s [parent](ckrecord/parent.md) property, CloudKit ignores it. A record can take part in only a single share. This applies to every record in the shared record zone or hierarchy. If a record is participating in another share, any attempt to save the share fails, and CloudKit returns an [alreadyShared](ckerror/alreadyshared.md) error.

Use [CKModifyRecordsOperation](ckmodifyrecordsoperation.md) to save the share to the server. The initial set of records the share includes must exist on the server or be part of the same save operation to succeed. CloudKit then updates the share’s [URL](ckshare/url.md) property. Use [UICloudSharingController](../uikit/uicloudsharingcontroller.md) to present options to the user for sharing the URL. Otherwise, distribute the URL to any participants you add to the share. You can allow anyone with the URL to take part in the share by setting [publicPermission](ckshare/publicpermission.md) to a value more permissive than [CKShareParticipantPermissionNone](ckshare/participantpermission/none.md).

> **Important**

> You must add the [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md) key to your app’s `Info.plist` file with a value of `true`. This allows the system to launch your app when a user taps or clicks the URL.

After CloudKit saves the share, a participant can fetch its corresponding metadata, which includes a reference to the share, information about the user’s participation, and, for shared hierarchies, the root record’s record ID. Create an instance of [CKFetchShareMetadataOperation](ckfetchsharemetadataoperation.md) using the share’s URL and add it to the container’s queue to execute it. The operation returns an instance of [CKShareMetadata](ckshare/metadata.md) for each URL you provide. This is only applicable if you manually process share acceptance. If a user receives the share URL and taps or clicks it, CloudKit automatically processes their participation.

To determine the configuration of a fetched share, inspect the [recordName](ckrecord/id/recordname.md) property of its [recordID](ckrecord/recordid.md). If the value is [CKRecordNameZoneWideShare](ckrecordnamezonewideshare.md), the share is managing a shared record zone; otherwise, it’s managing a shared record hierarchy.

```swift
let isZoneWide = (metadata.share.recordID.recordName == CKRecordNameZoneWideShare)
```

CloudKit limits the number of participants in a share to 100, and each participant must have an active iCloud account. You don’t create participants. Instead, use [UICloudSharingController](../uikit/uicloudsharingcontroller.md) to manage a share’s participants and their permissions. Alternatively, create an instance of [CKUserIdentityLookupInfo](ckuseridentity/lookupinfo-swift.class.md) for each user. Provide the user’s email address or phone number, and use [CKFetchShareParticipantsOperation](ckfetchshareparticipantsoperation.md) to fetch the corresponding participants. CloudKit queries iCloud for corresponding accounts as part of the operation. If it doesn’t find an account, the server updates the participant’s [userIdentity](ckshare/participant/useridentity.md) to reflect that by setting the [hasiCloudAccount](ckuseridentity/hasicloudaccount.md) property to [false](https://developer.apple.com/documentation/swift/false). CloudKit associates the participant with their iCloud account when they accept the share if they launch the process by tapping or clicking the share URL.

Participants with write permissions can modify or delete any record that you include in the share. However, only the owner can delete a shared hierarchy’s root record. If a participant attempts to delete the share, CloudKit removes the participant. The share remains active for all other participants. If the owner deletes a share that manages a record hierarchy, CloudKit sets the root record’s [share](ckrecord/share.md) property to `nil`. CloudKit deletes the share if the owner of the shared hierarchy deletes its root record.

You can customize the title and image the system displays when initiating a share or accepting an invitation to participate. You can also provide a custom UTI to indicate the content of the shared records. Use the keys that [CKShare.SystemFieldKey](ckshare/systemfieldkey.md) defines, as the following example shows:

```swift
let share = CKShare(rootRecord: album)

// Configure the share so the system displays the album's
// name and cover when the user initiates sharing or accepts
// an invitation to participate.
share[CKShare.SystemFieldKey.title] = album["name"]
if let cover = album["cover"] as? UIImage, let data = cover.pngData() {
    share[CKShare.SystemFieldKey.thumbnailImageData] = data
}
// Include a custom UTI that describes the share's content.
share[CKShare.SystemFieldKey.shareType] = "com.example.app.album"
```

## Topics

### Creating a Share

- [initWithCoder:](ckshare/init%28coder_%29.md): Creates a share from a serialized instance.
- [initWithRootRecord:](ckshare/init%28rootrecord_%29.md): Creates a new share for the specified record.
- [initWithRootRecord:shareID:](ckshare/init%28rootrecord_shareid_%29.md): Creates a new share for the specified record and record ID.
- [initWithRecordZoneID:](ckshare/init%28recordzoneid_%29.md): Creates a new share for the specified record zone.

### Accessing the Share’s Attributes

- [owner](ckshare/owner.md): The participant that represents the share’s owner.
- [currentUserParticipant](ckshare/currentuserparticipant.md): The participant that represents the current user.
- [participants](ckshare/participants.md): An array that contains the share’s participants.
- [URL](ckshare/url.md): The Uniform Resource Locator (URL) for inviting participants to the share.

### Configuring the Share

- [publicPermission](ckshare/publicpermission.md): The permission for anyone with access to the share’s URL.
- [addParticipant:](ckshare/addparticipant%28__%29.md): Adds a participant to the share.
- [removeParticipant:](ckshare/removeparticipant%28__%29.md): Removes a participant from the share.
- [CKShareParticipant](ckshare/participant.md): An object that describes a user’s participation in a share.

### Accessing Metadata

- [CKShareMetadata](ckshare/metadata.md): An object that describes a shared record’s metadata.

### Subscripting

- [CKShareTypeKey](cksharetypekey-204gl.md): The system field key for the share’s type.
- [CKShareTitleKey](cksharetitlekey-9yavd.md): The system field key for the share’s title.
- [CKShareThumbnailImageDataKey](cksharethumbnailimagedatakey-1rxdx.md): The system field key for the share’s thumbnail image data.

### Instance Properties

- [allowsAccessRequests](ckshare/allowsaccessrequests.md): Indicates whether uninvited users can request access to this share.
- [blockedIdentities](ckshare/blockedidentities.md): A list of users blocked from requesting access to this share.
- [requesters](ckshare/requesters.md): A list of all uninvited users who have requested access to this share.

### Instance Methods

- [blockRequesters:](ckshare/blockrequesters%28__%29.md): Blocks specified users from requesting access to this share.
- [denyRequesters:](ckshare/denyrequesters%28__%29.md): Denies access requests from specified users.
- [oneTimeURLForParticipantID:](ckshare/onetimeurlforparticipantid_.md): Invitation URLs that any receiver can use to claim the associated participantID and join the share.
- [unblockIdentities:](ckshare/unblockidentities%28__%29.md): Unblocks previously blocked users, allowing them to request access again.

## Relationships

### Inherits From

- [CKRecord](ckrecord.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKAllowedSharingOptions](ckallowedsharingoptions.md): An object that controls participant access and permission options.
- [CKSystemSharingUIObserver](cksystemsharinguiobserver.md): An object the system uses to monitor changes in sharing.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharePreparationCompletionHandler](cksharepreparationcompletionhandler.md)
- [CKSharePreparationHandler](cksharepreparationhandler.md)
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.
