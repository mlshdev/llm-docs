> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/reverb/simulated(mesh:materials:)](https://developer.apple.com/documentation/realitykit/reverb/simulated(mesh:materials:))

# simulated(mesh:materials:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A reverb that is simulated from a reverb mesh and materials.

## Declaration

```swift
static func simulated(mesh: ReverbMeshResource, materials: [Audio.Material] = [.default]) -> Reverb
```

## Parameters

- `mesh`: The reverb mesh resource that defines the acoustic geometry of the space.
- `materials`: An array of audio materials that define how each surface absorbs and scatters sound. Each element corresponds to a material index in the mesh. Defaults to [default](../audio/material/default.md).

<a id="return-value"></a>

## Return Value

A reverb configured for runtime acoustic simulation.

<a id="discussion"></a>

## Discussion

Use this factory method to create a reverb that ray-traces acoustic geometry at runtime, simulating how sound reflects through the space defined by the mesh:

```swift
entity.components.set(
    ReverbComponent(reverb: .simulated(mesh: roomMesh, materials: [.concrete, .carpet, .glass]))
)
```

As spatial audio sources move through the space, the reverb updates dynamically — reflections tighten near walls and open up in larger areas.
