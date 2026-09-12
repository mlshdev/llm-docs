> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationresource/sequence(with:)](https://developer.apple.com/documentation/realitykit/animationresource/sequence(with:))

# sequence(with:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates an animation resource that plays a collection of animations in a specified sequence.

## Declaration

```swift
@MainActor @preconcurrency static func sequence(with resources: [AnimationResource]) throws -> AnimationResource
```

## Parameters

- `resources`: The collection of animation resources to play.

<a id="return-value"></a>

## Return Value

An animation resource that plays the given array of animations.

## See Also

### Creating an animation resource

- [generate(with:)](generate%28with_%29.md): Creates an animation resource from a definition.
- [group(with:)](group%28with_%29.md): Creates an animation resource that simultaneously plays back a collection of animations.
- [repeat(count:)](repeat%28count_%29.md): Creates an animation that repeats the specified number of times.
- [repeat(duration:)](repeat%28duration_%29.md): Repeats an animation for the specified amount of time.
