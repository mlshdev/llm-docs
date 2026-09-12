> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement](https://developer.apple.com/documentation/scenekit/scngeometryelement)

# SCNGeometryElement (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A container for index data describing how vertices connect to define a three-dimensional object, or geometry.

## Declaration

```swift
class SCNGeometryElement
```

<a id="overview"></a>

## Overview

You use geometry elements together with [SCNGeometrySource](scngeometrysource.md) objects to define custom [SCNGeometry](scngeometry.md) objects or to inspect the data that composes an existing geometry. You create a custom geometry using a three-step process:

1. Create one or more [SCNGeometrySource](scngeometrysource.md) objects, each of which defines per-vertex information such as position, surface normal, or texture coordinates for all vertices in the geometry.
2. Create at least one [SCNGeometryElement](scngeometryelement.md) object, containing an array of indices identifying vertices in the geometry sources and describing the drawing primitive that SceneKit uses to connect the vertices when rendering the geometry.
3. Create an [SCNGeometry](scngeometry.md) instance from the geometry sources and geometry elements.

When SceneKit renders a geometry, each geometry element corresponds to a drawing command sent to the GPU. Because different rendering states require separate drawing commands, you can define a geometry using multiple geometry elements. For example, the teapot geometry shown below has four geometry elements, so you can assign up to four [SCNMaterial](scnmaterial.md) objects in order to render each element with a different appearance. But because each drawing command incurs a CPU time overhead when rendering, minimizing the number of elements in a custom geometry can improve rendering performance.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929778@2x.png)

## Topics

### Creating a Geometry Element

- [init(indices:primitiveType:)](scngeometryelement/init%28indices_primitivetype_%29.md): Deprecated. Creates a geometry element from the specified array of index values.
- [init(data:primitiveType:primitiveCount:bytesPerIndex:)](scngeometryelement/init%28data_primitivetype_primitivecount_bytesperindex_%29.md): Creates a geometry element from the specified data and options.

### Working with Indexes

- [data](scngeometryelement/data.md): The data describing the geometry element.
- [bytesPerIndex](scngeometryelement/bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](scngeometryelement/primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](scngeometryelement/primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](scngeometryelement/primitivecount.md): The number of primitives in the element.
- [primitiveRange](scngeometryelement/primitiverange.md): The range of primitives from the geometry element to render.

### Rendering Point Clouds

Use these properties to display a geometry as a collection of points, rather than as a solid surface or wireframe.

- [pointSize](scngeometryelement/pointsize.md): The width of each point in the geometry element, as measured in the geometry’s local 3D coordinate space.
- [minimumPointScreenSpaceRadius](scngeometryelement/minimumpointscreenspaceradius.md): The smallest radius, measured in screen points, at which to render any point in the geometry element.
- [maximumPointScreenSpaceRadius](scngeometryelement/maximumpointscreenspaceradius.md): The largest radius, measured in screen points, at which to render any point in the geometry element.

### Initializers

- [init(buffer:primitiveType:primitiveCount:bytesPerIndex:)](scngeometryelement/init%28buffer_primitivetype_primitivecount_bytesperindex_%29.md)
- [init(buffer:primitiveType:primitiveCount:indicesChannelCount:interleavedIndicesChannels:bytesPerIndex:)](scngeometryelement/init%28buffer_primitivetype_primitivecount_indiceschannelcount_interleavedindiceschannels_bytesperindex_%29.md)
- [init(coder:)](scngeometryelement/init%28coder_%29.md)
- [init(data:primitiveType:primitiveCount:indicesChannelCount:interleavedIndicesChannels:bytesPerIndex:)](scngeometryelement/init%28data_primitivetype_primitivecount_indiceschannelcount_interleavedindiceschannels_bytesperindex_%29.md)

### Instance Properties

