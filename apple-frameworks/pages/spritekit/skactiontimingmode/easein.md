> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skactiontimingmode/easein](https://developer.apple.com/documentation/spritekit/skactiontimingmode/easein)

# SKActionTimingMode.easeIn (Swift)

**Framework:** SpriteKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies ease-in pacing. Ease-in pacing causes the animation to begin slowly and then speed up as it progresses.

## Declaration

```swift
case easeIn
```

<a id="Discussion"></a>

## Discussion

By creating two separate actions, a [moveTo(x:duration:)](../skaction/moveto%28x_duration_%29.md) and a [moveTo(y:duration:)](../skaction/moveto%28y_duration_%29.md), and setting the former to [SKActionTimingMode.easeIn](easein.md), you can visualize the effect of this timing mode by tracing the path of a circular shape node running the actions in a group:

![Visualizing ease-in pacing](https://developer.apple.com/images/com.apple.spritekit/media-2743318@2x.png)

## See Also

### Constants

- [SKActionTimingMode.linear](linear.md): Specifies linear pacing. Linear pacing causes an animation to occur evenly over its duration.
- [SKActionTimingMode.easeOut](easeout.md): Specifies ease-out pacing. Ease-out pacing causes the animation to begin quickly and then slow as it completes.
- [SKActionTimingMode.easeInEaseOut](easeineaseout.md): Specifies ease-in ease-out pacing. An ease-in ease-out animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.

# SKActionTimingEaseIn (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies ease-in pacing. Ease-in pacing causes the animation to begin slowly and then speed up as it progresses.

## Declaration

```objectivec
SKActionTimingEaseIn
```

<a id="Discussion"></a>

## Discussion

By creating two separate actions, a [moveToX:duration:](../skaction/moveto%28x_duration_%29.md) and a [moveToY:duration:](../skaction/moveto%28y_duration_%29.md), and setting the former to [SKActionTimingEaseIn](easein.md), you can visualize the effect of this timing mode by tracing the path of a circular shape node running the actions in a group:

![Visualizing ease-in pacing](https://developer.apple.com/images/com.apple.spritekit/media-2743318@2x.png)

## See Also

### Constants

- [SKActionTimingLinear](linear.md): Specifies linear pacing. Linear pacing causes an animation to occur evenly over its duration.
- [SKActionTimingEaseOut](easeout.md): Specifies ease-out pacing. Ease-out pacing causes the animation to begin quickly and then slow as it completes.
- [SKActionTimingEaseInEaseOut](easeineaseout.md): Specifies ease-in ease-out pacing. An ease-in ease-out animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.
