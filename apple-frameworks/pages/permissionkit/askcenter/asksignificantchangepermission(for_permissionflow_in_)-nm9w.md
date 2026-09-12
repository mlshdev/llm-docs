> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/askcenter/asksignificantchangepermission(for:permissionflow:in:)-nm9w](https://developer.apple.com/documentation/permissionkit/askcenter/asksignificantchangepermission(for:permissionflow:in:)-nm9w)

# askSignificantChangePermission(for:permissionFlow:in:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Requests that a child send the significant app update permission question to their parent or guardian using the specified permission flow.

## Declaration

```swift
@MainActor final func askSignificantChangePermission(for question: PermissionQuestion<SignificantAppUpdateTopic>, permissionFlow: PermissionFlow, in viewController: UIViewController) async throws -> PermissionResult
```

## Parameters

- `question`: The question that the system requests the child send.
- `permissionFlow`: The permission flow to present.
- `viewController`: The view controller to which to anchor and present system UI.

<a id="return-value"></a>

## Return Value

The user’s resolved action — `.askToApprove(didSend:)`, `.approveInPerson(approved:)`, or `.cancel`.

<a id="discussion"></a>

## Discussion

Throws an error if the system can’t request a child to send the permission question.
