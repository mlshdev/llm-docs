> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/dampingratio](https://developer.apple.com/documentation/swiftui/spring/dampingratio)

# dampingRatio

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The amount of drag applied, as a fraction of the amount needed to produce critical damping.

## Declaration

```swift
var dampingRatio: Double { get }
```

<a id="discussion"></a>

## Discussion

When `dampingRatio` is 1, the spring will smoothly decelerate to its final position without oscillating. Damping ratios less than 1 will oscillate more and more before coming to a complete stop.

## See Also

### Getting spring characteristics

- [bounce](bounce.md): How bouncy the spring is.
- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [duration](duration.md): The perceptual duration, which defines the pace of the spring.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [response](response.md): The stiffness of the spring, defined as an approximate duration in seconds.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.
