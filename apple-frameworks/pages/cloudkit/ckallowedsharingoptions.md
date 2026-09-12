> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckallowedsharingoptions](https://developer.apple.com/documentation/cloudkit/ckallowedsharingoptions)

# CKAllowedSharingOptions (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that controls participant access and permission options.

## Declaration

```swift
class CKAllowedSharingOptions
```

<a id="overview"></a>

## Overview

Register an instance of this class with an [NSItemProvider](../foundation/nsitemprovider.md) or when preparing a [CKShareTransferRepresentation.ExportedShare](cksharetransferrepresentation/exportedshare.md) before your app invokes the share sheet. The share sheet uses the registered `CKAllowedSharingOptions` object to let the user choose between the allowed options when sharing.

## Topics

### Creating sharing options

- [init(allowedParticipantPermissionOptions:allowedParticipantAccessOptions:)](ckallowedsharingoptions/init%28allowedparticipantpermissionoptions_allowedparticipantaccessoptions_%29.md): Creates and initializes an allowed sharing options object.

### Using the standard options

- [standard](ckallowedsharingoptions/standard.md): An object set to the most permissive sharing options.

### Configuring the options

- [allowedParticipantAccessOptions](ckallowedsharingoptions/allowedparticipantaccessoptions.md): The permission option the system uses to control whether a user can share publicly or privately.
- [allowedParticipantPermissionOptions](ckallowedsharingoptions/allowedparticipantpermissionoptions.md): The permission option the system uses to control whether a user can grant read-only or write access.
- [CKSharingParticipantAccessOption](cksharingparticipantaccessoption.md): An object that controls participant access options.
- [CKSharingParticipantPermissionOption](cksharingparticipantpermissionoption.md): An object that controls participant permission options.

### Initializers

- [init(coder:)](ckallowedsharingoptions/init%28coder_%29.md)

### Instance Properties

- [allowsAccessRequests](ckallowedsharingoptions/allowsaccessrequests.md): Default value is NO. If set, the system sharing UI allows the user to configure whether participants can request access to the share.
- [allowsParticipantsToInviteOthers](ckallowedsharingoptions/allowsparticipantstoinviteothers.md): Default value is NO. If set, the system sharing UI allows the user to choose whether added participants can invite others to the share. CloudKit returns shares with [CKShare.ParticipantRole.administrator](ckshare/participantrole/administrator.md) participants as read-only to devices running OS versions prior to this role being introduced. CloudKit returns administrator participants on such read-only shares as [CKShare.ParticipantRole.privateUser](ckshare/participantrole/privateuser.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

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

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKShare](ckshare.md): A specialized record type that manages a collection of shared records.
- [CKShareTransferRepresentation](cksharetransferrepresentation.md): A transfer representation the system uses to share an item.
- [CKSystemSharingUIObserver](cksystemsharinguiobserver.md): An object the system uses to monitor changes in sharing.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.

# CKAllowedSharingOptions (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that controls participant access and permission options.

## Declaration

```objectivec
@interface CKAllowedSharingOptions : NSObject
```

<a id="overview"></a>

## Overview

Register an instance of this class with an [NSItemProvider](../foundation/nsitemprovider.md) or when preparing a [CKShareTransferRepresentation.ExportedShare](cksharetransferrepresentation/exportedshare.md) before your app invokes the share sheet. The share sheet uses the registered `CKAllowedSharingOptions` object to let the user choose between the allowed options when sharing.

## Topics

### Creating sharing options

- [initWithAllowedParticipantPermissionOptions:allowedParticipantAccessOptions:](ckallowedsharingoptions/init%28allowedparticipantpermissionoptions_allowedparticipantaccessoptions_%29.md): Creates and initializes an allowed sharing options object.

### Using the standard options

- [standardOptions](ckallowedsharingoptions/standard.md): An object set to the most permissive sharing options.

### Configuring the options

- [allowedParticipantAccessOptions](ckallowedsharingoptions/allowedparticipantaccessoptions.md): The permission option the system uses to control whether a user can share publicly or privately.
- [allowedParticipantPermissionOptions](ckallowedsharingoptions/allowedparticipantpermissionoptions.md): The permission option the system uses to control whether a user can grant read-only or write access.
- [CKSharingParticipantAccessOption](cksharingparticipantaccessoption.md): An object that controls participant access options.
- [CKSharingParticipantPermissionOption](cksharingparticipantpermissionoption.md): An object that controls participant permission options.

### Instance Properties

- [allowsAccessRequests](ckallowedsharingoptions/allowsaccessrequests.md): Default value is NO. If set, the system sharing UI allows the user to configure whether participants can request access to the share.
- [allowsParticipantsToInviteOthers](ckallowedsharingoptions/allowsparticipantstoinviteothers.md): Default value is NO. If set, the system sharing UI allows the user to choose whether added participants can invite others to the share. CloudKit returns shares with [CKShareParticipantRoleAdministrator](ckshare/participantrole/administrator.md) participants as read-only to devices running OS versions prior to this role being introduced. CloudKit returns administrator participants on such read-only shares as [CKShareParticipantRolePrivateUser](ckshare/participantrole/privateuser.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Collaboration

- [Sharing CloudKit Data with Other iCloud Users](sharing-cloudkit-data-with-other-icloud-users.md): Create and share private CloudKit data with other users by implementing the sharing UI.
- [Sharing Core Data objects between iCloud users](../coredata/sharing-core-data-objects-between-icloud-users.md): Use Core Data and CloudKit to synchronize data between devices of an iCloud user and share data between different iCloud users.
- [CKShare](ckshare.md): A specialized record type that manages a collection of shared records.
- [CKSystemSharingUIObserver](cksystemsharinguiobserver.md): An object the system uses to monitor changes in sharing.
- [UICloudSharingController](../uikit/uicloudsharingcontroller.md): A view controller that presents standard screens for adding and removing people from a CloudKit share record.
- [CKSharePreparationCompletionHandler](cksharepreparationcompletionhandler.md)
- [CKSharePreparationHandler](cksharepreparationhandler.md)
- [CKSharingSupported](../bundleresources/information-property-list/cksharingsupported.md): A Boolean value that indicates your app supports CloudKit Sharing.
