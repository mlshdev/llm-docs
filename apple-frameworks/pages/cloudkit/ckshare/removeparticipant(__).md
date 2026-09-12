> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/removeparticipant(_:)](https://developer.apple.com/documentation/cloudkit/ckshare/removeparticipant(_:))

# removeParticipant(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a participant from the share.

## Declaration

```swift
func removeParticipant(_ participant: CKShare.Participant)
```

## Parameters

- `participant`: The participant to remove from the share.

<a id="discussion"></a>

## Discussion

To modify the list of participants, a share’s [publicPermission](publicpermission.md) must be [CKShare.ParticipantPermission.none](participantpermission/none.md). You can’t mix and match public and private users in the same share. You can only add certain participant types with this API. See [CKShare.Participant](participant.md) for more information.

## See Also

### Configuring the Share

- [publicPermission](publicpermission.md): The permission for anyone with access to the share’s URL.
- [addParticipant(\_:)](addparticipant%28__%29.md): Adds a participant to the share.
- [CKShare.Participant](participant.md): An object that describes a user’s participation in a share.

# removeParticipant: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a participant from the share.

## Declaration

```objectivec
- (void) removeParticipant:(CKShareParticipant *) participant;
```

## Parameters

- `participant`: The participant to remove from the share.

<a id="discussion"></a>

## Discussion

To modify the list of participants, a share’s [publicPermission](publicpermission.md) must be [CKShareParticipantPermissionNone](participantpermission/none.md). You can’t mix and match public and private users in the same share. You can only add certain participant types with this API. See [CKShareParticipant](participant.md) for more information.

## See Also

### Configuring the Share

- [publicPermission](publicpermission.md): The permission for anyone with access to the share’s URL.
- [addParticipant:](addparticipant%28__%29.md): Adds a participant to the share.
- [CKShareParticipant](participant.md): An object that describes a user’s participation in a share.
