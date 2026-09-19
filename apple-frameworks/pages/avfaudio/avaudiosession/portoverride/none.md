> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/portoverride/none

# AVAudioSession.PortOverride.none (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

A value that indicates not to override the output audio port.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

Use this option to route audio to the system default outputs for the current category and mode.

## See Also

### Port Override Types

- [AVAudioSession.PortOverride.speaker](speaker.md): A value that indicates to override the current inputs and outputs, and route audio to the built-in speaker and microphone.

# AVAudioSessionPortOverrideNone (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that indicates not to override the output audio port.

## Declaration

```objectivec
AVAudioSessionPortOverrideNone
```

<a id="Discussion"></a>

## Discussion

Use this option to route audio to the system default outputs for the current category and mode.

## See Also

### Port Override Types

- [AVAudioSessionPortOverrideSpeaker](speaker.md): A value that indicates to override the current inputs and outputs, and route audio to the built-in speaker and microphone.
