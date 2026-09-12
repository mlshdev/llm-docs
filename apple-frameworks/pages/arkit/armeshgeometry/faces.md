> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armeshgeometry/faces](https://developer.apple.com/documentation/arkit/armeshgeometry/faces)

# faces (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

An object that contains a buffer of vertex indices of the geometry’s faces.

## Declaration

```swift
var faces: ARGeometryElement { get }
```

<a id="Discussion"></a>

## Discussion

Each element of the buffer-based array is a three-index combination that forms a unique triangle, or *face*. The index refers to that vertex’s position in the [vertices](vertices.md) array. The [count](../argeometryelement/count.md) of this property represents the number of faces.

The following code demonstrates getting the vertices of a particular face:

```swift
extension ARMeshGeometry {
    func vertexIndicesOf(faceWithIndex index: Int) -> [Int] {
        let indicesPerFace = faces.indexCountPerPrimitive
        let facesPointer = faces.buffer.contents()
        var vertexIndices = [Int]()
        for offset in 0..<indicesPerFace {
            let vertexIndexAddress = facesPointer.advanced(by: (index * indicesPerFace + offset) * MemoryLayout<UInt32>.size)
            vertexIndices.append(Int(vertexIndexAddress.assumingMemoryBound(to: UInt32.self).pointee))
        }
        return vertexIndices
    }
}
```

## See Also

### Getting Geometry Information

- [classification](classification.md): Classification for each face in the mesh.
- [ARMeshClassification](../armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [ARGeometryElement](../argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](normals.md): Rays that define which direction is outside for each face.

# faces (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

An object that contains a buffer of vertex indices of the geometry’s faces.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARGeometryElement * faces;
```

<a id="Discussion"></a>

## Discussion

Each element of the buffer-based array is a three-index combination that forms a unique triangle, or *face*. The index refers to that vertex’s position in the [vertices](vertices.md) array. The [count](../argeometryelement/count.md) of this property represents the number of faces.

The following code demonstrates getting the vertices of a particular face:

```swift
extension ARMeshGeometry {
    func vertexIndicesOf(faceWithIndex index: Int) -> [Int] {
        let indicesPerFace = faces.indexCountPerPrimitive
        let facesPointer = faces.buffer.contents()
        var vertexIndices = [Int]()
        for offset in 0..<indicesPerFace {
            let vertexIndexAddress = facesPointer.advanced(by: (index * indicesPerFace + offset) * MemoryLayout<UInt32>.size)
            vertexIndices.append(Int(vertexIndexAddress.assumingMemoryBound(to: UInt32.self).pointee))
        }
        return vertexIndices
    }
}
```

## See Also

### Getting Geometry Information

- [classification](classification.md): Classification for each face in the mesh.
- [ARMeshClassification](../armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [ARGeometryElement](../argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](normals.md): Rays that define which direction is outside for each face.
