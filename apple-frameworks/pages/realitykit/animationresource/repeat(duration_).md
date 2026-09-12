> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationresource/repeat(duration:)](https://developer.apple.com/documentation/realitykit/animationresource/repeat(duration:))

# repeat(duration:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Repeats an animation for the specified amount of time.

## Declaration

```swift
@MainActor @preconcurrency func `repeat`(duration: TimeInterval = .infinity) -> AnimationResource
```

## Parameters

- `duration`: The amount of time that the animation should play. If you omit this parameter, the animation loops indefinitely.

<a id="return-value"></a>

## Return Value

A new animation resource that you play on an entity by calling the entity’s [playAnimation(\_:transitionDuration:startsPaused:)](../entity/playanimation%28__transitionduration_startspaused_%29.md) method.

## See Also

### Creating an animation resource

- [generate(with:)](generate%28with_%29.md): Creates an animation resource from a definition.
- [sequence(with:)](sequence%28with_%29.md): Creates an animation resource that plays a collection of animations in a specified sequence.
- [group(with:)](group%28with_%29.md): Creates an animation resource that simultaneously plays back a collection of animations.
- [repeat(count:)](repeat%28count_%29.md): Creates an animation that repeats the specified number of times.
