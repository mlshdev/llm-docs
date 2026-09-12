> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevice](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice)

# AVExternalStorageDevice (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Represents a physical external storage device that stores media assets.

## Declaration

```swift
class AVExternalStorageDevice
```

<a id="overview"></a>

## Overview

Each storage device instance corresponds to a physical external storage device where the system can media assets. You can access all of the currently available external storage devices with the [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md) object’s [externalStorageDevices](avexternalstoragedevicediscoverysession/externalstoragedevices.md) property.

## Topics

### Checking permission to generate URLs

- [authorizationStatus](avexternalstoragedevice/authorizationstatus.md): Your app’s authorization status for the external storage device.

### Requesting permission to generate URLs

- [requestAccess(completionHandler:)](avexternalstoragedevice/requestaccess%28completionhandler_%29.md): Requests access to an external storage device on behalf of your app, which can present a dialog to a person on their device’s display.

### Generating URLs for image assets

- [nextAvailableURLs(withPathExtensions:)](avexternalstoragedevice/nextavailableurls%28withpathextensions_%29.md): Generates an array of security scoped URLs that are compliant for digital camera formats, where each element has a different path extension.

### Inspecting a storage device

- [isConnected](avexternalstoragedevice/isconnected.md): A Boolean value that indicates whether the system has a connection to the external storage device.
- [displayName](avexternalstoragedevice/displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](avexternalstoragedevice/uuid.md): The external storage device’s unique identifier.
- [freeSize](avexternalstoragedevice/freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](avexternalstoragedevice/totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [isNotRecommendedForCaptureUse](avexternalstoragedevice/isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [reasonsNotRecommendedForCaptureUse](avexternalstoragedevice/reasonsnotrecommendedforcaptureuse.md)
- [AVExternalStorageDevice.ReasonNotRecommendedForCaptureUse](avexternalstoragedevice/reasonnotrecommendedforcaptureuse.md)

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
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.

# AVExternalStorageDevice (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Represents a physical external storage device that stores media assets.

## Declaration

```objectivec
@interface AVExternalStorageDevice : NSObject
```

<a id="overview"></a>

## Overview

Each storage device instance corresponds to a physical external storage device where the system can media assets. You can access all of the currently available external storage devices with the [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md) object’s [externalStorageDevices](avexternalstoragedevicediscoverysession/externalstoragedevices.md) property.

## Topics

### Checking permission to generate URLs

- [authorizationStatus](avexternalstoragedevice/authorizationstatus.md): Your app’s authorization status for the external storage device.

### Requesting permission to generate URLs

- [requestAccessWithCompletionHandler:](avexternalstoragedevice/requestaccess%28completionhandler_%29.md): Requests access to an external storage device on behalf of your app, which can present a dialog to a person on their device’s display.

### Generating URLs for image assets

- [nextAvailableURLsWithPathExtensions:error:](avexternalstoragedevice/nextavailableurls%28withpathextensions_%29.md): Generates an array of security scoped URLs that are compliant for digital camera formats, where each element has a different path extension.

### Inspecting a storage device

- [connected](avexternalstoragedevice/isconnected.md): A Boolean value that indicates whether the system has a connection to the external storage device.
- [displayName](avexternalstoragedevice/displayname.md): The name of an external storage device that’s appropriate for a user interface.
- [uuid](avexternalstoragedevice/uuid.md): The external storage device’s unique identifier.
- [freeSize](avexternalstoragedevice/freesize.md): The amount of free storage space, in bytes, that’s available on the external storage device.
- [totalSize](avexternalstoragedevice/totalsize.md): The total amount of storage space, in bytes, that’s available on the external storage device.
- [notRecommendedForCaptureUse](avexternalstoragedevice/isnotrecommendedforcaptureuse.md): Deprecated. A Boolean value that indicates whether the external storage device is suitable for camera capture.
- [reasonsNotRecommendedForCaptureUse](avexternalstoragedevice/reasonsnotrecommendedforcaptureuse.md)
- [AVExternalStorageDeviceReasonNotRecommendedForCaptureUse](avexternalstoragedevice/reasonnotrecommendedforcaptureuse.md)

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
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.
