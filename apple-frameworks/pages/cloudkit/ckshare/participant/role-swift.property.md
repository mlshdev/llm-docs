> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participant/role-swift.property](https://developer.apple.com/documentation/cloudkit/ckshare/participant/role-swift.property)

# role (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The participant’s role for the share.

## Declaration

```swift
var role: CKShare.ParticipantRole { get set }
```

## See Also

### Managing the Participant’s Capabilites

- [permission](permission-swift.property.md): The participant’s permission level for the share.
- [CKShare.Participant.Permission](permission-swift.typealias.md): Deprecated. A type that represents the permissions for a participant.
- [CKShare.ParticipantPermission](../participantpermission.md): Constants that represent the permissions to grant to a share participant.
- [CKShare.Participant.Role](role-swift.typealias.md): Deprecated. A type that represents the role for a participant.
- [CKShare.ParticipantRole](../participantrole.md): Constants that represent the role of a share’s participant.

# role (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The participant’s role for the share.

## Declaration

```objectivec
@property (assign) CKShareParticipantRole role;
```

## See Also

### Managing the Participant’s Capabilites

- [permission](permission-swift.property.md): The participant’s permission level for the share.
- [CKShareParticipantPermission](../participantpermission.md): Constants that represent the permissions to grant to a share participant.
- [CKShareParticipantRole](../participantrole.md): Constants that represent the role of a share’s participant.
