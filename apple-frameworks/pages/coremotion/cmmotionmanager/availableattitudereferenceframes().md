> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/availableattitudereferenceframes()](https://developer.apple.com/documentation/coremotion/cmmotionmanager/availableattitudereferenceframes())

# availableAttitudeReferenceFrames() (Swift)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Returns a bitmask of the available reference frames for reporting the attitude of the current device.

## Declaration

```swift
class func availableAttitudeReferenceFrames() -> CMAttitudeReferenceFrame
```

<a id="return-value"></a>

## Return Value

A bitmask that you can bitwise-AND with the `enum` constants of the [CMAttitudeReferenceFrame](../cmattitudereferenceframe.md) type.

<a id="Discussion"></a>

## Discussion

When starting a service that allows you to specify a reference frame, it’s your responsibility to specify a reference frame that’s available on the current device. Some reference frames might be unavailable because the required hardware isn’t present or not currently available.

The following example shows how to call this method and test for the availability of the [xMagneticNorthZVertical](../cmattitudereferenceframe/xmagneticnorthzvertical.md) value.

```objc
if ([CMMotionManager availableAttitudeReferenceFrames] & CMAttitudeReferenceFrameXMagneticNorthZVertical) {
    // do something appropriate here
}
```

## See Also

### Accessing Attitude Reference Frames

- [attitudeReferenceFrame](attitudereferenceframe.md): Returns either the reference frame currently being used or the default attitude reference frame.

# availableAttitudeReferenceFrames (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Returns a bitmask of the available reference frames for reporting the attitude of the current device.

## Declaration

```objectivec
+ (CMAttitudeReferenceFrame) availableAttitudeReferenceFrames;
```

<a id="return-value"></a>

## Return Value

A bitmask that you can bitwise-AND with the `enum` constants of the [CMAttitudeReferenceFrame](../cmattitudereferenceframe.md) type.

<a id="Discussion"></a>

## Discussion

When starting a service that allows you to specify a reference frame, it’s your responsibility to specify a reference frame that’s available on the current device. Some reference frames might be unavailable because the required hardware isn’t present or not currently available.

The following example shows how to call this method and test for the availability of the [CMAttitudeReferenceFrameXMagneticNorthZVertical](../cmattitudereferenceframe/xmagneticnorthzvertical.md) value.

```objc
if ([CMMotionManager availableAttitudeReferenceFrames] & CMAttitudeReferenceFrameXMagneticNorthZVertical) {
    // do something appropriate here
}
```

## See Also

### Accessing Attitude Reference Frames

- [attitudeReferenceFrame](attitudereferenceframe.md): Returns either the reference frame currently being used or the default attitude reference frame.
