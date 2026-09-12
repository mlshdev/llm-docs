> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesizer/outputchannels](https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/outputchannels)

# outputChannels (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of audio session channels to route generated speech.

## Declaration

```swift
var outputChannels: [AVAudioSessionChannelDescription]? { get set }
```

<a id="Discussion"></a>

## Discussion

The system replicates speech audio to each audio session channel.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [write(\_:toBufferCallback:)](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizer.BufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [write(\_:toBufferCallback:toMarkerCallback:)](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizer.MarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.

# outputChannels (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of audio session channels to route generated speech.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSArray<AVAudioSessionChannelDescription *> * outputChannels;
```

<a id="Discussion"></a>

## Discussion

The system replicates speech audio to each audio session channel.

## See Also

### Directing speech output

- [usesApplicationAudioSession](usesapplicationaudiosession.md): A Boolean value that specifies whether the app manages the audio session.
- [mixToTelephonyUplink](mixtotelephonyuplink.md): A Boolean value that specifies whether to send synthesized speech to an active call.
- [writeUtterance:toBufferCallback:](write%28__tobuffercallback_%29.md): Generates speech for the utterance and invokes the callback with the audio buffer.
- [AVSpeechSynthesizerBufferCallback](buffercallback.md): A type that defines a callback that receives a buffer of generated speech.
- [writeUtterance:toBufferCallback:toMarkerCallback:](write%28__tobuffercallback_tomarkercallback_%29.md): Generates audio buffers and associated metadata for storage or further speech synthesis processing.
- [AVSpeechSynthesizerMarkerCallback](markercallback.md): A type that defines a callback that receives speech markers.
