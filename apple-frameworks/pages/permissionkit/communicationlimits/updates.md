> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/communicationlimits/updates](https://developer.apple.com/documentation/permissionkit/communicationlimits/updates)

# updates

**Framework:** PermissionKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Registers the communication topic with the system, so your app can be launched on-demand in the background to receive permission updates.

> Use AskCenter.responses(for:) instead.

## Declaration

```swift
final var updates: some AsyncSequence<PermissionResponse<CommunicationTopic>, Never> { get }
```

## Mentioned In

- [Creating a communication experience](../creating-a-communication-experience.md)

## See Also

### Deprecated APIs

- [ask(\_:in:)](ask%28__in_%29-5tzyy.md): Deprecated. Tells the system to request that the user send the communication permission question to the user’s parent/s and/or guardian/s. Throws an error if the system was unable to request the user to send the question.
- [ask(\_:in:)](ask%28__in_%29-5ou06.md): Deprecated. Requests that a child send the communication permission question to their parent or guardian.
