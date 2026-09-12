> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevice/discoverysession](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevice/discoverysession)

# AVExternalSyncDevice.DiscoverySession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A means of discovering and monitoring connection / disconnection of external sync devices to the host.

## Declaration

```swift
class DiscoverySession
```

<a id="overview"></a>

## Overview

[AVExternalSyncDevice.DiscoverySession](discoverysession.md) is a singleton that lists the external sync devices connected to the host. The client is expected to key-value observe the [devices](discoverysession/devices.md) property for changes to the external sync devices list.

## Topics

### Accessing the shared instance

- [shared](discoverysession/shared.md): The singleton instance of the external sync source device discovery session.
- [isSupported](discoverysession/issupported.md): Whether external sync devices are supported by this device.

### Finding devices

- [devices](discoverysession/devices.md): An array of external sync devices connected to this host.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### External synchronization

- [AVExternalSyncDevice](../avexternalsyncdevice.md): An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.
- [AVExternalSyncDeviceDelegate](../avexternalsyncdevicedelegate.md): Defines an interface for delegates of [AVCaptureDeviceInput](../avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.
- [AVExternalSyncDeviceStatus](../avexternalsyncdevicestatus.md): Connection state of an external sync device

# AVExternalSyncDeviceDiscoverySession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A means of discovering and monitoring connection / disconnection of external sync devices to the host.

## Declaration

```objectivec
@interface AVExternalSyncDeviceDiscoverySession : NSObject
```

<a id="overview"></a>

## Overview

[AVExternalSyncDeviceDiscoverySession](discoverysession.md) is a singleton that lists the external sync devices connected to the host. The client is expected to key-value observe the [devices](discoverysession/devices.md) property for changes to the external sync devices list.

## Topics

### Accessing the shared instance

- [sharedSession](discoverysession/shared.md): The singleton instance of the external sync source device discovery session.
- [supported](discoverysession/issupported.md): Whether external sync devices are supported by this device.

### Finding devices

- [devices](discoverysession/devices.md): An array of external sync devices connected to this host.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### External synchronization

- [AVExternalSyncDevice](../avexternalsyncdevice.md): An external sync device connected to a host device that can be used to drive the timing of an internal component, such as a camera sensor.
- [AVExternalSyncDeviceDelegate](../avexternalsyncdevicedelegate.md): Defines an interface for delegates of [AVCaptureDeviceInput](../avcapturedeviceinput.md) to respond to events that occur when connecting, calibrating, and disconnecting external sync devices.
- [AVExternalSyncDeviceStatus](../avexternalsyncdevicestatus.md): Connection state of an external sync device
