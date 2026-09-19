> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arfaceanchor/geometry

# geometry (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A coarse triangle mesh representing the topology of the detected face.

## Declaration

```swift
var geometry: ARFaceGeometry { get }
```

<a id="Discussion"></a>

## Discussion

This mesh provides vertex, index, and texture coordinate buffers describing the 3D shape of the face, conforming a generic face model to match the dimensions, shape, and current expression of the detected face.

You can visualize the face geometry by passing these buffers to your preferred rendering engine. To visualize a face geometry using SceneKit, create an [ARSCNFaceGeometry](../arscnfacegeometry.md) instance and use its [update(from:)](../arscnfacegeometry/update%28from_%29.md) method to update it to match the face geometry.

# geometry (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A coarse triangle mesh representing the topology of the detected face.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARFaceGeometry * geometry;
```

<a id="Discussion"></a>

## Discussion

This mesh provides vertex, index, and texture coordinate buffers describing the 3D shape of the face, conforming a generic face model to match the dimensions, shape, and current expression of the detected face.

You can visualize the face geometry by passing these buffers to your preferred rendering engine. To visualize a face geometry using SceneKit, create an [ARSCNFaceGeometry](../arscnfacegeometry.md) instance and use its [updateFromFaceGeometry:](../arscnfacegeometry/update%28from_%29.md) method to update it to match the face geometry.
