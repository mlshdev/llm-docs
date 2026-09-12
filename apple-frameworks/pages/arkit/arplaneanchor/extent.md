> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/extent](https://developer.apple.com/documentation/arkit/arplaneanchor/extent)

# extent (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0)

The estimated width and length of the detected plane.

## Declaration

```swift
var extent: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

> **Warning**

>  In iOS 16, use [planeExtent](planeextent.md) instead.

The framework sets the x and z components to the width and length of the plane, respectively. The y-component is unused, with a constant value of `0`.

## See Also

### Dimensions

- [center](center.md): The center point of the plane relative to its anchor position.
- [planeExtent](planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [ARPlaneExtent](../arplaneextent.md): The size and y-axis rotation of a detected plane.

# extent (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0)

The estimated width and length of the detected plane.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 extent;
```

<a id="Discussion"></a>

## Discussion

> **Warning**

>  In iOS 16, use [planeExtent](planeextent.md) instead.

The framework sets the x and z components to the width and length of the plane, respectively. The y-component is unused, with a constant value of `0`.

## See Also

### Dimensions

- [center](center.md): The center point of the plane relative to its anchor position.
- [planeExtent](planeextent.md): The estimated width, length, and y-axis rotation of the detected plane.
- [ARPlaneExtent](../arplaneextent.md): The size and y-axis rotation of a detected plane.
