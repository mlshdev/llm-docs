> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/write(_:tobuffercallback:tomarkercallback:)](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/write(_:tobuffercallback:tomarkercallback:))

# write(\_:toBufferCallback:toMarkerCallback:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Generates audio buffers and associated metadata for storage or further speech synthesis processing.

## Declaration

```swift
func write(_ utterance: AVSpeechUtterance, toBufferCallback bufferCallback: @escaping AVSpeechSynthesizer.BufferCallback, toMarkerCallback markerCallback: @escaping AVSpeechSynthesizer.MarkerCallback)
```

## Parameters

- `utterance`: A utterance for a synthesizer to speak.
- `bufferCallback`: A callback that the system invokes with the synthesized audio data.
- `markerCallback`: A callback that the system invokes with marker information.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [write(\_:toBufferCallback:)](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizer.BufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [AVSpeechSynthesizer.MarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.

# writeUtterance:toBufferCallback:toMarkerCallback: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Generates audio buffers and associated metadata for storage or further speech synthesis processing.

## Declaration

```objectivec
- (void) writeUtterance:(AVSpeechUtterance *) utterance toBufferCallback:(AVSpeechSynthesizerBufferCallback) bufferCallback toMarkerCallback:(AVSpeechSynthesizerMarkerCallback) markerCallback;
```

## Parameters

- `utterance`: A utterance for a synthesizer to speak.
- `bufferCallback`: A callback that the system invokes with the synthesized audio data.
- `markerCallback`: A callback that the system invokes with marker information.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [writeUtterance:toBufferCallback:](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizerBufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [AVSpeechSynthesizerMarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.
