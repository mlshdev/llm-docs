> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontask/finish()](https://developer.apple.com/documentation/speech/sfspeechrecognitiontask/finish())

# finish() (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Stops accepting new audio and finishes processing on the audio input that has already been accepted.

## Declaration

```swift
func finish()
```

<a id="discussion"></a>

## Discussion

For audio buffer–based recognition, recognition does not finish until this method is called, so be sure to call it when the audio source is exhausted.

## See Also

### Finishing a speech recognition task

- [isFinishing](isfinishing.md): A Boolean value that indicates whether audio input has stopped.

# finish (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Stops accepting new audio and finishes processing on the audio input that has already been accepted.

## Declaration

```objectivec
- (void) finish;
```

<a id="discussion"></a>

## Discussion

For audio buffer–based recognition, recognition does not finish until this method is called, so be sure to call it when the audio source is exhausted.

## See Also

### Finishing a speech recognition task

- [finishing](isfinishing.md): A Boolean value that indicates whether audio input has stopped.
