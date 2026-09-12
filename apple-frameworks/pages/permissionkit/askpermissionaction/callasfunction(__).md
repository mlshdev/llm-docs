> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/askpermissionaction/callasfunction(_:)](https://developer.apple.com/documentation/permissionkit/askpermissionaction/callasfunction(_:))

# callAsFunction(\_:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+ · macOS 26.5+ · visionOS 26.5+

Sends a permission question to a parent or guardian.

## Declaration

```swift
@MainActor func callAsFunction<Topic>(_ question: PermissionQuestion<Topic>) async throws where Topic : QuestionTopic
```

## Parameters

- `question`: The permission question to send.

<a id="discussion"></a>

## Discussion

Call this method to present the system permission request UI. The method throws an error if the system can’t send the permission question.
