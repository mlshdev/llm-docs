> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/discoverysession](https://developer.apple.com/documentation/avfoundation/avcapturedevice/discoverysession)

# AVCaptureDevice.DiscoverySession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

An object that finds capture devices that match specific search criteria.

## Declaration

```swift
class DiscoverySession
```

## Mentioned In

- [Choosing a capture device](../choosing-a-capture-device.md)
- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="overview"></a>

## Overview

After creating a device discovery session, query its [devices](discoverysession/devices.md) property to find a device to use for capture. You can also key-value observe this property to monitor changes to the list of available devices.

## Topics

### Creating a session

- [init(deviceTypes:mediaType:position:)](discoverysession/init%28devicetypes_mediatype_position_%29.md): Creates a discovery session that finds devices that match the specified criteria.

### Finding devices

- [devices](discoverysession/devices.md): A list of devices that match the search criteria of the discovery session.
- [supportedMultiCamDeviceSets](discoverysession/supportedmulticamdevicesets.md): Sets of capture devices that you can use simultaneously in a multi-camera session.

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

### Finding and monitoring devices

- [default(\_:for:position:)](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [default(for:)](default%28for_%29.md): Returns the default device that captures the specified media type.
- [init(uniqueID:)](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [wasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices(for:)](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices()](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

# AVCaptureDeviceDiscoverySession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

An object that finds capture devices that match specific search criteria.

## Declaration

```objectivec
@interface AVCaptureDeviceDiscoverySession : NSObject
```

## Mentioned In

- [Choosing a capture device](../choosing-a-capture-device.md)
- [Adopting smart framing in your camera app](../adopting-smart-framing-in-your-camera-app.md)

<a id="overview"></a>

## Overview

After creating a device discovery session, query its [devices](discoverysession/devices.md) property to find a device to use for capture. You can also key-value observe this property to monitor changes to the list of available devices.

## Topics

### Creating a session

- [discoverySessionWithDeviceTypes:mediaType:position:](discoverysession/init%28devicetypes_mediatype_position_%29.md): Creates a discovery session that finds devices that match the specified criteria.

### Finding devices

- [devices](discoverysession/devices.md): A list of devices that match the search criteria of the discovery session.
- [supportedMultiCamDeviceSets](discoverysession/supportedmulticamdevicesets.md): Sets of capture devices that you can use simultaneously in a multi-camera session.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Finding and monitoring devices

- [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [defaultDeviceWithMediaType:](default%28for_%29.md): Returns the default device that captures the specified media type.
- [deviceWithUniqueID:](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [AVCaptureDeviceWasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [AVCaptureDeviceWasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devicesWithMediaType:](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices](devices%28%29.md): Deprecated. Returns all available capture devices on the system.
