> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/frictionoverridescollection/subscript(_:)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Accesses the friction override for the given material pair, returning `nil` if no override exists.

## Declaration

```swift
subscript(key: ClothSimulationComponent.FrictionOverridesCollection.Key) -> ClothSimulationComponent.FrictionOverridesCollection.Value? { get set }
```
