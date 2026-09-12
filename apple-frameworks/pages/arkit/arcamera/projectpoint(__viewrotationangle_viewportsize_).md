> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/projectpoint(_:viewrotationangle:viewportsize:)](https://developer.apple.com/documentation/arkit/arcamera/projectpoint(_:viewrotationangle:viewportsize:))

# projectPoint(\_:viewRotationAngle:viewportSize:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Project a 3D point in world coordinate system into 2D viewport space.

## Declaration

```swift
func projectPoint(_ point: simd_float3, viewRotationAngle: CGFloat, viewportSize: CGSize) -> CGPoint
```

## Parameters

- `point`: 3D point in world coordinate system.
- `viewRotationAngle`: View rotation angle in degrees.
- `viewportSize`: Viewport (or image) size.

<a id="return-value"></a>

## Return Value

2D point in viewport coordinate system with origin at top-left.

<a id="discussion"></a>

## Discussion

The view angle, in degrees, is the clockwise rotation needed to keep the camera image level with the horizon (`0` LandscapeRight, `90` Portrait, `180` LandscapeLeft, `270` PortraitUpsideDown). Obtain it from `ARSession.viewRotationAngle`.

# projectPoint:viewRotationAngle:viewportSize: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Project a 3D point in world coordinate system into 2D viewport space.

## Declaration

```objectivec
- (CGPoint) projectPoint:(simd_float3) point viewRotationAngle:(CGFloat) viewRotationAngle viewportSize:(CGSize) viewportSize;
```

## Parameters

- `point`: 3D point in world coordinate system.
- `viewRotationAngle`: View rotation angle in degrees.
- `viewportSize`: Viewport (or image) size.

<a id="return-value"></a>

## Return Value

2D point in viewport coordinate system with origin at top-left.

<a id="discussion"></a>

## Discussion

The view angle, in degrees, is the clockwise rotation needed to keep the camera image level with the horizon (`0` LandscapeRight, `90` Portrait, `180` LandscapeLeft, `270` PortraitUpsideDown). Obtain it from `ARSession.viewRotationAngle`.
