> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovideraudiounit/speechvoices](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovideraudiounit/speechvoices)

# speechVoices (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A list of voices the audio unit provides to the system.

## Declaration

```swift
var speechVoices: [AVSpeechSynthesisProviderVoice] { get set }
```

<a id="Discussion"></a>

## Discussion

The list of voices that a user selects through Settings. Speech synthesizer audio unit extensions must provide this list. Override the getter to perform complex fetches that provide a dynamic list of voices.

## See Also

### Getting and setting voices

- [AVSpeechSynthesisProviderVoice](../avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.

# speechVoices (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A list of voices the audio unit provides to the system.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<AVSpeechSynthesisProviderVoice *> * speechVoices;
```

<a id="Discussion"></a>

## Discussion

The list of voices that a user selects through Settings. Speech synthesizer audio unit extensions must provide this list. Override the getter to perform complex fetches that provide a dynamic list of voices.

## See Also

### Getting and setting voices

- [AVSpeechSynthesisProviderVoice](../avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.
