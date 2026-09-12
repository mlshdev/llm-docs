> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkaudiorecorderpreset](https://developer.apple.com/documentation/watchkit/wkaudiorecorderpreset)

# WKAudioRecorderPreset (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the quality of audio recordings.

## Declaration

```swift
enum WKAudioRecorderPreset
```

## Topics

### Constants

- [WKAudioRecorderPreset.narrowBandSpeech](wkaudiorecorderpreset/narrowbandspeech.md): Audio quality suitable for basic speech recording. This preset records audio with an 8 kHz sampling rate using either the LPCM 128 kbps or AAC 24 kbps format.
- [WKAudioRecorderPreset.wideBandSpeech](wkaudiorecorderpreset/widebandspeech.md): Audio quality suitable for higher fidelity speech recording. This preset records audio with a 16 kHz sampling rate using either the LPCM 256 kbps or AAC 32 kbps format.
- [WKAudioRecorderPreset.highQualityAudio](wkaudiorecorderpreset/highqualityaudio.md): A high-quality audio recording. This preset records audio with a 44.1 kHz sampling rate using either the LPCM 705.6 kbps or AAC 96 kbps format.

### Initializers

- [init(rawValue:)](wkaudiorecorderpreset/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerController(with:options:completion:)](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController()](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderController(withOutputURL:preset:options:completion:)](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [Audio Recording Options](audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController()](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.

# WKAudioRecorderPreset (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constants indicating the quality of audio recordings.

## Declaration

```objectivec
enum WKAudioRecorderPreset : NSInteger;
```

## Topics

### Constants

- [WKAudioRecorderPresetNarrowBandSpeech](wkaudiorecorderpreset/narrowbandspeech.md): Audio quality suitable for basic speech recording. This preset records audio with an 8 kHz sampling rate using either the LPCM 128 kbps or AAC 24 kbps format.
- [WKAudioRecorderPresetWideBandSpeech](wkaudiorecorderpreset/widebandspeech.md): Audio quality suitable for higher fidelity speech recording. This preset records audio with a 16 kHz sampling rate using either the LPCM 256 kbps or AAC 32 kbps format.
- [WKAudioRecorderPresetHighQualityAudio](wkaudiorecorderpreset/highqualityaudio.md): A high-quality audio recording. This preset records audio with a 44.1 kHz sampling rate using either the LPCM 705.6 kbps or AAC 96 kbps format.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerControllerWithURL:options:completion:](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderControllerWithOutputURL:preset:options:completion:](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [Audio Recording Options](audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.
