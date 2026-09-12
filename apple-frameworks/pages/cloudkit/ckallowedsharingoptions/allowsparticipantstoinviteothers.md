> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckallowedsharingoptions/allowsparticipantstoinviteothers](https://developer.apple.com/documentation/cloudkit/ckallowedsharingoptions/allowsparticipantstoinviteothers)

# allowsParticipantsToInviteOthers (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Default value is NO. If set, the system sharing UI allows the user to choose whether added participants can invite others to the share. CloudKit returns shares with [CKShare.ParticipantRole.administrator](../ckshare/participantrole/administrator.md) participants as read-only to devices running OS versions prior to this role being introduced. CloudKit returns administrator participants on such read-only shares as [CKShare.ParticipantRole.privateUser](../ckshare/participantrole/privateuser.md).

## Declaration

```swift
var allowsParticipantsToInviteOthers: Bool { get set }
```

# allowsParticipantsToInviteOthers (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Default value is NO. If set, the system sharing UI allows the user to choose whether added participants can invite others to the share. CloudKit returns shares with [CKShareParticipantRoleAdministrator](../ckshare/participantrole/administrator.md) participants as read-only to devices running OS versions prior to this role being introduced. CloudKit returns administrator participants on such read-only shares as [CKShareParticipantRolePrivateUser](../ckshare/participantrole/privateuser.md).

## Declaration

```objectivec
@property (assign) BOOL allowsParticipantsToInviteOthers;
```
