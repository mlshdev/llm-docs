> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/post(_:subject:)-5271w](https://developer.apple.com/documentation/foundation/notificationcenter/post(_:subject:)-5271w)

# post(\_:subject:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Posts a given asynchronous message to the notification center.

## Declaration

```swift
func post<Message>(_ message: Message, subject: Message.Subject) where Message : NotificationCenter.AsyncMessage, Message.Subject : AnyObject
```

## Parameters

- `message`: The message to post.
- `subject`: The subject instance that corresponds to the message.

## See Also

### Posting notification messages

- [post(\_:subject:)](post%28__subject_%29-87dbk.md): Posts a given main actor message to the notification center.
- [post(\_:)](post%28__%29-19s7b.md): Posts a given main actor message to the notification center.
- [post(\_:)](post%28__%29-7ia4j.md): Posts a given asynchronous message to the notification center.
