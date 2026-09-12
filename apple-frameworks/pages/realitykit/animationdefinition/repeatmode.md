> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationdefinition/repeatmode](https://developer.apple.com/documentation/realitykit/animationdefinition/repeatmode)

# repeatMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An option that determines how the animation repeats.

## Declaration

```swift
var repeatMode: AnimationRepeatMode { get set }
```

<a id="discussion"></a>

## Discussion

If you call [trimmed(start:end:duration:)](trimmed%28start_end_duration_%29.md) with a `start` or `end` that lies outside of the timeline defined by [duration](duration.md), the animation fills the additional playback by applying this property.

## See Also

### Repeating animation playback

- [fillMode](fillmode.md): An option that determines which data displays outside of the normal duration.
- [repeated(count:)](repeated%28count_%29-937w.md): Repeats an animation the number of times specified by an irrational number.
- [repeated(count:)](repeated%28count_%29-941x8.md): Repeats an animation the number of times specified by a whole number.
- [repeatingForever()](repeatingforever%28%29.md): Repeats the animation infinitely.
