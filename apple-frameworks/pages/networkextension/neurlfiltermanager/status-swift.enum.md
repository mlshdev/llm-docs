> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/status-swift.enum](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/status-swift.enum)

# NEURLFilterManager.Status

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An enumeration of URL filter status codes.

## Declaration

```swift
enum Status
```

## Topics

### URL filter statuses

- [NEURLFilterManager.Status.invalid](status-swift.enum/invalid.md): The URL filter isn’t configured.
- [NEURLFilterManager.Status.stopped](status-swift.enum/stopped.md): The URL filter is stopped.
- [NEURLFilterManager.Status.starting](status-swift.enum/starting.md): The URL filter is starting.
- [NEURLFilterManager.Status.running](status-swift.enum/running.md): The URL filter is running.
- [NEURLFilterManager.Status.stopping](status-swift.enum/stopping.md): The URL filter is stopping.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with filter statuses

- [status](status-swift.property.md): The current status of the URL filter.
- [handleStatusChange()](handlestatuschange%28%29.md): Sets up an observer for the status notification and models it as an asynchronous sequence.
