> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevicestatus](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicestatus)

# AVExternalSyncDeviceStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Connection state of an external sync device

## Declaration

```swift
enum AVExternalSyncDeviceStatus
```

## Topics

### Status values

- [AVExternalSyncDeviceStatus.activeSync](avexternalsyncdevicestatus/activesync.md): Indicates that the [AVExternalSyncDevice](avexternalsyncdevice.md) object is running and that the clock property on [AVExternalSyncDevice](avexternalsyncdevice.md) is calibrated to the external sync signal.
- [AVExternalSyncDeviceStatus.calibrating](avexternalsyncdevicestatus/calibrating.md): Indicates that the external sync signal is connected and that the AVExternalSyncDevice object is calibrating to follow.
- [AVExternalSyncDeviceStatus.freeRunSync](avexternalsyncdevicestatus/freerunsync.md): Indicates that the AVExternalSyncDevice was calibrated to follow the external sync, but the sync signal has been lost. The camera will continue to match the last signal it received, but sync is not guaranteed.
- [AVExternalSyncDeviceStatus.ready](avexternalsyncdevicestatus/ready.md): Indicates that a device supporting external sync is connected, but calibration has not started.
- [AVExternalSyncDeviceStatus.unavailable](avexternalsyncdevicestatus/unavailable.md): Indicates that external sync signal is not connected, or has transitioned to a state that is not recoverable.

### Initializers

- [init(rawValue:)](avexternalsyncdevicestatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### External synchronization

- [AVExternalSyncDevice](avexternalsyncdevice.md): An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.
- [AVExternalSyncDeviceDelegate](avexternalsyncdevicedelegate.md): Defines an interface for delegates of [AVCaptureDeviceInput](avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.
- [AVExternalSyncDevice.DiscoverySession](avexternalsyncdevice/discoverysession.md): A means of discovering and monitoring connection / disconnection of external sync devices to the host.

# AVExternalSyncDeviceStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Connection state of an external sync device

## Declaration

```objectivec
enum AVExternalSyncDeviceStatus : NSInteger;
```

## Topics

### Status values

- [AVExternalSyncDeviceStatusActiveSync](avexternalsyncdevicestatus/activesync.md): Indicates that the [AVExternalSyncDevice](avexternalsyncdevice.md) object is running and that the clock property on [AVExternalSyncDevice](avexternalsyncdevice.md) is calibrated to the external sync signal.
- [AVExternalSyncDeviceStatusCalibrating](avexternalsyncdevicestatus/calibrating.md): Indicates that the external sync signal is connected and that the AVExternalSyncDevice object is calibrating to follow.
- [AVExternalSyncDeviceStatusFreeRunSync](avexternalsyncdevicestatus/freerunsync.md): Indicates that the AVExternalSyncDevice was calibrated to follow the external sync, but the sync signal has been lost. The camera will continue to match the last signal it received, but sync is not guaranteed.
- [AVExternalSyncDeviceStatusReady](avexternalsyncdevicestatus/ready.md): Indicates that a device supporting external sync is connected, but calibration has not started.
- [AVExternalSyncDeviceStatusUnavailable](avexternalsyncdevicestatus/unavailable.md): Indicates that external sync signal is not connected, or has transitioned to a state that is not recoverable.

## See Also

### External synchronization

- [AVExternalSyncDevice](avexternalsyncdevice.md): An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.
- [AVExternalSyncDeviceDelegate](avexternalsyncdevicedelegate.md): Defines an interface for delegates of [AVCaptureDeviceInput](avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.
- [AVExternalSyncDeviceDiscoverySession](avexternalsyncdevice/discoverysession.md): A means of discovering and monitoring connection / disconnection of external sync devices to the host.
