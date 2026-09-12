> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caanimationcalculationmode/cubicpaced](https://developer.apple.com/documentation/quartzcore/caanimationcalculationmode/cubicpaced)

# cubicPaced (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cubic keyframe values are interpolated to produce an even pace throughout the animation.

## Declaration

```swift
static let cubicPaced: CAAnimationCalculationMode
```

<a id="Discussion"></a>

## Discussion

`kCAAnimationCubicPaced` gives a linearly interpolated animation, but [keyTimes](../cakeyframeanimation/keytimes.md) and [timingFunction](../caanimation/timingfunction.md) are ignored and keyframe times are automatically generated to give the animation a constant velocity.

The following code shows how to create a keyframe animation object using paced cubic interpolation.

```objc
let keyframeAnimation = CAKeyframeAnimation(keyPath: "position.y")
keyframeAnimation.calculationMode = kCAAnimationCubicPaced
keyframeAnimation.values = [310, 60, 120, 60, 310]
```

A layer animated with the keyframe animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Tracing the path of an animation using cubic paced key values](https://developer.apple.com/images/com.apple.quartzcore/media-2776794@2x.png)

## See Also

### Constants

- [linear](linear.md): Simple linear calculation between keyframe values.
- [discrete](discrete.md): Each keyframe value is used in turn, no interpolated values are calculated.
- [paced](paced.md): Linear keyframe values are interpolated to produce an even pace throughout the animation.
- [cubic](cubic.md): Smooth spline calculation between keyframe values.

# kCAAnimationCubicPaced (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Cubic keyframe values are interpolated to produce an even pace throughout the animation.

## Declaration

```objectivec
extern CAAnimationCalculationMode const kCAAnimationCubicPaced;
```

<a id="Discussion"></a>

## Discussion

`kCAAnimationCubicPaced` gives a linearly interpolated animation, but [keyTimes](../cakeyframeanimation/keytimes.md) and [timingFunction](../caanimation/timingfunction.md) are ignored and keyframe times are automatically generated to give the animation a constant velocity.

The following code shows how to create a keyframe animation object using paced cubic interpolation.

```objc
let keyframeAnimation = CAKeyframeAnimation(keyPath: "position.y")
keyframeAnimation.calculationMode = kCAAnimationCubicPaced
keyframeAnimation.values = [310, 60, 120, 60, 310]
```

A layer animated with the keyframe animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Tracing the path of an animation using cubic paced key values](https://developer.apple.com/images/com.apple.quartzcore/media-2776794@2x.png)

## See Also

### Constants

- [kCAAnimationLinear](linear.md): Simple linear calculation between keyframe values.
- [kCAAnimationDiscrete](discrete.md): Each keyframe value is used in turn, no interpolated values are calculated.
- [kCAAnimationPaced](paced.md): Linear keyframe values are interpolated to produce an even pace throughout the animation.
- [kCAAnimationCubic](cubic.md): Smooth spline calculation between keyframe values.
