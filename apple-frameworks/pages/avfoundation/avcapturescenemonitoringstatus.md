> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturescenemonitoringstatus](https://developer.apple.com/documentation/avfoundation/avcapturescenemonitoringstatus)

# AVCaptureSceneMonitoringStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An informative status about the scene observed by the device.

## Declaration

```swift
struct AVCaptureSceneMonitoringStatus
```

<a id="overview"></a>

## Overview

Some features have certain requirements on the scene (lighting condition for Cinematic Video, for example) to produce optimal results; these [AVCaptureSceneMonitoringStatus](avcapturescenemonitoringstatus.md) string constants are used to represent such scene statuses for a given feature.

## Topics

### Status values

- [notEnoughLight](avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.

### Initializers

- [init(rawValue:)](avcapturescenemonitoringstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocus(at:focusMode:)](avcapturedevice/setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocus(at:focusMode:)](avcapturedevice/setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocus(detectedObjectID:focusMode:)](avcapturedevice/setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureDevice.CinematicVideoFocusMode](avcapturedevice/cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [notEnoughLight](avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.

# AVCaptureSceneMonitoringStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An informative status about the scene observed by the device.

## Declaration

```objectivec
typedef NSString * AVCaptureSceneMonitoringStatus;
```

<a id="overview"></a>

## Overview

Some features have certain requirements on the scene (lighting condition for Cinematic Video, for example) to produce optimal results; these [AVCaptureSceneMonitoringStatus](avcapturescenemonitoringstatus.md) string constants are used to represent such scene statuses for a given feature.

## Topics

### Status values

- [AVCaptureSceneMonitoringStatusNotEnoughLight](avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.

## See Also

### Configuring Cinematic video

- [setCinematicVideoFixedFocusAtPoint:focusMode:](avcapturedevice/setcinematicvideofixedfocus%28at_focusmode_%29.md): Fix focus at a distance.
- [setCinematicVideoTrackingFocusAtPoint:focusMode:](avcapturedevice/setcinematicvideotrackingfocus%28at_focusmode_%29.md): Focus on and start tracking an object if it can be detected at the region specified by the point.
- [setCinematicVideoTrackingFocusWithDetectedObjectID:focusMode:](avcapturedevice/setcinematicvideotrackingfocus%28detectedobjectid_focusmode_%29.md): Focus on and start tracking a detected object.
- [AVCaptureCinematicVideoFocusMode](avcapturedevice/cinematicvideofocusmode.md): Constants indicating the focus behavior when recording a Cinematic Video.
- [AVCaptureSceneMonitoringStatusNotEnoughLight](avcapturescenemonitoringstatus/notenoughlight.md): The light level of the current scene is insufficient for the current set of features to function optimally.
- [cinematicVideoCaptureSceneMonitoringStatuses](avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md): The current scene monitoring statuses related to Cinematic Video capture.
