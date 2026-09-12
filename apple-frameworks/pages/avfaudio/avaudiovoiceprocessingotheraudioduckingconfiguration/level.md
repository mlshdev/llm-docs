> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration/level](https://developer.apple.com/documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration/level)

# AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Constants that define the supported ducking levels.

## Declaration

```swift
enum Level
```

## Topics

### Ducking levels

- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level.default](level/default.md): The default ducking level for typical voice chat.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level.max](level/max.md): Applies maximum ducking to other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level.mid](level/mid.md): Applies medium ducking to other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level.min](level/min.md): Applies minimum ducking to other audio.

### Initializers

- [init(rawValue:)](level/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring ducking

- [enableAdvancedDucking](enableadvancedducking.md): Enables advanced ducking which ducks other audio based on the presence of voice activity from local and remote chat participants.
- [duckingLevel](duckinglevel.md): The ducking level of other audio.

# AVAudioVoiceProcessingOtherAudioDuckingLevel (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Constants that define the supported ducking levels.

## Declaration

```objectivec
enum AVAudioVoiceProcessingOtherAudioDuckingLevel : NSInteger;
```

## Topics

### Ducking levels

- [AVAudioVoiceProcessingOtherAudioDuckingLevelDefault](level/default.md): The default ducking level for typical voice chat.
- [AVAudioVoiceProcessingOtherAudioDuckingLevelMax](level/max.md): Applies maximum ducking to other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingLevelMid](level/mid.md): Applies medium ducking to other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingLevelMin](level/min.md): Applies minimum ducking to other audio.

## See Also

### Configuring ducking

- [enableAdvancedDucking](enableadvancedducking.md): Enables advanced ducking which ducks other audio based on the presence of voice activity from local and remote chat participants.
- [duckingLevel](duckinglevel.md): The ducking level of other audio.
