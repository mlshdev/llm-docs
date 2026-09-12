> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/deactivationcontext/source](https://developer.apple.com/documentation/avfaudio/avaudiosession/deactivationcontext/source)

# source (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The source of the audio session deactivation.

## Declaration

```swift
var source: AVAudioSession.DeactivationSource { get }
```

## See Also

### Getting the deactivation details

- [interruptionContext](interruptioncontext.md): Context about the interruption that caused deactivation.

# source (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The source of the audio session deactivation.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioSessionDeactivationSource source;
```

## See Also

### Getting the deactivation details

- [interruptionContext](interruptioncontext.md): Context about the interruption that caused deactivation.
