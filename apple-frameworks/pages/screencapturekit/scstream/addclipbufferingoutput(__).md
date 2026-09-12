> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/addclipbufferingoutput(_:)](https://developer.apple.com/documentation/screencapturekit/scstream/addclipbufferingoutput(_:))

# addClipBufferingOutput(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func addClipBufferingOutput(_ clipBufferingOutput: SCClipBufferingOutput) throws
```

## Parameters

- `clipBufferingOutput`: A SCClipBufferingOutput object

<a id="discussion"></a>

## Discussion

Add a SCClipBufferingOutput to the SCStream to start clip buffering. Samples will begin accumulating in a rolling buffer that retains the most recent content up to 15 seconds.

Returns a BOOL denoting if the add was successful. The stream must be actively capturing before clip buffering can be started. Only one clip buffering session can be active on a stream at a time. Once buffering is active, clips can be exported using the SCClipBufferingOutput’s exportClipToURL:duration:completionHandler: method. Media to be buffered is based on the SCStream configuration.

# addClipBufferingOutput:error: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (BOOL) addClipBufferingOutput:(SCClipBufferingOutput *) clipBufferingOutput error:(NSError **) error;
```

## Parameters

- `clipBufferingOutput`: A SCClipBufferingOutput object
- `error`: The error pertaining to adding clip buffering output

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

Add a SCClipBufferingOutput to the SCStream to start clip buffering. Samples will begin accumulating in a rolling buffer that retains the most recent content up to 15 seconds.

Returns a BOOL denoting if the add was successful. The stream must be actively capturing before clip buffering can be started. Only one clip buffering session can be active on a stream at a time. Once buffering is active, clips can be exported using the SCClipBufferingOutput’s exportClipToURL:duration:completionHandler: method. Media to be buffered is based on the SCStream configuration.
