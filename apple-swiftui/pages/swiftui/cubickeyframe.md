> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/cubickeyframe](https://developer.apple.com/documentation/swiftui/cubickeyframe)

# CubicKeyframe

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A keyframe that uses a cubic curve to smoothly interpolate between values.

## Declaration

```swift
struct CubicKeyframe<Value> where Value : Animatable
```

<a id="overview"></a>

## Overview

If you don’t specify a start or end velocity, SwiftUI automatically computes a curve that maintains smooth motion between keyframes.

Adjacent cubic keyframes result in a Catmull-Rom spline.

If a cubic keyframe follows a different type of keyframe, such as a linear keyframe, the end velocity of the segment defined by the previous keyframe will be used as the starting velocity.

Likewise, if a cubic keyframe is followed by a different type of keyframe, the initial velocity of the next segment is used as the end velocity of the segment defined by this keyframe.

## Topics

### Creating the keyframe

- [init(\_:duration:startVelocity:endVelocity:)](cubickeyframe/init%28__duration_startvelocity_endvelocity_%29.md): Creates a new keyframe using the given value and timestamp.

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
- [LinearKeyframe](linearkeyframe.md): A keyframe that uses simple linear interpolation.
- [MoveKeyframe](movekeyframe.md): A keyframe that immediately moves to the given value without interpolating.
- [SpringKeyframe](springkeyframe.md): A keyframe that uses a spring function to interpolate to the given value.
