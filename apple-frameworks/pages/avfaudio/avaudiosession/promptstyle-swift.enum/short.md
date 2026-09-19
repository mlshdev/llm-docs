> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosession/promptstyle-swift.enum/short

# AVAudioSession.PromptStyle.short (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Your app should issue short, nonverbal prompts.

## Declaration

```swift
case short
```

<a id="Discussion"></a>

## Discussion

The audio session’s prompt style is short when Siri is active but not recording, when a voicemail is playing back, or when a voice call is active.

## See Also

### Prompt Styles

- [AVAudioSession.PromptStyle.none](none.md): Your app shouldn’t issue prompts at this time.
- [AVAudioSession.PromptStyle.normal](normal.md): Your app may use long, verbal prompts.

# AVAudioSessionPromptStyleShort (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Your app should issue short, nonverbal prompts.

## Declaration

```objectivec
AVAudioSessionPromptStyleShort
```

<a id="Discussion"></a>

## Discussion

The audio session’s prompt style is short when Siri is active but not recording, when a voicemail is playing back, or when a voice call is active.

## See Also

### Prompt Styles

- [AVAudioSessionPromptStyleNone](none.md): Your app shouldn’t issue prompts at this time.
- [AVAudioSessionPromptStyleNormal](normal.md): Your app may use long, verbal prompts.
