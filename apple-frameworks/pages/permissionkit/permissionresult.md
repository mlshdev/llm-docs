> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionresult](https://developer.apple.com/documentation/permissionkit/permissionresult)

# PermissionResult

**Framework:** PermissionKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Represents the outcome of the permission flow.

## Declaration

```swift
enum PermissionResult
```

## Topics

### Enumeration Cases

- [PermissionResult.approveInPerson(approved:)](permissionresult/approveinperson%28approved_%29.md): The user tapped “Approve in Person” and finalized an answer choice.
- [PermissionResult.askToApprove(didSend:)](permissionresult/asktoapprove%28didsend_%29.md): The user tapped “Ask to Approve” and sent the message.
- [PermissionResult.cancel](permissionresult/cancel.md): The user cancelled the flow.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
