> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceexposuresignal](https://developer.apple.com/documentation/avfoundation/avcapturedeviceexposuresignal)

# AVCaptureDeviceExposureSignal (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Values that can be used to configure the auto exposure system via [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md) and associated methods.

## Declaration

```swift
struct AVCaptureDeviceExposureSignal
```

## Topics

### Creating an exposure signal

- [init(rawValue:)](avcapturedeviceexposuresignal/init%28rawvalue_%29.md)

### Exposure signals

- [document](avcapturedeviceexposuresignal/document.md): When enabled, auto exposure may close the aperture to improve sharpness of textual scenes.
- [flicker](avcapturedeviceexposuresignal/flicker.md): When enabled, auto exposure may adjust the aperture to help exposure duration avoid synchronization with artificial lighting frequencies.
- [groupPhoto](avcapturedeviceexposuresignal/groupphoto.md): When enabled, auto exposure may close the aperture to increase depth of field when multiple faces are in the scene.
- [starburst](avcapturedeviceexposuresignal/starburst.md): When enabled, auto exposure may open the aperture to remove diffraction artifacts from point light sources.
- [subjectMotion](avcapturedeviceexposuresignal/subjectmotion.md): When enabled, auto exposure may close the aperture or decrease the exposure duration to reduce motion blur when there is a lot of motion in the scene.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring exposure signals

- [activeExposureSignals](avcapturedevice/activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [supportedExposureSignals](avcapturedevice/supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [automaticallyEnablesExposureSignals](avcapturedevice/automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.

# AVCaptureDeviceExposureSignal (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Values that can be used to configure the auto exposure system via [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md) and associated methods.

## Declaration

```objectivec
typedef NSString * AVCaptureDeviceExposureSignal;
```

## Topics

### Exposure signals

- [AVCaptureDeviceExposureSignalDocument](avcapturedeviceexposuresignal/document.md): When enabled, auto exposure may close the aperture to improve sharpness of textual scenes.
- [AVCaptureDeviceExposureSignalFlicker](avcapturedeviceexposuresignal/flicker.md): When enabled, auto exposure may adjust the aperture to help exposure duration avoid synchronization with artificial lighting frequencies.
- [AVCaptureDeviceExposureSignalGroupPhoto](avcapturedeviceexposuresignal/groupphoto.md): When enabled, auto exposure may close the aperture to increase depth of field when multiple faces are in the scene.
- [AVCaptureDeviceExposureSignalStarburst](avcapturedeviceexposuresignal/starburst.md): When enabled, auto exposure may open the aperture to remove diffraction artifacts from point light sources.
- [AVCaptureDeviceExposureSignalSubjectMotion](avcapturedeviceexposuresignal/subjectmotion.md): When enabled, auto exposure may close the aperture or decrease the exposure duration to reduce motion blur when there is a lot of motion in the scene.

## See Also

### Configuring exposure signals

- [activeExposureSignals](avcapturedevice/activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](avcapturedevice/enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [supportedExposureSignals](avcapturedevice/supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [automaticallyEnablesExposureSignals](avcapturedevice/automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.
