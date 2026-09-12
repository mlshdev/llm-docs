> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationdefinition/repeated(count:)-937w](https://developer.apple.com/documentation/realitykit/animationdefinition/repeated(count:)-937w)

# repeated(count:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Repeats an animation the number of times specified by an irrational number.

## Declaration

```swift
func repeated(count: TimeInterval) -> Self
```

## Parameters

- `count`: The number of times the animation repeats before stopping.

<a id="return-value"></a>

## Return Value

A version of the calling animation repeated the given number of times.

## See Also

### Repeating animation playback

- [repeatMode](repeatmode.md): An option that determines how the animation repeats.
- [fillMode](fillmode.md): An option that determines which data displays outside of the normal duration.
- [repeated(count:)](repeated%28count_%29-941x8.md): Repeats an animation the number of times specified by a whole number.
- [repeatingForever()](repeatingforever%28%29.md): Repeats the animation infinitely.
