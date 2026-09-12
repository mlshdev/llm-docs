> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsessionobserver/session(_:didchangeviewrotationangle:)](https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:didchangeviewrotationangle:))

# session(\_:didChangeViewRotationAngle:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

This is called when the view rotation angle changes.

## Declaration

```swift
optional func session(_ session: ARSession, didChangeViewRotationAngle viewRotationAngle: CGFloat)
```

## Parameters

- `session`: The session that provides the angle.
- `viewRotationAngle`: The angle, in degrees, normalized to `[0, 360)` (`0` at LandscapeRight, `90` at Portrait, `180` at LandscapeLeft, and `270` at PortraitUpsideDown).

<a id="discussion"></a>

## Discussion

ARKit calls this method when a new angle becomes available, in step with the system UI rotation. Implement it to rotate a view by the given angle so the `ARFrame` it displays stays level with the horizon as the device rotates.

# session:didChangeViewRotationAngle: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

This is called when the view rotation angle changes.

## Declaration

```objectivec
- (void) session:(ARSession *) session didChangeViewRotationAngle:(CGFloat) viewRotationAngle;
```

## Parameters

- `session`: The session that provides the angle.
- `viewRotationAngle`: The angle, in degrees, normalized to `[0, 360)` (`0` at LandscapeRight, `90` at Portrait, `180` at LandscapeLeft, and `270` at PortraitUpsideDown).

<a id="discussion"></a>

## Discussion

ARKit calls this method when a new angle becomes available, in step with the system UI rotation. Implement it to rotate a view by the given angle so the `ARFrame` it displays stays level with the horizon as the device rotates.
