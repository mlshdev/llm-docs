> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontask/state](https://developer.apple.com/documentation/speech/sfspeechrecognitiontask/state)

# state (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The current state of the speech recognition task.

## Declaration

```swift
var state: SFSpeechRecognitionTaskState { get }
```

<a id="discussion"></a>

## Discussion

Check the value of this property to get the state of the in-progress speech recognition session. For valid values, see [SFSpeechRecognitionTaskState](../sfspeechrecognitiontaskstate.md).

## See Also

### Monitoring recognition progress

- [SFSpeechRecognitionTaskState](../sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.
- [error](error.md): An error object that specifies the error that occurred during a speech recognition task.

# state (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The current state of the speech recognition task.

## Declaration

```objectivec
@property (nonatomic, readonly) SFSpeechRecognitionTaskState state;
```

<a id="discussion"></a>

## Discussion

Check the value of this property to get the state of the in-progress speech recognition session. For valid values, see [SFSpeechRecognitionTaskState](../sfspeechrecognitiontaskstate.md).

## See Also

### Monitoring recognition progress

- [SFSpeechRecognitionTaskState](../sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.
- [error](error.md): An error object that specifies the error that occurred during a speech recognition task.
