> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessor/endsession()](https://developer.apple.com/documentation/videotoolbox/vtframeprocessor/endsession())

# endSession() (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Performs all necessary tasks to end the session.

## Declaration

```swift
func endSession()
```

<a id="Discussion"></a>

## Discussion

After this call completes, no new frames can be processed unless [startSession(configuration:)](startsession%28configuration_%29.md) is called again.

## See Also

### Processing frames

- [startSession(configuration:)](startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [process(parameters:)](process%28parameters_%29.md)
- [process(parameters:completionHandler:)](process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [process(with:parameters:)](process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.

# endSession (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

Performs all necessary tasks to end the session.

## Declaration

```objectivec
- (void) endSession;
```

<a id="Discussion"></a>

## Discussion

After this call completes, no new frames can be processed unless [startSessionWithConfiguration:error:](startsession%28configuration_%29.md) is called again.

## See Also

### Processing frames

- [startSessionWithConfiguration:error:](startsession%28configuration_%29.md): Starts a new session and configures the processor pipeline.
- [processWithParameters:completionHandler:](process%28parameters_completionhandler_%29.md): Asynchronously performs the video effect specified in the start session.
- [processWithCommandBuffer:parameters:](process%28with_parameters_%29.md): Asynchronously performs the video effect specified in the start session specifically for Metal.
