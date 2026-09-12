> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/triangulationmode](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/triangulationmode)

# triangulationMode (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A set of options for how to place graph nodes when triangulating the graph.

## Declaration

```swift
var triangulationMode: GKMeshGraphTriangulationMode { get set }
```

<a id="Discussion"></a>

## Discussion

The [triangulate()](triangulate%28%29.md) method creates an internal model the empty space around the obstacles in the graph in the form of a polygon mesh. The mesh is generated such that the empty space divides into roughly even partitions, each of which is no more than a certain distance from an obstacle. After generating the mesh, the [triangulate()](triangulate%28%29.md) method adds nodes to the graph corresponding to locations in the mesh. This property controls which locations in the mesh become nodes in the graph.

The [GKMeshGraphTriangulationMode](../gkmeshgraphtriangulationmode.md) type is an option set: you can place nodes using multiple modes by combining the relevant constants with [OptionSet](https://developer.apple.com/documentation/swift/optionset) syntax, or bitwise OR operations in Objective-C. Combining modes yields a denser graph, which can lead to slower pathfinding operations but smoother resulting paths. For best results, experiment with different modes and combinations to find the most natural style of movement for your game.

## See Also

### Managing the Mesh

- [triangulate()](triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangle(at:)](triangle%28at_%29.md): The triangle definition at the specified index.
- [triangleCount](trianglecount.md): The number of triangles in the mesh.

# triangulationMode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A set of options for how to place graph nodes when triangulating the graph.

## Declaration

```objectivec
@property (nonatomic) GKMeshGraphTriangulationMode triangulationMode;
```

<a id="Discussion"></a>

## Discussion

The [triangulate](triangulate%28%29.md) method creates an internal model the empty space around the obstacles in the graph in the form of a polygon mesh. The mesh is generated such that the empty space divides into roughly even partitions, each of which is no more than a certain distance from an obstacle. After generating the mesh, the [triangulate](triangulate%28%29.md) method adds nodes to the graph corresponding to locations in the mesh. This property controls which locations in the mesh become nodes in the graph.

The [GKMeshGraphTriangulationMode](../gkmeshgraphtriangulationmode.md) type is an option set: you can place nodes using multiple modes by combining the relevant constants with [OptionSet](https://developer.apple.com/documentation/swift/optionset) syntax, or bitwise OR operations in Objective-C. Combining modes yields a denser graph, which can lead to slower pathfinding operations but smoother resulting paths. For best results, experiment with different modes and combinations to find the most natural style of movement for your game.

## See Also

### Managing the Mesh

- [triangulate](triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangleAtIndex:](triangle%28at_%29.md): The triangle definition at the specified index.
- [triangleCount](trianglecount.md): The number of triangles in the mesh.
