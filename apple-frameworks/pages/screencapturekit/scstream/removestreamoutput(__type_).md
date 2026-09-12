> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/removestreamoutput(_:type:)](https://developer.apple.com/documentation/screencapturekit/scstream/removestreamoutput(_:type:))

# removeStreamOutput(\_:type:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Removes a destination from receiving stream output.

## Declaration

```swift
func removeStreamOutput(_ output: any SCStreamOutput, type: SCStreamOutputType) throws
```

## Parameters

- `output`: The object to remove that conforms to the stream output protocol.
- `type`: The stream output type.

## See Also

### Adding and removing stream output

- [addStreamOutput(\_:type:sampleHandlerQueue:)](addstreamoutput%28__type_samplehandlerqueue_%29.md): Adds a destination that receives the stream output.

# removeStreamOutput:type:error: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

Removes a destination from receiving stream output.

## Declaration

```objectivec
- (BOOL) removeStreamOutput:(id<SCStreamOutput>) output type:(SCStreamOutputType) type error:(NSError **) error;
```

## Parameters

- `output`: The object to remove that conforms to the stream output protocol.
- `type`: The stream output type.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Adding and removing stream output

- [addStreamOutput:type:sampleHandlerQueue:error:](addstreamoutput%28__type_samplehandlerqueue_%29.md): Adds a destination that receives the stream output.
