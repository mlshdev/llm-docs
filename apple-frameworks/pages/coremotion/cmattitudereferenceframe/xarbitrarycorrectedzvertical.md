> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmattitudereferenceframe/xarbitrarycorrectedzvertical](https://developer.apple.com/documentation/coremotion/cmattitudereferenceframe/xarbitrarycorrectedzvertical)

# xArbitraryCorrectedZVertical (Swift)

**Framework:** Core Motion  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.

## Declaration

```swift
static var xArbitraryCorrectedZVertical: CMAttitudeReferenceFrame { get }
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

When you start the device-motion service, Core Motion uses the current device orientation to set the initial frame of reference. You might use this option when you don’t need to know the device’s attitude relative to true or magnetic north, and only track rotational changes over time.

This option uses the magnetometer to improve long-term accuracy for the z axis (yaw) measurements. The device must have a magnetometer and that sensor must be available and calibrated.

This option requires more CPU usage than the [xArbitraryZVertical](xarbitraryzvertical.md) option.

> **Tip**

>  Save the first reported attitude value, and compare it to new values to determine changes since the start of the service.

## See Also

### Getting the reference frames

- [xArbitraryZVertical](xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [xMagneticNorthZVertical](xmagneticnorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.
- [xTrueNorthZVertical](xtruenorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.

# CMAttitudeReferenceFrameXArbitraryCorrectedZVertical (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A reference frame where the Z axis is vertical and has improved rotation accuracy, and the X axis points in an arbitrary direction in the horizontal plane.

## Declaration

```objectivec
CMAttitudeReferenceFrameXArbitraryCorrectedZVertical
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

When you start the device-motion service, Core Motion uses the current device orientation to set the initial frame of reference. You might use this option when you don’t need to know the device’s attitude relative to true or magnetic north, and only track rotational changes over time.

This option uses the magnetometer to improve long-term accuracy for the z axis (yaw) measurements. The device must have a magnetometer and that sensor must be available and calibrated.

This option requires more CPU usage than the [CMAttitudeReferenceFrameXArbitraryZVertical](xarbitraryzvertical.md) option.

> **Tip**

>  Save the first reported attitude value, and compare it to new values to determine changes since the start of the service.

## See Also

### Getting the reference frames

- [CMAttitudeReferenceFrameXArbitraryZVertical](xarbitraryzvertical.md): A reference frame where the Z axis is vertical and the X axis points in an arbitrary direction in the horizontal plane.
- [CMAttitudeReferenceFrameXMagneticNorthZVertical](xmagneticnorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the magnetic north pole.
- [CMAttitudeReferenceFrameXTrueNorthZVertical](xtruenorthzvertical.md): A reference frame where the Z axis is vertical and the X axis points to the geographic north pole.
