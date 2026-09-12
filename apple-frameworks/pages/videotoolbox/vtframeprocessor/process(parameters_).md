> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessor/process(parameters:)](https://developer.apple.com/documentation/videotoolbox/vtframeprocessor/process(parameters:))

# process(parameters:)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func process(parameters: any VTFrameProcessorParameters) -> some AsyncSequence<VTFrameProcessorFrame.ReadOnlyFrame, any Error>

```

## See Also

### Processing frames

- [startSession(configuration:)](startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [process(parameters:completionHandler:)](process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [process(with:parameters:)](process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
- [endSession()](endsession%28%29.md): Performs all necessary tasks to end the session.
