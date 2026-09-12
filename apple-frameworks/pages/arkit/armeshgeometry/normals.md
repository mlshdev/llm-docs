> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armeshgeometry/normals](https://developer.apple.com/documentation/arkit/armeshgeometry/normals)

# normals (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Rays that define which direction is outside for each face.

## Declaration

```swift
var normals: ARGeometrySource { get }
```

## See Also

### Getting Geometry Information

- [classification](classification.md): Classification for each face in the mesh.
- [ARMeshClassification](../armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](../argeometryelement.md): A container for index data, such as vertex indices of a face.

# normals (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Rays that define which direction is outside for each face.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARGeometrySource * normals;
```

## See Also

### Getting Geometry Information

- [classification](classification.md): Classification for each face in the mesh.
- [ARMeshClassification](../armeshclassification.md): Enumeration of different classes of real-world objects that ARKit can identify.
- [faces](faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](../argeometryelement.md): A container for index data, such as vertex indices of a face.
