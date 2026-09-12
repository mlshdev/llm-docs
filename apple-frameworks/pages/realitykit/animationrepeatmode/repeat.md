> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationrepeatmode/repeat](https://developer.apple.com/documentation/realitykit/animationrepeatmode/repeat)

# AnimationRepeatMode.repeat

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A mode that restarts the animation after it completes.

## Declaration

```swift
case `repeat`
```

<a id="discussion"></a>

## Discussion

This mode restores the animated property to its initial value each time it restarts. For example, a [FromToByAnimation](../fromtobyanimation.md) with [fromValue](../fromtobyanimation/fromvalue-umpp.md) `=` `1.0`, [toValue](../fromtobyanimation/tovalue-4m4pm.md) `=` `2.0` and [repeatMode](../fromtobyanimation/repeatmode.md) set to this property repeats as, `1.0`, `2.0`, `1.0`, `2.0`, `1.0`, `2.0` and so on.

## See Also

### Choosing a repeat mode

- [AnimationRepeatMode.cumulative](cumulative.md): A mode that repeats indefinitely and begins each repetition by setting the animated property to the ending value of the previous repetition.
- [AnimationRepeatMode.autoReverse](autoreverse.md): A mode that reverses the animation after reaching the end or the beginning.
- [AnimationRepeatMode.none](none.md): An option that determines the animation doesn’t repeat.
