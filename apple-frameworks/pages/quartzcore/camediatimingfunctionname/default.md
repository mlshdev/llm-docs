> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatimingfunctionname/default](https://developer.apple.com/documentation/quartzcore/camediatimingfunctionname/default)

# default (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The system default timing function. Use this function to ensure that the timing of your animations matches that of most system animations.

## Declaration

```swift
static let `default`: CAMediaTimingFunctionName
```

<a id="Discussion"></a>

## Discussion

This is a Bézier timing function with the control points (0.25,0.1) and (0.25,1.0).

The following code shows how to create a basic animation object using default interpolation:

```swift
 let verticalAnimation = CABasicAnimation(keyPath: "position.y")
 verticalAnimation.fromValue = 310
 verticalAnimation.toValue = 10
 verticalAnimation.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionDefault)
```

A layer animated with the animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Path taken using default timing function](https://developer.apple.com/images/com.apple.quartzcore/media-2776820@2x.png)

## See Also

### Constants

- [linear](linear.md): Linear pacing, which causes an animation to occur evenly over its duration.
- [easeIn](easein.md): Ease-in pacing, which causes an animation to begin slowly and then speed up as it progresses.
- [easeOut](easeout.md): Ease-out pacing, which causes an animation to begin quickly and then slow as it progresses.
- [easeInEaseOut](easeineaseout.md): Ease-in-ease-out pacing, which causes an animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.

# kCAMediaTimingFunctionDefault (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The system default timing function. Use this function to ensure that the timing of your animations matches that of most system animations.

## Declaration

```objectivec
extern CAMediaTimingFunctionName const kCAMediaTimingFunctionDefault;
```

<a id="Discussion"></a>

## Discussion

This is a Bézier timing function with the control points (0.25,0.1) and (0.25,1.0).

The following code shows how to create a basic animation object using default interpolation:

```swift
 let verticalAnimation = CABasicAnimation(keyPath: "position.y")
 verticalAnimation.fromValue = 310
 verticalAnimation.toValue = 10
 verticalAnimation.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionDefault)
```

A layer animated with the animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Path taken using default timing function](https://developer.apple.com/images/com.apple.quartzcore/media-2776820@2x.png)

## See Also

### Constants

- [kCAMediaTimingFunctionLinear](linear.md): Linear pacing, which causes an animation to occur evenly over its duration.
- [kCAMediaTimingFunctionEaseIn](easein.md): Ease-in pacing, which causes an animation to begin slowly and then speed up as it progresses.
- [kCAMediaTimingFunctionEaseOut](easeout.md): Ease-out pacing, which causes an animation to begin quickly and then slow as it progresses.
- [kCAMediaTimingFunctionEaseInEaseOut](easeineaseout.md): Ease-in-ease-out pacing, which causes an animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
