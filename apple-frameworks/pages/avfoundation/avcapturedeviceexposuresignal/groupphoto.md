> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceexposuresignal/groupphoto](https://developer.apple.com/documentation/avfoundation/avcapturedeviceexposuresignal/groupphoto)

# groupPhoto (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

When enabled, auto exposure may close the aperture to increase depth of field when multiple faces are in the scene.

## Declaration

```swift
static let groupPhoto: AVCaptureDeviceExposureSignal
```

## See Also

### Exposure signals

- [document](document.md): When enabled, auto exposure may close the aperture to improve sharpness of textual scenes.
- [flicker](flicker.md): When enabled, auto exposure may adjust the aperture to help exposure duration avoid synchronization with artificial lighting frequencies.
- [starburst](starburst.md): When enabled, auto exposure may open the aperture to remove diffraction artifacts from point light sources.
- [subjectMotion](subjectmotion.md): When enabled, auto exposure may close the aperture or decrease the exposure duration to reduce motion blur when there is a lot of motion in the scene.

# AVCaptureDeviceExposureSignalGroupPhoto (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

When enabled, auto exposure may close the aperture to increase depth of field when multiple faces are in the scene.

## Declaration

```objectivec
extern AVCaptureDeviceExposureSignal const AVCaptureDeviceExposureSignalGroupPhoto;
```

## See Also

### Exposure signals

- [AVCaptureDeviceExposureSignalDocument](document.md): When enabled, auto exposure may close the aperture to improve sharpness of textual scenes.
- [AVCaptureDeviceExposureSignalFlicker](flicker.md): When enabled, auto exposure may adjust the aperture to help exposure duration avoid synchronization with artificial lighting frequencies.
- [AVCaptureDeviceExposureSignalStarburst](starburst.md): When enabled, auto exposure may open the aperture to remove diffraction artifacts from point light sources.
- [AVCaptureDeviceExposureSignalSubjectMotion](subjectmotion.md): When enabled, auto exposure may close the aperture or decrease the exposure duration to reduce motion blur when there is a lot of motion in the scene.
