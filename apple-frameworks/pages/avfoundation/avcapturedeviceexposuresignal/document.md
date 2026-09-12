> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceexposuresignal/document](https://developer.apple.com/documentation/avfoundation/avcapturedeviceexposuresignal/document)

# document (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

When enabled, auto exposure may close the aperture to improve sharpness of textual scenes.

## Declaration

```swift
static let document: AVCaptureDeviceExposureSignal
```

## See Also

### Exposure signals

- [flicker](flicker.md): When enabled, auto exposure may adjust the aperture to help exposure duration avoid synchronization with artificial lighting frequencies.
- [groupPhoto](groupphoto.md): When enabled, auto exposure may close the aperture to increase depth of field when multiple faces are in the scene.
- [starburst](starburst.md): When enabled, auto exposure may open the aperture to remove diffraction artifacts from point light sources.
- [subjectMotion](subjectmotion.md): When enabled, auto exposure may close the aperture or decrease the exposure duration to reduce motion blur when there is a lot of motion in the scene.

# AVCaptureDeviceExposureSignalDocument (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

When enabled, auto exposure may close the aperture to improve sharpness of textual scenes.

## Declaration

```objectivec
extern AVCaptureDeviceExposureSignal const AVCaptureDeviceExposureSignalDocument;
```

## See Also

### Exposure signals

- [AVCaptureDeviceExposureSignalFlicker](flicker.md): When enabled, auto exposure may adjust the aperture to help exposure duration avoid synchronization with artificial lighting frequencies.
- [AVCaptureDeviceExposureSignalGroupPhoto](groupphoto.md): When enabled, auto exposure may close the aperture to increase depth of field when multiple faces are in the scene.
- [AVCaptureDeviceExposureSignalStarburst](starburst.md): When enabled, auto exposure may open the aperture to remove diffraction artifacts from point light sources.
- [AVCaptureDeviceExposureSignalSubjectMotion](subjectmotion.md): When enabled, auto exposure may close the aperture or decrease the exposure duration to reduce motion blur when there is a lot of motion in the scene.
