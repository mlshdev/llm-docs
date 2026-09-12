> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/promptstyle-swift.enum/none](https://developer.apple.com/documentation/avfaudio/avaudiosession/promptstyle-swift.enum/none)

# AVAudioSession.PromptStyle.none (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Your app shouldn’t issue prompts at this time.

## Declaration

```swift
case none
```

<a id="Discussion"></a>

## Discussion

This style indicates that another audio session is currently using microphone input, and your app shouldn’t issue prompts at this time.

For example, if Siri is recognizing speech, playing navigation or exercise prompts could interfere with Siri’s ability to accurately recognize the user’s speech. Your app should refrain from playing any prompts while the prompt style equals this value.

## See Also

### Prompt Styles

- [AVAudioSession.PromptStyle.short](short.md): Your app should issue short, nonverbal prompts.
- [AVAudioSession.PromptStyle.normal](normal.md): Your app may use long, verbal prompts.

# AVAudioSessionPromptStyleNone (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Your app shouldn’t issue prompts at this time.

## Declaration

```objectivec
AVAudioSessionPromptStyleNone
```

<a id="Discussion"></a>

## Discussion

This style indicates that another audio session is currently using microphone input, and your app shouldn’t issue prompts at this time.

For example, if Siri is recognizing speech, playing navigation or exercise prompts could interfere with Siri’s ability to accurately recognize the user’s speech. Your app should refrain from playing any prompts while the prompt style equals this value.

## See Also

### Prompt Styles

- [AVAudioSessionPromptStyleShort](short.md): Your app should issue short, nonverbal prompts.
- [AVAudioSessionPromptStyleNormal](normal.md): Your app may use long, verbal prompts.
