> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/cinematicvideocapturescenemonitoringstatuses](https://developer.apple.com/documentation/avfoundation/avcapturedevice/cinematicvideocapturescenemonitoringstatuses)

# cinematicVideoCaptureSceneMonitoringStatuses (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The current scene monitoring statuses related to Cinematic Video capture.

## Declaration

```swift
var cinematicVideoCaptureSceneMonitoringStatuses: Set<AVCaptureSceneMonitoringStatus> { get }
```

<a id="discussion"></a>

## Discussion

Monitor this property via key-value observation to present a UI informing the user that they should reframe their scene for a better Cinematic Video experience (“scene is too dark”).

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocus(at:focusMode:)](setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocus(at:focusMode:)](setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocus(detectedObjectID:focusMode:)](setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureDevice.CinematicVideoFocusMode](cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [notEnoughLight](../avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.

# cinematicVideoCaptureSceneMonitoringStatuses (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The current scene monitoring statuses related to Cinematic Video capture.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<NSString *> * cinematicVideoCaptureSceneMonitoringStatuses;
```

<a id="discussion"></a>

## Discussion

Monitor this property via key-value observation to present a UI informing the user that they should reframe their scene for a better Cinematic Video experience (“scene is too dark”).

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocusAtPoint:focusMode:](setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocusAtPoint:focusMode:](setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocusWithDetectedObjectID:focusMode:](setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureCinematicVideoFocusMode](cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatus](../avcapturescenemonitoringstatus.md): An informative status about the scene observed by the device.
- [AVCaptureSceneMonitoringStatusNotEnoughLight](../avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
