> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scclipbufferingoutputdelegate/clipbufferingoutput(_:didfailwitherror:)](https://developer.apple.com/documentation/screencapturekit/scclipbufferingoutputdelegate/clipbufferingoutput(_:didfailwitherror:))

# clipBufferingOutput(\_:didFailWithError:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
optional func clipBufferingOutput(_ clipBufferingOutput: SCClipBufferingOutput, didFailWithError error: any Error)
```

## Parameters

- `clipBufferingOutput`: The SCClipBufferingOutput object
- `error`: Error describing why clip buffering failed

<a id="discussion"></a>

## Discussion

clipBufferingOutput:didFailWithError:

Notifies the delegate that clip buffering has failed with an associated error.

# clipBufferingOutput:didFailWithError: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) clipBufferingOutput:(SCClipBufferingOutput *) clipBufferingOutput didFailWithError:(NSError *) error;
```

## Parameters

- `clipBufferingOutput`: The SCClipBufferingOutput object
- `error`: Error describing why clip buffering failed

<a id="discussion"></a>

## Discussion

clipBufferingOutput:didFailWithError:

Notifies the delegate that clip buffering has failed with an associated error.
