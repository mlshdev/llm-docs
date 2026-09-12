> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorderdelegate/screenrecorderdidchangeavailability(_:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorderdelegate/screenrecorderdidchangeavailability(_:))

# screenRecorderDidChangeAvailability(\_:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the recorder has changed states between disabled and enabled.

> Use ScreenCaptureKit instead

## Declaration

```swift
optional func screenRecorderDidChangeAvailability(_ screenRecorder: RPScreenRecorder)
```

## Parameters

- `screenRecorder`: The [RPScreenRecorder](../rpscreenrecorder.md) instance that has changed state.

<a id="Discussion"></a>

## Discussion

Screen recording can be unavailable due to unsupported hardware, the user’s device displaying information over Airplay or through a TVOut session, or another app using the shared recorder.

## See Also

### Responding to Recording Changes

- [screenRecorder(\_:didStopRecordingWith:error:)](screenrecorder%28__didstoprecordingwith_error_%29.md): Deprecated. Indicates that the screen recording has stopped.
- [screenRecorder(\_:didStopRecordingWithError:previewViewController:)](screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md): Deprecated. Indicates that the screen recording has stopped.

# screenRecorderDidChangeAvailability: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the recorder has changed states between disabled and enabled.

> Use ScreenCaptureKit instead

## Declaration

```objectivec
- (void) screenRecorderDidChangeAvailability:(RPScreenRecorder *) screenRecorder;
```

## Parameters

- `screenRecorder`: The [RPScreenRecorder](../rpscreenrecorder.md) instance that has changed state.

<a id="Discussion"></a>

## Discussion

Screen recording can be unavailable due to unsupported hardware, the user’s device displaying information over Airplay or through a TVOut session, or another app using the shared recorder.

## See Also

### Responding to Recording Changes

- [screenRecorder:didStopRecordingWithPreviewViewController:error:](screenrecorder%28__didstoprecordingwith_error_%29.md): Deprecated. Indicates that the screen recording has stopped.
- [screenRecorder:didStopRecordingWithError:previewViewController:](screenrecorder%28__didstoprecordingwitherror_previewviewcontroller_%29.md): Deprecated. Indicates that the screen recording has stopped.
