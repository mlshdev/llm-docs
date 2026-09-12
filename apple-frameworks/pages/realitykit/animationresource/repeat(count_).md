> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationresource/repeat(count:)](https://developer.apple.com/documentation/realitykit/animationresource/repeat(count:))

# repeat(count:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates an animation that repeats the specified number of times.

## Declaration

```swift
@MainActor @preconcurrency func `repeat`(count: Int) -> AnimationResource
```

## Parameters

- `count`: The number of animation repetitions.

<a id="return-value"></a>

## Return Value

A repeating copy of the calling animation resource.

## See Also

### Creating an animation resource

- [generate(with:)](generate%28with_%29.md): Creates an animation resource from a definition.
- [sequence(with:)](sequence%28with_%29.md): Creates an animation resource that plays a collection of animations in a specified sequence.
- [group(with:)](group%28with_%29.md): Creates an animation resource that simultaneously plays back a collection of animations.
- [repeat(duration:)](repeat%28duration_%29.md): Repeats an animation for the specified amount of time.
