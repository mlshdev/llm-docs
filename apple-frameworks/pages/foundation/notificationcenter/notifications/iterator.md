> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/notifications/iterator](https://developer.apple.com/documentation/foundation/notificationcenter/notifications/iterator)

# NotificationCenter.Notifications.Iterator

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The asynchronous iterator created by this asynchronous sequence.

## Declaration

```swift
struct Iterator
```

## Topics

### Iterating over Elements

- [next()](iterator/next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there is no next element.

### Supporting Types

- [NotificationCenter.Notifications.Element](element.md): The type of element produced by this asynchronous sequence.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

## See Also

### Creating an Iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Creates the asynchronous iterator that produces elements of this asynchronous sequence.
