> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseengine/lastrendertime](https://developer.apple.com/documentation/phase/phaseengine/lastrendertime)

# lastRenderTime (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
var lastRenderTime: AVAudioTime? { get }
```

<a id="discussion"></a>

## Discussion

Obtain the time for which the engine most recently rendered.

Will return nil if the engine is not running

## See Also

### Controlling and Inspecting Playback State

- [pause()](pause%28%29.md): Pauses all audio playback.
- [start()](start%28%29.md): Starts or resumes all audio playback.
- [stop()](stop%28%29.md): Stops all audio playback.
- [update()](update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](renderingstate.md): The status of the engine’s audio playback.

# lastRenderTime (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioTime * lastRenderTime;
```

<a id="discussion"></a>

## Discussion

Obtain the time for which the engine most recently rendered.

Will return nil if the engine is not running

## See Also

### Controlling and Inspecting Playback State

- [pause](pause%28%29.md): Pauses all audio playback.
- [startAndReturnError:](start%28%29.md): Starts or resumes all audio playback.
- [stop](stop%28%29.md): Stops all audio playback.
- [update](update%28%29.md): Processes app commands and increments framework processing.
- [renderingState](renderingstate.md): The status of the engine’s audio playback.
