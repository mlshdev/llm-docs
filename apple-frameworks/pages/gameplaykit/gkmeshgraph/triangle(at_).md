> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkmeshgraph/triangle(at:)](https://developer.apple.com/documentation/gameplaykit/gkmeshgraph/triangle(at:))

# triangle(at:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The triangle definition at the specified index.

## Declaration

```swift
func triangle(at index: Int) -> GKTriangle
```

## Parameters

- `index`: An index identifying the triangle. Must be less than the value of the [triangleCount](trianglecount.md) property.

<a id="return-value"></a>

## Return Value

A structure describing the specified triangle.

<a id="Discussion"></a>

## Discussion

This method provides valid results only after calling the [triangulate()](triangulate%28%29.md) to create a mesh around the current configuration of obstacles. The information this method provides can be useful for drawing your own overlay UI to debug the graphs you create.

## See Also

### Managing the Mesh

- [triangulate()](triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangulationMode](triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangleCount](trianglecount.md): The number of triangles in the mesh.

# triangleAtIndex: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The triangle definition at the specified index.

## Declaration

```objectivec
- (GKTriangle) triangleAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: An index identifying the triangle. Must be less than the value of the [triangleCount](trianglecount.md) property.

<a id="return-value"></a>

## Return Value

A structure describing the specified triangle.

<a id="Discussion"></a>

## Discussion

This method provides valid results only after calling the [triangulate](triangulate%28%29.md) to create a mesh around the current configuration of obstacles. The information this method provides can be useful for drawing your own overlay UI to debug the graphs you create.

## See Also

### Managing the Mesh

- [triangulate](triangulate%28%29.md): Creates or updates the graph with a network of nodes that describes the open space around its obstacles.
- [triangulationMode](triangulationmode.md): A set of options for how to place graph nodes when triangulating the graph.
- [triangleCount](trianglecount.md): The number of triangles in the mesh.
