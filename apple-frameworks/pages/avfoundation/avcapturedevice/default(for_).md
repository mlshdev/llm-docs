> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/default(for:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/default(for:))

# default(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Returns the default device that captures the specified media type.

## Declaration

```swift
class func `default`(for mediaType: AVMediaType) -> AVCaptureDevice?
```

## Parameters

- `mediaType`: A media type for the device.

<a id="return-value"></a>

## Return Value

The default device, or `nil` if no device with that media type exists.

## See Also

### Finding and monitoring devices

- [AVCaptureDevice.DiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [default(\_:for:position:)](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [init(uniqueID:)](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [wasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices(for:)](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices()](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

# defaultDeviceWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Returns the default device that captures the specified media type.

## Declaration

```objectivec
+ (AVCaptureDevice *) defaultDeviceWithMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: A media type for the device.

<a id="return-value"></a>

## Return Value

The default device, or `nil` if no device with that media type exists.

## See Also

### Finding and monitoring devices

- [AVCaptureDeviceDiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [deviceWithUniqueID:](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [AVCaptureDeviceWasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [AVCaptureDeviceWasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devicesWithMediaType:](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices](devices%28%29.md): Deprecated. Returns all available capture devices on the system.
