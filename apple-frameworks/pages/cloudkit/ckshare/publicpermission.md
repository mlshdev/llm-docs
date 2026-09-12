> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/publicpermission](https://developer.apple.com/documentation/cloudkit/ckshare/publicpermission)

# publicPermission (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The permission for anyone with access to the share’s URL.

## Declaration

```swift
var publicPermission: CKShare.ParticipantPermission { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property’s value to be more permissive than [CKShare.ParticipantPermission.none](participantpermission/none.md) allows any user with the share’s URL to join. CloudKit removes all public participants when you save the share if you set the property’s value to [CKShare.ParticipantPermission.none](participantpermission/none.md).

The default value is [CKShare.ParticipantPermission.none](participantpermission/none.md)

## See Also

### Configuring the Share

- [addParticipant(\_:)](addparticipant%28__%29.md): Adds a participant to the share.
- [removeParticipant(\_:)](removeparticipant%28__%29.md): Removes a participant from the share.
- [CKShare.Participant](participant.md): An object that describes a user’s participation in a share.

# publicPermission (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The permission for anyone with access to the share’s URL.

## Declaration

```objectivec
@property (assign) CKShareParticipantPermission publicPermission;
```

<a id="discussion"></a>

## Discussion

Setting this property’s value to be more permissive than [CKShareParticipantPermissionNone](participantpermission/none.md) allows any user with the share’s URL to join. CloudKit removes all public participants when you save the share if you set the property’s value to [CKShareParticipantPermissionNone](participantpermission/none.md).

The default value is [CKShareParticipantPermissionNone](participantpermission/none.md)

## See Also

### Configuring the Share

- [addParticipant:](addparticipant%28__%29.md): Adds a participant to the share.
- [removeParticipant:](removeparticipant%28__%29.md): Removes a participant from the share.
- [CKShareParticipant](participant.md): An object that describes a user’s participation in a share.
