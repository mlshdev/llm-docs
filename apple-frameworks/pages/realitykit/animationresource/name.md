> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationresource/name](https://developer.apple.com/documentation/realitykit/animationresource/name)

# name

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The name of the animation resource.

## Declaration

```swift
@MainActor @preconcurrency final let name: String?
```

<a id="discussion"></a>

## Discussion

You can get an [AnimationPlaybackController](../animationplaybackcontroller.md) instance ready to play a particular resource that you reference by its name using the `playAnimation(named:transitionDuration:startsPaused:)` method.

## See Also

### Inspecting animation information

- [definition](definition.md): The timeframe, target object, and visual semantics of the animation.
- [AnimationFillMode](../animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
