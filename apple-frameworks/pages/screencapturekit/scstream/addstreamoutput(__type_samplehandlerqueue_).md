> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/addstreamoutput(_:type:samplehandlerqueue:)](https://developer.apple.com/documentation/screencapturekit/scstream/addstreamoutput(_:type:samplehandlerqueue:))

# addStreamOutput(\_:type:sampleHandlerQueue:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Adds a destination that receives the stream output.

## Declaration

```swift
func addStreamOutput(_ output: any SCStreamOutput, type: SCStreamOutputType, sampleHandlerQueue: dispatch_queue_t?) throws
```

## Parameters

- `output`: The object that conforms to the stream output protocol.
- `type`: The stream output type.
- `sampleHandlerQueue`: The queue that receives the stream output.

<a id="discussion"></a>

## Discussion

Use this method to attach an object that conforms to [SCStreamOutput](../scstreamoutput.md) to receive stream content. Optionally, provide a [DispatchQueue](../../dispatch/dispatchqueue.md) to send output to a queue that’s responsible for processing the output.

## See Also

### Adding and removing stream output

- [removeStreamOutput(\_:type:)](removestreamoutput%28__type_%29.md): Removes a destination from receiving stream output.

# addStreamOutput:type:sampleHandlerQueue:error: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Adds a destination that receives the stream output.

## Declaration

```objectivec
- (BOOL) addStreamOutput:(id<SCStreamOutput>) output type:(SCStreamOutputType) type sampleHandlerQueue:(dispatch_queue_t) sampleHandlerQueue error:(NSError **) error;
```

## Parameters

- `output`: The object that conforms to the stream output protocol.
- `type`: The stream output type.
- `sampleHandlerQueue`: The queue that receives the stream output.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

Use this method to attach an object that conforms to [SCStreamOutput](../scstreamoutput.md) to receive stream content. Optionally, provide a [DispatchQueue](../../dispatch/dispatchqueue.md) to send output to a queue that’s responsible for processing the output.

## See Also

### Adding and removing stream output

- [removeStreamOutput:type:error:](removestreamoutput%28__type_%29.md): Removes a destination from receiving stream output.
