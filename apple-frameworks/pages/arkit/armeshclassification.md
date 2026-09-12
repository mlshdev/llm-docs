> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armeshclassification](https://developer.apple.com/documentation/arkit/armeshclassification)

# ARMeshClassification (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+

Enumeration of different classes of real-world objects that ARKit can identify.

## Declaration

```swift
enum ARMeshClassification
```

<a id="overview"></a>

## Overview

When you enable [sceneReconstruction](arworldtrackingconfiguration/scenereconstruction.md) on a world-tracking configuration, ARKit provides several mesh anchors ([ARMeshAnchor](armeshanchor.md)) that collectively estimate the shape of the physical environment. Within that model of the real world, ARKit may identify specific objects, like seats, windows, tables, or walls. ARKit shares that information by exposing one or more [ARMeshClassification](armeshclassification.md) instances in a mesh’s [geometry](armeshanchor/geometry.md) property.

For a sample app that demonstrates mesh classification, see [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md).

## Topics

### Options

- [ARMeshClassification.ceiling](armeshclassification/ceiling.md): The face is a part of a real-world ceiling.
- [ARMeshClassification.door](armeshclassification/door.md): The face is a part of a real-world door.
- [ARMeshClassification.floor](armeshclassification/floor.md): The face is a part of a real-world floor.
- [ARMeshClassification.none](armeshclassification/none.md): A face ARKit can’t classify.
- [ARMeshClassification.seat](armeshclassification/seat.md): The face is a part of a real-world seat.
- [ARMeshClassification.table](armeshclassification/table.md): The face is a part of a real-world table.
- [ARMeshClassification.wall](armeshclassification/wall.md): The face is a part of a real-world wall.
- [ARMeshClassification.window](armeshclassification/window.md): The face is a part of a real-world window.

### Initializers

- [init(rawValue:)](armeshclassification/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Geometry Information

- [classification](armeshgeometry/classification.md): Classification for each face in the mesh.
- [faces](armeshgeometry/faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](armeshgeometry/normals.md): Rays that define which direction is outside for each face.

# ARMeshClassification (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

Enumeration of different classes of real-world objects that ARKit can identify.

## Declaration

```objectivec
enum ARMeshClassification : NSInteger;
```

<a id="overview"></a>

## Overview

When you enable [sceneReconstruction](arworldtrackingconfiguration/scenereconstruction.md) on a world-tracking configuration, ARKit provides several mesh anchors ([ARMeshAnchor](armeshanchor.md)) that collectively estimate the shape of the physical environment. Within that model of the real world, ARKit may identify specific objects, like seats, windows, tables, or walls. ARKit shares that information by exposing one or more [ARMeshClassification](armeshclassification.md) instances in a mesh’s [geometry](armeshanchor/geometry.md) property.

For a sample app that demonstrates mesh classification, see [Visualizing and interacting with a reconstructed scene](visualizing-and-interacting-with-a-reconstructed-scene.md).

## Topics

### Options

- [ARMeshClassificationCeiling](armeshclassification/ceiling.md): The face is a part of a real-world ceiling.
- [ARMeshClassificationDoor](armeshclassification/door.md): The face is a part of a real-world door.
- [ARMeshClassificationFloor](armeshclassification/floor.md): The face is a part of a real-world floor.
- [ARMeshClassificationNone](armeshclassification/none.md): A face ARKit can’t classify.
- [ARMeshClassificationSeat](armeshclassification/seat.md): The face is a part of a real-world seat.
- [ARMeshClassificationTable](armeshclassification/table.md): The face is a part of a real-world table.
- [ARMeshClassificationWall](armeshclassification/wall.md): The face is a part of a real-world wall.
- [ARMeshClassificationWindow](armeshclassification/window.md): The face is a part of a real-world window.

## See Also

### Getting Geometry Information

- [classification](armeshgeometry/classification.md): Classification for each face in the mesh.
- [faces](armeshgeometry/faces.md): An object that contains a buffer of vertex indices of the geometry’s faces.
- [ARGeometryElement](argeometryelement.md): A container for index data, such as vertex indices of a face.
- [normals](armeshgeometry/normals.md): Rays that define which direction is outside for each face.
