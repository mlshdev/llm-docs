> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/init(mass:stiffness:damping:allowoverdamping:)](https://developer.apple.com/documentation/swiftui/spring/init(mass:stiffness:damping:allowoverdamping:))

# init(mass:stiffness:damping:allowOverDamping:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a spring with the specified mass, stiffness, and damping.

## Declaration

```swift
init(mass: Double = 1.0, stiffness: Double, damping: Double, allowOverDamping: Bool = false)
```

## Parameters

- `mass`: Specifies that property of the object attached to the end of the spring.
- `stiffness`: The corresponding spring coefficient.
- `damping`: Defines how the spring’s motion should be damped due to the forces of friction.

## See Also

### Creating a spring

- [init(duration:bounce:)](init%28duration_bounce_%29.md): Creates a spring with the specified duration and bounce.
- [init(response:dampingRatio:)](init%28response_dampingratio_%29.md): Creates a spring with the specified response and damping ratio.
- [init(settlingDuration:dampingRatio:epsilon:)](init%28settlingduration_dampingratio_epsilon_%29.md): Creates a spring with the specified duration and damping ratio.
