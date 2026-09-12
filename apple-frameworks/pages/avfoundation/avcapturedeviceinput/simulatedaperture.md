> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/simulatedaperture](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/simulatedaperture)

# simulatedAperture (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Shallow depth of field simulated aperture.

## Declaration

```swift
var simulatedAperture: Float { get set }
```

<a id="discussion"></a>

## Discussion

When capturing a Cinematic Video, use this property to control the amount of blur in the simulated depth of field effect.

This property only takes effect when [isCinematicVideoCaptureEnabled](iscinematicvideocaptureenabled.md) is set to `true`.

> **Important**

> Setting this property to a value less than the `AVCaptureDevice/activeFormat/minSimulatedAperture` or greater than the `AVCaptureDevice/activeFormat/maxSimulatedAperture` throws an `NSRangeException`. you may only set this property if `AVCaptureDevice/activeFormat/minSimulatedAperture` returns a non-zero value, otherwise an `NSInvalidArgumentException` is thrown. You must set this property before starting a Cinematic Video capture. If you attempt to set it while a recording is in progress, an `NSInvalidArgumentException` is thrown.

This property is initialized to the associated `AVCaptureDevice/activeFormat/defaultSimulatedAperture`.

This property is key-value observable.

## See Also

### Configuring Cinematic video capture

- [isCinematicVideoCaptureSupported](iscinematicvideocapturesupported.md): A BOOL value specifying whether Cinematic Video capture is supported.
- [isCinematicVideoCaptureEnabled](iscinematicvideocaptureenabled.md): A BOOL value specifying whether the Cinematic Video effect is being applied to any movie file output, video data output, metadata output, or video preview layer added to the capture session.

# simulatedAperture (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Shallow depth of field simulated aperture.

## Declaration

```objectivec
@property (nonatomic) float simulatedAperture;
```

<a id="discussion"></a>

## Discussion

When capturing a Cinematic Video, use this property to control the amount of blur in the simulated depth of field effect.

This property only takes effect when [cinematicVideoCaptureEnabled](iscinematicvideocaptureenabled.md) is set to `true`.

> **Important**

> Setting this property to a value less than the `AVCaptureDevice/activeFormat/minSimulatedAperture` or greater than the `AVCaptureDevice/activeFormat/maxSimulatedAperture` throws an `NSRangeException`. you may only set this property if `AVCaptureDevice/activeFormat/minSimulatedAperture` returns a non-zero value, otherwise an `NSInvalidArgumentException` is thrown. You must set this property before starting a Cinematic Video capture. If you attempt to set it while a recording is in progress, an `NSInvalidArgumentException` is thrown.

This property is initialized to the associated `AVCaptureDevice/activeFormat/defaultSimulatedAperture`.

This property is key-value observable.

## See Also

### Configuring Cinematic video capture

- [cinematicVideoCaptureSupported](iscinematicvideocapturesupported.md): A BOOL value specifying whether Cinematic Video capture is supported.
- [cinematicVideoCaptureEnabled](iscinematicvideocaptureenabled.md): A BOOL value specifying whether the Cinematic Video effect is being applied to any movie file output, video data output, metadata output, or video preview layer added to the capture session.
