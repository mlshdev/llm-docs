> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessor/process(with:parameters:)](https://developer.apple.com/documentation/videotoolbox/vtframeprocessor/process(with:parameters:))

# process(with:parameters:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Asynchronously performs the video effect specified in the start session specifically for Metal.

## Declaration

```swift
func process(with commandBuffer: any MTLCommandBuffer, parameters: any VTFrameProcessorParameters)
```

## Parameters

- `commandBuffer`: An existing Metal command buffer where the frame processing will be inserted.
- `parameters`: A VTFrameProcessorParameters based object to specify additional frame based parameters to be used during processing. It needs to match the configuration type used during start session.

<a id="Discussion"></a>

## Discussion

This function allows you to add the effect to an existing Metal command buffer. This can be used by clients that have an existing Metal pipeline and want to add this effect to it.

> **Note**

> This is an asynchronous call that waits until all previously inserted tasks in the command buffer finish before running. Tasks inserted after the buffer will run after the effect is applied.

## See Also

### Processing frames

- [startSession(configuration:)](startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [process(parameters:)](process%28parameters_%29.md)
- [process(parameters:completionHandler:)](process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [endSession()](endsession%28%29.md): Performs all necessary tasks to end the session.

# processWithCommandBuffer:parameters: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Asynchronously performs the video effect specified in the start session specifically for Metal.

## Declaration

```objectivec
- (void) processWithCommandBuffer:(id<MTLCommandBuffer>) commandBuffer parameters:(id<VTFrameProcessorParameters>) parameters;
```

## Parameters

- `commandBuffer`: An existing Metal command buffer where the frame processing will be inserted.
- `parameters`: A VTFrameProcessorParameters based object to specify additional frame based parameters to be used during processing. It needs to match the configuration type used during start session.

<a id="Discussion"></a>

## Discussion

This function allows you to add the effect to an existing Metal command buffer. This can be used by clients that have an existing Metal pipeline and want to add this effect to it.

> **Note**

> This is an asynchronous call that waits until all previously inserted tasks in the command buffer finish before running. Tasks inserted after the buffer will run after the effect is applied.

## See Also

### Processing frames

- [startSessionWithConfiguration:error:](startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [processWithParameters:completionHandler:](process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [endSession](endsession%28%29.md): Performs all necessary tasks to end the session.
