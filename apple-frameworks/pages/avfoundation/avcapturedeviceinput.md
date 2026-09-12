> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput)

# AVCaptureDeviceInput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that provides media input from a capture device to a capture session.

## Declaration

```swift
class AVCaptureDeviceInput
```

## Mentioned In

- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

This class is a concrete subclass of [AVCaptureInput](avcaptureinput.md) that you use to connect a capture device to a capture session.

## Topics

### Creating an input

- [init(device:)](avcapturedeviceinput/init%28device_%29.md): Creates an input for the specified capture device.

### Configuring video properties

- [unifiedAutoExposureDefaultsEnabled](avcapturedeviceinput/unifiedautoexposuredefaultsenabled.md): A Boolean value that indicates whether the input enables unified auto-exposure defaults.
- [videoMinFrameDurationOverride](avcapturedeviceinput/videominframedurationoverride.md): A time value that acts as a modifier to a capture device’s active video minimum frame duration.

### Configuring audio properties

- [isMultichannelAudioModeSupported(\_:)](avcapturedeviceinput/ismultichannelaudiomodesupported%28__%29.md): A Boolean value that indicates whether the input supports the specified multichannel audio mode.
- [multichannelAudioMode](avcapturedeviceinput/multichannelaudiomode.md): The multichannel audio mode to apply when recording audio.
- [AVCaptureMultichannelAudioMode](avcapturemultichannelaudiomode.md): Constants that indicate the modes of multichannel audio.
- [isWindNoiseRemovalSupported](avcapturedeviceinput/iswindnoiseremovalsupported.md)
- [isWindNoiseRemovalEnabled](avcapturedeviceinput/iswindnoiseremovalenabled.md)

### Configuring Cinematic video capture

- [isCinematicVideoCaptureSupported](avcapturedeviceinput/iscinematicvideocapturesupported.md): A BOOL value specifying whether Cinematic Video capture is supported.
- [isCinematicVideoCaptureEnabled](avcapturedeviceinput/iscinematicvideocaptureenabled.md): A BOOL value specifying whether the Cinematic Video effect is being applied to any movie file output, video data output, metadata output, or video preview layer added to the capture session.
- [simulatedAperture](avcapturedeviceinput/simulatedaperture.md): Shallow depth of field simulated aperture.

### Locking frame duration

- [activeLockedVideoFrameDuration](avcapturedeviceinput/activelockedvideoframeduration.md): The receiver’s locked frame duration (the reciprocal of its frame rate). Setting this property guarantees the intra-frame duration delivered by the device input is precisely the frame duration you request.
- [isLockedVideoFrameDurationSupported](avcapturedeviceinput/islockedvideoframedurationsupported.md): Indicates whether the device input supports locked frame durations.

### Synchronizing with external devices

