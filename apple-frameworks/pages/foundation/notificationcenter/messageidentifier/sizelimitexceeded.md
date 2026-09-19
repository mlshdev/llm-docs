> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/sizelimitexceeded

# sizeLimitExceeded

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a user defaults database exceeding its maximum size.

## Declaration

```swift
static var sizeLimitExceeded: NotificationCenter.BaseMessageIdentifier<UserDefaults.SizeLimitExceededMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [UserDefaults.SizeLimitExceededMessage](../../userdefaults/sizelimitexceededmessage.md).

## See Also

### Identifying defaults messages

- [didChange](didchange-187tw.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<UserDefaults.DidChangeMessage>`. An identifier for a message about a change in a user defaults setting.
