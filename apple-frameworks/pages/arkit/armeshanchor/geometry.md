> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/armeshanchor/geometry

# geometry (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

3D information about the mesh such as its shape and classifications.

## Declaration

```swift
var geometry: ARMeshGeometry { get }
```

<a id="Discussion"></a>

## Discussion

Contains the anchor’s portion of mesh data that, with any other mesh anchors in the AR session, collectively reconstruct the scene around the user. The mesh anchor records this data in it’s own coordinate system.

## See Also

### Accessing the Mesh

- [ARMeshGeometry](../armeshgeometry.md): Mesh information stored in an efficient, array-based format.

# geometry (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+

3D information about the mesh such as its shape and classifications.

## Declaration

```objectivec
@property (nonatomic, readonly) ARMeshGeometry * geometry;
```

<a id="Discussion"></a>

## Discussion

Contains the anchor’s portion of mesh data that, with any other mesh anchors in the AR session, collectively reconstruct the scene around the user. The mesh anchor records this data in it’s own coordinate system.

## See Also

### Accessing the Mesh

- [ARMeshGeometry](../armeshgeometry.md): Mesh information stored in an efficient, array-based format.
