> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/groundingshadowcomponent/init(castsshadow:receivesshadow:)

# init(castsShadow:receivesShadow:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a grounding shadow component by configuring whether its entity receives shadows from other model entities with the component.

## Declaration

```swift
init(castsShadow: Bool, receivesShadow: Bool)
```

## Parameters

- `castsShadow`: A Boolean value that indicates whether the component’s entity casts a shadow on the environment and other model entities.
- `receivesShadow`: A Boolean value that indicates whether the component’s entity receives shadows from other model entities.

<a id="discussion"></a>

## Discussion

This initializer is an alternative to [init(castsShadow:)](init%28castsshadow_%29.md), which creates a component that, by default, configures an entity to receive grounding shadows from other model entities in the scene.
