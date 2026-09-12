> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armeshgeometry/vertices](https://developer.apple.com/documentation/arkit/armeshgeometry/vertices)

# vertices (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The vertices of the mesh.

## Declaration

```swift
var vertices: ARGeometrySource { get }
```

<a id="Discussion"></a>

## Discussion

The [count](../argeometrysource/count.md) equals the total number of vertices. Since each vertex is the type `SIMD3<Float>`, [componentsPerVector](../argeometrysource/componentspervector.md) is three.

The following code demonstrates retrieving a vertex at a particular index.

```swift
extension ARMeshGeometry { 
    func vertex(at index: UInt32) -> SIMD3<Float> {
        assert(vertices.format == MTLVertexFormat.float3, "Expected three floats (twelve bytes) per vertex.")
        let vertexPointer = vertices.buffer.contents().advanced(by: vertices.offset + (vertices.stride * Int(index)))
        let vertex = vertexPointer.assumingMemoryBound(to: SIMD3<Float>.self).pointee
        return vertex
    }
}
```

## See Also

### Accessing Geometry Data

- [ARGeometrySource](../argeometrysource.md): Mesh data in a buffer-based array.

# vertices (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

The vertices of the mesh.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARGeometrySource * vertices;
```

<a id="Discussion"></a>

## Discussion

The [count](../argeometrysource/count.md) equals the total number of vertices. Since each vertex is the type `SIMD3<Float>`, [componentsPerVector](../argeometrysource/componentspervector.md) is three.

The following code demonstrates retrieving a vertex at a particular index.

```swift
extension ARMeshGeometry { 
    func vertex(at index: UInt32) -> SIMD3<Float> {
        assert(vertices.format == MTLVertexFormat.float3, "Expected three floats (twelve bytes) per vertex.")
        let vertexPointer = vertices.buffer.contents().advanced(by: vertices.offset + (vertices.stride * Int(index)))
        let vertex = vertexPointer.assumingMemoryBound(to: SIMD3<Float>.self).pointee
        return vertex
    }
}
```

## See Also

### Accessing Geometry Data

- [ARGeometrySource](../argeometrysource.md): Mesh data in a buffer-based array.
