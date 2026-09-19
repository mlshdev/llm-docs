> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfspeechrecognitiontask/cancel()

# cancel() (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Cancels the current speech recognition task.

## Declaration

```swift
func cancel()
```

<a id="discussion"></a>

## Discussion

You can cancel recognition tasks for both prerecorded and live audio input. For example, you might cancel a task in response to a user action or because the recording was interrupted.

When canceling a task, be sure to release any resources associated with the task, such as the audio input resources you are using to capture audio samples.

## See Also

### Canceling a speech recognition task

- [isCancelled](iscancelled.md): A Boolean value that indicates whether the speech recognition task was canceled.

# cancel (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Cancels the current speech recognition task.

## Declaration

```objectivec
- (void) cancel;
```

<a id="discussion"></a>

## Discussion

You can cancel recognition tasks for both prerecorded and live audio input. For example, you might cancel a task in response to a user action or because the recording was interrupted.

When canceling a task, be sure to release any resources associated with the task, such as the audio input resources you are using to capture audio samples.

## See Also

### Canceling a speech recognition task

- [cancelled](iscancelled.md): A Boolean value that indicates whether the speech recognition task was canceled.
