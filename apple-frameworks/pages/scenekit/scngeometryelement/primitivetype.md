> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/primitivetype](https://developer.apple.com/documentation/scenekit/scngeometryelement/primitivetype)

# primitiveType (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The drawing primitive that connects vertices when rendering the geometry element.

## Declaration

```swift
var primitiveType: SCNGeometryPrimitiveType { get }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md).

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.

# primitiveType (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The drawing primitive that connects vertices when rendering the geometry element.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNGeometryPrimitiveType primitiveType;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md).

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.
