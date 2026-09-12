> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/didchange-187tw](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didchange-187tw)

# didChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a change in a user defaults setting.

## Declaration

```swift
static var didChange: NotificationCenter.BaseMessageIdentifier<UserDefaults.DidChangeMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [UserDefaults.DidChangeMessage](../../userdefaults/didchangemessage.md).

## See Also

### Identifying defaults messages

- [sizeLimitExceeded](sizelimitexceeded.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UserDefaults.SizeLimitExceededMessage>`. An identifier for a message about a user defaults database exceeding its maximum size.
