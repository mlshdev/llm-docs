> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/init(response:dampingratio:)](https://developer.apple.com/documentation/swiftui/spring/init(response:dampingratio:))

# init(response:dampingRatio:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a spring with the specified response and damping ratio.

## Declaration

```swift
init(response: Double, dampingRatio: Double)
```

## Parameters

- `response`: Defines the stiffness of the spring as an approximate duration in seconds.
- `dampingRatio`: Defines the amount of drag applied as a fraction the amount needed to produce critical damping.

## See Also

### Creating a spring

- [init(duration:bounce:)](init%28duration_bounce_%29.md): Creates a spring with the specified duration and bounce.
- [init(mass:stiffness:damping:allowOverDamping:)](init%28mass_stiffness_damping_allowoverdamping_%29.md): Creates a spring with the specified mass, stiffness, and damping.
- [init(settlingDuration:dampingRatio:epsilon:)](init%28settlingduration_dampingratio_epsilon_%29.md): Creates a spring with the specified duration and damping ratio.
