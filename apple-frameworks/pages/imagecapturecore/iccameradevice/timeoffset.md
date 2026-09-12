> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/timeoffset](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/timeoffset)

# timeOffset (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The time offset, in seconds, between the camera’s clock and the computer’s clock.

## Declaration

```swift
var timeOffset: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is positive if the camera’s clock is ahead of the computer’s clock. Ignore this property if the camera’s [capabilities](../icdevice/capabilities.md) do not include [cameraDeviceCanSyncClock](../icdevicecapability/cameradevicecansyncclock.md).

## See Also

### Synchronizing the Clock

- [requestSyncClock()](requestsyncclock%28%29.md): Synchronizes the camera’s clock with the computer’s clock.

# timeOffset (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The time offset, in seconds, between the camera’s clock and the computer’s clock.

## Declaration

```objectivec
@property (readonly) NSTimeInterval timeOffset;
```

<a id="Discussion"></a>

## Discussion

The value of this property is positive if the camera’s clock is ahead of the computer’s clock. Ignore this property if the camera’s [capabilities](../icdevice/capabilities.md) do not include [ICCameraDeviceCanSyncClock](../icdevicecapability/cameradevicecansyncclock.md).

## See Also

### Synchronizing the Clock

- [requestSyncClock](requestsyncclock%28%29.md): Synchronizes the camera’s clock with the computer’s clock.
