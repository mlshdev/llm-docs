> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/springkeyframe](https://developer.apple.com/documentation/swiftui/springkeyframe)

# SpringKeyframe

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A keyframe that uses a spring function to interpolate to the given value.

## Declaration

```swift
struct SpringKeyframe<Value> where Value : Animatable
```

## Topics

### Creating the keyframe

- [init(\_:duration:spring:startVelocity:)](springkeyframe/init%28__duration_spring_startvelocity_%29.md): Creates a new keyframe using the given value and timestamp.

## Relationships

### Conforms To

- [KeyframeTrackContent](keyframetrackcontent.md)

## See Also

### Creating keyframe-based animation

- [keyframeAnimator(initialValue:repeating:content:keyframes:)](view/keyframeanimator%28initialvalue_repeating_content_keyframes_%29.md): Loops the given keyframes continuously, updating the view using the modifiers you apply in `body`.
- [keyframeAnimator(initialValue:trigger:content:keyframes:)](view/keyframeanimator%28initialvalue_trigger_content_keyframes_%29.md): Plays the given keyframes when the given trigger value changes, updating the view using the modifiers you apply in `body`.
- [KeyframeAnimator](keyframeanimator.md): A container that animates its content with keyframes.
- [Keyframes](keyframes.md): A type that defines changes to a value over time.
- [KeyframeTimeline](keyframetimeline.md): A description of how a value changes over time, modeled using keyframes.
- [KeyframeTrack](keyframetrack.md): A sequence of keyframes animating a single property of a root type.
- [KeyframeTrackContentBuilder](keyframetrackcontentbuilder.md): The builder that creates keyframe track content from the keyframes that you define within a closure.
- [KeyframesBuilder](keyframesbuilder.md): A builder that combines keyframe content values into a single value.
- [KeyframeTrackContent](keyframetrackcontent.md): A group of keyframes that define an interpolation curve of an animatable value.
- [CubicKeyframe](cubickeyframe.md): A keyframe that uses a cubic curve to smoothly interpolate between values.
- [LinearKeyframe](linearkeyframe.md): A keyframe that uses simple linear interpolation.
- [MoveKeyframe](movekeyframe.md): A keyframe that immediately moves to the given value without interpolating.
