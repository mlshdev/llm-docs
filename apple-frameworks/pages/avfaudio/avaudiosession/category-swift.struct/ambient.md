> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.struct/ambient](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/ambient)

# ambient (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.

## Declaration

```swift
static let ambient: AVAudioSession.Category
```

<a id="Discussion"></a>

## Discussion

This category is also appropriate for “play-along” apps, such as a virtual piano that a user plays while the Music app is playing. When you use this category, audio from other apps mixes with your audio. Screen locking and the Silent switch (on iPhone, the Ring/Silent switch) silence your audio.

## See Also

### Getting Standard Categories

- [multiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [playAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [playback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [record](record.md): The category for recording audio while also silencing playback audio.
- [soloAmbient](soloambient.md): The default audio session category.
- [audioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.

# AVAudioSessionCategoryAmbient (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.

## Declaration

```objectivec
extern AVAudioSessionCategory const AVAudioSessionCategoryAmbient;
```

<a id="Discussion"></a>

## Discussion

This category is also appropriate for “play-along” apps, such as a virtual piano that a user plays while the Music app is playing. When you use this category, audio from other apps mixes with your audio. Screen locking and the Silent switch (on iPhone, the Ring/Silent switch) silence your audio.

## See Also

### Getting Standard Categories

- [AVAudioSessionCategoryMultiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [AVAudioSessionCategoryPlayAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [AVAudioSessionCategoryPlayback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [AVAudioSessionCategoryRecord](record.md): The category for recording audio while also silencing playback audio.
- [AVAudioSessionCategorySoloAmbient](soloambient.md): The default audio session category.
- [AVAudioSessionCategoryAudioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.
