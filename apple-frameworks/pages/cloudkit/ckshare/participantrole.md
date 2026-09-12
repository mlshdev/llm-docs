> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participantrole](https://developer.apple.com/documentation/cloudkit/ckshare/participantrole)

# CKShare.ParticipantRole (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants that represent the role of a share’s participant.

## Declaration

```swift
enum ParticipantRole
```

## Topics

### Roles

- [CKShare.ParticipantRole.owner](participantrole/owner.md): The participant is the share’s owner.
- [CKShare.ParticipantRole.privateUser](participantrole/privateuser.md): The participant has the private role.
- [CKShare.ParticipantRole.publicUser](participantrole/publicuser.md): The participant has the public role.
- [CKShare.ParticipantRole.unknown](participantrole/unknown.md): The participant’s role is unknown.

### Enumeration Cases

- [CKShare.ParticipantRole.administrator](participantrole/administrator.md): The participant has the administrator role.

### Initializers

- [init(rawValue:)](participantrole/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Participant’s Capabilites

- [permission](participant/permission-swift.property.md): The participant’s permission level for the share.
- [CKShare.Participant.Permission](participant/permission-swift.typealias.md): Deprecated. A type that represents the permissions for a participant.
- [CKShare.ParticipantPermission](participantpermission.md): Constants that represent the permissions to grant to a share participant.
- [role](participant/role-swift.property.md): The participant’s role for the share.
- [CKShare.Participant.Role](participant/role-swift.typealias.md): Deprecated. A type that represents the role for a participant.

# CKShareParticipantRole (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Constants that represent the role of a share’s participant.

## Declaration

```objectivec
enum CKShareParticipantRole : NSInteger;
```

## Topics

### Roles

- [CKShareParticipantRoleOwner](participantrole/owner.md): The participant is the share’s owner.
- [CKShareParticipantRolePrivateUser](participantrole/privateuser.md): The participant has the private role.
- [CKShareParticipantRolePublicUser](participantrole/publicuser.md): The participant has the public role.
- [CKShareParticipantRoleUnknown](participantrole/unknown.md): The participant’s role is unknown.

### Enumeration Cases

- [CKShareParticipantRoleAdministrator](participantrole/administrator.md): The participant has the administrator role.

## See Also

### Managing the Participant’s Capabilites

- [permission](participant/permission-swift.property.md): The participant’s permission level for the share.
- [CKShareParticipantPermission](participantpermission.md): Constants that represent the permissions to grant to a share participant.
- [role](participant/role-swift.property.md): The participant’s role for the share.
