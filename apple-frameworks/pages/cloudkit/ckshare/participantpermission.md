> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participantpermission](https://developer.apple.com/documentation/cloudkit/ckshare/participantpermission)

# CKShare.ParticipantPermission (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that represent the permissions to grant to a share participant.

## Declaration

```swift
enum ParticipantPermission
```

## Topics

### Permissions

- [CKShare.ParticipantPermission.none](participantpermission/none.md): The participant doesn’t have any permissions for the share.
- [CKShare.ParticipantPermission.readOnly](participantpermission/readonly.md): The participant has read-only permissions for the share.
- [CKShare.ParticipantPermission.readWrite](participantpermission/readwrite.md): The participant has read-and-write permissions for the share.
- [CKShare.ParticipantPermission.unknown](participantpermission/unknown.md): The participant’s permissions are unknown.

### Initializers

- [init(rawValue:)](participantpermission/init%28rawvalue_%29.md)

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
- [role](participant/role-swift.property.md): The participant’s role for the share.
- [CKShare.Participant.Role](participant/role-swift.typealias.md): Deprecated. A type that represents the role for a participant.
- [CKShare.ParticipantRole](participantrole.md): Constants that represent the role of a share’s participant.

# CKShareParticipantPermission (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that represent the permissions to grant to a share participant.

## Declaration

```objectivec
enum CKShareParticipantPermission : NSInteger;
```

## Topics

### Permissions

- [CKShareParticipantPermissionNone](participantpermission/none.md): The participant doesn’t have any permissions for the share.
- [CKShareParticipantPermissionReadOnly](participantpermission/readonly.md): The participant has read-only permissions for the share.
- [CKShareParticipantPermissionReadWrite](participantpermission/readwrite.md): The participant has read-and-write permissions for the share.
- [CKShareParticipantPermissionUnknown](participantpermission/unknown.md): The participant’s permissions are unknown.

## See Also

### Managing the Participant’s Capabilites

- [permission](participant/permission-swift.property.md): The participant’s permission level for the share.
- [role](participant/role-swift.property.md): The participant’s role for the share.
- [CKShareParticipantRole](participantrole.md): Constants that represent the role of a share’s participant.
