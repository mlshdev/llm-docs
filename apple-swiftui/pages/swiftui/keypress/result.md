> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keypress/result](https://developer.apple.com/documentation/swiftui/keypress/result)

# KeyPress.Result

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A result value returned from a key-press action that indicates whether the action consumed the event.

## Declaration

```swift
enum Result
```

## Topics

### Getting the result

- [KeyPress.Result.handled](result/handled.md): The action consumed the event, preventing dispatch from continuing.
- [KeyPress.Result.ignored](result/ignored.md): The action ignored the event, allowing dispatch to continue.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
