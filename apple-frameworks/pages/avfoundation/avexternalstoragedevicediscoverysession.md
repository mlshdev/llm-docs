> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevicediscoverysession](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevicediscoverysession)

# AVExternalStorageDeviceDiscoverySession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Informs your app when the external storage devices connect to and disconnect from the system.

## Declaration

```swift
class AVExternalStorageDeviceDiscoverySession
```

## Topics

### Checking for session support on a device

- [isSupported](avexternalstoragedevicediscoverysession/issupported.md): A Boolean value that indicates whether the system supports external storage devices.

### Retrieving the shared device discovery session instance

- [shared](avexternalstoragedevicediscoverysession/shared.md): The system’s singleton device discovery session instance.

### Monitoring for storage device updates

- [externalStorageDevices](avexternalstoragedevicediscoverysession/externalstoragedevices.md): An array of external storage devices the session updates as individual devices connect or disconnect from the system.

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

### Capture devices

- [Choosing a capture device](choosing-a-capture-device.md): Select the front or back camera, or use advanced features like the TrueDepth camera or dual camera.
- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md): Capture the optimal shot by providing automatic framing recommendations.
- [AVCaptureDevice](avcapturedevice.md): An object that represents a hardware or virtual capture device like a camera or microphone.
- [AVCaptureDeviceInput](avcapturedeviceinput.md): An object that provides media input from a capture device to a capture session.
- [AVContinuityDevice](avcontinuitydevice.md): A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.

# AVExternalStorageDeviceDiscoverySession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Informs your app when the external storage devices connect to and disconnect from the system.

## Declaration

```objectivec
@interface AVExternalStorageDeviceDiscoverySession : NSObject
```

## Topics

### Checking for session support on a device

- [supported](avexternalstoragedevicediscoverysession/issupported.md): A Boolean value that indicates whether the system supports external storage devices.

### Retrieving the shared device discovery session instance

- [sharedSession](avexternalstoragedevicediscoverysession/shared.md): The system’s singleton device discovery session instance.

### Monitoring for storage device updates

- [externalStorageDevices](avexternalstoragedevicediscoverysession/externalstoragedevices.md): An array of external storage devices the session updates as individual devices connect or disconnect from the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Capture devices

- [Choosing a capture device](choosing-a-capture-device.md): Select the front or back camera, or use advanced features like the TrueDepth camera or dual camera.
- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md): Capture the optimal shot by providing automatic framing recommendations.
- [AVCaptureDevice](avcapturedevice.md): An object that represents a hardware or virtual capture device like a camera or microphone.
- [AVCaptureDeviceInput](avcapturedeviceinput.md): An object that provides media input from a capture device to a capture session.
- [AVContinuityDevice](avcontinuitydevice.md): A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.
