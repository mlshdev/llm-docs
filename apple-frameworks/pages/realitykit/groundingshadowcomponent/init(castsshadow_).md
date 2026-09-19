> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/groundingshadowcomponent/init(castsshadow:)

# init(castsShadow:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a grounding shadow component.

## Declaration

```swift
init(castsShadow: Bool)
```

## Parameters

- `castsShadow`: A Boolean that indicates whether an entity with the component casts a shadow onto other model entities in the scene.

<a id="discussion"></a>

## Discussion

By default, the component makes an entity receive grounding shadows from other model entities in the scene.
