> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/trianglecount](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/trianglecount)

# triangleCount (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of triangles in the mesh.

## Declaration

```swift
var triangleCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is valid only after calling the [triangulate()](triangulate%28%29.md) to create a mesh around the current configuration of obstacles.

## See Also

### Managing the Mesh

- [triangulate()](triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangulationMode](triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangle(at:)](triangle%28at_%29.md): The triangle definition at the specified index.

# triangleCount (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of triangles in the mesh.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger triangleCount;
```

<a id="Discussion"></a>

## Discussion

This property’s value is valid only after calling the [triangulate](triangulate%28%29.md) to create a mesh around the current configuration of obstacles.

## See Also

### Managing the Mesh

- [triangulate](triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangulationMode](triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangleAtIndex:](triangle%28at_%29.md): The triangle definition at the specified index.
