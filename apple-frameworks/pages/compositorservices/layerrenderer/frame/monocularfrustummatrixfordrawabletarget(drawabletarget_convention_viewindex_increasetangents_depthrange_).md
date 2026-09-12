> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/monocularfrustummatrixfordrawabletarget(drawabletarget:convention:viewindex:increasetangents:depthrange:)](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/monocularfrustummatrixfordrawabletarget(drawabletarget:convention:viewindex:increasetangents:depthrange:))

# monocularFrustumMatrixForDrawableTarget(drawableTarget:convention:viewIndex:increaseTangents:depthRange:)

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the transform which can be used for monocular frustum culling for given view. A matrix to convert between the device coordinate space to normalized device coordinate space This should be acquired between starting and submitting a frame. Renderer should not utilize this transform for actual rendering output.

## Declaration

```swift
func monocularFrustumMatrixForDrawableTarget(drawableTarget: LayerRenderer.Drawable.Target, convention: AxisDirectionConvention = .rightUpBack, viewIndex: Int, increaseTangents: SIMD4<Float>, depthRange: SIMD2<Float>) -> matrix_float4x4
```

## Parameters

- `convention`: The coordinate axes convention used.
- `increaseTangents`: The requested increased tangents for computing the projection transform. Values should be positive.
- `depthRange`: The requested depth range for computing the projection transform. Values should be positive.

<a id="return-value"></a>

## Return Value

A perspective projection matrix that transforms coordinates from view coordinate space to clip space.

<a id="discussion"></a>

## Discussion

The convention is defined in normalized device coordinates, which impact the rendering direction of rendering but have no impact on the convention used for model/view space. To convert from view space to the axis direction convention used by the projection matrix, a rotation/mirror matrix can be applied pre-projection matrix.

The axes are defined as: • X axes determines the horizontal direction of pixels – right convention means the left-most pixel is the left of the view • Y axes determines the vertical direction of pixels – up convention means the top-most pixel is the top of the view • Z axes determines the handedness/winding order The default convention is `rightUpBack` for CompositorServices and Metal renderers which has a counter-clockwise winding order.

To avoid false positives during culling, transform should have broader tangents and depth range compared to one will be used for rendering. As the time performing culling becomes more distant from `presentation time`, renderer should request for wider tangents/depth.