- [isExternalSyncSupported](avcapturedeviceinput/isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [follow(\_:videoFrameDuration:delegate:)](avcapturedeviceinput/follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice()](avcapturedeviceinput/unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [activeExternalSyncVideoFrameDuration](avcapturedeviceinput/activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.
- [externalSyncDevice](avcapturedeviceinput/externalsyncdevice.md): The external sync device currently being followed by this input.

### Accessing the device

- [device](avcapturedeviceinput/device.md): A capture device associated with this input.
- [ports(for:sourceDeviceType:sourceDevicePosition:)](avcapturedeviceinput/ports%28for_sourcedevicetype_sourcedeviceposition_%29.md): Retrieves a virtual device’s constituent device ports for use in a multi-camera session.

### Instance Properties

- [isAudioZoomEnabled](avcapturedeviceinput/isaudiozoomenabled.md): Whether or not audio zoom is enabled.
- [isAudioZoomSupported](avcapturedeviceinput/isaudiozoomsupported.md): Whether or not audio zoom is supported.

## Relationships

### Inherits From

- [AVCaptureInput](avcaptureinput.md)

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
- [AVContinuityDevice](avcontinuitydevice.md): A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.

# AVCaptureDeviceInput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An object that provides media input from a capture device to a capture session.

## Declaration

```objectivec
@interface AVCaptureDeviceInput : AVCaptureInput
```

## Mentioned In

- [Setting up a capture session](setting-up-a-capture-session.md)

<a id="overview"></a>

## Overview

This class is a concrete subclass of [AVCaptureInput](avcaptureinput.md) that you use to connect a capture device to a capture session.

## Topics

### Creating an input

- [deviceInputWithDevice:error:](avcapturedeviceinput/deviceinputwithdevice_error_.md): Returns a new input for the specified capture device.
- [initWithDevice:error:](avcapturedeviceinput/init%28device_%29.md): Creates an input for the specified capture device.

### Configuring video properties

- [unifiedAutoExposureDefaultsEnabled](avcapturedeviceinput/unifiedautoexposuredefaultsenabled.md): A Boolean value that indicates whether the input enables unified auto-exposure defaults.
- [videoMinFrameDurationOverride](avcapturedeviceinput/videominframedurationoverride.md): A time value that acts as a modifier to a capture device’s active video minimum frame duration.

### Configuring audio properties

- [isMultichannelAudioModeSupported:](avcapturedeviceinput/ismultichannelaudiomodesupported%28__%29.md): A Boolean value that indicates whether the input supports the specified multichannel audio mode.
- [multichannelAudioMode](avcapturedeviceinput/multichannelaudiomode.md): The multichannel audio mode to apply when recording audio.
- [AVCaptureMultichannelAudioMode](avcapturemultichannelaudiomode.md): Constants that indicate the modes of multichannel audio.
- [windNoiseRemovalSupported](avcapturedeviceinput/iswindnoiseremovalsupported.md)
- [windNoiseRemovalEnabled](avcapturedeviceinput/iswindnoiseremovalenabled.md)

### Configuring Cinematic video capture

- [cinematicVideoCaptureSupported](avcapturedeviceinput/iscinematicvideocapturesupported.md): A BOOL value specifying whether Cinematic Video capture is supported.
- [cinematicVideoCaptureEnabled](avcapturedeviceinput/iscinematicvideocaptureenabled.md): A BOOL value specifying whether the Cinematic Video effect is being applied to any movie file output, video data output, metadata output, or video preview layer added to the capture session.
- [simulatedAperture](avcapturedeviceinput/simulatedaperture.md): Shallow depth of field simulated aperture.

### Locking frame duration

- [activeLockedVideoFrameDuration](avcapturedeviceinput/activelockedvideoframeduration.md): The receiver’s locked frame duration (the reciprocal of its frame rate). Setting this property guarantees the intra-frame duration delivered by the device input is precisely the frame duration you request.
- [lockedVideoFrameDurationSupported](avcapturedeviceinput/islockedvideoframedurationsupported.md): Indicates whether the device input supports locked frame durations.

### Synchronizing with external devices

- [externalSyncSupported](avcapturedeviceinput/isexternalsyncsupported.md): Indicates whether the device input supports being configured to follow an external sync device.
- [followExternalSyncDevice:videoFrameDuration:delegate:](avcapturedeviceinput/follow%28__videoframeduration_delegate_%29.md): Configures the the device input to follow an external sync device at the given frame duration.
- [unfollowExternalSyncDevice](avcapturedeviceinput/unfollowexternalsyncdevice%28%29.md): Discontinues external sync.
- [activeExternalSyncVideoFrameDuration](avcapturedeviceinput/activeexternalsyncvideoframeduration.md): The receiver’s external sync frame duration (the reciprocal of its frame rate) when being driven by an external sync device.
- [externalSyncDevice](avcapturedeviceinput/externalsyncdevice.md): The external sync device currently being followed by this input.

### Accessing the device

- [device](avcapturedeviceinput/device.md): A capture device associated with this input.
- [portsWithMediaType:sourceDeviceType:sourceDevicePosition:](avcapturedeviceinput/ports%28for_sourcedevicetype_sourcedeviceposition_%29.md): Retrieves a virtual device’s constituent device ports for use in a multi-camera session.

### Instance Properties

- [audioZoomEnabled](avcapturedeviceinput/isaudiozoomenabled.md): Whether or not audio zoom is enabled.
- [audioZoomSupported](avcapturedeviceinput/isaudiozoomsupported.md): Whether or not audio zoom is supported.

## Relationships

### Inherits From

- [AVCaptureInput](avcaptureinput.md)

## See Also

### Capture devices

- [Choosing a capture device](choosing-a-capture-device.md): Select the front or back camera, or use advanced features like the TrueDepth camera or dual camera.
- [Adopting smart framing in your camera app](adopting-smart-framing-in-your-camera-app.md): Capture the optimal shot by providing automatic framing recommendations.
- [AVCaptureDevice](avcapturedevice.md): An object that represents a hardware or virtual capture device like a camera or microphone.
- [AVContinuityDevice](avcontinuitydevice.md): A class that represents a physical iOS device that’s nearby and can provide access to its cameras and microphones.
- [AVExternalStorageDevice](avexternalstoragedevice.md): Represents a physical external storage device that stores media assets.
- [AVExternalStorageDeviceDiscoverySession](avexternalstoragedevicediscoverysession.md): Informs your app when the external storage devices connect to and disconnect from the system.
