> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/pause()](https://developer.apple.com/documentation/phase/phaseengine/pause())

# pause() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Pauses all audio playback.

## Declaration

```swift
func pause()
```

<a id="Discussion"></a>

## Discussion

To resume paused playback, call [start()](start%28%29.md).

## See Also

### Controlling and Inspecting Playback State

- [start()](start%28%29.md): Starts or resumes all audio playback.
- [stop()](stop%28%29.md): Stops all audio playback.
- [update()](update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](renderingstate.md): The status of the engine’s audio playback.
- [lastRenderTime](lastrendertime.md)

# pause (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Pauses all audio playback.

## Declaration

```objectivec
- (void) pause;
```

<a id="Discussion"></a>

## Discussion

To resume paused playback, call [startAndReturnError:](start%28%29.md).

## See Also

### Controlling and Inspecting Playback State

- [startAndReturnError:](start%28%29.md): Starts or resumes all audio playback.
- [stop](stop%28%29.md): Stops all audio playback.
- [update](update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](renderingstate.md): The status of the engine’s audio playback.
- [lastRenderTime](lastrendertime.md)
