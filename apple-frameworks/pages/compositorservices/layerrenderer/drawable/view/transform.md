> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/view/transform](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/view/transform)

# transform (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The transformation matrix that converts between the device’s coordinate space to the position of the view in that space.

## Declaration

```swift
var transform: simd_float4x4 { get }
```

<a id="discussion"></a>

## Discussion

When you generate a frame, you specify a pose matrix that indicates the device’s position and orientation in the world coordinate space. When the device is a head-mounted display, the view for each eye has an additional matrix to specify the position of that eye relative to the device’s pose. Multiply the device’s pose matrix by the returned matrix to obtain the view’s location in the world coordinate space.

## See Also

### Getting the transformations

- [tangents](tangents.md): Deprecated. The tangent values for the angles you use to determine the planes of the viewing frustum.

# cp_view_get_transform (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The transformation matrix that converts between the device’s coordinate space to the position of the view in that space.

## Declaration

```objectivec
simd_float4x4 cp_view_get_transform(cp_view_t view);
```

## Parameters

- `view`: A view associated with your drawable.

<a id="return-value"></a>

## Return Value

A transform matrix from the device coordinate space to the view coordinate space.

<a id="discussion"></a>

## Discussion

When you generate a frame, you specify a pose matrix that indicates the device’s position and orientation in the world coordinate space. When the device is a head-mounted display, the view for each eye has an additional matrix to specify the position of that eye relative to the device’s pose. Multiply the device’s pose matrix by the returned matrix to obtain the view’s location in the world coordinate space.

## See Also

### Getting the transformations

- [cp_view_get_tangents](tangents.md): Deprecated. The tangent values for the angles you use to determine the planes of the viewing frustum.
