> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.struct/soloambient](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/soloambient)

# soloAmbient (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default audio session category.

## Declaration

```swift
static let soloAmbient: AVAudioSession.Category
```

<a id="Discussion"></a>

## Discussion

Your audio is silenced by screen locking and by the Silent switch (called the *Ring/Silent switch* on iPhone).

By default, using this category implies that your app’s audio is nonmixable—activating your session will interrupt any other audio sessions which are also nonmixable. To allow mixing, use the [ambient](ambient.md) category instead.

## See Also

### Getting Standard Categories

- [ambient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [multiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [playAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [playback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [record](record.md): The category for recording audio while also silencing playback audio.
- [audioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.

# AVAudioSessionCategorySoloAmbient (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default audio session category.

## Declaration

```objectivec
extern AVAudioSessionCategory const AVAudioSessionCategorySoloAmbient;
```

<a id="Discussion"></a>

## Discussion

Your audio is silenced by screen locking and by the Silent switch (called the *Ring/Silent switch* on iPhone).

By default, using this category implies that your app’s audio is nonmixable—activating your session will interrupt any other audio sessions which are also nonmixable. To allow mixing, use the [AVAudioSessionCategoryAmbient](ambient.md) category instead.

## See Also

### Getting Standard Categories

- [AVAudioSessionCategoryAmbient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [AVAudioSessionCategoryMultiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [AVAudioSessionCategoryPlayAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [AVAudioSessionCategoryPlayback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [AVAudioSessionCategoryRecord](record.md): The category for recording audio while also silencing playback audio.
- [AVAudioSessionCategoryAudioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.
