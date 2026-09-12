> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/didload](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/didload)

# didLoad

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An identifier for a message about a bundle dynamically loading a class.

## Declaration

```swift
static var didLoad: NotificationCenter.BaseMessageIdentifier<Bundle.DidLoadMessage> { get }
```

<a id="discussion"></a>

## Discussion

Use this identifier with [NotificationCenter](../../notificationcenter.md)’s `addObserver(of:for:using:)` or `messages(of:for:bufferSize:)` methods to observe messages of type [Bundle.DidLoadMessage](../../bundle/didloadmessage.md).
