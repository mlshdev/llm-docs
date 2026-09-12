> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/primitiverange](https://developer.apple.com/documentation/scenekit/scngeometryelement/primitiverange)

# primitiveRange (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range of primitives from the geometry element to render.

## Declaration

```swift
var primitiveRange: NSRange { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is an [NSRange](../../foundation/nsrange-c.struct.md) whose location is [NSNotFound](../../foundation/nsnotfound-4qp9h.md) and length is zero, indicating that, by default, SceneKit renders the entire set of primitives specified by a geometry element’s data buffer.

You can change a geometry without redefining it by choosing to render only a subset of the primitives specified by a geometry element. To do so, set this property to a subrange of primitive indexes.

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.

# primitiveRange (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The range of primitives from the geometry element to render.

## Declaration

```objectivec
@property (nonatomic) NSRange primitiveRange;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is an [NSRange](../../foundation/nsrange-c.struct.md) whose location is [NSNotFound](../../foundation/nsnotfound-4qp9h.md) and length is zero, indicating that, by default, SceneKit renders the entire set of primitives specified by a geometry element’s data buffer.

You can change a geometry without redefining it by choosing to render only a subset of the primitives specified by a geometry element. To do so, set this property to a subrange of primitive indexes.

## See Also

### Working with Indexes

- [data](data.md): The data describing the geometry element.
- [bytesPerIndex](bytesperindex.md): The number of bytes that represent each index value in the element’s data.
- [primitiveType](primitivetype.md): The drawing primitive that connects vertices when rendering the geometry element.
- [SCNGeometryPrimitiveType](../scngeometryprimitivetype.md): The drawing primitive that connects vertices when rendering a geometry element, used by the [primitiveType](primitivetype.md) property to specify how SceneKit interprets the geometry element’s data.
- [primitiveCount](primitivecount.md): The number of primitives in the element.
