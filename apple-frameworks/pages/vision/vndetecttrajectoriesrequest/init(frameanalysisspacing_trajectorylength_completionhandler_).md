> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecttrajectoriesrequest/init(frameanalysisspacing:trajectorylength:completionhandler:)](https://developer.apple.com/documentation/vision/vndetecttrajectoriesrequest/init(frameanalysisspacing:trajectorylength:completionhandler:))

# init(frameAnalysisSpacing:trajectoryLength:completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new request to detect trajectories.

## Declaration

```swift
init(frameAnalysisSpacing: CMTime, trajectoryLength: Int, completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `frameAnalysisSpacing`: A [CMTime](../../coremedia/cmtime.md) value that indicates the duration between analysis operations. Increase this value to reduce the number of frames analyzed on slower devices. Set this argument to [zero](../../coremedia/cmtime/zero.md) to analyze all frames.
- `trajectoryLength`: The number of points required to analyze to determine that a shape follows a parabolic path. This argument value must be at least 5.
- `completionHandler`: A closure that’s invoked after the request completes its processing. The system invokes the completion handler on the same dispatch queue that the request uses to perform its processing.

# initWithFrameAnalysisSpacing:trajectoryLength:completionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new request to detect trajectories.

## Declaration

```objectivec
- (instancetype) initWithFrameAnalysisSpacing:(CMTime) frameAnalysisSpacing trajectoryLength:(NSInteger) trajectoryLength completionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `frameAnalysisSpacing`: A [CMTime](../../coremedia/cmtime.md) value that indicates the duration between analysis operations. Increase this value to reduce the number of frames analyzed on slower devices. Set this argument to [kCMTimeZero](../../coremedia/cmtime/zero.md) to analyze all frames.
- `trajectoryLength`: The number of points required to analyze to determine that a shape follows a parabolic path. This argument value must be at least 5.
- `completionHandler`: A closure that’s invoked after the request completes its processing. The system invokes the completion handler on the same dispatch queue that the request uses to perform its processing.
