> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armeshgeometry/classification](https://developer.apple.com/documentation/arkit/armeshgeometry/classification)

# classification (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Classification for each face in the mesh.

## Declaration

```swift
var classification: ARGeometrySource? { get }
```

<a id="Discussion"></a>

## Discussion

Each element of the array ([ARGeometrySource](../argeometrysource.md)) is a classification that corresponds to one face in the geometry. The `count` of this property represents the number of faces in the geometry. The default value at each index is `0`, –– the raw value for [ARMeshClassification.none](../armeshclassification/none.md).

The following code demonstrates retrieving a classification for a particular face:

```swift
extension ARMeshGeometry {
    func classificationOf(faceWithIndex index: Int) -> ARMeshClassification {
        guard let classification = classification else { return .none }
        let classificationAddress = classification.buffer.contents().advanced(by: index)
        let classificationValue = Int(classificationAddress.assumingMemoryBound(to: UInt8.self).pointee)
        return ARMeshClassification(rawValue: classificationValue) ?? .none
    }
}
```

For a sample app that demonstrates classification, see [Visualizing and interacting with a reconstructed scene](../visualizing-and-interacting-with-a-reconstructed-scene.md).

## See Also

### Getting Geometry Information

- [ARMeshClassification](../armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](../argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](normals.md): Rays that define which direction is outside for each face.

# classification (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Classification for each face in the mesh.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) ARGeometrySource * classification;
```

<a id="Discussion"></a>

## Discussion

Each element of the array ([ARGeometrySource](../argeometrysource.md)) is a classification that corresponds to one face in the geometry. The `count` of this property represents the number of faces in the geometry. The default value at each index is `0`, –– the raw value for [ARMeshClassificationNone](../armeshclassification/none.md).

The following code demonstrates retrieving a classification for a particular face:

```swift
extension ARMeshGeometry {
    func classificationOf(faceWithIndex index: Int) -> ARMeshClassification {
        guard let classification = classification else { return .none }
        let classificationAddress = classification.buffer.contents().advanced(by: index)
        let classificationValue = Int(classificationAddress.assumingMemoryBound(to: UInt8.self).pointee)
        return ARMeshClassification(rawValue: classificationValue) ?? .none
    }
}
```

For a sample app that demonstrates classification, see [Visualizing and interacting with a reconstructed scene](../visualizing-and-interacting-with-a-reconstructed-scene.md).

## See Also

### Getting Geometry Information

- [ARMeshClassification](../armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](../argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](normals.md): Rays that define which direction is outside for each face.
