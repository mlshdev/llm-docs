> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorderdelegate/screenrecorder(_:didstoprecordingwitherror:previewviewcontroller:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorderdelegate/screenrecorder(_:didstoprecordingwitherror:previewviewcontroller:))

# screenRecorder(\_:didStopRecordingWithError:previewViewController:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

Indicates that the screen recording has stopped.

> No longer supported

## Declaration

```swift
optional func screenRecorder(_ screenRecorder: RPScreenRecorder, didStopRecordingWithError error: any Error, previewViewController: RPPreviewViewController?)
```

## Parameters

- `screenRecorder`: The [RPScreenRecorder](../rpscreenrecorder.md) instance.
- `error`: An [NSError](../../foundation/nserror.md) describing why the recording stopped.
- `previewViewController`: An [RPPreviewViewController](../rppreviewviewcontroller.md) interface object that is returned if anything at all was recorded. The interface allows the user to preview and edit the recording.

<a id="Discussion"></a>

## Discussion

[screenRecorder(\_:didStopRecordingWithError:previewViewController:)](screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md) is called when recording stops due to an error or a change in recording availability. If any part of the stopped recording is available, an instance of [RPPreviewViewController](../rppreviewviewcontroller.md) is returned.

## See Also

### Responding to Recording Changes

- [screenRecorder(\_:didStopRecordingWith:error:)](screenrecorder%28__didstoprecordingwith_error_%29.md): Deprecated. Indicates that the screen recording has stopped.
- [screenRecorderDidChangeAvailability(\_:)](screenrecorderdidchangeavailability%28__%29.md): Deprecated. Indicates that the recorder has changed states between disabled and enabled.

# screenRecorder:didStopRecordingWithError:previewViewController: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0)

Indicates that the screen recording has stopped.

> No longer supported

## Declaration

```objectivec
- (void) screenRecorder:(RPScreenRecorder *) screenRecorder didStopRecordingWithError:(NSError *) error previewViewController:(RPPreviewViewController *) previewViewController;
```

## Parameters

- `screenRecorder`: The [RPScreenRecorder](../rpscreenrecorder.md) instance.
- `error`: An [NSError](../../foundation/nserror.md) describing why the recording stopped.
- `previewViewController`: An [RPPreviewViewController](../rppreviewviewcontroller.md) interface object that is returned if anything at all was recorded. The interface allows the user to preview and edit the recording.

<a id="Discussion"></a>

## Discussion

[screenRecorder:didStopRecordingWithError:previewViewController:](screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md) is called when recording stops due to an error or a change in recording availability. If any part of the stopped recording is available, an instance of [RPPreviewViewController](../rppreviewviewcontroller.md) is returned.

## See Also

### Responding to Recording Changes

- [screenRecorder:didStopRecordingWithPreviewViewController:error:](screenrecorder%28__didstoprecordingwith_error_%29.md): Deprecated. Indicates that the screen recording has stopped.
- [screenRecorderDidChangeAvailability:](screenrecorderdidchangeavailability%28__%29.md): Deprecated. Indicates that the recorder has changed states between disabled and enabled.
