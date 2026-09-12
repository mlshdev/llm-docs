> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/center](https://developer.apple.com/documentation/arkit/arplaneanchor/center)

# center (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The center point of the plane relative to its anchor position.

## Declaration

```swift
var center: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

When ARKit first detects a plane, the resulting [ARPlaneAnchor](../arplaneanchor.md) object has a [center](center.md) value of `(0,0,0)`, indicating that the translation portion of the anchor’s [transform](../aranchor/transform.md) value locates the plane’s center point.

As scene analysis and plane detection continues, ARKit may determine that a previously detected plane anchor is part of a larger real-world surface, increasing the [extent](extent.md) width and length values. The plane’s new boundaries may not be symmetric around its initial position, so the [center](center.md) point changes relative to the anchor’s (unchanged) [transform](../aranchor/transform.md) matrix.

Although the type of this property is [vector_float3](../../simd/vector_float3.md), a plane anchor is always two-dimensional, and is always positioned in only the x and z directions relative to its [transform](../aranchor/transform.md) position. (That is, the y-component of this vector is always zero.)

## See Also

### Dimensions

- [planeExtent](planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [ARPlaneExtent](../arplaneextent.md): The size and y-axis rotation of a detected plane.
- [extent](extent.md): Deprecated. The estimated width and length of the detected plane.

# center (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The center point of the plane relative to its anchor position.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 center;
```

<a id="Discussion"></a>

## Discussion

When ARKit first detects a plane, the resulting [ARPlaneAnchor](../arplaneanchor.md) object has a [center](center.md) value of `(0,0,0)`, indicating that the translation portion of the anchor’s [transform](../aranchor/transform.md) value locates the plane’s center point.

As scene analysis and plane detection continues, ARKit may determine that a previously detected plane anchor is part of a larger real-world surface, increasing the [extent](extent.md) width and length values. The plane’s new boundaries may not be symmetric around its initial position, so the [center](center.md) point changes relative to the anchor’s (unchanged) [transform](../aranchor/transform.md) matrix.

Although the type of this property is [vector_float3](../../simd/vector_float3.md), a plane anchor is always two-dimensional, and is always positioned in only the x and z directions relative to its [transform](../aranchor/transform.md) position. (That is, the y-component of this vector is always zero.)

## See Also

### Dimensions

- [planeExtent](planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [ARPlaneExtent](../arplaneextent.md): The size and y-axis rotation of a detected plane.
- [extent](extent.md): Deprecated. The estimated width and length of the detected plane.
