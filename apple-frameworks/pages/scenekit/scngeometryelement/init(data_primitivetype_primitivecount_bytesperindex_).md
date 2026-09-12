> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/init(data:primitivetype:primitivecount:bytesperindex:)](https://developer.apple.com/documentation/scenekit/scngeometryelement/init(data:primitivetype:primitivecount:bytesperindex:))

# init(data:primitiveType:primitiveCount:bytesPerIndex:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry element from the specified data and options.

## Declaration

```swift
convenience init(data: Data?, primitiveType: SCNGeometryPrimitiveType, primitiveCount: Int, bytesPerIndex: Int)
```

## Parameters

- `data`: The data describing the element.
- `primitiveType`: The drawing primitive that connects vertices when rendering the geometry element. For possible values, see [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md).
- `primitiveCount`: The number of primitives in the element.
- `bytesPerIndex`: The number of bytes that represent a single index value in the data.

<a id="return-value"></a>

## Return Value

A new geometry element object.

<a id="Discussion"></a>

## Discussion

An element’s data is an array of index values identifying vertices in a geometry source. SceneKit interprets the data as an array of unsigned integers (whose size is specified by the `bytesPerIndex` parameter), and then connects the vertices in the order specified by this array, arranged according to the `primitiveType` parameter.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry element, use the [init(sources:elements:)](../scngeometry/init%28sources_elements_%29.md) method.

## See Also

### Creating a Geometry Element

- [init(indices:primitiveType:)](init%28indices_primitivetype_%29.md): Deprecated. Creates a geometry element from the specified array of index values.

# geometryElementWithData:primitiveType:primitiveCount:bytesPerIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a geometry element from the specified data and options.

## Declaration

```objectivec
+ (instancetype) geometryElementWithData:(NSData *) data primitiveType:(SCNGeometryPrimitiveType) primitiveType primitiveCount:(NSInteger) primitiveCount bytesPerIndex:(NSInteger) bytesPerIndex;
```

## Parameters

- `data`: The data describing the element.
- `primitiveType`: The drawing primitive that connects vertices when rendering the geometry element. For possible values, see [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md).
- `primitiveCount`: The number of primitives in the element.
- `bytesPerIndex`: The number of bytes that represent a single index value in the data.

<a id="return-value"></a>

## Return Value

A new geometry element object.

<a id="Discussion"></a>

## Discussion

An element’s data is an array of index values identifying vertices in a geometry source. SceneKit interprets the data as an array of unsigned integers (whose size is specified by the `bytesPerIndex` parameter), and then connects the vertices in the order specified by this array, arranged according to the `primitiveType` parameter.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry element, use the [geometryWithSources:elements:](../scngeometry/init%28sources_elements_%29.md) method.

## See Also

### Creating a Geometry Element

- [geometryElementWithMDLSubmesh:](geometryelementwithmdlsubmesh_.md): Deprecated. Creates a geometry element from the specified Model I/O submesh object.
