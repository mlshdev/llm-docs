> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/mixtotelephonyuplink](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/mixtotelephonyuplink)

# mixToTelephonyUplink (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that specifies whether to send synthesized speech to an active call.

## Declaration

```swift
var mixToTelephonyUplink: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property has no effect when there isn’t an active call.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [write(\_:toBufferCallback:)](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizer.BufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [write(\_:toBufferCallback:toMarkerCallback:)](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizer.MarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.

# mixToTelephonyUplink (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that specifies whether to send synthesized speech to an active call.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL mixToTelephonyUplink;
```

<a id="Discussion"></a>

## Discussion

This property has no effect when there isn’t an active call.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [outputChannels](outputchannels.md): An array of audio session channels to route generated speech.
- [writeUtterance:toBufferCallback:](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizerBufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [writeUtterance:toBufferCallback:toMarkerCallback:](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizerMarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.
