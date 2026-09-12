> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionbutton/init(question:permissionflow:onpermissionresult:label:)](https://developer.apple.com/documentation/permissionkit/permissionbutton/init(question:permissionflow:onpermissionresult:label:))

# init(question:permissionFlow:onPermissionResult:label:)

**Framework:** PermissionKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a button that requests permission from parents or guardians, presenting a specific permission flow and reporting the outcome to a completion handler.

## Declaration

```swift
@MainActor @preconcurrency init(question: PermissionQuestion<Topic>, permissionFlow: PermissionFlow, onPermissionResult: @escaping (Result<PermissionResult, any Error>) -> Void, @ViewBuilder label: @escaping () -> Label) where Topic == SignificantAppUpdateTopic
```

## Parameters

- `question`: The question to ask a parent or guardian on behalf of their child.
- `permissionFlow`: The permission flow to present.
- `onPermissionResult`: A closure that’s called with the result of the permission flow. The button is disabled while a flow is presented, so the closure is invoked once per completed interaction.
- `label`: The view to display inside the button.
