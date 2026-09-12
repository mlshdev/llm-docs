> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/recognitiontask(with:resulthandler:)](https://developer.apple.com/documentation/speech/sfspeechrecognizer/recognitiontask(with:resulthandler:))

# recognitionTask(with:resultHandler:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Executes the speech recognition request and delivers the results to the specified handler block.

## Declaration

```swift
func recognitionTask(with request: SFSpeechRecognitionRequest, resultHandler: @escaping (SFSpeechRecognitionResult?, (any Error)?) -> Void) -> SFSpeechRecognitionTask
```

## Parameters

- `request`: A request (in an [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) object) to recognize speech from an audio source.
- `resultHandler`: The block to call when partial or final results are available, or when an error occurs. If the [shouldReportPartialResults](../sfspeechrecognitionrequest/shouldreportpartialresults.md) property is `true`, this block may be called multiple times to deliver the partial and final results. The block has no return value and takes the following parameters:

  - **result**: A [SFSpeechRecognitionResult](../sfspeechrecognitionresult.md) containing the partial or final transcriptions of the audio content.
  - **error**: An error object if a problem occurred. This parameter is `nil` if speech recognition was successful.

<a id="return-value"></a>

## Return Value

The task object you can use to manage an in-progress recognition request.

<a id="discussion"></a>

## Discussion

Use this method to initiate the speech recognition process on the audio contained in the request object. This method executes asynchronously and returns a [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object that you can use to cancel or finalize the recognition process later. As results become available, the method calls the block in the `resultHandler` parameter.

## See Also

### Performing speech recognition on audio

- [recognitionTask(with:delegate:)](recognitiontask%28with_delegate_%29.md): Recognizes speech from the audio source associated with the specified request, using the specified delegate to manage the results.
- [SFSpeechRecognitionTaskDelegate](../sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.

# recognitionTaskWithRequest:resultHandler: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Executes the speech recognition request and delivers the results to the specified handler block.

## Declaration

```objectivec
- (SFSpeechRecognitionTask *) recognitionTaskWithRequest:(SFSpeechRecognitionRequest *) request resultHandler:(void (^)(SFSpeechRecognitionResult *result, NSError *error)) resultHandler;
```

## Parameters

- `request`: A request (in an [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) object) to recognize speech from an audio source.
- `resultHandler`: The block to call when partial or final results are available, or when an error occurs. If the [shouldReportPartialResults](../sfspeechrecognitionrequest/shouldreportpartialresults.md) property is `true`, this block may be called multiple times to deliver the partial and final results. The block has no return value and takes the following parameters:

  - **result**: A [SFSpeechRecognitionResult](../sfspeechrecognitionresult.md) containing the partial or final transcriptions of the audio content.
  - **error**: An error object if a problem occurred. This parameter is `nil` if speech recognition was successful.

<a id="return-value"></a>

## Return Value

The task object you can use to manage an in-progress recognition request.

<a id="discussion"></a>

## Discussion

Use this method to initiate the speech recognition process on the audio contained in the request object. This method executes asynchronously and returns a [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object that you can use to cancel or finalize the recognition process later. As results become available, the method calls the block in the `resultHandler` parameter.

## See Also

### Performing speech recognition on audio

- [recognitionTaskWithRequest:delegate:](recognitiontask%28with_delegate_%29.md): Recognizes speech from the audio source associated with the specified request, using the specified delegate to manage the results.
- [SFSpeechRecognitionTaskDelegate](../sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.
