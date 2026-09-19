> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/objectanchoringsource/init(name:in:)

# init(name:in:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates the object anchoring source by reference object file asset with provided name and bundle.

## Declaration

```swift
init(name: String, in bundle: Bundle = .main)
```

## Parameters

- `name`: The name of the reference object in the bundle.
- `bundle`: The bundle to load from.
