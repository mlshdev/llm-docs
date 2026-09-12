> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimationcalculationmode/paced](https://developer.apple.com/documentation/quartzcore/caanimationcalculationmode/paced)

# paced (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Linear keyframe values are interpolated to produce an even pace throughout the animation.

## Declaration

```swift
static let paced: CAAnimationCalculationMode
```

<a id="Discussion"></a>

## Discussion

`kCAAnimationPaced` gives a linearly interpolated animation, but [keyTimes](../cakeyframeanimation/keytimes.md) and [timingFunction](../caanimation/timingfunction.md) are ignored and keyframe times are automatically generated to give the animation a constant velocity.

The following code shows how to create a keyframe animation object using paced interpolation.

Listing 1. Creating paced key values

```objc
let keyframeAnimation = CAKeyframeAnimation(keyPath: "position.y")
keyframeAnimation.calculationMode = kCAAnimationPaced
keyframeAnimation.values = [310, 60, 120, 60, 310]
```

A layer animated with the keyframe animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Tracing the path of an animation using paced key values](https://developer.apple.com/images/com.apple.quartzcore/media-2776792@2x.png)

## See Also

### Constants

- [linear](linear.md): Simple linear calculation between keyframe values.
- [discrete](discrete.md): Each keyframe value is used in turn, no interpolated values are calculated.
- [cubic](cubic.md): Smooth spline calculation between keyframe values.
- [cubicPaced](cubicpaced.md): Cubic keyframe values are interpolated to produce an even pace throughout the animation.

# kCAAnimationPaced (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Linear keyframe values are interpolated to produce an even pace throughout the animation.

## Declaration

```objectivec
extern CAAnimationCalculationMode const kCAAnimationPaced;
```

<a id="Discussion"></a>

## Discussion

`kCAAnimationPaced` gives a linearly interpolated animation, but [keyTimes](../cakeyframeanimation/keytimes.md) and [timingFunction](../caanimation/timingfunction.md) are ignored and keyframe times are automatically generated to give the animation a constant velocity.

The following code shows how to create a keyframe animation object using paced interpolation.

Listing 1. Creating paced key values

```objc
let keyframeAnimation = CAKeyframeAnimation(keyPath: "position.y")
keyframeAnimation.calculationMode = kCAAnimationPaced
keyframeAnimation.values = [310, 60, 120, 60, 310]
```

A layer animated with the keyframe animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Tracing the path of an animation using paced key values](https://developer.apple.com/images/com.apple.quartzcore/media-2776792@2x.png)

## See Also

### Constants

- [kCAAnimationLinear](linear.md): Simple linear calculation between keyframe values.
- [kCAAnimationDiscrete](discrete.md): Each keyframe value is used in turn, no interpolated values are calculated.
- [kCAAnimationCubic](cubic.md): Smooth spline calculation between keyframe values.
- [kCAAnimationCubicPaced](cubicpaced.md): Cubic keyframe values are interpolated to produce an even pace throughout the animation.
