> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/anygesture/init(_:)

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
