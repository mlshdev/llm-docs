> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/spring(response:dampingfraction:blendduration:)](https://developer.apple.com/documentation/swiftui/animation/spring(response:dampingfraction:blendduration:))

# spring(response:dampingFraction:blendDuration:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the response values between springs over a time period.

## Declaration

```swift
static func spring(response: Double = 0.5, dampingFraction: Double = 0.825, blendDuration: TimeInterval = 0) -> Animation
```

## Parameters

- `response`: The stiffness of the spring, defined as an approximate duration in seconds. A value of zero requests an infinitely-stiff spring, suitable for driving interactive animations.
- `dampingFraction`: The amount of drag applied to the value being animated, as a fraction of an estimate of amount needed to produce critical damping.
- `blendDuration`: The duration in seconds over which to interpolate changes to the response value of the spring.

<a id="return-value"></a>

## Return Value

A spring animation.

## See Also

### Customizing spring animations

- [spring](spring.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the response values between springs over a time period.
- [spring(\_:blendDuration:)](spring%28__blendduration_%29.md): A persistent spring animation.
- [spring(duration:bounce:blendDuration:)](spring%28duration_bounce_blendduration_%29.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the duration values between springs over a time period.
- [interactiveSpring](interactivespring.md): A convenience for a `spring` animation with a lower `duration` value, intended for driving interactive animations.
- [interactiveSpring(response:dampingFraction:blendDuration:)](interactivespring%28response_dampingfraction_blendduration_%29.md): A convenience for a `spring` animation with a lower `response` value, intended for driving interactive animations.
- [interpolatingSpring](interpolatingspring.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
- [interpolatingSpring(\_:initialVelocity:)](interpolatingspring%28__initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range of one to zero.
- [interpolatingSpring(duration:bounce:initialVelocity:)](interpolatingspring%28duration_bounce_initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
- [interpolatingSpring(mass:stiffness:damping:initialVelocity:)](interpolatingspring%28mass_stiffness_damping_initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
