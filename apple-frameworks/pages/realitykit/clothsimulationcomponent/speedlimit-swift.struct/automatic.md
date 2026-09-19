> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/speedlimit-swift.struct/automatic

# automatic

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Automatically configured speed limit, which limits particle displacement per time step to reduce self-collision tunneling. The limit is proportionate to the particle density of the simulation; a higher density produces a more aggressive speed cap.

## Declaration

```swift
static var automatic: ClothSimulationComponent.SpeedLimit { get }
```
