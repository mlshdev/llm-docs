> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/animationresource/definition

# definition

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The timeframe, target object, and visual semantics of the animation.

## Declaration

```swift
@MainActor @preconcurrency var definition: any AnimationDefinition { get }
```

## See Also

### Inspecting animation information

- [name](name.md): The name of the animation resource.
- [AnimationFillMode](../animationfillmode.md): Options that determine which animation frames display outside of the normal duration.
