> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/projectionmatrixfororientation:viewportsize:znear:zfar:](https://developer.apple.com/documentation/arkit/arcamera/projectionmatrixfororientation:viewportsize:znear:zfar:)

# projectionMatrixForOrientation:viewportSize:zNear:zFar:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0)

Creates a projection matrix for the camera given rendering parameters.

## Declaration

```objectivec
- (simd_float4x4) projectionMatrixForOrientation:(UIInterfaceOrientation) orientation viewportSize:(CGSize) viewportSize zNear:(CGFloat) zNear zFar:(CGFloat) zFar;
```

## Parameters

- `orientation`: Viewport orientation.
- `viewportSize`: Viewport size.
- `zNear`: Near depth limit.
- `zFar`: Far depth limit.

<a id="return-value"></a>

## Return Value

The projection matrix for the given parameters.

<a id="discussion"></a>

## Discussion

The projection matrix returned provides an aspect fill for the provided viewport size and orientation. If zFar is set to 0, an infinite projection matrix will be returned.
