> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/anchoringcomponent/accessoryanchoringsource/init(device:)

# init(device:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

Creates the accessory anchoring source by the GCDevice asynchronously Returns an AccessoryAnchoringSource if the GCDevice supports spatial tracking, throwing an error otherwise

## Declaration

```swift
init(device: any GCDevice) async throws
```

## Parameters

- `device`: Device to track
