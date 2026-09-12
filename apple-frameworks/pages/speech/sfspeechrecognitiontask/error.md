> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontask/error](https://developer.apple.com/documentation/speech/sfspeechrecognitiontask/error)

# error (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An error object that specifies the error that occurred during a speech recognition task.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="discussion"></a>

## Discussion

The system may return one of the errors listed in the table below.

| Error Code | Error Domain | Description |
| --- | --- | --- |
| `102` | `kLSRErrorDomain` | Assets are not installed. |
| `201` | `kLSRErrorDomain` | Siri or Dictation is disabled. |
| `300` | `kLSRErrorDomain` | Failed to initialize recognizer. |
| `301` | `kLSRErrorDomain` | Request was canceled. |
| `203` | `kAFAssistantErrorDomain` | Failure occurred during speech recognition. |
| `1100` | `kAFAssistantErrorDomain` | Trying to start recognition while an earlier instance is still active. |
| `1101` | `kAFAssistantErrorDomain` | Connection to speech process was invalidated. |
| `1107` | `kAFAssistantErrorDomain` | Connection to speech process was interrupted. |
| `1110` | `kAFAssistantErrorDomain` | Failed to recognize any speech. |
| `1700` | `kAFAssistantErrorDomain` | Request is not authorized. |

## See Also

### Monitoring recognition progress

- [state](state.md): The current state of the speech recognition task.
- [SFSpeechRecognitionTaskState](../sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.

# error (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

An error object that specifies the error that occurred during a speech recognition task.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSError * error;
```

<a id="discussion"></a>

## Discussion

The system may return one of the errors listed in the table below.

| Error Code | Error Domain | Description |
| --- | --- | --- |
| `102` | `kLSRErrorDomain` | Assets are not installed. |
| `201` | `kLSRErrorDomain` | Siri or Dictation is disabled. |
| `300` | `kLSRErrorDomain` | Failed to initialize recognizer. |
| `301` | `kLSRErrorDomain` | Request was canceled. |
| `203` | `kAFAssistantErrorDomain` | Failure occurred during speech recognition. |
| `1100` | `kAFAssistantErrorDomain` | Trying to start recognition while an earlier instance is still active. |
| `1101` | `kAFAssistantErrorDomain` | Connection to speech process was invalidated. |
| `1107` | `kAFAssistantErrorDomain` | Connection to speech process was interrupted. |
| `1110` | `kAFAssistantErrorDomain` | Failed to recognize any speech. |
| `1700` | `kAFAssistantErrorDomain` | Request is not authorized. |

## See Also

### Monitoring recognition progress

- [state](state.md): The current state of the speech recognition task.
- [SFSpeechRecognitionTaskState](../sfspeechrecognitiontaskstate.md): The state of the task associated with the recognition request.
