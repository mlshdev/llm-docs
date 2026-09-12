> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevicestatus/activesync](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicestatus/activesync)

# AVExternalSyncDeviceStatus.activeSync (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates that the [AVExternalSyncDevice](../avexternalsyncdevice.md) object is running and that the clock property on [AVExternalSyncDevice](../avexternalsyncdevice.md) is calibrated to the external sync signal.

## Declaration

```swift
case activeSync
```

## See Also

### Status values

- [AVExternalSyncDeviceStatus.calibrating](calibrating.md): Indicates that the external sync signal is connected and that the AVExternalSyncDevice object is calibrating to follow.
- [AVExternalSyncDeviceStatus.freeRunSync](freerunsync.md): Indicates that the AVExternalSyncDevice was calibrated to follow the external sync, but the sync signal has been lost. The camera will continue to match the last signal it received, but sync is not guaranteed.
- [AVExternalSyncDeviceStatus.ready](ready.md): Indicates that a device supporting external sync is connected, but calibration has not started.
- [AVExternalSyncDeviceStatus.unavailable](unavailable.md): Indicates that external sync signal is not connected, or has transitioned to a state that is not recoverable.

# AVExternalSyncDeviceStatusActiveSync (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Indicates that the [AVExternalSyncDevice](../avexternalsyncdevice.md) object is running and that the clock property on [AVExternalSyncDevice](../avexternalsyncdevice.md) is calibrated to the external sync signal.

## Declaration

```objectivec
AVExternalSyncDeviceStatusActiveSync
```

## See Also

### Status values

- [AVExternalSyncDeviceStatusCalibrating](calibrating.md): Indicates that the external sync signal is connected and that the AVExternalSyncDevice object is calibrating to follow.
- [AVExternalSyncDeviceStatusFreeRunSync](freerunsync.md): Indicates that the AVExternalSyncDevice was calibrated to follow the external sync, but the sync signal has been lost. The camera will continue to match the last signal it received, but sync is not guaranteed.
- [AVExternalSyncDeviceStatusReady](ready.md): Indicates that a device supporting external sync is connected, but calibration has not started.
- [AVExternalSyncDeviceStatusUnavailable](unavailable.md): Indicates that external sync signal is not connected, or has transitioned to a state that is not recoverable.
