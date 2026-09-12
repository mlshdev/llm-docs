> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/buffercallback](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/buffercallback)

# AVSpeechSynthesizer.BufferCallback (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that defines a callback that receives a buffer of generated speech.

## Declaration

```swift
typealias BufferCallback = (AVAudioBuffer) -> Void
```

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [write(\_:toBufferCallback:)](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [write(\_:toBufferCallback:toMarkerCallback:)](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizer.MarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.

# AVSpeechSynthesizerBufferCallback (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that defines a callback that receives a buffer of generated speech.

## Declaration

```objectivec
typedef void (^)(AVAudioBuffer *) AVSpeechSynthesizerBufferCallback;
```

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [writeUtterance:toBufferCallback:](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [writeUtterance:toBufferCallback:toMarkerCallback:](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizerMarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.
