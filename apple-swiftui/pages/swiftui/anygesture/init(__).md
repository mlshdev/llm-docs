> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anygesture/init(_:)](https://developer.apple.com/documentation/swiftui/anygesture/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an instance from another gesture.

## Declaration

```swift
nonisolated init<T>(_ gesture: T) where Value == T.Value, T : Gesture
```

## Parameters

- `gesture`: A gesture that you use to create a new gesture.
