> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationlimits/ask(_:in:)-5ou06](https://developer.apple.com/documentation/permissionkit/communicationlimits/ask(_:in:)-5ou06)

# ask(\_:in:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

Requests that a child send the communication permission question to their parent or guardian.

> Use AskCenter.ask(\_:in:) instead.

## Declaration

```swift
final func ask(_ question: PermissionQuestion<CommunicationTopic>, in viewController: UIViewController) async throws
```

## Parameters

- `question`: The question that the system requests the child send.
- `viewController`: The view controller to which to anchor and present system UI.

<a id="discussion"></a>

## Discussion

Throws an error if the system can’t request a child to send the permission question.

## See Also

### Deprecated APIs

- [updates](updates.md): Deprecated. Registers the communication topic with the system, so your app can be launched on-demand in the background to receive permission updates.
- [ask(\_:in:)](ask%28__in_%29-5tzyy.md): Deprecated. Tells the system to request that the user send the communication permission question to the user’s parent/s and/or guardian/s. Throws an error if the system was unable to request the user to send the question.
