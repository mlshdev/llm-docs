> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/attitudereferenceframe](https://developer.apple.com/documentation/coremotion/cmmotionmanager/attitudereferenceframe)

# attitudeReferenceFrame (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Returns either the reference frame currently being used or the default attitude reference frame.

## Declaration

```swift
var attitudeReferenceFrame: CMAttitudeReferenceFrame { get }
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

If the device-motion service is active, this property returns the reference frame currently in use. If the service is inactive, but your app started it at some point since launch, this property contains the last reference frame you used. If you haven’t started the device-motion service since app launch, this property returns the default frame of reference, which is [xArbitraryZVertical](../cmattitudereferenceframe/xarbitraryzvertical.md).

If device motion is not available on the current device, the value of this property is undefined.

## See Also

### Related Documentation

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.

### Accessing Attitude Reference Frames

- [availableAttitudeReferenceFrames()](availableattitudereferenceframes%28%29.md): Returns a bitmask of the available reference frames for reporting the attitude of the current device.

# attitudeReferenceFrame (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Returns either the reference frame currently being used or the default attitude reference frame.

## Declaration

```objectivec
@property (nonatomic, readonly) CMAttitudeReferenceFrame attitudeReferenceFrame;
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

If the device-motion service is active, this property returns the reference frame currently in use. If the service is inactive, but your app started it at some point since launch, this property contains the last reference frame you used. If you haven’t started the device-motion service since app launch, this property returns the default frame of reference, which is [CMAttitudeReferenceFrameXArbitraryZVertical](../cmattitudereferenceframe/xarbitraryzvertical.md).

If device motion is not available on the current device, the value of this property is undefined.

## See Also

### Related Documentation

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.

### Accessing Attitude Reference Frames

- [availableAttitudeReferenceFrames](availableattitudereferenceframes%28%29.md): Returns a bitmask of the available reference frames for reporting the attitude of the current device.
