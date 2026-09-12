> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/metadata](https://developer.apple.com/documentation/cloudkit/ckshare/metadata)

# CKShare.Metadata (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that describes a shared record’s metadata.

## Declaration

```swift
class Metadata
```

<a id="overview"></a>

## Overview

A share’s metadata is an intermediary object that provides access to the share, its owner, and, for a shared record hierarchy, its root record. Metadata also includes details about the current user’s participation in the share.

You don’t create metadata. CloudKit provides it to your app when the user taps or clicks a share’s [url](url.md), such as in an email or a message. The method CloudKit calls varies by platform and app configuration, and includes the following:

- For a scene-based iOS app in a running or suspended state, CloudKit calls the [windowScene(\_:userDidAcceptCloudKitShareWith:)](../../uikit/uiwindowscenedelegate/windowscene%28__userdidacceptcloudkitsharewith_%29.md) method on your window scene delegate.
- For a scene-based iOS app that’s not running, the system launches your app in response to the tap or click, and calls the [scene(\_:willConnectTo:options:)](../../uikit/uiscenedelegate/scene%28__willconnectto_options_%29.md) method on your scene delegate. The `connectionOptions` parameter contains the metadata. Use its [cloudKitShareMetadata](../../uikit/uiscene/connectionoptions/cloudkitsharemetadata.md) property to access it.
- For an iOS app that doesn’t use scenes, CloudKit calls your app delegate’s [application(\_:userDidAcceptCloudKitShareWith:)](../../uikit/uiapplicationdelegate/application%28__userdidacceptcloudkitsharewith_%29.md) method.
- For a macOS app, CloudKit calls your app delegate’s [application(\_:userDidAcceptCloudKitShareWith:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:userdidacceptcloudkitsharewith:%29) method.
- For a watchOS app, CloudKit calls the [userDidAcceptCloudKitShare(with:)](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/userdidacceptcloudkitshare%28with:%29) method on your watch extension delegate.

Respond by checking the [participantStatus](metadata/participantstatus.md) of the provided metadata. If the status is `pending`, use [CKAcceptSharesOperation](../ckacceptsharesoperation.md) to accept participation in the share. You can also fetch metadata independent of this flow using [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md).

For a shared record hierarchy, the [hierarchicalRootRecordID](metadata/hierarchicalrootrecordid.md) property contains the ID of the share’s root record. When using [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md) to fetch metadata, you can include the entire root record by setting the operation’s [shouldFetchRootRecord](../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) property to [true](https://developer.apple.com/documentation/swift/true). CloudKit then populates the [rootRecord](metadata/rootrecord.md) property before it returns the metadata. You can further customize this behavior using the operation’s [rootRecordDesiredKeys](../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) property to specify which fields to return. This functionality isn’t applicable for a shared record zone because, unlike a shared record hierarchy, it doesn’t have a nominated root record.

The participant properties provide the current user’s acceptance status, permissions, and role. Use these values to determine what functionality to provide to the user. For example, only display editing controls for accepted participants with `readWrite` permissions.

## Topics

### Accessing the Share

- [share](metadata/share.md): The share that owns the metadata.
- [containerIdentifier](metadata/containeridentifier.md): The ID of the share’s container.
- [ownerIdentity](metadata/owneridentity.md): The identity of the share’s owner.

### Accessing the Root Record

- [hierarchicalRootRecordID](metadata/hierarchicalrootrecordid.md): The record ID of the shared hierarchy’s root record.
- [rootRecord](metadata/rootrecord.md): The share’s root record.
- [rootRecordID](metadata/rootrecordid.md): Deprecated. The record ID of the share’s root record.

### Accessing the Participant’s Capabilities

- [participantRole](metadata/participantrole.md): The share’s participant role for the user who retrieves the metadata.
- [participantPermission](metadata/participantpermission.md): The share’s permissions for the user who retrieves the metadata.
- [participantStatus](metadata/participantstatus.md): The share’s participation status for the user who retrieves the metadata.

### Initializers

- [init(coder:)](metadata/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Share Requests

- [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md): An operation that fetches metadata for one or more shares.
- [CKAcceptSharesOperation](../ckacceptsharesoperation.md): An operation that confirms a user’s participation in a share.

# CKShareMetadata (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that describes a shared record’s metadata.

## Declaration

```objectivec
@interface CKShareMetadata : NSObject
```

<a id="overview"></a>

## Overview

A share’s metadata is an intermediary object that provides access to the share, its owner, and, for a shared record hierarchy, its root record. Metadata also includes details about the current user’s participation in the share.

You don’t create metadata. CloudKit provides it to your app when the user taps or clicks a share’s [URL](url.md), such as in an email or a message. The method CloudKit calls varies by platform and app configuration, and includes the following:

- For a scene-based iOS app in a running or suspended state, CloudKit calls the [windowScene:userDidAcceptCloudKitShareWithMetadata:](../../uikit/uiwindowscenedelegate/windowscene%28__userdidacceptcloudkitsharewith_%29.md) method on your window scene delegate.
- For a scene-based iOS app that’s not running, the system launches your app in response to the tap or click, and calls the [scene:willConnectToSession:options:](../../uikit/uiscenedelegate/scene%28__willconnectto_options_%29.md) method on your scene delegate. The `connectionOptions` parameter contains the metadata. Use its [cloudKitShareMetadata](../../uikit/uiscene/connectionoptions/cloudkitsharemetadata.md) property to access it.
- For an iOS app that doesn’t use scenes, CloudKit calls your app delegate’s [application:userDidAcceptCloudKitShareWithMetadata:](../../uikit/uiapplicationdelegate/application%28__userdidacceptcloudkitsharewith_%29.md) method.
- For a macOS app, CloudKit calls your app delegate’s [application:userDidAcceptCloudKitShareWithMetadata:](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application%28_:userdidacceptcloudkitsharewith:%29) method.
- For a watchOS app, CloudKit calls the [userDidAcceptCloudKitShareWithMetadata:](https://developer.apple.com/documentation/watchkit/wkextensiondelegate/userdidacceptcloudkitshare%28with:%29) method on your watch extension delegate.

Respond by checking the [participantStatus](metadata/participantstatus.md) of the provided metadata. If the status is `pending`, use [CKAcceptSharesOperation](../ckacceptsharesoperation.md) to accept participation in the share. You can also fetch metadata independent of this flow using [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md).

For a shared record hierarchy, the [hierarchicalRootRecordID](metadata/hierarchicalrootrecordid.md) property contains the ID of the share’s root record. When using [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md) to fetch metadata, you can include the entire root record by setting the operation’s [shouldFetchRootRecord](../ckfetchsharemetadataoperation/shouldfetchrootrecord.md) property to [true](https://developer.apple.com/documentation/swift/true). CloudKit then populates the [rootRecord](metadata/rootrecord.md) property before it returns the metadata. You can further customize this behavior using the operation’s [rootRecordDesiredKeys](../ckfetchsharemetadataoperation/rootrecorddesiredkeys-3xrex.md) property to specify which fields to return. This functionality isn’t applicable for a shared record zone because, unlike a shared record hierarchy, it doesn’t have a nominated root record.

The participant properties provide the current user’s acceptance status, permissions, and role. Use these values to determine what functionality to provide to the user. For example, only display editing controls for accepted participants with `readWrite` permissions.

## Topics

### Accessing the Share

- [share](metadata/share.md): The share that owns the metadata.
- [containerIdentifier](metadata/containeridentifier.md): The ID of the share’s container.
- [ownerIdentity](metadata/owneridentity.md): The identity of the share’s owner.

### Accessing the Root Record

- [hierarchicalRootRecordID](metadata/hierarchicalrootrecordid.md): The record ID of the shared hierarchy’s root record.
- [rootRecord](metadata/rootrecord.md): The share’s root record.
- [rootRecordID](metadata/rootrecordid.md): Deprecated. The record ID of the share’s root record.

### Accessing the Participant’s Capabilities

- [participantRole](metadata/participantrole.md): The share’s participant role for the user who retrieves the metadata.
- [participantPermission](metadata/participantpermission.md): The share’s permissions for the user who retrieves the metadata.
- [participantStatus](metadata/participantstatus.md): The share’s participation status for the user who retrieves the metadata.
- [participantType](../cksharemetadata/participanttype.md): Deprecated. The share’s participation type for the user who retrieves the metadata.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Share Requests

- [CKFetchShareMetadataOperation](../ckfetchsharemetadataoperation.md): An operation that fetches metadata for one or more shares.
- [CKAcceptSharesOperation](../ckacceptsharesoperation.md): An operation that confirms a user’s participation in a share.
