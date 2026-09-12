> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/settlingduration(target:initialvelocity:epsilon:)](https://developer.apple.com/documentation/swiftui/spring/settlingduration(target:initialvelocity:epsilon:))

# settlingDuration(target:initialVelocity:epsilon:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The estimated duration required for the spring system to be considered at rest.

## Declaration

```swift
func settlingDuration<V>(target: V, initialVelocity: V = .zero, epsilon: Double) -> TimeInterval where V : VectorArithmetic
```

<a id="discussion"></a>

## Discussion

The epsilon value specifies the threshold for how small all subsequent values need to be before the spring is considered to have settled.

## See Also

### Calculating forces and durations

- [force(target:position:velocity:)](force%28target_position_velocity_%29.md): Calculates the force upon the spring given a current position, target, and velocity amount of change.
- [force(fromValue:toValue:position:velocity:)](force%28fromvalue_tovalue_position_velocity_%29.md): Calculates the force upon the spring given a current position, velocity, and divisor from the starting and end values for the spring to travel.
- [settlingDuration(fromValue:toValue:initialVelocity:epsilon:)](settlingduration%28fromvalue_tovalue_initialvelocity_epsilon_%29.md): The estimated duration required for the spring system to be considered at rest.
