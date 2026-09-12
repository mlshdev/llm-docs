> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpscreenrecorder/stoprecording(handler:)](https://developer.apple.com/documentation/replaykit/rpscreenrecorder/stoprecording(handler:))

# stopRecording(handler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the current recording.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```swift
func stopRecording(handler: ((RPPreviewViewController?, (any Error)?) -> Void)? = nil)
```

## Parameters

- `handler`: A block that is called when the request completes.

  - **`previewViewController`**: An instance of the `RPPreviewViewController` class.
  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes to ReplayKit.

<a id="Discussion"></a>

## Discussion

When recording stops with no associated error, present the resulting preview view controller using [present(\_:animated:completion:)](../../uikit/uiviewcontroller/present%28__animated_completion_%29.md). The user will see the built-in preview view controller with options to trim, cut, and share the recording. On iPad, you must present the preview view controller as a popover.

Listing 1. Presenting the preview view controller on iPad

```swift
sharedRecorder.stopRecording { previewViewController, error in
    guard let _ = error else {
        print("\(error?.localizedDescription ?? "Error")")
        return
    }
    if let previewViewController = previewViewController {
        if UIDevice.current.userInterfaceIdiom == .pad {
            previewViewController.modalPresentationStyle = .popover
            previewViewController.popoverPresentationController?.sourceRect = .zero
            previewViewController.popoverPresentationController?.sourceView = self.view
        }
        
        self.previewViewController = previewViewController
        previewViewController.previewControllerDelegate = self

        // Present the view controller.
        self.present(previewViewController, animated: true, completion: nil)
    }
}
```

## See Also

### Controlling App Recording

- [startRecording(handler:)](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecording(withOutput:completionHandler:)](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCapture(handler:completionHandler:)](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCapture(handler:)](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecording(handler:)](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecording(withMicrophoneEnabled:handler:)](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.

# stopRecordingWithHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the current recording.

> Use ScreenCaptureKit SCStream with SCRecordingOutput instead

## Declaration

```objectivec
- (void) stopRecordingWithHandler:(void (^)(RPPreviewViewController *previewViewController, NSError *error)) handler;
```

## Parameters

- `handler`: A block that is called when the request completes.

  - **`previewViewController`**: An instance of the `RPPreviewViewController` class.
  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes to ReplayKit.

<a id="Discussion"></a>

## Discussion

When recording stops with no associated error, present the resulting preview view controller using [presentViewController:animated:completion:](../../uikit/uiviewcontroller/present%28__animated_completion_%29.md). The user will see the built-in preview view controller with options to trim, cut, and share the recording. On iPad, you must present the preview view controller as a popover.

Listing 1. Presenting the preview view controller on iPad

```swift
sharedRecorder.stopRecording { previewViewController, error in
    guard let _ = error else {
        print("\(error?.localizedDescription ?? "Error")")
        return
    }
    if let previewViewController = previewViewController {
        if UIDevice.current.userInterfaceIdiom == .pad {
            previewViewController.modalPresentationStyle = .popover
            previewViewController.popoverPresentationController?.sourceRect = .zero
            previewViewController.popoverPresentationController?.sourceView = self.view
        }
        
        self.previewViewController = previewViewController
        previewViewController.previewControllerDelegate = self

        // Present the view controller.
        self.present(previewViewController, animated: true, completion: nil)
    }
}
```

## See Also

### Controlling App Recording

- [startRecordingWithHandler:](startrecording%28handler_%29.md): Deprecated. Starts recording the app display.
- [stopRecordingWithOutputURL:completionHandler:](stoprecording%28withoutput_completionhandler_%29.md): Deprecated. Stops the current recording and writes the movie to the specified output URL.
- [startCaptureWithHandler:completionHandler:](startcapture%28handler_completionhandler_%29.md): Deprecated. Starts screen and audio capture.
- [RPSampleBufferType](../rpsamplebuffertype.md): Deprecated. The type of media clip sample being buffered.
- [stopCaptureWithHandler:](stopcapture%28handler_%29.md): Deprecated. Stops screen capture
- [discardRecordingWithHandler:](discardrecording%28handler_%29.md): Deprecated. Discards the current recording.
- [startRecordingWithMicrophoneEnabled:handler:](startrecording%28withmicrophoneenabled_handler_%29.md): Deprecated. Starts recording the app’s audio and video.
