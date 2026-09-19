> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/port/builtinmic

# builtInMic (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An input from a device’s built-in microphone.

## Declaration

```swift
static let builtInMic: AVAudioSession.Port
```

## See Also

### Getting Input Ports

- [continuityMicrophone](continuitymicrophone.md): An input from a Continuity Microphone on Apple TV.
- [headsetMic](headsetmic.md): An input from a wired headset’s built-in microphone.
- [lineIn](linein.md): A line-level input from the dock connector.

# AVAudioSessionPortBuiltInMic (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An input from a device’s built-in microphone.

## Declaration

```objectivec
extern AVAudioSessionPort const AVAudioSessionPortBuiltInMic;
```

## See Also

### Getting Input Ports

- [AVAudioSessionPortContinuityMicrophone](continuitymicrophone.md): An input from a Continuity Microphone on Apple TV.
- [AVAudioSessionPortHeadsetMic](headsetmic.md): An input from a wired headset’s built-in microphone.
- [AVAudioSessionPortLineIn](linein.md): A line-level input from the dock connector.
