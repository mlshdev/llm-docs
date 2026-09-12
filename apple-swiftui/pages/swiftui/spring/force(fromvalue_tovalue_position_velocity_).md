> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/force(fromvalue:tovalue:position:velocity:)](https://developer.apple.com/documentation/swiftui/spring/force(fromvalue:tovalue:position:velocity:))

# force(fromValue:toValue:position:velocity:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Calculates the force upon the spring given a current position, velocity, and divisor from the starting and end values for the spring to travel.

## Declaration

```swift
func force<V>(fromValue: V, toValue: V, position: V, velocity: V) -> V where V : Animatable
```

<a id="discussion"></a>

## Discussion

This value is in units of the vector type per second squared.

## See Also

### Calculating forces and durations

- [force(target:position:velocity:)](force%28target_position_velocity_%29.md): Calculates the force upon the spring given a current position, target, and velocity amount of change.
- [settlingDuration(target:initialVelocity:epsilon:)](settlingduration%28target_initialvelocity_epsilon_%29.md): The estimated duration required for the spring system to be considered at rest.
- [settlingDuration(fromValue:toValue:initialVelocity:epsilon:)](settlingduration%28fromvalue_tovalue_initialvelocity_epsilon_%29.md): The estimated duration required for the spring system to be considered at rest.
