> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatimingfunctionname/easein](https://developer.apple.com/documentation/quartzcore/camediatimingfunctionname/easein)

# easeIn (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Ease-in pacing, which causes an animation to begin slowly and then speed up as it progresses.

## Declaration

```swift
static let easeIn: CAMediaTimingFunctionName
```

<a id="Discussion"></a>

## Discussion

This is a Bézier timing function with the control points (0.42,0.0) and (1.0,1.0).

The following code shows how to create a basic animation object using ease-in interpolation.

```swift
 let verticalAnimation = CABasicAnimation(keyPath: "position.y")
 verticalAnimation.fromValue = 310
 verticalAnimation.toValue = 10
 verticalAnimation.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionEaseIn)
```

A layer animated with the animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Path taken using ease-in timing function](https://developer.apple.com/images/com.apple.quartzcore/media-2776814@2x.png)

## See Also

### Constants

- [linear](linear.md): Linear pacing, which causes an animation to occur evenly over its duration.
- [easeOut](easeout.md): Ease-out pacing, which causes an animation to begin quickly and then slow as it progresses.
- [easeInEaseOut](easeineaseout.md): Ease-in-ease-out pacing, which causes an animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- [default](default.md): The system default timing function. Use this function to ensure that the timing of your animations matches that of most system animations.

# kCAMediaTimingFunctionEaseIn (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Ease-in pacing, which causes an animation to begin slowly and then speed up as it progresses.

## Declaration

```objectivec
extern CAMediaTimingFunctionName const kCAMediaTimingFunctionEaseIn;
```

<a id="Discussion"></a>

## Discussion

This is a Bézier timing function with the control points (0.42,0.0) and (1.0,1.0).

The following code shows how to create a basic animation object using ease-in interpolation.

```swift
 let verticalAnimation = CABasicAnimation(keyPath: "position.y")
 verticalAnimation.fromValue = 310
 verticalAnimation.toValue = 10
 verticalAnimation.timingFunction = CAMediaTimingFunction(name: kCAMediaTimingFunctionEaseIn)
```

A layer animated with the animation created by the code above and with linearly interpolated horizontal movement would describe a path similar to the following figure.

![Path taken using ease-in timing function](https://developer.apple.com/images/com.apple.quartzcore/media-2776814@2x.png)

## See Also

### Constants

- [kCAMediaTimingFunctionLinear](linear.md): Linear pacing, which causes an animation to occur evenly over its duration.
- [kCAMediaTimingFunctionEaseOut](easeout.md): Ease-out pacing, which causes an animation to begin quickly and then slow as it progresses.
- [kCAMediaTimingFunctionEaseInEaseOut](easeineaseout.md): Ease-in-ease-out pacing, which causes an animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
- [kCAMediaTimingFunctionDefault](default.md): The system default timing function. Use this function to ensure that the timing of your animations matches that of most system animations.
