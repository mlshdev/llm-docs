> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimationcalculationmode/linear](https://developer.apple.com/documentation/quartzcore/caanimationcalculationmode/linear)

# linear (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Simple linear calculation between keyframe values.

## Declaration

```swift
static let linear: CAAnimationCalculationMode
```

<a id="Discussion"></a>

## Discussion

The following code shows how to create a keyframe animation object using linear interpolation.

Listing 1. Creating linearly interpolated keyframes

```swift
let keyframeAnimation = CAKeyframeAnimation(keyPath: "position.y")
keyframeAnimation.calculationMode = kCAAnimationLinear
keyframeAnimation.keyTimes = [0, 0.25, 0.5, 0.75, 1]
keyframeAnimation.values = [310, 60, 120, 60, 310]
```

A layer animated with the keyframe animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Tracing the path of an animation using linearly interpolated keyframes](https://developer.apple.com/images/com.apple.quartzcore/media-2776788@2x.png)

## See Also

### Constants

- [discrete](discrete.md): Each keyframe value is used in turn, no interpolated values are calculated.
- [paced](paced.md): Linear keyframe values are interpolated to produce an even pace throughout the animation.
- [cubic](cubic.md): Smooth spline calculation between keyframe values.
- [cubicPaced](cubicpaced.md): Cubic keyframe values are interpolated to produce an even pace throughout the animation.

# kCAAnimationLinear (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Simple linear calculation between keyframe values.

## Declaration

```objectivec
extern CAAnimationCalculationMode const kCAAnimationLinear;
```

<a id="Discussion"></a>

## Discussion

The following code shows how to create a keyframe animation object using linear interpolation.

Listing 1. Creating linearly interpolated keyframes

```swift
let keyframeAnimation = CAKeyframeAnimation(keyPath: "position.y")
keyframeAnimation.calculationMode = kCAAnimationLinear
keyframeAnimation.keyTimes = [0, 0.25, 0.5, 0.75, 1]
keyframeAnimation.values = [310, 60, 120, 60, 310]
```

A layer animated with the keyframe animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Tracing the path of an animation using linearly interpolated keyframes](https://developer.apple.com/images/com.apple.quartzcore/media-2776788@2x.png)

## See Also

### Constants

- [kCAAnimationDiscrete](discrete.md): Each keyframe value is used in turn, no interpolated values are calculated.
- [kCAAnimationPaced](paced.md): Linear keyframe values are interpolated to produce an even pace throughout the animation.
- [kCAAnimationCubic](cubic.md): Smooth spline calculation between keyframe values.
- [kCAAnimationCubicPaced](cubicpaced.md): Cubic keyframe values are interpolated to produce an even pace throughout the animation.
