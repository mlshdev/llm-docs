> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationmeshresource/flaggroup](https://developer.apple.com/documentation/realitykit/navigationmeshresource/flaggroup)

# NavigationMeshResource.FlagGroup

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A collection of Flags.

## Declaration

```swift
struct FlagGroup
```

## Topics

### Modifying flags

- [setFlag(\_:)](flaggroup/setflag%28__%29.md): Sets a specific flag in the [NavigationMeshResource.FlagGroup](flaggroup.md).
- [unsetFlag(\_:)](flaggroup/unsetflag%28__%29.md): Unsets a specific flag in the [NavigationMeshResource.FlagGroup](flaggroup.md).

### Initializers

- [init(\_:)](flaggroup/init%28__%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Supporting types

- [NavigationMeshResource.Configuration](configuration-swift.struct.md): The NavigationMeshResource configuration that defines how the mesh is created.
- [NavigationMeshResource.Area](area.md): An identifier for different areas on a Navigation Mesh.
- [NavigationMeshResource.Flag](flag.md): An identifier for different flags on a Navigation Mesh.
- [NavigationMeshResource.OffMeshConnection](offmeshconnection.md): A container for the data associated with an off-mesh connection.
- [NavigationMeshResource.HeightData](heightdata-swift.struct.md): A container for the detailed height data of the NavigationMeshResource.
- [NavigationMeshResource.Layer](layer-swift.struct.md): An identifier for a Navigation Mesh, used by a [NavigationComponent](../navigationcomponent.md) to select a specific Navigation Mesh for pathfinding.
- [NavigationMeshResource.PathNode](pathnode.md): A container for the path node data.
