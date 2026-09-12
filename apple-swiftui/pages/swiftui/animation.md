> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation](https://developer.apple.com/documentation/swiftui/animation)

# Animation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The way a view changes over time to create a smooth visual transition from one state to another.

## Declaration

```swift
@frozen struct Animation
```

## Mentioned In

- [Unifying your app’s animations](unifying-your-app-s-animations.md)

<a id="overview"></a>

## Overview

An `Animation` provides a visual transition of a view when a state value changes from one value to another. The characteristics of this transition vary according to the animation type. For instance, a [linear](animation/linear.md) animation provides a mechanical feel to the animation because its speed is consistent from start to finish. In contrast, an animation that uses easing, like [easeOut](animation/easeout.md), offers a more natural feel by varying the acceleration of the animation.

To apply an animation to a view, add the [animation(\_:value:)](view/animation%28__value_%29.md) modifier, and specify both an animation type and the value to animate. For instance, the [Circle](circle.md) view in the following code performs an [easeIn](animation/easein.md) animation each time the state variable `scale` changes:

```swift
struct ContentView: View {
    @State private var scale = 0.5

    var body: some View {
        VStack {
            Circle()
                .scaleEffect(scale)
                .animation(.easeIn, value: scale)
            HStack {
                Button("+") { scale += 0.1 }
                Button("-") { scale -= 0.1 }
            }
        }
        .padding()
    }
```

Video: animation-01-overview-easein.mp4

When the value of `scale` changes, the modifier [scaleEffect(\_:anchor:)](view/scaleeffect%28__anchor_%29.md) resizes [Circle](circle.md) according to the new value. SwiftUI can animate the transition between sizes because [Circle](circle.md) conforms to the [Shape](shape.md) protocol. Shapes in SwiftUI conform to the [Animatable](animatable.md) protocol, which describes how to animate a property of a view.

In addition to adding an animation to a view, you can also configure the animation by applying animation modifiers to the animation type. For example, you can:

- Delay the start of the animation by using the [delay(\_:)](animation/delay%28__%29.md) modifier.
- Repeat the animation by using the [repeatCount(\_:autoreverses:)](animation/repeatcount%28__autoreverses_%29.md) or [repeatForever(autoreverses:)](animation/repeatforever%28autoreverses_%29.md) modifiers.
- Change the speed of the animation by using the [speed(\_:)](animation/speed%28__%29.md) modifier.

For example, the [Circle](circle.md) view in the following code repeats the [easeIn](animation/easein.md) animation three times by using the [repeatCount(\_:autoreverses:)](animation/repeatcount%28__autoreverses_%29.md) modifier:

```swift
struct ContentView: View {
    @State private var scale = 0.5

    var body: some View {
        VStack {
            Circle()
                .scaleEffect(scale)
                .animation(.easeIn.repeatCount(3), value: scale)
            HStack {
                Button("+") { scale += 0.1 }
                Button("-") { scale -= 0.1 }
            }
        }
        .padding()
    }
}
```

Video: animation-02-overview-easein-repeat.mp4

A view can also perform an animation when a binding value changes. To specify the animation type on a binding, call its [animation(\_:)](binding/animation%28__%29.md) method. For example, the view in the following code performs a [linear](animation/linear.md) animation, moving the box truck between the leading and trailing edges of the view. The truck moves each time a person clicks the [Toggle](toggle.md) control, which changes the value of the `$isTrailing` binding.

```swift
struct ContentView: View {
    @State private var isTrailing = false

    var body: some View {
       VStack(alignment: isTrailing ? .trailing : .leading) {
            Image(systemName: "box.truck")
                .font(.system(size: 64))

            Toggle("Move to trailing edge",
                   isOn: $isTrailing.animation(.linear))
        }
    }
}
```

Video: animation-03-overview-binding.mp4

## Topics

### Getting the default animation

- [default](animation/default.md): A default animation instance.

### Getting linear animations

- [linear](animation/linear.md): An animation that moves at a constant speed.
- [linear(duration:)](animation/linear%28duration_%29.md): An animation that moves at a constant speed during a specified duration.

### Getting eased animations

- [easeIn](animation/easein.md): An animation that starts slowly and then increases speed towards the end of the movement.
- [easeIn(duration:)](animation/easein%28duration_%29.md): An animation with a specified duration that starts slowly and then increases speed towards the end of the movement.
- [easeOut](animation/easeout.md): An animation that starts quickly and then slows towards the end of the movement.
- [easeOut(duration:)](animation/easeout%28duration_%29.md): An animation with a specified duration that starts quickly and then slows towards the end of the movement.
- [easeInOut](animation/easeinout.md): An animation that combines the behaviors of in and out easing animations.
- [easeInOut(duration:)](animation/easeinout%28duration_%29.md): An animation with a specified duration that combines the behaviors of in and out easing animations.

### Getting built-in spring animations

- [bouncy](animation/bouncy.md): A spring animation with a predefined duration and higher amount of bounce.
- [bouncy(duration:extraBounce:)](animation/bouncy%28duration_extrabounce_%29.md): A spring animation with a predefined duration and higher amount of bounce that can be tuned.
- [smooth](animation/smooth.md): A smooth spring animation with a predefined duration and no bounce.
- [smooth(duration:extraBounce:)](animation/smooth%28duration_extrabounce_%29.md): A smooth spring animation with a predefined duration and no bounce that can be tuned.
- [snappy](animation/snappy.md): A spring animation with a predefined duration and small amount of bounce that feels more snappy.
- [snappy(duration:extraBounce:)](animation/snappy%28duration_extrabounce_%29.md): A spring animation with a predefined duration and small amount of bounce that feels more snappy and can be tuned.

### Customizing spring animations

- [spring](animation/spring.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the response values between springs over a time period.
- [spring(\_:blendDuration:)](animation/spring%28__blendduration_%29.md): A persistent spring animation.
- [spring(duration:bounce:blendDuration:)](animation/spring%28duration_bounce_blendduration_%29.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the duration values between springs over a time period.
- [spring(response:dampingFraction:blendDuration:)](animation/spring%28response_dampingfraction_blendduration_%29.md): A persistent spring animation. When mixed with other `spring()` or `interactiveSpring()` animations on the same property, each animation will be replaced by their successor, preserving velocity from one animation to the next. Optionally blends the response values between springs over a time period.
- [interactiveSpring](animation/interactivespring.md): A convenience for a `spring` animation with a lower `duration` value, intended for driving interactive animations.
- [interactiveSpring(response:dampingFraction:blendDuration:)](animation/interactivespring%28response_dampingfraction_blendduration_%29.md): A convenience for a `spring` animation with a lower `response` value, intended for driving interactive animations.
- [interpolatingSpring](animation/interpolatingspring.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
- [interpolatingSpring(\_:initialVelocity:)](animation/interpolatingspring%28__initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range of one to zero.
- [interpolatingSpring(duration:bounce:initialVelocity:)](animation/interpolatingspring%28duration_bounce_initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.
- [interpolatingSpring(mass:stiffness:damping:initialVelocity:)](animation/interpolatingspring%28mass_stiffness_damping_initialvelocity_%29.md): An interpolating spring animation that uses a damped spring model to produce values in the range \[0, 1\] that are then used to interpolate within the \[from, to\] range of the animated property. Preserves velocity across overlapping animations by adding the effects of each animation.

### Creating custom animations

- [init(\_:)](animation/init%28__%29.md): Create an `Animation` that contains the specified custom animation.
- [timingCurve(\_:duration:)](animation/timingcurve%28__duration_%29.md): Creates a new animation with speed controlled by the given curve.
- [timingCurve(\_:\_:\_:\_:duration:)](animation/timingcurve%28________duration_%29.md): An animation created from a cubic Bézier timing curve.

### Configuring an animation

- [delay(\_:)](animation/delay%28__%29.md): Delays the start of the animation by the specified number of seconds.
- [repeatCount(\_:autoreverses:)](animation/repeatcount%28__autoreverses_%29.md): Repeats the animation for a specific number of times.
- [repeatForever(autoreverses:)](animation/repeatforever%28autoreverses_%29.md): Repeats the animation for the lifespan of the view containing the animation.
- [speed(\_:)](animation/speed%28__%29.md): Changes the duration of an animation by adjusting its speed.

### Instance Properties

- [base](animation/base.md)

### Instance Methods

- [animate(value:time:context:)](animation/animate%28value_time_context_%29.md): Calculates the current value of the animation.
- [logicallyComplete(after:)](animation/logicallycomplete%28after_%29.md): Causes the animation to report logical completion after the specified duration, if it has not already logically completed.
- [shouldMerge(previous:value:time:context:)](animation/shouldmerge%28previous_value_time_context_%29.md): Returns a Boolean value that indicates whether the current animation should merge with a previous animation.
- [velocity(value:time:context:)](animation/velocity%28value_time_context_%29.md): Calculates the current velocity of the animation.

### Type Properties

- [systemOverlayAppearance](animation/systemoverlayappearance.md): Animation used when system overlays appear.
- [systemOverlayDelayedDisappearance](animation/systemoverlaydelayeddisappearance.md): Animation used when system overlays disappear, with a delay equal to `systemOverlayDisappearanceDelay`.
- [systemOverlayDisappearance](animation/systemoverlaydisappearance.md): Animation used when system overlays disappear.
- [systemOverlayDisappearanceDelay](animation/systemoverlaydisappearancedelay.md): The length of time system overlays remain visible before disappearing.

### Type Methods

- [interactiveSpring(duration:extraBounce:blendDuration:)](animation/interactivespring%28duration_extrabounce_blendduration_%29.md): A convenience for a `spring` animation with a lower `response` value, intended for driving interactive animations.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding state-based animation to an action

- [withAnimation(\_:\_:)](withanimation%28____%29.md): Returns the result of recomputing the view’s body with the provided animation.
- [withAnimation(\_:completionCriteria:\_:completion:)](withanimation%28__completioncriteria___completion_%29.md): Returns the result of recomputing the view’s body with the provided animation, and runs the completion when all animations are complete.
- [AnimationCompletionCriteria](animationcompletioncriteria.md): The criteria that determines when an animation is considered finished.
