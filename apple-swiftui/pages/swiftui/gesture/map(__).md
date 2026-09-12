> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/map(_:)](https://developer.apple.com/documentation/swiftui/gesture/map(_:))

# map(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a gesture that uses the given closure to map over this gesture’s value.

## Declaration

```swift
nonisolated func map<T>(_ body: @escaping (Self.Value) -> T) -> _MapGesture<Self, T>
```
