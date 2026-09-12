> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/custommessageidentifiable/messageidentifier](https://developer.apple.com/documentation/groupactivities/custommessageidentifiable/messageidentifier)

# messageIdentifier

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A custom identification string for the current type.

## Declaration

```swift
static var messageIdentifier: String { get }
```

<a id="discussion"></a>

## Discussion

The string you return from this property must be unique among your app’s custom message types. When you send a message, [GroupSessionMessenger](../groupsessionmessenger.md) includes this string in the data it sends to other devices. When it receives a message, [GroupSessionMessenger](../groupsessionmessenger.md) creates the type that contains the matching string in this property.
