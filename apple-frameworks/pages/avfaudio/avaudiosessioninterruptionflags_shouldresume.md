> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessioninterruptionflags_shouldresume](https://developer.apple.com/documentation/avfaudio/avaudiosessioninterruptionflags_shouldresume)

# AVAudioSessionInterruptionFlags_ShouldResume (Swift)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 4.0+ (deprecated in 6.0) · visionOS 1.0+ (deprecated in 1.0)

Indicates that your audio session is active and ready for use.

> Use [AVAudioSession.InterruptionOptions](avaudiosession/interruptionoptions.md) instead.

## Declaration

```swift
var AVAudioSessionInterruptionFlags_ShouldResume: Int { get }
```

<a id="Discussion"></a>

## Discussion

Your app can resume the interrupted audio operation. See [Handling audio interruptions](handling-audio-interruptions.md) for more information.

# AVAudioSessionInterruptionFlags_ShouldResume (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ (deprecated in 6.0) · iPadOS 4.0+ (deprecated in 6.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Indicates that your audio session is active and ready for use.

> Use [AVAudioSessionInterruptionOptions](avaudiosession/interruptionoptions.md) instead.

## Declaration

```objectivec
AVAudioSessionInterruptionFlags_ShouldResume
```

<a id="Discussion"></a>

## Discussion

Your app can resume the interrupted audio operation. See [Handling audio interruptions](handling-audio-interruptions.md) for more information.
