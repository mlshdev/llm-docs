> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/init(settlingduration:dampingratio:epsilon:)](https://developer.apple.com/documentation/swiftui/spring/init(settlingduration:dampingratio:epsilon:))

# init(settlingDuration:dampingRatio:epsilon:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a spring with the specified duration and damping ratio.

## Declaration

```swift
init(settlingDuration: TimeInterval, dampingRatio: Double, epsilon: Double = 0.001)
```

## Parameters

- `settlingDuration`: The approximate time it will take for the spring to come to rest.
- `dampingRatio`: The amount of drag applied as a fraction of the amount needed to produce critical damping.
- `epsilon`: The threshhold for how small all subsequent values need to be before the spring is considered to have settled.

## See Also

### Creating a spring

- [init(duration:bounce:)](init%28duration_bounce_%29.md): Creates a spring with the specified duration and bounce.
- [init(mass:stiffness:damping:allowOverDamping:)](init%28mass_stiffness_damping_allowoverdamping_%29.md): Creates a spring with the specified mass, stiffness, and damping.
- [init(response:dampingRatio:)](init%28response_dampingratio_%29.md): Creates a spring with the specified response and damping ratio.
