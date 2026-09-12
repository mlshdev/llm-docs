> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/interactivespring(response:dampingfraction:blendduration:)](https://developer.apple.com/documentation/swiftui/animation/interactivespring(response:dampingfraction:blendduration:))

# interactiveSpring(response:dampingFraction:blendDuration:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A convenience for a `spring` animation with a lower `response` value, intended for driving interactive animations.

## Declaration

```swift
static func interactiveSpring(response: Double = 0.15, dampingFraction: Double = 0.86, blendDuration: TimeInterval = 0.25) -> Animation
```

## See Also

### Customizing spring animations

- [spring](spring.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the response values between springs over a time period.
- [spring(\_:blendDuration:)](spring%28__blendduration_%29.md): A persistent spring animation.
- [spring(duration:bounce:blendDuration:)](spring%28duration_bounce_blendduration_%29.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the duration values between springs over a time period.
- [spring(response:dampingFraction:blendDuration:)](spring%28response_dampingfraction_blendduration_%29.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the response values between springs over a time period.
- [interactiveSpring](interactivespring.md): A convenience for a `spring` animation with a lower `duration` value, intended for driving interactive animations.
- [interpolatingSpring](interpolatingspring.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
- [interpolatingSpring(\_:initialVelocity:)](interpolatingspring%28__initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range of one to zero.
- [interpolatingSpring(duration:bounce:initialVelocity:)](interpolatingspring%28duration_bounce_initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
- [interpolatingSpring(mass:stiffness:damping:initialVelocity:)](interpolatingspring%28mass_stiffness_damping_initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
