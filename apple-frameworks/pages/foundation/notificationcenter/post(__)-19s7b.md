> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/post(_:)-19s7b](https://developer.apple.com/documentation/foundation/notificationcenter/post(_:)-19s7b)

# post(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Posts a given main actor message to the notification center.

## Declaration

```swift
@MainActor func post<Message>(_ message: Message) where Message : NotificationCenter.MainActorMessage
```

## Parameters

- `message`: The message to post.

## See Also

### Posting notification messages

- [post(\_:subject:)](post%28__subject_%29-87dbk.md): Posts a given main actor message to the notification center.
- [post(\_:subject:)](post%28__subject_%29-5271w.md): Posts a given asynchronous message to the notification center.
- [post(\_:)](post%28__%29-7ia4j.md): Posts a given asynchronous message to the notification center.
