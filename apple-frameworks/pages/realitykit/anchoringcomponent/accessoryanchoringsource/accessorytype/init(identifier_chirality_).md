> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/accessoryanchoringsource/accessorytype/init(identifier:chirality:)

# init(identifier:chirality:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 27.0+

Creates a custom accessory type with a uniform type identifier and chirality.

## Declaration

```swift
init(identifier: String, chirality: AnchoringComponent.Target.Chirality)
```

## Parameters

- `identifier`: The uniform type identifier for the accessory.
- `chirality`: The chirality of the accessory, if applicable.
