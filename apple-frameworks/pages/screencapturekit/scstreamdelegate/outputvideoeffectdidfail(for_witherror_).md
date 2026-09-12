> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scstreamdelegate/outputvideoeffectdidfail(for:witherror:)](https://developer.apple.com/documentation/screencapturekit/scstreamdelegate/outputvideoeffectdidfail(for:witherror:))

# outputVideoEffectDidFail(for:withError:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
optional func outputVideoEffectDidFail(for stream: SCStream, withError error: any Error)
```

## Parameters

- `stream`: The SCStream object
- `error`: The error describing why the video effect failed

<a id="discussion"></a>

## Discussion

outputVideoEffectDidFailForStream:withError:

Notifies the delegate that the video effect failed with an error. This can occur if the camera device is unavailable, permissions are missing, or an internal error occurs.

# outputVideoEffectDidFailForStream:withError: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
- (void) outputVideoEffectDidFailForStream:(SCStream *) stream withError:(NSError *) error;
```

## Parameters

- `stream`: The SCStream object
- `error`: The error describing why the video effect failed

<a id="discussion"></a>

## Discussion

outputVideoEffectDidFailForStream:withError:

Notifies the delegate that the video effect failed with an error. This can occur if the camera device is unavailable, permissions are missing, or an internal error occurs.
