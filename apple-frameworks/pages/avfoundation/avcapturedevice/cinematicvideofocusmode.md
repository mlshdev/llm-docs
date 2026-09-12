> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/cinematicvideofocusmode](https://developer.apple.com/documentation/avfoundation/avcapturedevice/cinematicvideofocusmode)

# AVCaptureDevice.CinematicVideoFocusMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Constants indicating the focus behavior when recording a Cinematic Video.

## Declaration

```swift
enum CinematicVideoFocusMode
```

## Topics

### Focus modes

- [AVCaptureDevice.CinematicVideoFocusMode.none](cinematicvideofocusmode/none.md): Indicates that no focus mode is specified, in which case weak focus is used as default.
- [AVCaptureDevice.CinematicVideoFocusMode.strong](cinematicvideofocusmode/strong.md): Indicates that the subject should remain in focus until it exits the scene.
- [AVCaptureDevice.CinematicVideoFocusMode.weak](cinematicvideofocusmode/weak.md): Indicates that the Cinematic Video algorithm should automatically adjust focus according to the prominence of the subjects in the scene.

### Initializers

- [init(rawValue:)](cinematicvideofocusmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocus(at:focusMode:)](setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocus(at:focusMode:)](setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocus(detectedObjectID:focusMode:)](setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [notEnoughLight](../avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.

# AVCaptureCinematicVideoFocusMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Constants indicating the focus behavior when recording a Cinematic Video.

## Declaration

```objectivec
enum AVCaptureCinematicVideoFocusMode : NSInteger;
```

## Topics

### Focus modes

- [AVCaptureCinematicVideoFocusModeNone](cinematicvideofocusmode/none.md): Indicates that no focus mode is specified, in which case weak focus is used as default.
- [AVCaptureCinematicVideoFocusModeStrong](cinematicvideofocusmode/strong.md): Indicates that the subject should remain in focus until it exits the scene.
- [AVCaptureCinematicVideoFocusModeWeak](cinematicvideofocusmode/weak.md): Indicates that the Cinematic Video algorithm should automatically adjust focus according to the prominence of the subjects in the scene.

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocusAtPoint:focusMode:](setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocusAtPoint:focusMode:](setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocusWithDetectedObjectID:focusMode:](setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [AVCaptureSceneMonitoringStatusNotEnoughLight](../avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.
