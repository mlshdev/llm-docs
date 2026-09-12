> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/update(value:velocity:target:deltatime:)](https://developer.apple.com/documentation/swiftui/spring/update(value:velocity:target:deltatime:))

# update(value:velocity:target:deltaTime:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Updates the current  value and velocity of a spring.

## Declaration

```swift
func update<V>(value: inout V, velocity: inout V, target: V, deltaTime: TimeInterval) where V : VectorArithmetic
```

## Parameters

- `value`: The current value of the spring.
- `velocity`: The current velocity of the spring.
- `target`: The target that `value` is moving towards.
- `deltaTime`: The amount of time that has passed since the spring was at the position specified by `value`.
