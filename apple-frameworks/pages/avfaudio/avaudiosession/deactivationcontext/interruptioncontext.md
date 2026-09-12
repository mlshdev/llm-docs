> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/deactivationcontext/interruptioncontext](https://developer.apple.com/documentation/avfaudio/avaudiosession/deactivationcontext/interruptioncontext)

# interruptionContext (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Context about the interruption that caused deactivation.

## Declaration

```swift
var interruptionContext: AVAudioSession.InterruptionContext? { get }
```

<a id="discussion"></a>

## Discussion

This property is only present when the session was interrupted by another application.

## See Also

### Getting the deactivation details

- [source](source.md): The source of the audio session deactivation.

# interruptionContext (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Context about the interruption that caused deactivation.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAudioSessionInterruptionContext * interruptionContext;
```

<a id="discussion"></a>

## Discussion

This property is only present when the session was interrupted by another application.

## See Also

### Getting the deactivation details

- [source](source.md): The source of the audio session deactivation.
