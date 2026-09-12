> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.struct/playandrecord](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/playandrecord)

# playAndRecord (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.

## Declaration

```swift
static let playAndRecord: AVAudioSession.Category
```

<a id="Discussion"></a>

## Discussion

Your audio continues with the Silent switch set to silent and with the screen locked. (The switch is called the *Ring/Silent switch* on iPhone.) To continue playing audio when your app transitions to the background (for example, when the screen locks), add the `audio` value to the [UIBackgroundModes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/plist/info/UIBackgroundModes) key in your information property list file.

This category is appropriate for simultaneous recording and playback, and also for apps that record and play back, but not simultaneously.

By default, using this category implies that your app’s audio is nonmixable—activating your session will interrupt any other audio sessions which are also nonmixable. To allow mixing for this category, use the [mixWithOthers](../categoryoptions-swift.struct/mixwithothers.md) option.

The user must grant permission for audio recording.

This category supports the mirrored version of Airplay. However, AirPlay mirroring will be disabled if the `AVAudioSessionModeVoiceChat` mode is used with this category.

## See Also

### Getting Standard Categories

- [ambient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [multiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [playback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [record](record.md): The category for recording audio while also silencing playback audio.
- [soloAmbient](soloambient.md): The default audio session category.
- [audioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.

# AVAudioSessionCategoryPlayAndRecord (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.

## Declaration

```objectivec
extern AVAudioSessionCategory const AVAudioSessionCategoryPlayAndRecord;
```

<a id="Discussion"></a>

## Discussion

Your audio continues with the Silent switch set to silent and with the screen locked. (The switch is called the *Ring/Silent switch* on iPhone.) To continue playing audio when your app transitions to the background (for example, when the screen locks), add the `audio` value to the [UIBackgroundModes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/plist/info/UIBackgroundModes) key in your information property list file.

This category is appropriate for simultaneous recording and playback, and also for apps that record and play back, but not simultaneously.

By default, using this category implies that your app’s audio is nonmixable—activating your session will interrupt any other audio sessions which are also nonmixable. To allow mixing for this category, use the [AVAudioSessionCategoryOptionMixWithOthers](../categoryoptions-swift.struct/mixwithothers.md) option.

The user must grant permission for audio recording.

This category supports the mirrored version of Airplay. However, AirPlay mirroring will be disabled if the `AVAudioSessionModeVoiceChat` mode is used with this category.

## See Also

### Getting Standard Categories

- [AVAudioSessionCategoryAmbient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [AVAudioSessionCategoryMultiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [AVAudioSessionCategoryPlayback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [AVAudioSessionCategoryRecord](record.md): The category for recording audio while also silencing playback audio.
- [AVAudioSessionCategorySoloAmbient](soloambient.md): The default audio session category.
- [AVAudioSessionCategoryAudioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.
