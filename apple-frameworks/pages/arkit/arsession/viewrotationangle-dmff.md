> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arsession/viewrotationangle-dmff](https://developer.apple.com/documentation/arkit/arsession/viewrotationangle-dmff)

# viewRotationAngle

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The angle, in degrees, to rotate a view by so the `ARFrame` it displays stays level with the horizon as the device rotates.

## Declaration

```objectivec
@property (atomic, readonly) CGFloat viewRotationAngle;
```

<a id="discussion"></a>

## Discussion

Updates in step with the system UI rotation. The value is normalized to `[0, 360)` (`0` at LandscapeRight, `90` at Portrait, `180` at LandscapeLeft, `270` at PortraitUpsideDown), or `NaN` until the angle is available (`viewLayer` is set and on screen).
