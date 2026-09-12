> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessor/startsession(configuration:)](https://developer.apple.com/documentation/videotoolbox/vtframeprocessor/startsession(configuration:))

# startSession(configuration:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Starts a new session and configures the processor pipeline.

## Declaration

```swift
func startSession(configuration: any VTFrameProcessorConfiguration) throws
```

## Parameters

- `configuration`: A configuration object for the video effect that will be applied in the subsequent processing calls.

## See Also

### Processing frames

- [process(parameters:)](process%28parameters_%29.md)
- [process(parameters:completionHandler:)](process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [process(with:parameters:)](process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
- [endSession()](endsession%28%29.md): Performs all necessary tasks to end the session.

# startSessionWithConfiguration:error: (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Starts a new session and configures the processor pipeline.

## Declaration

```objectivec
- (BOOL) startSessionWithConfiguration:(id<VTFrameProcessorConfiguration>) configuration error:(NSError **) error;
```

## Parameters

- `configuration`: A configuration object for the video effect that will be applied in the subsequent processing calls.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## See Also

### Processing frames

- [processWithParameters:completionHandler:](process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [processWithCommandBuffer:parameters:](process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
- [endSession](endsession%28%29.md): Performs all necessary tasks to end the session.
