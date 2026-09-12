> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/setcinematicvideotrackingfocus(at:focusmode:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/setcinematicvideotrackingfocus(at:focusmode:))

# setCinematicVideoTrackingFocus(at:focusMode:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Focus on and start tracking an object if it can be detected at the region specified by the point.

## Declaration

```swift
func setCinematicVideoTrackingFocus(at point: CGPoint, focusMode: AVCaptureDevice.CinematicVideoFocusMode)
```

## Parameters

- `point`: A normalized point of interest (i.e., \[0,1\]) in the coordinate space of the device.
- `focusMode`: Specify whether to focus strongly or weakly.

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocus(at:focusMode:)](setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocus(detectedObjectID:focusMode:)](setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureDevice.CinematicVideoFocusMode](cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [notEnoughLight](../avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.

# setCinematicVideoTrackingFocusAtPoint:focusMode: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Focus on and start tracking an object if it can be detected at the region specified by the point.

## Declaration

```objectivec
- (void) setCinematicVideoTrackingFocusAtPoint:(CGPoint) point focusMode:(AVCaptureCinematicVideoFocusMode) focusMode;
```

## Parameters

- `point`: A normalized point of interest (i.e., \[0,1\]) in the coordinate space of the device.
- `focusMode`: Specify whether to focus strongly or weakly.

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocusAtPoint:focusMode:](setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocusWithDetectedObjectID:focusMode:](setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureCinematicVideoFocusMode](cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [AVCaptureSceneMonitoringStatusNotEnoughLight](../avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.
