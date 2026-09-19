> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothsimulationcomponent/materialcollection/subscript(_:)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Accesses the material with the given name, returning `nil` if no material with that name exists.

## Declaration

```swift
subscript(name: String) -> ClothSimulationComponent.Material? { get set }
```
