> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/transform](https://developer.apple.com/documentation/arkit/arcamera/transform)

# transform (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The position and orientation of the camera in world coordinate space.

## Declaration

```swift
var transform: simd_float4x4 { get }
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

This transform creates a local coordinate space for the camera that is constant with respect to device orientation. In camera space, the x-axis points to the right when the device is in [UIDeviceOrientation.landscapeLeft](../../uikit/uideviceorientation/landscapeleft.md) orientation—that is, the x-axis always points along the long axis of the device, from the front-facing camera toward the Home button. The y-axis points upward (with respect to [UIDeviceOrientation.landscapeLeft](../../uikit/uideviceorientation/landscapeleft.md) orientation), and the z-axis points away from the device on the screen side.

## See Also

### Examining Camera Geometry

- [eulerAngles](eulerangles.md): The orientation of the camera, expressed as roll, pitch, and yaw values.

# transform (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The position and orientation of the camera in world coordinate space.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float4x4 transform;
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](../managing-session-life-cycle-and-tracking-quality.md)

<a id="Discussion"></a>

## Discussion

World coordinate space in ARKit always follows a right-handed convention, but is oriented based on the session configuration. For details, see [Understanding World Tracking](../understanding-world-tracking.md).

This transform creates a local coordinate space for the camera that is constant with respect to device orientation. In camera space, the x-axis points to the right when the device is in [UIDeviceOrientationLandscapeLeft](../../uikit/uideviceorientation/landscapeleft.md) orientation—that is, the x-axis always points along the long axis of the device, from the front-facing camera toward the Home button. The y-axis points upward (with respect to [UIDeviceOrientationLandscapeLeft](../../uikit/uideviceorientation/landscapeleft.md) orientation), and the z-axis points away from the device on the screen side.

## See Also

### Examining Camera Geometry

- [eulerAngles](eulerangles.md): The orientation of the camera, expressed as roll, pitch, and yaw values.
