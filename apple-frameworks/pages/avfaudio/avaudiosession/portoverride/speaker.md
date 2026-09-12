> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/portoverride/speaker](https://developer.apple.com/documentation/avfaudio/avaudiosession/portoverride/speaker)

# AVAudioSession.PortOverride.speaker (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A value that indicates to override the current inputs and outputs, and route audio to the built-in speaker and microphone.

## Declaration

```swift
case speaker
```

<a id="Discussion"></a>

## Discussion

This override type is only valid for the [playAndRecord](../category-swift.struct/playandrecord.md) category.

## See Also

### Port Override Types

- [AVAudioSession.PortOverride.none](none.md): A value that indicates not to override the output audio port.

# AVAudioSessionPortOverrideSpeaker (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A value that indicates to override the current inputs and outputs, and route audio to the built-in speaker and microphone.

## Declaration

```objectivec
AVAudioSessionPortOverrideSpeaker
```

<a id="Discussion"></a>

## Discussion

This override type is only valid for the [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) category.

## See Also

### Port Override Types

- [AVAudioSessionPortOverrideNone](none.md): A value that indicates not to override the output audio port.
