> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstream/addvideoeffectoutput(_:)](https://developer.apple.com/documentation/screencapturekit/scstream/addvideoeffectoutput(_:))

# addVideoEffectOutput(\_:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
func addVideoEffectOutput(_ videoEffectOutput: SCVideoEffectOutput) throws
```

## Parameters

- `videoEffectOutput`: A SCVideoEffectOutput object to add to the stream.

<a id="discussion"></a>

## Discussion

Add a SCVideoEffectOutput to the SCStream to start camera video effect. Only one video effect output can be active per stream.

Returns a BOOL denoting if the add was successful. Video effect output is only supported on streams using in-app capture (presentPickerForCurrentApplication). Attempting to add a video effect output to a non-in-app capture stream will return NO with SCStreamErrorNotSupported. Camera video effect will start after successfully adding or if stream has not yet started, when stream starts capturing. Delegate for outputVideoEffectDidStartForStream: will be notified on the SCStreamDelegate, or outputVideoEffectDidFailForStream:withError: will be notified if camera video effect failed to start.

# addVideoEffectOutput:error: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
- (BOOL) addVideoEffectOutput:(SCVideoEffectOutput *) videoEffectOutput error:(NSError **) error;
```

## Parameters

- `videoEffectOutput`: A SCVideoEffectOutput object to add to the stream.
- `error`: The error pertaining to the add video effect output operation.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

Add a SCVideoEffectOutput to the SCStream to start camera video effect. Only one video effect output can be active per stream.

Returns a BOOL denoting if the add was successful. Video effect output is only supported on streams using in-app capture (presentPickerForCurrentApplication). Attempting to add a video effect output to a non-in-app capture stream will return NO with SCStreamErrorNotSupported. Camera video effect will start after successfully adding or if stream has not yet started, when stream starts capturing. Delegate for outputVideoEffectDidStartForStream: will be notified on the SCStreamDelegate, or outputVideoEffectDidFailForStream:withError: will be notified if camera video effect failed to start.
