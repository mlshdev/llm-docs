> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/askcenter/asksignificantchangepermission(for:permissionflow:in:)-85gmn

# askSignificantChangePermission(for:permissionFlow:in:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Tells the system to request that the user send the significant app update permission question to the user’s parent/s and/or guardian/s using the specified permission flow. Throws an error if the system was unable to request the user to send the question.

## Declaration

```swift
@MainActor final func askSignificantChangePermission(for question: PermissionQuestion<SignificantAppUpdateTopic>, permissionFlow: PermissionFlow, in window: NSWindow) async throws -> PermissionResult
```

## Parameters

- `question`: The question that the system requests the child send.
- `permissionFlow`: The permission flow to present.
- `window`: The window to anchor and present system UI off of.

<a id="return-value"></a>

## Return Value

The user’s resolved action — `.askToApprove(didSend:)`, `.approveInPerson(approved:)`, or `.cancel`.
