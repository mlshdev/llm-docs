> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicecapability](https://developer.apple.com/documentation/imagecapturecore/icdevicecapability)

# ICDeviceCapability (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Constants that describe the capabilities of a camera.

## Declaration

```swift
struct ICDeviceCapability
```

## Topics

### Creating Device Capabilities

- [init(rawValue:)](icdevicecapability/init%28rawvalue_%29.md): Creates an ImageCaptureCore device capability.

### Taking Pictures

- [cameraDeviceCanTakePicture](icdevicecapability/cameradevicecantakepicture.md): The capability for the client to request to take a picture while the camera is connected.
- [cameraDeviceCanTakePictureUsingShutterReleaseOnCamera](icdevicecapability/cameradevicecantakepictureusingshutterreleaseoncamera.md): The capability to capture a picture if the user presses the shutter release on the camera while the camera is connected.

### Deleting Files

- [cameraDeviceCanDeleteOneFile](icdevicecapability/cameradevicecandeleteonefile.md): Indicates that the camera can delete a file at a time while it is connected.
- [cameraDeviceCanDeleteAllFiles](icdevicecapability/cameradevicecandeleteallfiles.md): Indicates that the camera can delete all files in a single operation while it is connected.

### Uploading Files

- [cameraDeviceCanReceiveFile](icdevicecapability/cameradevicecanreceivefile.md): Indicates that the host can upload files to the camera.

### Synchronizing the Clock

- [cameraDeviceCanSyncClock](icdevicecapability/cameradevicecansyncclock.md): Indicates that the camera can synchronize its date and time with that of the host computer.

### Sending PTP Commands

- [cameraDeviceCanAcceptPTPCommands](icdevicecapability/cameradevicecanacceptptpcommands.md): Indicates that the camera can accept PTP commands.

### Disconnecting

- [canEjectOrDisconnect](icdevicecapability/canejectordisconnect.md): Indicates that the camera can eject or disconnect.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Device’s Capabilities

- [capabilities](icdevice/capabilities.md): The capabilities of the device as reported by the device module.
- [ICSessionOptions](icsessionoptions.md): Session options for altering the delivery of the device contents.

# ICDeviceCapability (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Constants that describe the capabilities of a camera.

## Declaration

```objectivec
typedef NSString * ICDeviceCapability;
```

## Topics

### Taking Pictures

- [ICCameraDeviceCanTakePicture](icdevicecapability/cameradevicecantakepicture.md): The capability for the client to request to take a picture while the camera is connected.
- [ICCameraDeviceCanTakePictureUsingShutterReleaseOnCamera](icdevicecapability/cameradevicecantakepictureusingshutterreleaseoncamera.md): The capability to capture a picture if the user presses the shutter release on the camera while the camera is connected.

### Deleting Files

- [ICCameraDeviceCanDeleteOneFile](icdevicecapability/cameradevicecandeleteonefile.md): Indicates that the camera can delete a file at a time while it is connected.
- [ICCameraDeviceCanDeleteAllFiles](icdevicecapability/cameradevicecandeleteallfiles.md): Indicates that the camera can delete all files in a single operation while it is connected.

### Uploading Files

- [ICCameraDeviceCanReceiveFile](icdevicecapability/cameradevicecanreceivefile.md): Indicates that the host can upload files to the camera.

### Synchronizing the Clock

- [ICCameraDeviceCanSyncClock](icdevicecapability/cameradevicecansyncclock.md): Indicates that the camera can synchronize its date and time with that of the host computer.

### Sending PTP Commands

- [ICCameraDeviceCanAcceptPTPCommands](icdevicecapability/cameradevicecanacceptptpcommands.md): Indicates that the camera can accept PTP commands.

### Disconnecting

- [ICDeviceCanEjectOrDisconnect](icdevicecapability/canejectordisconnect.md): Indicates that the camera can eject or disconnect.

## See Also

### Inspecting a Device’s Capabilities

- [capabilities](icdevice/capabilities.md): The capabilities of the device as reported by the device module.
- [ICSessionOptions](icsessionoptions.md): Session options for altering the delivery of the device contents.
