> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice)

# AVExternalSyncDevice (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.

## Declaration

```swift
class AVExternalSyncDevice
```

<a id="overview"></a>

## Overview

Each instance of [AVExternalSyncDevice](avexternalsyncdevice.md) corresponds to a physical external device that can drive an internal component, like a camera readout. You cannot create instances of [AVExternalSyncDevice](avexternalsyncdevice.md). Instead, you obtain an array of all currently available external sync devices using [AVExternalSyncDevice.DiscoverySession](avexternalsyncdevice/discoverysession.md).

## Topics

### Finding and monitoring devices

- [AVExternalSyncDevice.DiscoverySession](avexternalsyncdevice/discoverysession.md): A means of discovering and monitoring connection / disconnection of external sync devices to the host.

### Inspecting a device

- [clock](avexternalsyncdevice/clock.md): A clock representing the source of time from the external sync device.
- [productID](avexternalsyncdevice/productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](avexternalsyncdevice/signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](avexternalsyncdevice/status.md): The status of the externally connected device.
- [uuid](avexternalsyncdevice/uuid.md): A unique identifier for an external sync device.
- [vendorID](avexternalsyncdevice/vendorid.md): The USB vendor identifier associated with the external sync device.

### Instance Properties

- [isSignalCompensationDelaySupported](avexternalsyncdevice/issignalcompensationdelaysupported.md): Whether adjusting the signal compensation delay property is currently supported.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### External synchronization

- [AVExternalSyncDeviceDelegate](avexternalsyncdevicedelegate.md): Defines an interface for delegates of [AVCaptureDeviceInput](avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.
- [AVExternalSyncDeviceStatus](avexternalsyncdevicestatus.md): Connection state of an external sync device
- [AVExternalSyncDevice.DiscoverySession](avexternalsyncdevice/discoverysession.md): A means of discovering and monitoring connection / disconnection of external sync devices to the host.

# AVExternalSyncDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.

## Declaration

```objectivec
@interface AVExternalSyncDevice : NSObject
```

<a id="overview"></a>

## Overview

Each instance of [AVExternalSyncDevice](avexternalsyncdevice.md) corresponds to a physical external device that can drive an internal component, like a camera readout. You cannot create instances of [AVExternalSyncDevice](avexternalsyncdevice.md). Instead, you obtain an array of all currently available external sync devices using [AVExternalSyncDeviceDiscoverySession](avexternalsyncdevice/discoverysession.md).

## Topics

### Inspecting a device

- [clock](avexternalsyncdevice/clock.md): A clock representing the source of time from the external sync device.
- [productID](avexternalsyncdevice/productid.md): The USB product identifier associated with the external sync device.
- [signalCompensationDelay](avexternalsyncdevice/signalcompensationdelay.md): Delay to wait before starting the frame capture.
- [status](avexternalsyncdevice/status.md): The status of the externally connected device.
- [uuid](avexternalsyncdevice/uuid.md): A unique identifier for an external sync device.
- [vendorID](avexternalsyncdevice/vendorid.md): The USB vendor identifier associated with the external sync device.

### Instance Properties

- [signalCompensationDelaySupported](avexternalsyncdevice/issignalcompensationdelaysupported.md): Whether adjusting the signal compensation delay property is currently supported.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### External synchronization

- [AVExternalSyncDeviceDelegate](avexternalsyncdevicedelegate.md): Defines an interface for delegates of [AVCaptureDeviceInput](avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.
- [AVExternalSyncDeviceStatus](avexternalsyncdevicestatus.md): Connection state of an external sync device
- [AVExternalSyncDeviceDiscoverySession](avexternalsyncdevice/discoverysession.md): A means of discovering and monitoring connection / disconnection of external sync devices to the host.
