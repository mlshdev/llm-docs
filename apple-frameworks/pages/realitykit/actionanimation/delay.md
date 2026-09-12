> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionanimation/delay](https://developer.apple.com/documentation/realitykit/actionanimation/delay)

# delay

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

An amount of time that lapses before the animation plays.

## Declaration

```swift
var delay: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `0`, which indicates that the animation plays with no delay. If you set a value for this property, the animation plays from its start time after the specified delay lapses.

During the delayed time, the animation doesn’t update. However, to fill the delayed time with some portion of animation, set a negative `AnimationAction/trimStart` instead and choose a `AnimationAction/fillMode` that displays the desired portion of animation.
