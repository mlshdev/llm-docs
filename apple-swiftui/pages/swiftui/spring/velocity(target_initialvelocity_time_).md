> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/velocity(target:initialvelocity:time:)](https://developer.apple.com/documentation/swiftui/spring/velocity(target:initialvelocity:time:))

# velocity(target:initialVelocity:time:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Calculates the velocity of the spring at a given time given a target amount of change.

## Declaration

```swift
func velocity<V>(target: V, initialVelocity: V = .zero, time: TimeInterval) -> V where V : VectorArithmetic
```

## See Also

### Getting spring state

- [value(target:initialVelocity:time:)](value%28target_initialvelocity_time_%29.md): Calculates the value of the spring at a given time given a target amount of change.
- [value(fromValue:toValue:initialVelocity:time:)](value%28fromvalue_tovalue_initialvelocity_time_%29.md): Calculates the value of the spring at a given time for a starting and ending value for the spring to travel.
- [velocity(fromValue:toValue:initialVelocity:time:)](velocity%28fromvalue_tovalue_initialvelocity_time_%29.md): Calculates the velocity of the spring at a given time given a starting and ending value for the spring to travel.
