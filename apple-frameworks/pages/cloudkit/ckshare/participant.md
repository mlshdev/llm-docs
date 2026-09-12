> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participant](https://developer.apple.com/documentation/cloudkit/ckshare/participant)

# CKShare.Participant (Swift)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that describes a user’s participation in a share.

## Declaration

```swift
class Participant
```

<a id="overview"></a>

## Overview

Participants are a key element of sharing in CloudKit. A participant provides information about an iCloud user and their participation in a share, including their identity, acceptance status, permissions, and role.

The acceptance status determines the participant’s visibility of the shared records. Statuses are: `pending`, `accepted`, `removed`, and `unknown`. If the status is `pending`, use [CKAcceptSharesOperation](../ckacceptsharesoperation.md) to accept the share. Upon acceptance, CloudKit makes the shared records available in the participant’s shared database. The records remain accessible for as long as the participant’s status is `accepted`.

You don’t create participants. Use the share’s [participants](participants.md) property to access its existing participants. Use [UICloudSharingController](../../uikit/uicloudsharingcontroller.md) to manage the share’s participants and their permissions. Alternatively, you can generate participants using [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md). Participants must have an active iCloud account.

Anyone with the URL of a public share can become a participant in that share. Participants of a public share assume the `publicUser` role. For private shares, the owner manages the participants. An owner is any participant with the `owner` role. A participant of a private share can’t accept the share unless the owner adds them first. Private share participants assume the `privateUser` role. CloudKit removes any pending participants if the owner changes the share’s [publicPermission](publicpermission.md). CloudKit removes all participants if the new permission is `none`.

Participants with write permissions can modify or delete any record that you include in the share. However, only the owner can delete a shared hierarchy’s root record. If a participant attempts to delete the share, CloudKit removes the participant. The share remains active for all other participants.

## Topics

### Accessing the Participant’s Status

- [acceptanceStatus](participant/acceptancestatus-swift.property.md): The current state of the user’s acceptance of the share.
- [CKShare.Participant.AcceptanceStatus](participant/acceptancestatus-swift.typealias.md): Deprecated. A type that represents the acceptance status of the participant.
- [CKShare.ParticipantAcceptanceStatus](participantacceptancestatus.md): Constants that represent the status of a participant.

### Accessing the Participant’s Identity

- [userIdentity](participant/useridentity.md): The identity of the participant.

### Managing the Participant’s Capabilites

- [permission](participant/permission-swift.property.md): The participant’s permission level for the share.
- [CKShare.Participant.Permission](participant/permission-swift.typealias.md): Deprecated. A type that represents the permissions for a participant.
- [CKShare.ParticipantPermission](participantpermission.md): Constants that represent the permissions to grant to a share participant.
- [role](participant/role-swift.property.md): The participant’s role for the share.
- [CKShare.Participant.Role](participant/role-swift.typealias.md): Deprecated. A type that represents the role for a participant.
- [CKShare.ParticipantRole](participantrole.md): Constants that represent the role of a share’s participant.

### Deprecated

- [Deprecated Symbols](../participant-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Initializers

- [init(coder:)](participant/init%28coder_%29.md)

### Instance Properties

- [dateAddedToShare](participant/dateaddedtoshare.md): The date and time when an originator or administrator added this participant to the share.
- [isApprovedRequester](participant/isapprovedrequester.md): Indicates whether the participant was originally a requester that an originator or administrator approved to join the share.
- [participantID](participant/participantid.md)

### Instance Methods

- [isEqual(\_:)](participant/isequal%28__%29.md): Compares two `CKShareParticipant` objects for person identity equality.

### Type Aliases

- [CKShare.Participant.ID](participant/id.md)

### Type Methods

- [oneTimeURLParticipant()](participant/onetimeurlparticipant%28%29.md): Generate a unique URL for inviting a participant without knowing their handle

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

### Participants

- [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md): An operation that converts user identities into share participants.

# CKShareParticipant (Objective-C)

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that describes a user’s participation in a share.

## Declaration

```objectivec
@interface CKShareParticipant : NSObject
```

<a id="overview"></a>

## Overview

Participants are a key element of sharing in CloudKit. A participant provides information about an iCloud user and their participation in a share, including their identity, acceptance status, permissions, and role.

The acceptance status determines the participant’s visibility of the shared records. Statuses are: `pending`, `accepted`, `removed`, and `unknown`. If the status is `pending`, use [CKAcceptSharesOperation](../ckacceptsharesoperation.md) to accept the share. Upon acceptance, CloudKit makes the shared records available in the participant’s shared database. The records remain accessible for as long as the participant’s status is `accepted`.

You don’t create participants. Use the share’s [participants](participants.md) property to access its existing participants. Use [UICloudSharingController](../../uikit/uicloudsharingcontroller.md) to manage the share’s participants and their permissions. Alternatively, you can generate participants using [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md). Participants must have an active iCloud account.

Anyone with the URL of a public share can become a participant in that share. Participants of a public share assume the `publicUser` role. For private shares, the owner manages the participants. An owner is any participant with the `owner` role. A participant of a private share can’t accept the share unless the owner adds them first. Private share participants assume the `privateUser` role. CloudKit removes any pending participants if the owner changes the share’s [publicPermission](publicpermission.md). CloudKit removes all participants if the new permission is `none`.

Participants with write permissions can modify or delete any record that you include in the share. However, only the owner can delete a shared hierarchy’s root record. If a participant attempts to delete the share, CloudKit removes the participant. The share remains active for all other participants.

## Topics

### Accessing the Participant’s Status

- [acceptanceStatus](participant/acceptancestatus-swift.property.md): The current state of the user’s acceptance of the share.
- [CKShareParticipantAcceptanceStatus](participantacceptancestatus.md): Constants that represent the status of a participant.

### Accessing the Participant’s Identity

- [userIdentity](participant/useridentity.md): The identity of the participant.

### Managing the Participant’s Capabilites

- [permission](participant/permission-swift.property.md): The participant’s permission level for the share.
- [CKShareParticipantPermission](participantpermission.md): Constants that represent the permissions to grant to a share participant.
- [role](participant/role-swift.property.md): The participant’s role for the share.
- [CKShareParticipantRole](participantrole.md): Constants that represent the role of a share’s participant.

### Deprecated

- [Deprecated Symbols](../participant-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [dateAddedToShare](participant/dateaddedtoshare.md): The date and time when an originator or administrator added this participant to the share.
- [isApprovedRequester](participant/isapprovedrequester.md): Indicates whether the participant was originally a requester that an originator or administrator approved to join the share.
- [participantID](../ckshareparticipant/participantid.md): A unique identifier for this participant.
- [type](../ckshareparticipant/type.md): Deprecated. The participant type.

### Instance Methods

- [isEqual:](participant/isequal%28__%29.md): Compares two `CKShareParticipant` objects for person identity equality.

### Type Methods

- [oneTimeURLParticipant](participant/onetimeurlparticipant%28%29.md): Generate a unique URL for inviting a participant without knowing their handle

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Participants

- [CKFetchShareParticipantsOperation](../ckfetchshareparticipantsoperation.md): An operation that converts user identities into share participants.
