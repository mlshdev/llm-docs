> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/exclusivegesture/init(_:_:)

# init(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a gesture from two gestures where only one of them succeeds.

## Declaration

```swift
nonisolated init(_ first: First, _ second: Second)
```

## Parameters

- `first`: The first of two gestures. This gesture has precedence over the other gesture.
- `second`: The second of two gestures.

## See Also

### Creating the gesture

- [first](first.md): The first of two gestures.
- [second](second.md): The second of two gestures.