- [hasInterleavedIndicesChannels](scngeometryelement/hasinterleavedindiceschannels.md)
- [indicesChannelCount](scngeometryelement/indiceschannelcount.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Geometry

- [SCNGeometry](scngeometry.md): A three-dimensional shape (also called a model or mesh) that can be displayed in a scene, with attached materials that define its appearance.
- [SCNGeometrySource](scngeometrysource.md): A container for vertex data forming part of the definition for a three-dimensional object, or geometry.
- [Built-in Geometry Types](built-in-geometry-types.md): Basic shapes—such as spheres, boxes, and planes—and features for generating 3D objects from 2D text and Bézier curves.

# SCNGeometryElement (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A container for index data describing how vertices connect to define a three-dimensional object, or geometry.

## Declaration

```objectivec
@interface SCNGeometryElement : NSObject
```

<a id="overview"></a>

## Overview

You use geometry elements together with [SCNGeometrySource](scngeometrysource.md) objects to define custom [SCNGeometry](scngeometry.md) objects or to inspect the data that composes an existing geometry. You create a custom geometry using a three-step process:

1. Create one or more [SCNGeometrySource](scngeometrysource.md) objects, each of which defines per-vertex information such as position, surface normal, or texture coordinates for all vertices in the geometry.
2. Create at least one [SCNGeometryElement](scngeometryelement.md) object, containing an array of indices identifying vertices in the geometry sources and describing the drawing primitive that SceneKit uses to connect the vertices when rendering the geometry.
3. Create an [SCNGeometry](scngeometry.md) instance from the geometry sources and geometry elements.

When SceneKit renders a geometry, each geometry element corresponds to a drawing command sent to the GPU. Because different rendering states require separate drawing commands, you can define a geometry using multiple geometry elements. For example, the teapot geometry shown below has four geometry elements, so you can assign up to four [SCNMaterial](scnmaterial.md) objects in order to render each element with a different appearance. But because each drawing command incurs a CPU time overhead when rendering, minimizing the number of elements in a custom geometry can improve rendering performance.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929778@2x.png)

## Topics

### Creating a Geometry Element

- [geometryElementWithData:primitiveType:primitiveCount:bytesPerIndex:](scngeometryelement/init%28data_primitivetype_primitivecount_bytesperindex_%29.md): Creates a geometry element from the specified data and options.
- [geometryElementWithMDLSubmesh:](scngeometryelement/geometryelementwithmdlsubmesh_.md): Deprecated. Creates a geometry element from the specified Model I/O submesh object.

### Working with Indexes

- [data](scngeometryelement/data.md): The data describing the geometry element.
- [bytesPerIndex](scngeometryelement/bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](scngeometryelement/primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](scngeometryelement/primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](scngeometryelement/primitivecount.md): The number of primitives in the element.
- [primitiveRange](scngeometryelement/primitiverange.md): The range of primitives from the geometry element to render.

### Rendering Point Clouds

Use these properties to display a geometry as a collection of points, rather than as a solid surface or wireframe.

- [pointSize](scngeometryelement/pointsize.md): The width of each point in the geometry element, as measured in the geometry’s local 3D coordinate space.
- [minimumPointScreenSpaceRadius](scngeometryelement/minimumpointscreenspaceradius.md): The smallest radius, measured in screen points, at which to render any point in the geometry element.
- [maximumPointScreenSpaceRadius](scngeometryelement/maximumpointscreenspaceradius.md): The largest radius, measured in screen points, at which to render any point in the geometry element.

### Instance Properties

- [interleavedIndicesChannels](scngeometryelement/hasinterleavedindiceschannels.md)
- [indicesChannelCount](scngeometryelement/indiceschannelcount.md)

### Type Methods

- [geometryElementWithBuffer:primitiveType:primitiveCount:bytesPerIndex:](scngeometryelement/init%28buffer_primitivetype_primitivecount_bytesperindex_%29.md)
- [geometryElementWithBuffer:primitiveType:primitiveCount:indicesChannelCount:interleavedIndicesChannels:bytesPerIndex:](scngeometryelement/init%28buffer_primitivetype_primitivecount_indiceschannelcount_interleavedindiceschannels_bytesperindex_%29.md)
- [geometryElementWithData:primitiveType:primitiveCount:indicesChannelCount:interleavedIndicesChannels:bytesPerIndex:](scngeometryelement/init%28data_primitivetype_primitivecount_indiceschannelcount_interleavedindiceschannels_bytesperindex_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Geometry

- [SCNGeometry](scngeometry.md): A three-dimensional shape (also called a model or mesh) that can be displayed in a scene, with attached materials that define its appearance.
- [SCNGeometrySource](scngeometrysource.md): A container for vertex data forming part of the definition for a three-dimensional object, or geometry.
- [Built-in Geometry Types](built-in-geometry-types.md): Basic shapes—such as spheres, boxes, and planes—and features for generating 3D objects from 2D text and Bézier curves.
