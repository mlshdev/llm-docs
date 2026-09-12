> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/simultaneousgesture/init(_:_:)](https://developer.apple.com/documentation/swiftui/simultaneousgesture/init(_:_:))

# init(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a gesture with two gestures that can receive updates or succeed independently of each other.

## Declaration

```swift
nonisolated init(_ first: First, _ second: Second)
```

## Parameters

- `first`: The first of two gestures that can happen simultaneously.
- `second`: The second of two gestures that can happen simultaneously.

## See Also

### Creating the gesture

- [first](first.md): The first of two gestures that can happen simultaneously.
- [second](second.md): The second of two gestures that can happen simultaneously.
