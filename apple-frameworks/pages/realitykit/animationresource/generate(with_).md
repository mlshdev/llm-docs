> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationresource/generate(with:)](https://developer.apple.com/documentation/realitykit/animationresource/generate(with:))

# generate(with:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates an animation resource from a definition.

## Declaration

```swift
@MainActor @preconcurrency static func generate(with definition: any AnimationDefinition) throws -> AnimationResource
```

## Parameters

- `definition`: The configuration of a timeframe and visual semantics from which to generate an animation resource.

<a id="return-value"></a>

## Return Value

An animation resource that shares the configuration of the definition.

## See Also

### Creating an animation resource

- [sequence(with:)](sequence%28with_%29.md): Creates an animation resource that plays a collection of animations in a specified sequence.
- [group(with:)](group%28with_%29.md): Creates an animation resource that simultaneously plays back a collection of animations.
- [repeat(count:)](repeat%28count_%29.md): Creates an animation that repeats the specified number of times.
- [repeat(duration:)](repeat%28duration_%29.md): Repeats an animation for the specified amount of time.
