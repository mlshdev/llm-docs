> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/wasdisconnectednotification](https://developer.apple.com/documentation/avfoundation/avcapturedevice/wasdisconnectednotification)

# wasDisconnectedNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A notification the system posts when an existing device becomes unavailable.

## Declaration

```swift
class let wasDisconnectedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../foundation/notification/object.md) property contains the capture device that disconnected.

## See Also

### Finding and monitoring devices

- [AVCaptureDevice.DiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [default(\_:for:position:)](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [default(for:)](default%28for_%29.md): Returns the default device that captures the specified media type.
- [init(uniqueID:)](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [wasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [devices(for:)](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices()](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

# AVCaptureDeviceWasDisconnectedNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A notification the system posts when an existing device becomes unavailable.

## Declaration

```objectivec
extern NSNotificationName const AVCaptureDeviceWasDisconnectedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../foundation/notification/object.md) property contains the capture device that disconnected.

## See Also

### Finding and monitoring devices

- [AVCaptureDeviceDiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [defaultDeviceWithMediaType:](default%28for_%29.md): Returns the default device that captures the specified media type.
- [deviceWithUniqueID:](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [AVCaptureDeviceWasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [devicesWithMediaType:](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices](devices%28%29.md): Deprecated. Returns all available capture devices on the system.
