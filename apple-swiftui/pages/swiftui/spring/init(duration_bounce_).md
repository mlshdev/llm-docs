> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/init(duration:bounce:)](https://developer.apple.com/documentation/swiftui/spring/init(duration:bounce:))

# init(duration:bounce:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a spring with the specified duration and bounce.

## Declaration

```swift
init(duration: TimeInterval = 0.5, bounce: Double = 0.0)
```

## Parameters

- `duration`: Defines the pace of the spring. This is approximately equal to the settling duration, but for springs with very large bounce values, will be the duration of the period of oscillation for the spring.
- `bounce`: How bouncy the spring should be. A value of 0 indicates no bounces (a critically damped spring), positive values indicate increasing amounts of bounciness up to a maximum of 1.0 (corresponding to undamped oscillation), and negative values indicate overdamped springs with a minimum value of -1.0.

## See Also

### Creating a spring

- [init(mass:stiffness:damping:allowOverDamping:)](init%28mass_stiffness_damping_allowoverdamping_%29.md): Creates a spring with the specified mass, stiffness, and damping.
- [init(response:dampingRatio:)](init%28response_dampingratio_%29.md): Creates a spring with the specified response and damping ratio.
- [init(settlingDuration:dampingRatio:epsilon:)](init%28settlingduration_dampingratio_epsilon_%29.md): Creates a spring with the specified duration and damping ratio.
