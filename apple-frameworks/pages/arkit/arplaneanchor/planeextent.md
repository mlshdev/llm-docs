> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/planeextent](https://developer.apple.com/documentation/arkit/arplaneanchor/planeextent)

# planeExtent (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

The estimated width, length, and y-axis rotation of the detected plane.

## Declaration

```swift
var planeExtent: ARPlaneExtent { get }
```

<a id="Discussion"></a>

## Discussion

When ARKit first detects a plane, the resulting [ARPlaneAnchor](../arplaneanchor.md) object has a [center](center.md) value of `(0,0,0)`, indicating that the translation portion of the anchor’s [transform](../aranchor/transform.md) value locates the plane’s center point.

As the session runs, ARKit may determine that a previously detected plane anchor is part of a larger real-world surface, increasing the [planeExtent](planeextent.md) width and height values. The plane’s new boundaries may not be symmetric around its initial position, so the [center](center.md) point changes relative to the anchor’s unchanged [transform](../aranchor/transform.md) matrix.

Similarly, as the session runs, the framework may update the plane’s y-rotation to better fit its rectangular area in the environment. In iOS 15 and earlier, the framework rotates the plane anchor according to that angle. In iOS 16, the framework doesn’t rotate the anchor automatically and its transform matrix remains unchanged. Instead, the framework exposes the angle in [rotationOnYAxis](../arplaneextent/rotationonyaxis.md) that you apply to any plane extent geometry in your app.

> **Important**

>  Apps that run on iOS 16 with a deployment target less than iOS 16 preserve the prior y-axis rotation behavior.

## See Also

### Dimensions

- [center](center.md): The center point of the plane relative to its anchor position.
- [ARPlaneExtent](../arplaneextent.md): The size and y-axis rotation of a detected plane.
- [extent](extent.md): Deprecated. The estimated width and length of the detected plane.

# planeExtent (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

The estimated width, length, and y-axis rotation of the detected plane.

## Declaration

```objectivec
@property (nonatomic, readonly) ARPlaneExtent * planeExtent;
```

<a id="Discussion"></a>

## Discussion

When ARKit first detects a plane, the resulting [ARPlaneAnchor](../arplaneanchor.md) object has a [center](center.md) value of `(0,0,0)`, indicating that the translation portion of the anchor’s [transform](../aranchor/transform.md) value locates the plane’s center point.

As the session runs, ARKit may determine that a previously detected plane anchor is part of a larger real-world surface, increasing the [planeExtent](planeextent.md) width and height values. The plane’s new boundaries may not be symmetric around its initial position, so the [center](center.md) point changes relative to the anchor’s unchanged [transform](../aranchor/transform.md) matrix.

Similarly, as the session runs, the framework may update the plane’s y-rotation to better fit its rectangular area in the environment. In iOS 15 and earlier, the framework rotates the plane anchor according to that angle. In iOS 16, the framework doesn’t rotate the anchor automatically and its transform matrix remains unchanged. Instead, the framework exposes the angle in [rotationOnYAxis](../arplaneextent/rotationonyaxis.md) that you apply to any plane extent geometry in your app.

> **Important**

>  Apps that run on iOS 16 with a deployment target less than iOS 16 preserve the prior y-axis rotation behavior.

## See Also

### Dimensions

- [center](center.md): The center point of the plane relative to its anchor position.
- [ARPlaneExtent](../arplaneextent.md): The size and y-axis rotation of a detected plane.
- [extent](extent.md): Deprecated. The estimated width and length of the detected plane.
