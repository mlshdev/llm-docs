> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/init(uniqueid:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/init(uniqueid:))

# init(uniqueID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Creates an object that represents a device with the specified identifier.

## Declaration

```swift
init?(uniqueID deviceUniqueID: String)
```

## Parameters

- `deviceUniqueID`: An identifier that uniquely identifies the device.

<a id="return-value"></a>

## Return Value

A capture device, or `nil` if no device with the specified identifier exists.

<a id="Discussion"></a>

## Discussion

Every capture device has a unique identifier that persists on a system across device connections, app restarts, and reboots of the system itself.

## See Also

### Finding and monitoring devices

- [AVCaptureDevice.DiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [default(\_:for:position:)](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [default(for:)](default%28for_%29.md): Returns the default device that captures the specified media type.
- [wasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices(for:)](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices()](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

# deviceWithUniqueID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

Creates an object that represents a device with the specified identifier.

## Declaration

```objectivec
+ (AVCaptureDevice *) deviceWithUniqueID:(NSString *) deviceUniqueID;
```

## Parameters

- `deviceUniqueID`: An identifier that uniquely identifies the device.

<a id="return-value"></a>

## Return Value

A capture device, or `nil` if no device with the specified identifier exists.

<a id="Discussion"></a>

## Discussion

Every capture device has a unique identifier that persists on a system across device connections, app restarts, and reboots of the system itself.

## See Also

### Finding and monitoring devices

- [AVCaptureDeviceDiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md): Returns the default device for the specified device type, media type, and position.
- [defaultDeviceWithMediaType:](default%28for_%29.md): Returns the default device that captures the specified media type.
- [AVCaptureDeviceWasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [AVCaptureDeviceWasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devicesWithMediaType:](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices](devices%28%29.md): Deprecated. Returns all available capture devices on the system.
