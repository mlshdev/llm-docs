> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.struct/audioprocessing](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/audioprocessing)

# audioProcessing (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 10.0) · iPadOS 3.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The category for using an audio hardware codec or signal processor while not playing or recording audio.

> This category is no longer necessary and was deprecated iOS 10.

## Declaration

```swift
static let audioProcessing: AVAudioSession.Category
```

<a id="Discussion"></a>

## Discussion

This category disables playback (audio output) and disables recording (audio input). Use this category, for example, when performing offline audio format conversion.

## See Also

### Getting Standard Categories

- [ambient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [multiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [playAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [playback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [record](record.md): The category for recording audio while also silencing playback audio.
- [soloAmbient](soloambient.md): The default audio session category.

# AVAudioSessionCategoryAudioProcessing (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ (deprecated in 10.0) · iPadOS 3.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The category for using an audio hardware codec or signal processor while not playing or recording audio.

> This category is no longer necessary and was deprecated iOS 10.

## Declaration

```objectivec
extern AVAudioSessionCategory const AVAudioSessionCategoryAudioProcessing;
```

<a id="Discussion"></a>

## Discussion

This category disables playback (audio output) and disables recording (audio input). Use this category, for example, when performing offline audio format conversion.

## See Also

### Getting Standard Categories

- [AVAudioSessionCategoryAmbient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [AVAudioSessionCategoryMultiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [AVAudioSessionCategoryPlayAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [AVAudioSessionCategoryPlayback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [AVAudioSessionCategoryRecord](record.md): The category for recording audio while also silencing playback audio.
- [AVAudioSessionCategorySoloAmbient](soloambient.md): The default audio session category.
