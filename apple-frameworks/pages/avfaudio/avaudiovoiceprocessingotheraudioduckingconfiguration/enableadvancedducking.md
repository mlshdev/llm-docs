> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration/enableadvancedducking](https://developer.apple.com/documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration/enableadvancedducking)

# enableAdvancedDucking (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Enables advanced ducking which ducks other audio based on the presence of voice activity from local and remote chat participants.

## Declaration

```swift
var enableAdvancedDucking: ObjCBool
```

## See Also

### Configuring ducking

- [duckingLevel](duckinglevel.md): The ducking level of other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level](level.md): Constants that define the supported ducking levels.

# enableAdvancedDucking (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Enables advanced ducking which ducks other audio based on the presence of voice activity from local and remote chat participants.

## Declaration

```objectivec
BOOL enableAdvancedDucking;
```

## See Also

### Configuring ducking

- [duckingLevel](duckinglevel.md): The ducking level of other audio.
- [AVAudioVoiceProcessingOtherAudioDuckingLevel](level.md): Constants that define the supported ducking levels.
