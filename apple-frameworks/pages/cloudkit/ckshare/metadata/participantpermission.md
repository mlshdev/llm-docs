> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/metadata/participantpermission](https://developer.apple.com/documentation/cloudkit/ckshare/metadata/participantpermission)

# participantPermission (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share’s permissions for the user who retrieves the metadata.

## Declaration

```swift
var participantPermission: CKShare.ParticipantPermission { get }
```

## See Also

### Accessing the Participant’s Capabilities

- [participantRole](participantrole.md): The share’s participant role for the user who retrieves the metadata.
- [participantStatus](participantstatus.md): The share’s participation status for the user who retrieves the metadata.

# participantPermission (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The share’s permissions for the user who retrieves the metadata.

## Declaration

```objectivec
@property (assign, readonly) CKShareParticipantPermission participantPermission;
```

## See Also

### Accessing the Participant’s Capabilities

- [participantRole](participantrole.md): The share’s participant role for the user who retrieves the metadata.
- [participantStatus](participantstatus.md): The share’s participation status for the user who retrieves the metadata.
- [participantType](../../cksharemetadata/participanttype.md): Deprecated. The share’s participation type for the user who retrieves the metadata.
