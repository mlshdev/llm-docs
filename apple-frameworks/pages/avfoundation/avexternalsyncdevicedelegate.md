> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevicedelegate](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicedelegate)

# AVExternalSyncDeviceDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Defines an interface for delegates of [AVCaptureDeviceInput](avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.

## Declaration

```swift
protocol AVExternalSyncDeviceDelegate : NSObjectProtocol
```

## Topics

### Responding to device events

- [externalSyncDevice(\_:failedWithError:)](avexternalsyncdevicedelegate/externalsyncdevice%28__failedwitherror_%29.md)
- [externalSyncDeviceStatusDidChange(\_:)](avexternalsyncdevicedelegate/externalsyncdevicestatusdidchange%28__%29.md): Informs your delegate when the external sync device status has changed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### External synchronization

- [AVExternalSyncDevice](avexternalsyncdevice.md): An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.
- [AVExternalSyncDeviceStatus](avexternalsyncdevicestatus.md): Connection state of an external sync device
- [AVExternalSyncDevice.DiscoverySession](avexternalsyncdevice/discoverysession.md): A means of discovering and monitoring connection / disconnection of external sync devices to the host.

# AVExternalSyncDeviceDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Defines an interface for delegates of [AVCaptureDeviceInput](avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.

## Declaration

```objectivec
@protocol AVExternalSyncDeviceDelegate <NSObject>
```

## Topics

### Responding to device events

- [externalSyncDevice:failedWithError:](avexternalsyncdevicedelegate/externalsyncdevice%28__failedwitherror_%29.md)
- [externalSyncDeviceStatusDidChange:](avexternalsyncdevicedelegate/externalsyncdevicestatusdidchange%28__%29.md): Informs your delegate when the external sync device status has changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### External synchronization

- [AVExternalSyncDevice](avexternalsyncdevice.md): An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.
- [AVExternalSyncDeviceStatus](avexternalsyncdevicestatus.md): Connection state of an external sync device
- [AVExternalSyncDeviceDiscoverySession](avexternalsyncdevice/discoverysession.md): A means of discovering and monitoring connection / disconnection of external sync devices to the host.
