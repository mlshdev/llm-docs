> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/displaytransform(viewrotationangle:viewportsize:)](https://developer.apple.com/documentation/arkit/arframe/displaytransform(viewrotationangle:viewportsize:))

# displayTransform(viewRotationAngle:viewportSize:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Returns a display transform for the provided viewport size and view angle.

## Declaration

```swift
func displayTransform(viewRotationAngle: CGFloat, viewportSize: CGSize) -> CGAffineTransform
```

## Parameters

- `viewRotationAngle`: The view rotation angle, in degrees, of the viewport.
- `viewportSize`: The size of the viewport.

<a id="return-value"></a>

## Return Value

The display transform matrix.

<a id="discussion"></a>

## Discussion

The display transform can be used to convert normalized points in the image-space coordinate system of the captured image to normalized points in the view’s coordinate space. The transform provides the correct rotation and aspect-fill for presenting the captured image in the given view angle and size.

The view angle, in degrees, is the clockwise rotation needed to keep the camera image level with the horizon (`0` LandscapeRight, `90` Portrait, `180` LandscapeLeft, `270` PortraitUpsideDown). Obtain it from `ARSession.viewRotationAngle`.

# displayTransformForViewRotationAngle:viewportSize: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Returns a display transform for the provided viewport size and view angle.

## Declaration

```objectivec
- (CGAffineTransform) displayTransformForViewRotationAngle:(CGFloat) viewRotationAngle viewportSize:(CGSize) viewportSize;
```

## Parameters

- `viewRotationAngle`: The view rotation angle, in degrees, of the viewport.
- `viewportSize`: The size of the viewport.

<a id="return-value"></a>

## Return Value

The display transform matrix.

<a id="discussion"></a>

## Discussion

The display transform can be used to convert normalized points in the image-space coordinate system of the captured image to normalized points in the view’s coordinate space. The transform provides the correct rotation and aspect-fill for presenting the captured image in the given view angle and size.

The view angle, in degrees, is the clockwise rotation needed to keep the camera image level with the horizon (`0` LandscapeRight, `90` Portrait, `180` LandscapeLeft, `270` PortraitUpsideDown). Obtain it from `ARSession.viewRotationAngle`.
