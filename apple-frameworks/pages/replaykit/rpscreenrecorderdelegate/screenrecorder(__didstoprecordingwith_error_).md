> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorderdelegate/screenrecorder(_:didstoprecordingwith:error:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorderdelegate/screenrecorder(_:didstoprecordingwith:error:))

# screenRecorder(\_:didStopRecordingWith:error:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the screen recording has stopped.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```swift
optional func screenRecorder(_ screenRecorder: RPScreenRecorder, didStopRecordingWith previewViewController: RPPreviewViewController?, error: (any Error)?)
```

## Parameters

- `screenRecorder`: The [RPScreenRecorder](../rpscreenrecorder.md) instance.
- `previewViewController`: An [RPPreviewViewController](../rppreviewviewcontroller.md) interface object that is returned if anything at all was recorded. The interface allows the user to preview and edit the recording.
- `error`: An [NSError](../../foundation/nserror.md) describing why the recording stopped. This method is `nil` when no error occurs.

<a id="Discussion"></a>

## Discussion

This method is called when recording stops due to an error or a change in recording availability. If any part of the stopped recording is available, an instance of [RPPreviewViewController](../rppreviewviewcontroller.md) is returned.

## See Also

### Responding to Recording Changes

- [screenRecorderDidChangeAvailability(\_:)](screenrecorderdidchangeavailability%28__%29.md): Deprecated. Indicates that the recorder has changed states between disabled and enabled.
- [screenRecorder(\_:didStopRecordingWithError:previewViewController:)](screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md): Deprecated. Indicates that the screen recording has stopped.

# screenRecorder:didStopRecordingWithPreviewViewController:error: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the screen recording has stopped.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```objectivec
- (void) screenRecorder:(RPScreenRecorder *) screenRecorder didStopRecordingWithPreviewViewController:(RPPreviewViewController *) previewViewController error:(NSError *) error;
```

## Parameters

- `screenRecorder`: The [RPScreenRecorder](../rpscreenrecorder.md) instance.
- `previewViewController`: An [RPPreviewViewController](../rppreviewviewcontroller.md) interface object that is returned if anything at all was recorded. The interface allows the user to preview and edit the recording.
- `error`: An [NSError](../../foundation/nserror.md) describing why the recording stopped. This method is `nil` when no error occurs.

<a id="Discussion"></a>

## Discussion

This method is called when recording stops due to an error or a change in recording availability. If any part of the stopped recording is available, an instance of [RPPreviewViewController](../rppreviewviewcontroller.md) is returned.

## See Also

### Responding to Recording Changes

- [screenRecorderDidChangeAvailability:](screenrecorderdidchangeavailability%28__%29.md): Deprecated. Indicates that the recorder has changed states between disabled and enabled.
- [screenRecorder:didStopRecordingWithError:previewViewController:](screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md): Deprecated. Indicates that the screen recording has stopped.
