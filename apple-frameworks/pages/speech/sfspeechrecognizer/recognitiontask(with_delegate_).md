> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/recognitiontask(with:delegate:)](https://developer.apple.com/documentation/speech/sfspeechrecognizer/recognitiontask(with:delegate:))

# recognitionTask(with:delegate:) (Swift)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Recognizes speech from the audio source associated with the specified request, using the specified delegate to manage the results.

## Declaration

```swift
func recognitionTask(with request: SFSpeechRecognitionRequest, delegate: any SFSpeechRecognitionTaskDelegate) -> SFSpeechRecognitionTask
```

## Parameters

- `request`: A request (encapsulated in an [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) object) to recognize speech from an audio source.
- `delegate`: An object that can handle results from the speech recognition task. This object must conform to the [SFSpeechRecognitionTaskDelegate](../sfspeechrecognitiontaskdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

The task object you can use to manage an in-progress recognition request.

<a id="discussion"></a>

## Discussion

Use this method to initiate the speech recognition process on the audio contained in the request object. This method executes asynchronously and returns a [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object that you can use to cancel or finalize the recognition process later. As results become available, the method calls the methods of the provided `delegate` object.

Note that the [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object returned by this method does not retain your delegate object. You must maintain a strong reference to your delegate while speech recognition is in progress.

## See Also

### Performing speech recognition on audio

- [recognitionTask(with:resultHandler:)](recognitiontask%28with_resulthandler_%29.md): Executes the speech recognition request and delivers the results to the specified handler block.
- [SFSpeechRecognitionTaskDelegate](../sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.

# recognitionTaskWithRequest:delegate: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Recognizes speech from the audio source associated with the specified request, using the specified delegate to manage the results.

## Declaration

```objectivec
- (SFSpeechRecognitionTask *) recognitionTaskWithRequest:(SFSpeechRecognitionRequest *) request delegate:(id<SFSpeechRecognitionTaskDelegate>) delegate;
```

## Parameters

- `request`: A request (encapsulated in an [SFSpeechRecognitionRequest](../sfspeechrecognitionrequest.md) object) to recognize speech from an audio source.
- `delegate`: An object that can handle results from the speech recognition task. This object must conform to the [SFSpeechRecognitionTaskDelegate](../sfspeechrecognitiontaskdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

The task object you can use to manage an in-progress recognition request.

<a id="discussion"></a>

## Discussion

Use this method to initiate the speech recognition process on the audio contained in the request object. This method executes asynchronously and returns a [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object that you can use to cancel or finalize the recognition process later. As results become available, the method calls the methods of the provided `delegate` object.

Note that the [SFSpeechRecognitionTask](../sfspeechrecognitiontask.md) object returned by this method does not retain your delegate object. You must maintain a strong reference to your delegate while speech recognition is in progress.

## See Also

### Performing speech recognition on audio

- [recognitionTaskWithRequest:resultHandler:](recognitiontask%28with_resulthandler_%29.md): Executes the speech recognition request and delivers the results to the specified handler block.
- [SFSpeechRecognitionTaskDelegate](../sfspeechrecognitiontaskdelegate.md): A protocol with methods for managing multi-utterance speech recognition requests.
