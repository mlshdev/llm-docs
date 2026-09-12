> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessioncategory_ambientsound](https://developer.apple.com/documentation/audiotoolbox/kaudiosessioncategory_ambientsound)

# kAudioSessionCategory_AmbientSound (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.

> Deprecated in iOS 7.0.

## Declaration

```swift
var kAudioSessionCategory_AmbientSound: Int { get }
```

<a id="Discussion"></a>

## Discussion

This category is appropriate for “play along” style apps, such as a virtual piano that a user plays over iPod audio. When you use this category, audio from other apps mixes with your audio. Your audio is silenced by screen locking and by the Silent switch (called the *Ring/Silent switch* on iPhone).

This category is equivalent to the [ambient](../avfaudio/avaudiosession/category-swift.struct/ambient.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md): For playing recorded music or other sounds that are central to the successful use of your app.
- [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md): For recording audio; this category silences playback audio. Recording continues with the screen locked.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.
- [kAudioSessionCategory_AudioProcessing](kaudiosessioncategory_audioprocessing.md): For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.

# kAudioSessionCategory_AmbientSound (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
kAudioSessionCategory_AmbientSound
```

<a id="Discussion"></a>

## Discussion

This category is appropriate for “play along” style apps, such as a virtual piano that a user plays over iPod audio. When you use this category, audio from other apps mixes with your audio. Your audio is silenced by screen locking and by the Silent switch (called the *Ring/Silent switch* on iPhone).

This category is equivalent to the [AVAudioSessionCategoryAmbient](../avfaudio/avaudiosession/category-swift.struct/ambient.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md): For playing recorded music or other sounds that are central to the successful use of your app.
- [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md): For recording audio; this category silences playback audio. Recording continues with the screen locked.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.
- [kAudioSessionCategory_AudioProcessing](kaudiosessioncategory_audioprocessing.md): For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.
