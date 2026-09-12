> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gktriangle](https://developer.apple.com/documentation/gameplaykit/gktriangle)

# GKTriangle (Swift)

**Framework:** GameplayKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The definition of a triangle in the mesh, available with the [triangle(at:)](gkmeshgraph/triangle%28at_%29.md) method.

## Declaration

```swift
struct GKTriangle
```

## Topics

### Initializers

- [init()](gktriangle/init%28%29.md)
- [init(points:)](gktriangle/init%28points_%29.md)

### Instance Properties

- [points](gktriangle/points.md): A set of three points describing the triangle.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Constants

- [GKMeshGraphTriangulationMode](gkmeshgraphtriangulationmode.md): Options for how to place graph nodes when generating the graph, used by the [triangulationMode](gkmeshgraph/triangulationmode.md) property.

# GKTriangle (Objective-C)

**Framework:** GameplayKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The definition of a triangle in the mesh, available with the [triangleAtIndex:](gkmeshgraph/triangle%28at_%29.md) method.

## Declaration

```objectivec
struct GKTriangle;
```

## Topics

### Instance Properties

- [points](gktriangle/points.md): A set of three points describing the triangle.

## See Also

### Constants

- [GKMeshGraphTriangulationMode](gkmeshgraphtriangulationmode.md): Options for how to place graph nodes when generating the graph, used by the [triangulationMode](gkmeshgraph/triangulationmode.md) property.
