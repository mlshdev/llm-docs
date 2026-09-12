> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infocusstatus/isfocused-8ytve](https://developer.apple.com/documentation/intents/infocusstatus/isfocused-8ytve)

# isFocused

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · watchOS 8.0+

The user’s preference for receiving communication notifications.

## Declaration

```swift
@nonobjc final var isFocused: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the user doesn’t want notifications to interrupt them. Use this information to display the user’s availability to other people in your communication service.

If the user grants your app access to their focus status, notifications your app receives about communication from important people can break through the user’s focus status.
