> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/primitivecount](https://developer.apple.com/documentation/scenekit/scngeometryelement/primitivecount)

# primitiveCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of primitives in the element.

## Declaration

```swift
var primitiveCount: Int { get }
```

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.

# primitiveCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of primitives in the element.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger primitiveCount;
```

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveRange](primitiverange.md): The range of primitives from the geometry element to render.
