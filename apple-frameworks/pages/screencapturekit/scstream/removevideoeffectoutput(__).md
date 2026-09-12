> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/removevideoeffectoutput(_:)](https://developer.apple.com/documentation/screencapturekit/scstream/removevideoeffectoutput(_:))

# removeVideoEffectOutput(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
func removeVideoEffectOutput(_ videoEffectOutput: SCVideoEffectOutput) throws
```

## Parameters

- `videoEffectOutput`: A SCVideoEffectOutput object to remove from the stream.

<a id="discussion"></a>

## Discussion

Remove SCVideoEffectOutput from the SCStream. Stops camera video effect if currently active.

Returns a BOOL denoting if the remove was successful. Delegate for outputVideoEffectDidStopForStream: will be notified on the SCStreamDelegate. If stopCapture is called without removing videoEffectOutput, camera video effect will be stopped automatically.

# removeVideoEffectOutput:error: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
- (BOOL) removeVideoEffectOutput:(SCVideoEffectOutput *) videoEffectOutput error:(NSError **) error;
```

## Parameters

- `videoEffectOutput`: A SCVideoEffectOutput object to remove from the stream.
- `error`: The error pertaining to the remove video effect output operation.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

Remove SCVideoEffectOutput from the SCStream. Stops camera video effect if currently active.

Returns a BOOL denoting if the remove was successful. Delegate for outputVideoEffectDidStopForStream: will be notified on the SCStreamDelegate. If stopCapture is called without removing videoEffectOutput, camera video effect will be stopped automatically.
