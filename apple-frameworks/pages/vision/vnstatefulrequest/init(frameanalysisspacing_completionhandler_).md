> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnstatefulrequest/init(frameanalysisspacing:completionhandler:)](https://developer.apple.com/documentation/vision/vnstatefulrequest/init(frameanalysisspacing:completionhandler:))

# init(frameAnalysisSpacing:completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a video-based request.

## Declaration

```swift
init(frameAnalysisSpacing: CMTime, completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `frameAnalysisSpacing`: A [CMTime](../../coremedia/cmtime.md) value that indicates the duration between analysis operations. Increase this value to reduce the number of frames analyzed on slower devices. Set this argument to [zero](../../coremedia/cmtime/zero.md) to analyze all frames.
- `completionHandler`: A closure that’s invoked after the request has completed its processing. The system invokes the completion handler on the same dispatch queue as the request performs its processing.

# initWithFrameAnalysisSpacing:completionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Initializes a video-based request.

## Declaration

```objectivec
- (instancetype) initWithFrameAnalysisSpacing:(CMTime) frameAnalysisSpacing completionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `frameAnalysisSpacing`: A [CMTime](../../coremedia/cmtime.md) value that indicates the duration between analysis operations. Increase this value to reduce the number of frames analyzed on slower devices. Set this argument to [kCMTimeZero](../../coremedia/cmtime/zero.md) to analyze all frames.
- `completionHandler`: A closure that’s invoked after the request has completed its processing. The system invokes the completion handler on the same dispatch queue as the request performs its processing.
