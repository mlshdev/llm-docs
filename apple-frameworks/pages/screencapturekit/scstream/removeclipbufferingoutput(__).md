> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/removeclipbufferingoutput(_:)](https://developer.apple.com/documentation/screencapturekit/scstream/removeclipbufferingoutput(_:))

# removeClipBufferingOutput(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func removeClipBufferingOutput(_ clipBufferingOutput: SCClipBufferingOutput) throws
```

## Parameters

- `clipBufferingOutput`: A SCClipBufferingOutput object

<a id="discussion"></a>

## Discussion

Remove SCClipBufferingOutput from the SCStream to stop clip buffering and flush the buffer

Returns a BOOL denoting if the remove was successful. This method stops the accumulation of samples and releases all buffered content. Once removed, no new exports can be requested until clip buffering is added again. If the stream is stopped while clip buffering is active, clip buffering will be automatically stopped as well.

# removeClipBufferingOutput:error: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (BOOL) removeClipBufferingOutput:(SCClipBufferingOutput *) clipBufferingOutput error:(NSError **) error;
```

## Parameters

- `clipBufferingOutput`: A SCClipBufferingOutput object
- `error`: The error pertaining to removing clip buffering output

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

Remove SCClipBufferingOutput from the SCStream to stop clip buffering and flush the buffer

Returns a BOOL denoting if the remove was successful. This method stops the accumulation of samples and releases all buffered content. Once removed, no new exports can be requested until clip buffering is added again. If the stream is stopped while clip buffering is active, clip buffering will be automatically stopped as well.
