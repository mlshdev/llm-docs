> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/depthrange](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/depthrange)

# depthRange (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The distances to the far and near clipping planes from the person viewing the content, in meters.

## Declaration

```swift
var depthRange: simd_float2 { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

Apply the depth range for drawing to the drawable that it applies to. The compositor uses these values to compute the perspective projection matrix, which clips content that’s not between the near and far planes.

Compositor Services stores the values in reverse-z order in a 2D floating-point vector:

- The `x` property stores the distance of the far plane.
- The `y` property stores the distance of the near plane.

# cp_drawable_get_depth_range (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The distances to the far and near clipping planes from the person viewing the content, in meters.

## Declaration

```objectivec
simd_float2 cp_drawable_get_depth_range(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="return-value"></a>

## Return Value

Two floating-point values, in meters, that represent the distance to the near and far planes, respectively.

<a id="discussion"></a>

## Discussion

Apply the depth range for drawing to the drawable that it applies to. The compositor uses these values to compute the perspective projection matrix, which clips content that’s not between the near and far planes.

Compositor Services stores the values in reverse-z order in a 2D floating-point vector:

- The `x` property stores the distance of the far plane.
- The `y` property stores the distance of the near plane.
