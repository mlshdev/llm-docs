> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/bytesperindex](https://developer.apple.com/documentation/scenekit/scngeometryelement/bytesperindex)

# bytesPerIndex (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of bytes that represent each index value in the element’s data.

## Declaration

```swift
var bytesPerIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

An element’s [data](data.md) property holds an array of index values identifying vertices in a geometry source. SceneKit interprets the data as an array of unsigned integers, whose size is specified by the [bytesPerIndex](bytesperindex.md) property.

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.

# bytesPerIndex (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of bytes that represent each index value in the element’s data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger bytesPerIndex;
```

<a id="Discussion"></a>

## Discussion

An element’s [data](data.md) property holds an array of index values identifying vertices in a geometry source. SceneKit interprets the data as an array of unsigned integers, whose size is specified by the [bytesPerIndex](bytesperindex.md) property.

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.
