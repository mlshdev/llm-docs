> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/promptstyle-swift.enum](https://developer.apple.com/documentation/avfaudio/avaudiosession/promptstyle-swift.enum)

# AVAudioSession.PromptStyle (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that indicate the prompt style to use.

## Declaration

```swift
enum PromptStyle
```

## Topics

### Prompt Styles

- [AVAudioSession.PromptStyle.none](promptstyle-swift.enum/none.md): Your app shouldn’t issue prompts at this time.
- [AVAudioSession.PromptStyle.short](promptstyle-swift.enum/short.md): Your app should issue short, nonverbal prompts.
- [AVAudioSession.PromptStyle.normal](promptstyle-swift.enum/normal.md): Your app may use long, verbal prompts.

### Initializers

- [init(rawValue:)](promptstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the audio prompt style

- [promptStyle](promptstyle-swift.property.md): A hint to audio sessions that use voice prompt mode to alter the type of prompts they issue in response to other system audio, such as Siri and phone calls.

# AVAudioSessionPromptStyle (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the prompt style to use.

## Declaration

```objectivec
enum AVAudioSessionPromptStyle : NSUInteger;
```

## Topics

### Prompt Styles

- [AVAudioSessionPromptStyleNone](promptstyle-swift.enum/none.md): Your app shouldn’t issue prompts at this time.
- [AVAudioSessionPromptStyleShort](promptstyle-swift.enum/short.md): Your app should issue short, nonverbal prompts.
- [AVAudioSessionPromptStyleNormal](promptstyle-swift.enum/normal.md): Your app may use long, verbal prompts.

## See Also

### Inspecting the audio prompt style

- [promptStyle](promptstyle-swift.property.md): A hint to audio sessions that use voice prompt mode to alter the type of prompts they issue in response to other system audio, such as Siri and phone calls.
