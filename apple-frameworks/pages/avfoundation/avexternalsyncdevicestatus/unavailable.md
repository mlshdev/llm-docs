> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevicestatus/unavailable](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicestatus/unavailable)

# AVExternalSyncDeviceStatus.unavailable (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates that external sync signal is not connected, or has transitioned to a state that is not recoverable.

## Declaration

```swift
case unavailable
```

## See Also

### Status values

- [AVExternalSyncDeviceStatus.activeSync](activesync.md): Indicates that the [AVExternalSyncDevice](../avexternalsyncdevice.md) object is running and that the clock property on [AVExternalSyncDevice](../avexternalsyncdevice.md) is calibrated to the external sync signal.
- [AVExternalSyncDeviceStatus.calibrating](calibrating.md): Indicates that the external sync signal is connected and that the AVExternalSyncDevice object is calibrating to follow.
- [AVExternalSyncDeviceStatus.freeRunSync](freerunsync.md): Indicates that the AVExternalSyncDevice was calibrated to follow the external sync, but the sync signal has been lost. The camera will continue to match the last signal it received, but sync is not guaranteed.
- [AVExternalSyncDeviceStatus.ready](ready.md): Indicates that a device supporting external sync is connected, but calibration has not started.

# AVExternalSyncDeviceStatusUnavailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates that external sync signal is not connected, or has transitioned to a state that is not recoverable.

## Declaration

```objectivec
AVExternalSyncDeviceStatusUnavailable
```

## See Also

### Status values

- [AVExternalSyncDeviceStatusActiveSync](activesync.md): Indicates that the [AVExternalSyncDevice](../avexternalsyncdevice.md) object is running and that the clock property on [AVExternalSyncDevice](../avexternalsyncdevice.md) is calibrated to the external sync signal.
- [AVExternalSyncDeviceStatusCalibrating](calibrating.md): Indicates that the external sync signal is connected and that the AVExternalSyncDevice object is calibrating to follow.
- [AVExternalSyncDeviceStatusFreeRunSync](freerunsync.md): Indicates that the AVExternalSyncDevice was calibrated to follow the external sync, but the sync signal has been lost. The camera will continue to match the last signal it received, but sync is not guaranteed.
- [AVExternalSyncDeviceStatusReady](ready.md): Indicates that a device supporting external sync is connected, but calibration has not started.
