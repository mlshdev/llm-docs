> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participantrole/administrator](https://developer.apple.com/documentation/cloudkit/ckshare/participantrole/administrator)

# CKShare.ParticipantRole.administrator (Swift)

**Framework:** CloudKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The participant has the administrator role.

## Declaration

```swift
case administrator
```

<a id="discussion"></a>

## Discussion

An administrator of a share can add and remove participants and change their permissions.

CloudKit returns shares with `administrator` participants as read-only to devices running OS versions prior to this role being introduced. CloudKit returns administrator participants on such read-only shares as [CKShare.ParticipantRole.privateUser](privateuser.md).

# CKShareParticipantRoleAdministrator (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The participant has the administrator role.

## Declaration

```objectivec
CKShareParticipantRoleAdministrator
```

<a id="discussion"></a>

## Discussion

An administrator of a share can add and remove participants and change their permissions.

CloudKit returns shares with `administrator` participants as read-only to devices running OS versions prior to this role being introduced. CloudKit returns administrator participants on such read-only shares as [CKShareParticipantRolePrivateUser](privateuser.md).
