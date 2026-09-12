> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/category-swift.struct/record](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/record)

# record (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for recording audio while also silencing playback audio.

## Declaration

```swift
static let record: AVAudioSession.Category
```

<a id="Discussion"></a>

## Discussion

This category has the effect of silencing virtually all output on the system, for as long as the session is active. Unless you need to prevent any unexpected sounds from being played, use [playAndRecord](playandrecord.md) instead.

To continue recording audio when your app transitions to the background (for example, when the screen locks), add the `audio` value to the [UIBackgroundModes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/plist/info/UIBackgroundModes) key in your information property list file.

The user must grant permission for audio recording.

> **Note**

>  Using this category doesn’t prevent phone calls, alarms, or other nonmixable audio sessions from interrupting the audio session.

## See Also

### Getting Standard Categories

- [ambient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [multiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [playAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [playback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [soloAmbient](soloambient.md): The default audio session category.
- [audioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.

# AVAudioSessionCategoryRecord (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The category for recording audio while also silencing playback audio.

## Declaration

```objectivec
extern AVAudioSessionCategory const AVAudioSessionCategoryRecord;
```

<a id="Discussion"></a>

## Discussion

This category has the effect of silencing virtually all output on the system, for as long as the session is active. Unless you need to prevent any unexpected sounds from being played, use [AVAudioSessionCategoryPlayAndRecord](playandrecord.md) instead.

To continue recording audio when your app transitions to the background (for example, when the screen locks), add the `audio` value to the [UIBackgroundModes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/plist/info/UIBackgroundModes) key in your information property list file.

The user must grant permission for audio recording.

> **Note**

>  Using this category doesn’t prevent phone calls, alarms, or other nonmixable audio sessions from interrupting the audio session.

## See Also

### Getting Standard Categories

- [AVAudioSessionCategoryAmbient](ambient.md): The category for an app in which sound playback is nonprimary — that is, your app also works with the sound turned off.
- [AVAudioSessionCategoryMultiRoute](multiroute.md): The category for routing distinct streams of audio data to different output devices at the same time.
- [AVAudioSessionCategoryPlayAndRecord](playandrecord.md): The category for recording (input) and playback (output) of audio, such as for a Voice over Internet Protocol (VoIP) app.
- [AVAudioSessionCategoryPlayback](playback.md): The category for playing recorded music or other sounds that are central to the successful use of your app.
- [AVAudioSessionCategorySoloAmbient](soloambient.md): The default audio session category.
- [AVAudioSessionCategoryAudioProcessing](audioprocessing.md): Deprecated. The category for using an audio hardware codec or signal processor while not playing or recording audio.
