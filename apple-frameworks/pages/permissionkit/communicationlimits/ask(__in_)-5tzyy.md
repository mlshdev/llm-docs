> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationlimits/ask(_:in:)-5tzyy](https://developer.apple.com/documentation/permissionkit/communicationlimits/ask(_:in:)-5tzyy)

# ask(\_:in:)

**Framework:** PermissionKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Tells the system to request that the user send the communication permission question to the user’s parent/s and/or guardian/s. Throws an error if the system was unable to request the user to send the question.

> Use AskCenter.ask(\_:in:) instead.

## Declaration

```swift
final func ask(_ question: PermissionQuestion<CommunicationTopic>, in window: NSWindow) async throws
```

## Parameters

- `question`: The question to request send of.
- `window`: The window to anchor and present system UI off of.

## See Also

### Deprecated APIs

- [updates](updates.md): Deprecated. Registers the communication topic with the system, so your app can be launched on-demand in the background to receive permission updates.
- [ask(\_:in:)](ask%28__in_%29-5ou06.md): Deprecated. Requests that a child send the communication permission question to their parent or guardian.
