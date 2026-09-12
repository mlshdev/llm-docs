> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/portoverride](https://developer.apple.com/documentation/avfaudio/avaudiosession/portoverride)

# AVAudioSession.PortOverride (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants for use with the [overrideOutputAudioPort(\_:)](overrideoutputaudioport%28__%29.md) method.

## Declaration

```swift
enum PortOverride
```

## Topics

### Port Override Types

- [AVAudioSession.PortOverride.none](portoverride/none.md): A value that indicates not to override the output audio port.
- [AVAudioSession.PortOverride.speaker](portoverride/speaker.md): A value that indicates to override the current inputs and outputs, and route audio to the built-in speaker and microphone.

### Initializers

- [init(rawValue:)](portoverride/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioSessionPortOverride (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants for use with the [overrideOutputAudioPort:error:](overrideoutputaudioport%28__%29.md) method.

## Declaration

```objectivec
enum AVAudioSessionPortOverride : NSUInteger;
```

## Topics

### Port Override Types

- [AVAudioSessionPortOverrideNone](portoverride/none.md): A value that indicates not to override the output audio port.
- [AVAudioSessionPortOverrideSpeaker](portoverride/speaker.md): A value that indicates to override the current inputs and outputs, and route audio to the built-in speaker and microphone.
