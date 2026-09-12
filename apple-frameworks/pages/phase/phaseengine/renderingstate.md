> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/renderingstate](https://developer.apple.com/documentation/phase/phaseengine/renderingstate)

# renderingState (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The status of the engine’s audio playback.

## Declaration

```swift
var renderingState: PHASESoundEvent.RenderingState { get }
```

<a id="Discussion"></a>

## Discussion

Access this property to check the engine’s playback status. The value reflects the state that you control by calling one of the functions: [start()](start%28%29.md), [stop()](stop%28%29.md), or [pause()](pause%28%29.md).

## See Also

### Controlling and Inspecting Playback State

- [pause()](pause%28%29.md): Pauses all audio playback.
- [start()](start%28%29.md): Starts or resumes all audio playback.
- [stop()](stop%28%29.md): Stops all audio playback.
- [update()](update%28%29.md): Processes app commands and increments framework processing.
- [lastRenderTime](lastrendertime.md)

# renderingState (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The status of the engine’s audio playback.

## Declaration

```objectivec
@property (nonatomic, readonly) PHASERenderingState renderingState;
```

<a id="Discussion"></a>

## Discussion

Access this property to check the engine’s playback status. The value reflects the state that you control by calling one of the functions: [startAndReturnError:](start%28%29.md), [stop](stop%28%29.md), or [pause](pause%28%29.md).

## See Also

### Controlling and Inspecting Playback State

- [pause](pause%28%29.md): Pauses all audio playback.
- [startAndReturnError:](start%28%29.md): Starts or resumes all audio playback.
- [stop](stop%28%29.md): Stops all audio playback.
- [update](update%28%29.md): Processes app commands and increments framework processing.
- [lastRenderTime](lastrendertime.md)
