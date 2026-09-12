> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescenemonitoringstatus/notenoughlight](https://developer.apple.com/documentation/avfoundation/avcapturescenemonitoringstatus/notenoughlight)

# notEnoughLight (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The light level of the current scene is insufficient for the current set of features to function optimally.

## Declaration

```swift
static let notEnoughLight: AVCaptureSceneMonitoringStatus
```

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocus(at:focusMode:)](../avcapturedevice/setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocus(at:focusMode:)](../avcapturedevice/setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocus(detectedObjectID:focusMode:)](../avcapturedevice/setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureDevice.CinematicVideoFocusMode](../avcapturedevice/cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [cinematicVideoCaptureSceneMonitoringStatuses](../avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.

# AVCaptureSceneMonitoringStatusNotEnoughLight (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The light level of the current scene is insufficient for the current set of features to function optimally.

## Declaration

```objectivec
extern AVCaptureSceneMonitoringStatus const AVCaptureSceneMonitoringStatusNotEnoughLight;
```

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocusAtPoint:focusMode:](../avcapturedevice/setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocusAtPoint:focusMode:](../avcapturedevice/setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocusWithDetectedObjectID:focusMode:](../avcapturedevice/setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureCinematicVideoFocusMode](../avcapturedevice/cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [cinematicVideoCaptureSceneMonitoringStatuses](../avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.
