> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arcamera/projectionmatrix(viewrotationangle:viewportsize:znear:zfar:)

# projectionMatrix(viewRotationAngle:viewportSize:zNear:zFar:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Creates a projection matrix for the camera given rendering parameters.

## Declaration

```swift
func projectionMatrix(viewRotationAngle: CGFloat, viewportSize: CGSize, zNear: CGFloat, zFar: CGFloat) -> simd_float4x4
```

## Parameters

- `viewRotationAngle`: View rotation angle in degrees.
- `viewportSize`: Viewport size.
- `zNear`: Near depth limit.
- `zFar`: Far depth limit.

<a id="return-value"></a>

## Return Value

The projection matrix for the given parameters.

<a id="discussion"></a>

## Discussion

The projection matrix returned provides an aspect fill for the provided viewport size and view angle. If zFar is set to 0, an infinite projection matrix will be returned.

The view angle, in degrees, is the clockwise rotation needed to keep the camera image level with the horizon (`0` LandscapeRight, `90` Portrait, `180` LandscapeLeft, `270` PortraitUpsideDown). Obtain it from `ARSession.viewRotationAngle`.

# projectionMatrixForViewRotationAngle:viewportSize:zNear:zFar: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Creates a projection matrix for the camera given rendering parameters.

## Declaration

```objectivec
- (simd_float4x4) projectionMatrixForViewRotationAngle:(CGFloat) viewRotationAngle viewportSize:(CGSize) viewportSize zNear:(CGFloat) zNear zFar:(CGFloat) zFar;
```

## Parameters

- `viewRotationAngle`: View rotation angle in degrees.
- `viewportSize`: Viewport size.
- `zNear`: Near depth limit.
- `zFar`: Far depth limit.

<a id="return-value"></a>

## Return Value

The projection matrix for the given parameters.

<a id="discussion"></a>

## Discussion

The projection matrix returned provides an aspect fill for the provided viewport size and view angle. If zFar is set to 0, an infinite projection matrix will be returned.

The view angle, in degrees, is the clockwise rotation needed to keep the camera image level with the horizon (`0` LandscapeRight, `90` Portrait, `180` LandscapeLeft, `270` PortraitUpsideDown). Obtain it from `ARSession.viewRotationAngle`.
