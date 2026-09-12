> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontinuitydevice](https://developer.apple.com/documentation/avfoundation/avcontinuitydevice)

# AVContinuityDevice (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** tvOS 17.0+

A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.

## Declaration

```swift
class AVContinuityDevice
```

<a id="overview"></a>

## Overview

Each continuity device instance represents another iOS device that’s nearby. Your app can access the other device’s cameras and microphones with its [videoDevices](avcontinuitydevice/videodevices.md) and [audioSessionInputs](avcontinuitydevice/audiosessioninputs.md) properties, respectively.

## Topics

### Checking a continuity device’s availability

- [isConnected](avcontinuitydevice/isconnected.md): A Boolean value that indicates whether you can use the continuity device because it’s connected to the system.

### Retrieving video devices from a continuity device

- [videoDevices](avcontinuitydevice/videodevices.md): An array of the continuity device’s video-capture devices available to your app.

### Retrieving audio ports from a continuity device

- [audioSessionInputs](avcontinuitydevice/audiosessioninputs.md): An array of the continuity device’s audio session port descriptions that’s available to your app.

### Identifying a continuity device

- [connectionID](avcontinuitydevice/connectionid.md): A universally unique value that identifies a specific continuity device.

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
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.

# AVContinuityDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** tvOS 17.0+

A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.

## Declaration

```objectivec
@interface AVContinuityDevice : NSObject
```

<a id="overview"></a>

## Overview

Each continuity device instance represents another iOS device that’s nearby. Your app can access the other device’s cameras and microphones with its [videoDevices](avcontinuitydevice/videodevices.md) and [audioSessionInputs](avcontinuitydevice/audiosessioninputs.md) properties, respectively.

## Topics

### Checking a continuity device’s availability

- [connected](avcontinuitydevice/isconnected.md): A Boolean value that indicates whether you can use the continuity device because it’s connected to the system.

### Retrieving video devices from a continuity device

- [videoDevices](avcontinuitydevice/videodevices.md): An array of the continuity device’s video-capture devices available to your app.

### Retrieving audio ports from a continuity device

- [audioSessionInputs](avcontinuitydevice/audiosessioninputs.md): An array of the continuity device’s audio session port descriptions that’s available to your app.

### Identifying a continuity device

- [connectionID](avcontinuitydevice/connectionid.md): A universally unique value that identifies a specific continuity device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Capture devices

- [Choosing a capture device](choosing-a-capture-device.md): Select the front or back camera, or use advanced features like the TrueDepth camera or dual camera.
- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md): Capture the optimal shot by providing automatic framing recommendations.
- [AVCaptureDevice](avcapturedevice.md): An object that represents a hardware or virtual capture device like a camera or microphone.
- [AVCaptureDeviceInput](avcapturedeviceinput.md): An object that provides media input from a capture device to a capture session.
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.
