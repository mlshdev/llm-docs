> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionflow](https://developer.apple.com/documentation/permissionkit/permissionflow)

# PermissionFlow

**Framework:** PermissionKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Specifies which permission flow to present.

## Declaration

```swift
enum PermissionFlow
```

## Topics

### Enumeration Cases

- [PermissionFlow.acknowledgmentAlert](permissionflow/acknowledgmentalert.md): Presents the “Ask to Approve / Approve in Person / Cancel” acknowledgment alert first, then routes the user into the chosen path.
- [PermissionFlow.approveInPerson](permissionflow/approveinperson.md): Goes directly to the Approve-in-Person flow, prompting the user for the Screen Time passcode.
- [PermissionFlow.askToApprove](permissionflow/asktoapprove.md): Goes directly to the Messages compose sheet for the “Ask to Approve” flow.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
