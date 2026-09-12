> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/start()](https://developer.apple.com/documentation/phase/phaseengine/start())

# start() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Starts or resumes all audio playback.

## Declaration

```swift
func start() throws
```

<a id="Discussion"></a>

## Discussion

This function throws an error if the framework fails to start the engine.

## See Also

### Controlling and Inspecting Playback State

- [pause()](pause%28%29.md): Pauses all audio playback.
- [stop()](stop%28%29.md): Stops all audio playback.
- [update()](update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](renderingstate.md): The status of the engine’s audio playback.
- [lastRenderTime](lastrendertime.md)

# startAndReturnError: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Starts or resumes all audio playback.

## Declaration

```objectivec
- (BOOL) startAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

This function throws an error if the framework fails to start the engine.

## See Also

### Controlling and Inspecting Playback State

- [pause](pause%28%29.md): Pauses all audio playback.
- [stop](stop%28%29.md): Stops all audio playback.
- [update](update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](renderingstate.md): The status of the engine’s audio playback.
- [lastRenderTime](lastrendertime.md)
