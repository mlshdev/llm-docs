> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmattitudereferenceframe/xtruenorthzvertical](https://developer.apple.com/documentation/coremotion/cmattitudereferenceframe/xtruenorthzvertical)

# xTrueNorthZVertical (Swift)

**Framework:** Core Motion  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.

## Declaration

```swift
static var xTrueNorthZVertical: CMAttitudeReferenceFrame { get }
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

Use this option to determine the attitude of the device relative to true north. For example, you might use this to implement more precise navigation. The [yaw](../cmattitude/yaw.md) (Z-axis) value in [CMAttitude](../cmattitude.md) is `0` when the X axis is aligned with true north.

The device must have a magnetometer and that sensor must be available. Location services must also be available to calculate the difference between magnetic and true north. If the magnetometer isn’t currently calibrated, Core Motion prompts the person to move the device to calibrate it.

## See Also

### Getting the reference frames

- [xArbitraryZVertical](xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [xArbitraryCorrectedZVertical](xarbitrarycorrectedzvertical.md): A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.
- [xMagneticNorthZVertical](xmagneticnorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.

# CMAttitudeReferenceFrameXTrueNorthZVertical (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.

## Declaration

```objectivec
CMAttitudeReferenceFrameXTrueNorthZVertical
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

Use this option to determine the attitude of the device relative to true north. For example, you might use this to implement more precise navigation. The [yaw](../cmattitude/yaw.md) (Z-axis) value in [CMAttitude](../cmattitude.md) is `0` when the X axis is aligned with true north.

The device must have a magnetometer and that sensor must be available. Location services must also be available to calculate the difference between magnetic and true north. If the magnetometer isn’t currently calibrated, Core Motion prompts the person to move the device to calibrate it.

## See Also

### Getting the reference frames

- [CMAttitudeReferenceFrameXArbitraryZVertical](xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [CMAttitudeReferenceFrameXArbitraryCorrectedZVertical](xarbitrarycorrectedzvertical.md): A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.
- [CMAttitudeReferenceFrameXMagneticNorthZVertical](xmagneticnorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.
