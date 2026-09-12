> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry](https://developer.apple.com/documentation/scenekit/scngeometry)

# SCNGeometry (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A three-dimensional shape (also called a model or mesh) that can be displayed in a scene, with attached materials that define its appearance.

## Declaration

```swift
class SCNGeometry
```

<a id="overview"></a>

## Overview

In SceneKit, geometries attached to [SCNNode](scnnode.md) objects form the visible elements of a scene, and [SCNMaterial](scnmaterial.md) objects attached to a geometry determine its appearance.

<a id="Working-with-Geometry-Objects"></a>

### Working with Geometry Objects

You control a geometry’s appearance in a scene with nodes and materials. A geometry object provides only the form of a visible object rendered by SceneKit. You specify color and texture for a geometry’s surface, control how it responds to light, and add special effects by attaching materials (for details, see the methods in Managing a Geometry’s Materials). You position and orient a geometry in a scene by attaching it to an [SCNNode](scnnode.md) object. Multiple nodes can reference the same geometry object, allowing it to appear at different positions in a scene.

You can easily copy geometries and change their materials. A geometry object manages the association between immutable vertex data and a mutable assignment of materials. To make a geometry appear more than once in the same scene with a different set of materials, use its inherited [copy()](../objectivec/nsobject-swift.class/copy%28%29.md) method. The copy shares the underlying vertex data of the original, but can be assigned materials independently. You can thus make many copies of a geometry without incurring a significant cost to rendering performance.

You can animate a geometry object. The vertex data associated with a geometry is immutable, but SceneKit provides several ways to animate geometry. You can use a [SCNMorpher](scnmorpher.md) or [SCNSkinner](scnskinner.md) object to deform a geometry’s surface, or run animations created in an external 3D authoring tool and loaded from a scene file. You can also use methods in the [SCNShadable](scnshadable.md) protocol to add custom GLSL shader programs that alter SceneKit’s rendering of a geometry.

<a id="Obtaining-a-Geometry-Object"></a>

### Obtaining a Geometry Object

SceneKit provides several ways to introduce geometry objects to your app:

| Action | For further information |
| --- | --- |
| Load from a scene file created using external 3D authoring tools | [SCNScene](scnscene.md), [SCNSceneSource](scnscenesource.md) |
| Use and customize SceneKit’s built-in primitive shapes | [SCNPlane](scnplane.md), [SCNBox](scnbox.md), [SCNSphere](scnsphere.md), [SCNPyramid](scnpyramid.md), [SCNCone](scncone.md), [SCNCylinder](scncylinder.md), [SCNCapsule](scncapsule.md), [SCNTube](scntube.md), and [SCNTorus](scntorus.md) |
| Create 3D geometry from 2D text or Bézier curves | [SCNText](scntext.md), [SCNShape](scnshape.md) |
| Create a custom geometry from vertex data | [SCNGeometrySource](scngeometrysource.md), [SCNGeometryElement](scngeometryelement.md), [init(sources:elements:)](scngeometry/init%28sources_elements_%29.md), Managing Geometry Data |

## Topics

### Creating a Geometry Object

- [init(sources:elements:)](scngeometry/init%28sources_elements_%29.md): Creates a new geometry built from the specified geometry sources and elements.

### Managing Geometry Attributes

- [name](scngeometry/name.md): A name associated with the geometry object.
- [SCNBoundingVolume](scnboundingvolume.md): Methods common to the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes for measuring location and size.

### Managing a Geometry’s Materials

- [materials](scngeometry/materials.md): An array of [SCNMaterial](scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](scngeometry/firstmaterial.md): The first material attached to the geometry.
- [material(named:)](scngeometry/material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial(\_:at:)](scngeometry/insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterial(at:)](scngeometry/removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterial(at:with:)](scngeometry/replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.

### Managing Geometry Data

- [elements](scngeometry/elements.md): An array of geometry elements that describe the geometry’s shape.
- [sources](scngeometry/sources.md): An array of geometry sources that provide vertex data for the geometry.
- [elementCount](scngeometry/elementcount.md): The number of geometry elements in the geometry.
- [element(at:)](scngeometry/element%28at_%29.md): Returns the geometry element at a specified index.
- [sources(for:)](scngeometry/sources%28for_%29.md): Returns the geometry sources for a specified semantic.

### Optimizing Level of Detail

- [levelsOfDetail](scngeometry/levelsofdetail.md): An array of [SCNLevelOfDetail](scnlevelofdetail.md) objects for managing the geometry’s appearance when viewed from far away.
- [SCNLevelOfDetail](scnlevelofdetail.md): An alternate resolution for a geometry that SceneKit automatically substitutes to improve rendering performance.

### Smoothing and Subdividing Geometry

- [subdivisionLevel](scngeometry/subdivisionlevel.md): The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.
- [edgeCreasesElement](scngeometry/edgecreaseselement.md): The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.
- [edgeCreasesSource](scngeometry/edgecreasessource.md): The geometry source specifying the smoothness or sharpness of edges after surface subdivision.
- [wantsAdaptiveSubdivision](scngeometry/wantsadaptivesubdivision.md)

### Managing Tessellation

- [tessellator](scngeometry/tessellator.md)
- [SCNGeometryTessellator](scngeometrytessellator.md)

### Initializers

- [init(coder:)](scngeometry/init%28coder_%29.md)
- [init(sources:elements:sourceChannels:)](scngeometry/init%28sources_elements_sourcechannels_%29.md)

### Instance Properties

- [geometrySourceChannels](scngeometry/geometrysourcechannels.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNBox](scnbox.md)
- [SCNCapsule](scncapsule.md)
- [SCNCone](scncone.md)
- [SCNCylinder](scncylinder.md)
- [SCNFloor](scnfloor.md)
- [SCNPlane](scnplane.md)
- [SCNPyramid](scnpyramid.md)
- [SCNShape](scnshape.md)
- [SCNSphere](scnsphere.md)
- [SCNText](scntext.md)
- [SCNTorus](scntorus.md)
- [SCNTube](scntube.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNBoundingVolume](scnboundingvolume.md)
- [SCNShadable](scnshadable.md)

## See Also

### Geometry

- [SCNGeometrySource](scngeometrysource.md): A container for vertex data forming part of the definition for a three-dimensional object, or geometry.
- [SCNGeometryElement](scngeometryelement.md): A container for index data describing how vertices connect to define a three-dimensional object, or geometry.
- [Built-in Geometry Types](built-in-geometry-types.md): Basic shapes—such as spheres, boxes, and planes—and features for generating 3D objects from 2D text and Bézier curves.

# SCNGeometry (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A three-dimensional shape (also called a model or mesh) that can be displayed in a scene, with attached materials that define its appearance.

## Declaration

```objectivec
@interface SCNGeometry : NSObject
```

<a id="overview"></a>

## Overview

In SceneKit, geometries attached to [SCNNode](scnnode.md) objects form the visible elements of a scene, and [SCNMaterial](scnmaterial.md) objects attached to a geometry determine its appearance.

<a id="Working-with-Geometry-Objects"></a>

### Working with Geometry Objects

You control a geometry’s appearance in a scene with nodes and materials. A geometry object provides only the form of a visible object rendered by SceneKit. You specify color and texture for a geometry’s surface, control how it responds to light, and add special effects by attaching materials (for details, see the methods in Managing a Geometry’s Materials). You position and orient a geometry in a scene by attaching it to an [SCNNode](scnnode.md) object. Multiple nodes can reference the same geometry object, allowing it to appear at different positions in a scene.

You can easily copy geometries and change their materials. A geometry object manages the association between immutable vertex data and a mutable assignment of materials. To make a geometry appear more than once in the same scene with a different set of materials, use its inherited [copy](../objectivec/nsobject-swift.class/copy%28%29.md) method. The copy shares the underlying vertex data of the original, but can be assigned materials independently. You can thus make many copies of a geometry without incurring a significant cost to rendering performance.

You can animate a geometry object. The vertex data associated with a geometry is immutable, but SceneKit provides several ways to animate geometry. You can use a [SCNMorpher](scnmorpher.md) or [SCNSkinner](scnskinner.md) object to deform a geometry’s surface, or run animations created in an external 3D authoring tool and loaded from a scene file. You can also use methods in the [SCNShadable](scnshadable.md) protocol to add custom GLSL shader programs that alter SceneKit’s rendering of a geometry.

<a id="Obtaining-a-Geometry-Object"></a>

### Obtaining a Geometry Object

SceneKit provides several ways to introduce geometry objects to your app:

| Action | For further information |
| --- | --- |
| Load from a scene file created using external 3D authoring tools | [SCNScene](scnscene.md), [SCNSceneSource](scnscenesource.md) |
| Use and customize SceneKit’s built-in primitive shapes | [SCNPlane](scnplane.md), [SCNBox](scnbox.md), [SCNSphere](scnsphere.md), [SCNPyramid](scnpyramid.md), [SCNCone](scncone.md), [SCNCylinder](scncylinder.md), [SCNCapsule](scncapsule.md), [SCNTube](scntube.md), and [SCNTorus](scntorus.md) |
| Create 3D geometry from 2D text or Bézier curves | [SCNText](scntext.md), [SCNShape](scnshape.md) |
| Create a custom geometry from vertex data | [SCNGeometrySource](scngeometrysource.md), [SCNGeometryElement](scngeometryelement.md), [geometryWithSources:elements:](scngeometry/init%28sources_elements_%29.md), Managing Geometry Data |

## Topics

### Creating a Geometry Object

- [geometryWithSources:elements:](scngeometry/init%28sources_elements_%29.md): Creates a new geometry built from the specified geometry sources and elements.
- [geometry](scngeometry/geometry.md): Deprecated. Creates a new geometry object with no content (or default content).
- [geometryWithMDLMesh:](scngeometry/geometrywithmdlmesh_.md): Deprecated. Creates a geometry from the specified Model I/O mesh object.

### Managing Geometry Attributes

- [name](scngeometry/name.md): A name associated with the geometry object.
- [SCNBoundingVolume](scnboundingvolume.md): Methods common to the [SCNNode](scnnode.md) and [SCNGeometry](scngeometry.md) classes for measuring location and size.

### Managing a Geometry’s Materials

- [materials](scngeometry/materials.md): An array of [SCNMaterial](scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](scngeometry/firstmaterial.md): The first material attached to the geometry.
- [materialWithName:](scngeometry/material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial:atIndex:](scngeometry/insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterialAtIndex:](scngeometry/removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterialAtIndex:withMaterial:](scngeometry/replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.

### Managing Geometry Data

- [geometryElements](scngeometry/elements.md): An array of geometry elements that describe the geometry’s shape.
- [geometrySources](scngeometry/sources.md): An array of geometry sources that provide vertex data for the geometry.
- [geometryElementCount](scngeometry/elementcount.md): The number of geometry elements in the geometry.
- [geometryElementAtIndex:](scngeometry/element%28at_%29.md): Returns the geometry element at a specified index.
- [geometrySourcesForSemantic:](scngeometry/sources%28for_%29.md): Returns the geometry sources for a specified semantic.

### Optimizing Level of Detail

- [levelsOfDetail](scngeometry/levelsofdetail.md): An array of [SCNLevelOfDetail](scnlevelofdetail.md) objects for managing the geometry’s appearance when viewed from far away.
- [SCNLevelOfDetail](scnlevelofdetail.md): An alternate resolution for a geometry that SceneKit automatically substitutes to improve rendering performance.

### Smoothing and Subdividing Geometry

- [subdivisionLevel](scngeometry/subdivisionlevel.md): The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.
- [edgeCreasesElement](scngeometry/edgecreaseselement.md): The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.
- [edgeCreasesSource](scngeometry/edgecreasessource.md): The geometry source specifying the smoothness or sharpness of edges after surface subdivision.
- [wantsAdaptiveSubdivision](scngeometry/wantsadaptivesubdivision.md)

### Managing Tessellation

- [tessellator](scngeometry/tessellator.md)
- [SCNGeometryTessellator](scngeometrytessellator.md)

### Instance Properties

- [geometrySourceChannels](scngeometry/geometrysourcechannels.md)

### Type Methods

- [geometryWithSources:elements:sourceChannels:](scngeometry/init%28sources_elements_sourcechannels_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNBox](scnbox.md)
- [SCNCapsule](scncapsule.md)
- [SCNCone](scncone.md)
- [SCNCylinder](scncylinder.md)
- [SCNFloor](scnfloor.md)
- [SCNPlane](scnplane.md)
- [SCNPyramid](scnpyramid.md)
- [SCNShape](scnshape.md)
- [SCNSphere](scnsphere.md)
- [SCNText](scntext.md)
- [SCNTorus](scntorus.md)
- [SCNTube](scntube.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNBoundingVolume](scnboundingvolume.md)
- [SCNShadable](scnshadable.md)

## See Also

### Geometry

- [SCNGeometrySource](scngeometrysource.md): A container for vertex data forming part of the definition for a three-dimensional object, or geometry.
- [SCNGeometryElement](scngeometryelement.md): A container for index data describing how vertices connect to define a three-dimensional object, or geometry.
- [Built-in Geometry Types](built-in-geometry-types.md): Basic shapes—such as spheres, boxes, and planes—and features for generating 3D objects from 2D text and Bézier curves.
