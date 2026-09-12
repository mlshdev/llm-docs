> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessor/process(parameters:completionhandler:)](https://developer.apple.com/documentation/videotoolbox/vtframeprocessor/process(parameters:completionhandler:))

# process(parameters:completionHandler:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Asynchronously performs the video effect specified in the start session.

## Declaration

```swift
func process(parameters: any VTFrameProcessorParameters, completionHandler: @escaping @Sendable (any VTFrameProcessorParameters, (any Error)?) -> Void)
```

```swift
func process(parameters: any VTFrameProcessorParameters) async throws -> any VTFrameProcessorParameters
```

## Parameters

- `parameters`: A [VTFrameProcessorParameters](../vtframeprocessorparameters.md) object to specify additional parameters to use during processing. It needs to match the configuration type used during start session.
- `completionHandler`: This completion handler is called when the frame processing is completed.  The completion handler will receive the same parameters object that was provided to the original call, as well as an NSError which will contain an error code if processing was not successful.

## See Also

### Processing frames

- [startSession(configuration:)](startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [process(parameters:)](process%28parameters_%29.md)
- [process(with:parameters:)](process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
- [endSession()](endsession%28%29.md): Performs all necessary tasks to end the session.

# processWithParameters:completionHandler: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Asynchronously performs the video effect specified in the start session.

## Declaration

```objectivec
- (void) processWithParameters:(id<VTFrameProcessorParameters>) parameters completionHandler:(void (^)(id<VTFrameProcessorParameters>, NSError *)) completionHandler;
```

## Parameters

- `parameters`: A [VTFrameProcessorParameters](../vtframeprocessorparameters.md) object to specify additional parameters to use during processing. It needs to match the configuration type used during start session.
- `completionHandler`: This completion handler is called when the frame processing is completed.  The completion handler will receive the same parameters object that was provided to the original call, as well as an NSError which will contain an error code if processing was not successful.

## See Also

### Processing frames

- [startSessionWithConfiguration:error:](startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [processWithCommandBuffer:parameters:](process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
- [endSession](endsession%28%29.md): Performs all necessary tasks to end the session.
