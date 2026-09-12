> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraphtriangulationmode](https://developer.apple.com/documentation/gameplaykit/gkmeshgraphtriangulationmode)

# GKMeshGraphTriangulationMode (Swift)

**Framework:** GameplayKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for how to place graph nodes when generating the graph, used by the [triangulationMode](gkmeshgraph/triangulationmode.md) property.

## Declaration

```swift
struct GKMeshGraphTriangulationMode
```

## Topics

### Constants

- [vertices](gkmeshgraphtriangulationmode/vertices.md): An option to place graph nodes at each vertex in the generated mesh.
- [centers](gkmeshgraphtriangulationmode/centers.md): An option to place graph nodes at the center of each polygon in the generated mesh.
- [edgeMidpoints](gkmeshgraphtriangulationmode/edgemidpoints.md): An option to place graph nodes at the midpoint of each in the generated mesh.

### Initializers

- [init(rawValue:)](gkmeshgraphtriangulationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [GKTriangle](gktriangle.md): The definition of a triangle in the mesh, available with the [triangle(at:)](gkmeshgraph/triangle%28at_%29.md) method.

# GKMeshGraphTriangulationMode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for how to place graph nodes when generating the graph, used by the [triangulationMode](gkmeshgraph/triangulationmode.md) property.

## Declaration

```objectivec
enum GKMeshGraphTriangulationMode : NSUInteger;
```

## Topics

### Constants

- [GKMeshGraphTriangulationModeVertices](gkmeshgraphtriangulationmode/vertices.md): An option to place graph nodes at each vertex in the generated mesh.
- [GKMeshGraphTriangulationModeCenters](gkmeshgraphtriangulationmode/centers.md): An option to place graph nodes at the center of each polygon in the generated mesh.
- [GKMeshGraphTriangulationModeEdgeMidpoints](gkmeshgraphtriangulationmode/edgemidpoints.md): An option to place graph nodes at the midpoint of each in the generated mesh.

## See Also

### Constants

- [GKTriangle](gktriangle.md): The definition of a triangle in the mesh, available with the [triangleAtIndex:](gkmeshgraph/triangle%28at_%29.md) method.
