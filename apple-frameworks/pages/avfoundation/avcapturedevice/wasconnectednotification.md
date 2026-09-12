> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/wasconnectednotification](https://developer.apple.com/documentation/avfoundation/avcapturedevice/wasconnectednotification)

# wasConnectedNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A notification the system posts when a new capture device becomes available.

## Declaration

```swift
class let wasConnectedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../foundation/notification/object.md) property contains the capture device that connected.

## See Also

### Finding and monitoring devices

- [AVCaptureDevice.DiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [default(\_:for:position:)](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [default(for:)](default%28for_%29.md): Returns the default device that captures the specified media type.
- [init(uniqueID:)](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [wasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices(for:)](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices()](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

# AVCaptureDeviceWasConnectedNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A notification the system posts when a new capture device becomes available.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureDeviceWasConnectedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../foundation/notification/object.md) property contains the capture device that connected.

## See Also

### Finding and monitoring devices

- [AVCaptureDeviceDiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [defaultDeviceWithMediaType:](default%28for_%29.md): Returns the default device that captures the specified media type.
- [deviceWithUniqueID:](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [AVCaptureDeviceWasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devicesWithMediaType:](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices](devices%28%29.md): Deprecated. Returns all available capture devices on the system.
