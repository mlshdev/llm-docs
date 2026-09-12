> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/markercallback](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/markercallback)

# AVSpeechSynthesizer.MarkerCallback (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that defines a callback that receives speech markers.

## Declaration

```swift
typealias MarkerCallback = ([AVSpeechSynthesisMarker]) -> Void
```

## Parameters

- `markers`: An array of speech synthesis markers.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [write(\_:toBufferCallback:)](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizer.BufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [write(\_:toBufferCallback:toMarkerCallback:)](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.

# AVSpeechSynthesizerMarkerCallback (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that defines a callback that receives speech markers.

## Declaration

```objectivec
typedef void (^)(NSArray<AVSpeechSynthesisMarker *> *) AVSpeechSynthesizerMarkerCallback;
```

## Parameters

- `markers`: An array of speech synthesis markers.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [writeUtterance:toBufferCallback:](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizerBufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [writeUtterance:toBufferCallback:toMarkerCallback:](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
