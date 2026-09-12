> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/init(indices:primitivetype:)](https://developer.apple.com/documentation/scenekit/scngeometryelement/init(indices:primitivetype:))

# init(indices:primitiveType:)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a geometry element from the specified array of index values.

## Declaration

```swift
convenience init<IndexType>(indices: [IndexType], primitiveType: SCNGeometryPrimitiveType) where IndexType : FixedWidthInteger
```

## Parameters

- `indices`: An array of index values, each of which identifies a vertex in a geometry source.
- `primitiveType`: The drawing primitive that connects vertices when rendering the geometry element. For possible values, see [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md).

<a id="Discussion"></a>

## Discussion

SceneKit connects the vertices in the order specified by the `indices` array, arranged according to the `primitiveType` parameter.This initializer is equivalent to the [init(data:primitiveType:primitiveCount:bytesPerIndex:)](init%28data_primitivetype_primitivecount_bytesperindex_%29.md) initializer, but does not require an intermediary [Data](../../foundation/data.md) object; instead, it automatically infers the necessary allocation size and [bytesPerIndex](bytesperindex.md) values based on the contents of the `indices` array.

To create a custom [SCNGeometry](../scngeometry.md) object from the geometry element, use the [init(sources:elements:)](../scngeometry/init%28sources_elements_%29.md) initializer.

## See Also

### Creating a Geometry Element

- [init(data:primitiveType:primitiveCount:bytesPerIndex:)](init%28data_primitivetype_primitivecount_bytesperindex_%29.md): Creates a geometry element from the specified data and options.
