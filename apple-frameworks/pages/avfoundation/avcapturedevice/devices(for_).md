> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devices(for:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devices(for:))

# devices(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

Returns devices capable of capturing media of the specified type.

> Use the [AVCaptureDevice.DiscoverySession](discoverysession.md) class instead.

## Declaration

```swift
class func devices(for mediaType: AVMediaType) -> [AVCaptureDevice]
```

## Parameters

- `mediaType`: A media type for the device.

<a id="return-value"></a>

## Return Value

An array of devices, or an empty array of none exist.

## See Also

### Finding and monitoring devices

- [AVCaptureDevice.DiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [default(\_:for:position:)](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [default(for:)](default%28for_%29.md): Returns the default device that captures the specified media type.
- [init(uniqueID:)](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [wasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices()](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

# devicesWithMediaType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15)

Returns devices capable of capturing media of the specified type.

> Use the [AVCaptureDeviceDiscoverySession](discoverysession.md) class instead.

## Declaration

```objectivec
+ (NSArray<AVCaptureDevice *> *) devicesWithMediaType:(AVMediaType) mediaType;
```

## Parameters

- `mediaType`: A media type for the device.

<a id="return-value"></a>

## Return Value

An array of devices, or an empty array of none exist.

## See Also

### Finding and monitoring devices

- [AVCaptureDeviceDiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [defaultDeviceWithMediaType:](default%28for_%29.md): Returns the default device that captures the specified media type.
- [deviceWithUniqueID:](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [AVCaptureDeviceWasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [AVCaptureDeviceWasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices](devices%28%29.md): Deprecated. Returns all available capture devices on the system.
