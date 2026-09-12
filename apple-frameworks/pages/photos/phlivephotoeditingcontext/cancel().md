> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephotoeditingcontext/cancel()](https://developer.apple.com/documentation/photos/phlivephotoeditingcontext/cancel())

# cancel() (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Aborts any Live Photo processing in progress.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

This method applies only after you’ve begun processing a Live Photo for display or output with the [init(livePhotoEditingInput:)](init%28livephotoeditinginput_%29.md) or [saveLivePhoto(to:options:completionHandler:)](savelivephoto%28to_options_completionhandler_%29.md) method. After you call this method, Photos calls your completion handler and provides an error with the [PHLivePhotoEditingErrorCode.aborted](../phlivephotoeditingerrorcode/aborted.md) error code.

## See Also

### Processing an Editing Context’s Live Photo

- [saveLivePhoto(to:options:completionHandler:)](savelivephoto%28to_options_completionhandler_%29.md): Processes and saves a full-quality Live Photo as the output of your editing session.
- [prepareLivePhotoForPlayback(withTargetSize:options:completionHandler:)](preparelivephotoforplayback%28withtargetsize_options_completionhandler_%29.md): Processes a Live Photo with your edits for viewing.
- [PHLivePhotoEditingOption](../phlivephotoeditingoption.md): Keys for the `options` dictionary used with the methods listed in Processing an Editing Context’s Live Photo.

# cancel (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Aborts any Live Photo processing in progress.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

This method applies only after you’ve begun processing a Live Photo for display or output with the [initWithLivePhotoEditingInput:](init%28livephotoeditinginput_%29.md) or [saveLivePhotoToOutput:options:completionHandler:](savelivephoto%28to_options_completionhandler_%29.md) method. After you call this method, Photos calls your completion handler and provides an error with the [PHLivePhotoEditingErrorCodeAborted](../phlivephotoeditingerrorcode/aborted.md) error code.

## See Also

### Processing an Editing Context’s Live Photo

- [saveLivePhotoToOutput:options:completionHandler:](savelivephoto%28to_options_completionhandler_%29.md): Processes and saves a full-quality Live Photo as the output of your editing session.
- [prepareLivePhotoForPlaybackWithTargetSize:options:completionHandler:](preparelivephotoforplayback%28withtargetsize_options_completionhandler_%29.md): Processes a Live Photo with your edits for viewing.
- [PHLivePhotoEditingOption](../phlivephotoeditingoption.md): Keys for the `options` dictionary used with the methods listed in Processing an Editing Context’s Live Photo.
