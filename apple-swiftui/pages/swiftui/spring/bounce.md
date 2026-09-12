> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/bounce](https://developer.apple.com/documentation/swiftui/spring/bounce)

# bounce

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

How bouncy the spring is.

## Declaration

```swift
var bounce: Double { get }
```

<a id="discussion"></a>

## Discussion

A value of 0 indicates no bounces (a critically damped spring), positive values indicate increasing amounts of bounciness up to a maximum of 1.0 (corresponding to undamped oscillation), and negative values indicate overdamped springs with a minimum value of -1.0.

## See Also

### Getting spring characteristics

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [dampingRatio](dampingratio.md): The amount of drag applied, as a fraction of the amount needed to produce critical damping.
- [duration](duration.md): The perceptual duration, which defines the pace of the spring.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [response](response.md): The stiffness of the spring, defined as an approximate duration in seconds.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.
