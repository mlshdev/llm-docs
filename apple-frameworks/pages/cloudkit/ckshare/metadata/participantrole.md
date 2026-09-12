> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/metadata/participantrole](https://developer.apple.com/documentation/cloudkit/ckshare/metadata/participantrole)

# participantRole (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The share’s participant role for the user who retrieves the metadata.

## Declaration

```swift
var participantRole: CKShare.ParticipantRole { get }
```

## See Also

### Accessing the Participant’s Capabilities

- [participantPermission](participantpermission.md): The share’s permissions for the user who retrieves the metadata.
- [participantStatus](participantstatus.md): The share’s participation status for the user who retrieves the metadata.

# participantRole (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The share’s participant role for the user who retrieves the metadata.

## Declaration

```objectivec
@property (assign, readonly) CKShareParticipantRole participantRole;
```

## See Also

### Accessing the Participant’s Capabilities

- [participantPermission](participantpermission.md): The share’s permissions for the user who retrieves the metadata.
- [participantStatus](participantstatus.md): The share’s participation status for the user who retrieves the metadata.
- [participantType](../../cksharemetadata/participanttype.md): Deprecated. The share’s participation type for the user who retrieves the metadata.
