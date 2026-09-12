> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/addparticipant(_:)](https://developer.apple.com/documentation/cloudkit/ckshare/addparticipant(_:))

# addParticipant(\_:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a participant to the share.

## Declaration

```swift
func addParticipant(_ participant: CKShare.Participant)
```

## Parameters

- `participant`: The participant to add to the share.

<a id="discussion"></a>

## Discussion

If a participant with a matching [userIdentity](participant/useridentity.md) already exists in the share, the system updates the existing participant’s properties and doesn’t add a new participant.

To modify the list of participants, a share’s [publicPermission](publicpermission.md) must be [CKShare.ParticipantPermission.none](participantpermission/none.md). You can’t mix and match public and private users in the same share. You can only add certain participant types with this API. See [CKShare.Participant](participant.md) for more information.

## See Also

### Configuring the Share

- [publicPermission](publicpermission.md): The permission for anyone with access to the share’s URL.
- [removeParticipant(\_:)](removeparticipant%28__%29.md): Removes a participant from the share.
- [CKShare.Participant](participant.md): An object that describes a user’s participation in a share.

# addParticipant: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a participant to the share.

## Declaration

```objectivec
- (void) addParticipant:(CKShareParticipant *) participant;
```

## Parameters

- `participant`: The participant to add to the share.

<a id="discussion"></a>

## Discussion

If a participant with a matching [userIdentity](participant/useridentity.md) already exists in the share, the system updates the existing participant’s properties and doesn’t add a new participant.

To modify the list of participants, a share’s [publicPermission](publicpermission.md) must be [CKShareParticipantPermissionNone](participantpermission/none.md). You can’t mix and match public and private users in the same share. You can only add certain participant types with this API. See [CKShareParticipant](participant.md) for more information.

## See Also

### Configuring the Share

- [publicPermission](publicpermission.md): The permission for anyone with access to the share’s URL.
- [removeParticipant:](removeparticipant%28__%29.md): Removes a participant from the share.
- [CKShareParticipant](participant.md): An object that describes a user’s participation in a share.
