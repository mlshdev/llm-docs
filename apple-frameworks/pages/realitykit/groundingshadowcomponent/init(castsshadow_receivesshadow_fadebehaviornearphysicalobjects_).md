> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/groundingshadowcomponent/init(castsshadow:receivesshadow:fadebehaviornearphysicalobjects:)

# init(castsShadow:receivesShadow:fadeBehaviorNearPhysicalObjects:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates a grounding shadow component by configuring whether its entity receives shadows and its fade behavior near physical objects.

## Declaration

```swift
init(castsShadow: Bool, receivesShadow: Bool, fadeBehaviorNearPhysicalObjects: GroundingShadowComponent.FadeBehaviorNearPhysicalObjects)
```

## Parameters

- `castsShadow`: A Boolean value that indicates whether the component’s entity casts a shadow on the environment and other model entities.
- `receivesShadow`: A Boolean value that indicates whether the component’s entity receives shadows from other model entities.
- `fadeBehaviorNearPhysicalObjects`: A fade behavior for the entity’s shadow when the entity is near physical objects.
