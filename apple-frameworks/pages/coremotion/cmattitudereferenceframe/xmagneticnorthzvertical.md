> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmattitudereferenceframe/xmagneticnorthzvertical](https://developer.apple.com/documentation/coremotion/cmattitudereferenceframe/xmagneticnorthzvertical)

# xMagneticNorthZVertical (Swift)

**Framework:** Core Motion  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.

## Declaration

```swift
static var xMagneticNorthZVertical: CMAttitudeReferenceFrame { get }
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

Use this option to determine the attitude of the device relative to magnetic north. For example, you might use this to implement a compass feature in your app. The [yaw](../cmattitude/yaw.md) (Z-axis) value in [CMAttitude](../cmattitude.md) is `0` when the X axis is aligned with magnetic north.

The device must have a magnetometer and that sensor must be available. If the magnetometer isn’t currently calibrated, Core Motion prompts the person to move the device to calibrate it.

## See Also

### Getting the reference frames

- [xArbitraryZVertical](xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [xArbitraryCorrectedZVertical](xarbitrarycorrectedzvertical.md): A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.
- [xTrueNorthZVertical](xtruenorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.

# CMAttitudeReferenceFrameXMagneticNorthZVertical (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.

## Declaration

```objectivec
CMAttitudeReferenceFrameXMagneticNorthZVertical
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

Use this option to determine the attitude of the device relative to magnetic north. For example, you might use this to implement a compass feature in your app. The [yaw](../cmattitude/yaw.md) (Z-axis) value in [CMAttitude](../cmattitude.md) is `0` when the X axis is aligned with magnetic north.

The device must have a magnetometer and that sensor must be available. If the magnetometer isn’t currently calibrated, Core Motion prompts the person to move the device to calibrate it.

## See Also

### Getting the reference frames

- [CMAttitudeReferenceFrameXArbitraryZVertical](xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [CMAttitudeReferenceFrameXArbitraryCorrectedZVertical](xarbitrarycorrectedzvertical.md): A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.
- [CMAttitudeReferenceFrameXTrueNorthZVertical](xtruenorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.
