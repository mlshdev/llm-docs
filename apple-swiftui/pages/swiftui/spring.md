> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring](https://developer.apple.com/documentation/swiftui/spring)

# Spring

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A representation of a spring’s motion.

## Declaration

```swift
struct Spring
```

<a id="overview"></a>

## Overview

Use this type to convert between different representations of spring parameters:

```swift
let spring = Spring(duration: 0.5, bounce: 0.3)
let (mass, stiffness, damping) = (spring.mass, spring.stiffness, spring.damping)
// (1.0, 157.9, 17.6)

let spring2 = Spring(mass: 1, stiffness: 100, damping: 10)
let (duration, bounce) = (spring2.duration, spring2.bounce)
// (0.63, 0.5)
```

You can also use it to query for a spring’s position and its other properties for a given set of inputs:

```swift
func unitPosition(time: TimeInterval) -> Double {
    let spring = Spring(duration: 0.5, bounce: 0.3)
    return spring.position(target: 1.0, time: time)
}
```

## Topics

### Creating a spring

- [init(duration:bounce:)](spring/init%28duration_bounce_%29.md): Creates a spring with the specified duration and bounce.
- [init(mass:stiffness:damping:allowOverDamping:)](spring/init%28mass_stiffness_damping_allowoverdamping_%29.md): Creates a spring with the specified mass, stiffness, and damping.
- [init(response:dampingRatio:)](spring/init%28response_dampingratio_%29.md): Creates a spring with the specified response and damping ratio.
- [init(settlingDuration:dampingRatio:epsilon:)](spring/init%28settlingduration_dampingratio_epsilon_%29.md): Creates a spring with the specified duration and damping ratio.

### Getting built-in springs

- [bouncy](spring/bouncy.md): A spring with a predefined duration and higher amount of bounce.
- [bouncy(duration:extraBounce:)](spring/bouncy%28duration_extrabounce_%29.md): A spring with a predefined duration and higher amount of bounce that can be tuned.
- [smooth](spring/smooth.md): A smooth spring with a predefined duration and no bounce.
- [smooth(duration:extraBounce:)](spring/smooth%28duration_extrabounce_%29.md): A smooth spring with a predefined duration and no bounce that can be tuned.
- [snappy](spring/snappy.md): A spring with a predefined duration and small amount of bounce that feels more snappy.
- [snappy(duration:extraBounce:)](spring/snappy%28duration_extrabounce_%29.md): A spring with a predefined duration and small amount of bounce that feels more snappy and can be tuned.

### Getting spring characteristics

- [bounce](spring/bounce.md): How bouncy the spring is.
- [damping](spring/damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [dampingRatio](spring/dampingratio.md): The amount of drag applied, as a fraction of the amount needed to produce critical damping.
- [duration](spring/duration.md): The perceptual duration, which defines the pace of the spring.
- [mass](spring/mass.md): The mass of the object attached to the end of the spring.
- [response](spring/response.md): The stiffness of the spring, defined as an approximate duration in seconds.
- [settlingDuration](spring/settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](spring/stiffness.md): The spring stiffness coefficient.

### Getting spring state

- [value(target:initialVelocity:time:)](spring/value%28target_initialvelocity_time_%29.md): Calculates the value of the spring at a given time given a target amount of change.
- [value(fromValue:toValue:initialVelocity:time:)](spring/value%28fromvalue_tovalue_initialvelocity_time_%29.md): Calculates the value of the spring at a given time for a starting and ending value for the spring to travel.
- [velocity(target:initialVelocity:time:)](spring/velocity%28target_initialvelocity_time_%29.md): Calculates the velocity of the spring at a given time given a target amount of change.
- [velocity(fromValue:toValue:initialVelocity:time:)](spring/velocity%28fromvalue_tovalue_initialvelocity_time_%29.md): Calculates the velocity of the spring at a given time given a starting and ending value for the spring to travel.

### Setting spring state

- [update(value:velocity:target:deltaTime:)](spring/update%28value_velocity_target_deltatime_%29.md): Updates the current value and velocity of a spring.

### Calculating forces and durations

- [force(target:position:velocity:)](spring/force%28target_position_velocity_%29.md): Calculates the force upon the spring given a current position, target, and velocity amount of change.
- [force(fromValue:toValue:position:velocity:)](spring/force%28fromvalue_tovalue_position_velocity_%29.md): Calculates the force upon the spring given a current position, velocity, and divisor from the starting and end values for the spring to travel.
- [settlingDuration(target:initialVelocity:epsilon:)](spring/settlingduration%28target_initialvelocity_epsilon_%29.md): The estimated duration required for the spring system to be considered at rest.
- [settlingDuration(fromValue:toValue:initialVelocity:epsilon:)](spring/settlingduration%28fromvalue_tovalue_initialvelocity_epsilon_%29.md): The estimated duration required for the spring system to be considered at rest.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating custom animations

- [CustomAnimation](customanimation.md): A type that defines how an animatable value changes over time.
- [AnimationContext](animationcontext.md): Contextual values that a custom animation can use to manage state and access a view’s environment.
- [AnimationState](animationstate.md): A container that stores the state for a custom animation.
- [AnimationStateKey](animationstatekey.md): A key for accessing animation state values.
- [UnitCurve](unitcurve.md): A function defined by a two-dimensional curve that maps an input progress in the range \[0,1\] to an output progress that is also in the range \[0,1\]. By changing the shape of the curve, the effective speed of an animation or other interpolation can be changed.
