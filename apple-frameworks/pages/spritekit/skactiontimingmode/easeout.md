> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skactiontimingmode/easeout](https://developer.apple.com/documentation/spritekit/skactiontimingmode/easeout)

# SKActionTimingMode.easeOut (Swift)

**Framework:** SpriteKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies ease-out pacing. Ease-out pacing causes the animation to begin quickly and then slow as it completes.

## Declaration

```swift
case easeOut
```

<a id="Discussion"></a>

## Discussion

By creating two separate actions, a [moveTo(x:duration:)](../skaction/moveto%28x_duration_%29.md) and a [moveTo(y:duration:)](../skaction/moveto%28y_duration_%29.md), and setting the former to [SKActionTimingMode.easeOut](easeout.md), you can visualize the effect of this timing mode by tracing the path of a circular shape node running the actions in a group:

![Visualizing ease-out pacing](https://developer.apple.com/images/com.apple.spritekit/media-2743419@2x.png)

## See Also

### Constants

- [SKActionTimingMode.linear](linear.md): Specifies linear pacing. Linear pacing causes an animation to occur evenly over its duration.
- [SKActionTimingMode.easeIn](easein.md): Specifies ease-in pacing. Ease-in pacing causes the animation to begin slowly and then speed up as it progresses.
- [SKActionTimingMode.easeInEaseOut](easeineaseout.md): Specifies ease-in ease-out pacing. An ease-in ease-out animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.

# SKActionTimingEaseOut (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Specifies ease-out pacing. Ease-out pacing causes the animation to begin quickly and then slow as it completes.

## Declaration

```objectivec
SKActionTimingEaseOut
```

<a id="Discussion"></a>

## Discussion

By creating two separate actions, a [moveToX:duration:](../skaction/moveto%28x_duration_%29.md) and a [moveToY:duration:](../skaction/moveto%28y_duration_%29.md), and setting the former to [SKActionTimingEaseOut](easeout.md), you can visualize the effect of this timing mode by tracing the path of a circular shape node running the actions in a group:

![Visualizing ease-out pacing](https://developer.apple.com/images/com.apple.spritekit/media-2743419@2x.png)

## See Also

### Constants

- [SKActionTimingLinear](linear.md): Specifies linear pacing. Linear pacing causes an animation to occur evenly over its duration.
- [SKActionTimingEaseIn](easein.md): Specifies ease-in pacing. Ease-in pacing causes the animation to begin slowly and then speed up as it progresses.
- [SKActionTimingEaseInEaseOut](easeineaseout.md): Specifies ease-in ease-out pacing. An ease-in ease-out animation begins slowly, accelerates through the middle of its duration, and then slows again before completing.
