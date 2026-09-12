> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/data](https://developer.apple.com/documentation/scenekit/scngeometryelement/data)

# data (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The data describing the geometry element.

## Declaration

```swift
var data: Data { get }
```

<a id="Discussion"></a>

## Discussion

An element’s data is an array of index values identifying vertices in a geometry source. SceneKit interprets the data as an array of unsigned integers, whose size is specified by the [bytesPerIndex](bytesperindex.md) property.

## See Also

### Working with Indexes

- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.

# data (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The data describing the geometry element.

## Declaration

```objectivec
@property (nonatomic, readonly) NSData * data;
```

<a id="Discussion"></a>

## Discussion

An element’s data is an array of index values identifying vertices in a geometry source. SceneKit interprets the data as an array of unsigned integers, whose size is specified by the [bytesPerIndex](bytesperindex.md) property.

## See Also

### Working with Indexes

- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.
