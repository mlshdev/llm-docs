> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/triangulate()](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/triangulate())

# triangulate() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates or updates the graph with a network of nodes that describes the open space around its obstacles.

## Declaration

```swift
func triangulate()
```

<a id="Discussion"></a>

## Discussion

The [GKMeshGraph](../gkmeshgraph.md) class adds, removes, and arranges nodes to describe the navigable areas around obstacles *only* when you call this method. Typically, you add or remove several obstacles, then call the [triangulate()](triangulate%28%29.md) method to update the graph. You should also call this method after changing the [triangulationMode](triangulationmode.md) property.

After triangulating, the graph reflects the navigability of open space around its obstacles and can be used for any number of [findPath(from:to:)](../gkgraph/findpath%28from_to_%29.md) calls. Changing the list of obstacles requires retriangulating the graph.

## See Also

### Managing the Mesh

- [triangulationMode](triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangle(at:)](triangle%28at_%29.md): The triangle definition at the specified index.
- [triangleCount](trianglecount.md): The number of triangles in the mesh.

# triangulate (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates or updates the graph with a network of nodes that describes the open space around its obstacles.

## Declaration

```objectivec
- (void) triangulate;
```

<a id="Discussion"></a>

## Discussion

The [GKMeshGraph](../gkmeshgraph.md) class adds, removes, and arranges nodes to describe the navigable areas around obstacles *only* when you call this method. Typically, you add or remove several obstacles, then call the [triangulate](triangulate%28%29.md) method to update the graph. You should also call this method after changing the [triangulationMode](triangulationmode.md) property.

After triangulating, the graph reflects the navigability of open space around its obstacles and can be used for any number of [findPathFromNode:toNode:](../gkgraph/findpath%28from_to_%29.md) calls. Changing the list of obstacles requires retriangulating the graph.

## See Also

### Managing the Mesh

- [triangulationMode](triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangleAtIndex:](triangle%28at_%29.md): The triangle definition at the specified index.
- [triangleCount](trianglecount.md): The number of triangles in the mesh.
