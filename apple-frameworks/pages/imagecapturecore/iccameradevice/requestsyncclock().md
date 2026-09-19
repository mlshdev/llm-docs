> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevice/requestsyncclock()

# requestSyncClock() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Synchronizes the camera’s clock with the computer’s clock.

## Declaration

```swift
func requestSyncClock()
```

<a id="Discussion"></a>

## Discussion

Send this request only if the camera has the [cameraDeviceCanSyncClock](../icdevicecapability/cameradevicecansyncclock.md) capability.

## See Also

### Synchronizing the Clock

- [timeOffset](timeoffset.md): The time offset, in seconds, between the camera’s clock and the computer’s clock.

# requestSyncClock (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Synchronizes the camera’s clock with the computer’s clock.

## Declaration

```objectivec
- (void) requestSyncClock;
```

<a id="Discussion"></a>

## Discussion

Send this request only if the camera has the [ICCameraDeviceCanSyncClock](../icdevicecapability/cameradevicecansyncclock.md) capability.

## See Also

### Synchronizing the Clock

- [timeOffset](timeoffset.md): The time offset, in seconds, between the camera’s clock and the computer’s clock.
