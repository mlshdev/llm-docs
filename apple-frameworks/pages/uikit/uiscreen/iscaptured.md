> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/iscaptured](https://developer.apple.com/documentation/uikit/uiscreen/iscaptured)

# isCaptured (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0)

A Boolean value that indicates whether the system is actively cloning the screen to another destination.

> Use [sceneCaptureState](../uitraitcollection/scenecapturestate.md) instead.

## Declaration

```swift
var isCaptured: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A value of `YES` indicates the system is actively recording, mirroring, or using AirPlay to stream the contents of the screen.

Observe this property and optionally take an appropriate action in your app to prevent the capture of your content. For example, a media app might stop any current media playback and present a dialog to the user describing the reason for the pause.

> **Important**

>  The system doesn’t include video content encrypted using [FairPlay Streaming](https://developer.apple.com/streaming/fps/) (FPS) when recording, mirroring, or using AirPlay to stream the contents of the screen. However, although it blacks out FPS-encrypted video content, it includes FPS-encrypted audio content. To prevent the system from recording the audio portion, observe the `isCaptured` property and take appropriate action in your app as described above.

UIKit sends the [capturedDidChangeNotification](captureddidchangenotification.md) notification when the capture status of the screen changes.

## See Also

### Related Documentation

- [userDidTakeScreenshotNotification](../uiapplication/userdidtakescreenshotnotification.md): A notification that posts when a person takes a screenshot on the device.

### Detecting screen capture

- [mirrored](mirrored.md): The screen an external display mirrors from.

# captured (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0)

A Boolean value that indicates whether the system is actively cloning the screen to another destination.

> Use [sceneCaptureState](../uitraitcollection/scenecapturestate.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCaptured) BOOL captured;
```

<a id="Discussion"></a>

## Discussion

A value of `YES` indicates the system is actively recording, mirroring, or using AirPlay to stream the contents of the screen.

Observe this property and optionally take an appropriate action in your app to prevent the capture of your content. For example, a media app might stop any current media playback and present a dialog to the user describing the reason for the pause.

> **Important**

>  The system doesn’t include video content encrypted using [FairPlay Streaming](https://developer.apple.com/streaming/fps/) (FPS) when recording, mirroring, or using AirPlay to stream the contents of the screen. However, although it blacks out FPS-encrypted video content, it includes FPS-encrypted audio content. To prevent the system from recording the audio portion, observe the `isCaptured` property and take appropriate action in your app as described above.

UIKit sends the [UIScreenCapturedDidChangeNotification](captureddidchangenotification.md) notification when the capture status of the screen changes.

## See Also

### Related Documentation

- [UIApplicationUserDidTakeScreenshotNotification](../uiapplication/userdidtakescreenshotnotification.md): A notification that posts when a person takes a screenshot on the device.

### Detecting screen capture

- [mirroredScreen](mirrored.md): The screen an external display mirrors from.
