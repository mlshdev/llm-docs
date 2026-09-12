> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessioncategory_audioprocessing](https://developer.apple.com/documentation/audiotoolbox/kaudiosessioncategory_audioprocessing)

# kAudioSessionCategory_AudioProcessing (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.

## Declaration

```swift
var kAudioSessionCategory_AudioProcessing: Int { get }
```

<a id="Discussion"></a>

## Discussion

This category disables playback (audio output) and disables recording (audio input).

Audio processing does not normally continue when your app is in the background. However, when your app moves to the background, you can request additional time to complete processing. for more information, see [Internationalizing Your App](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/ExpectedAppBehaviors/ExpectedAppBehaviors.html#//apple_ref/doc/uid/TP40007072-CH3-SW10) in [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

This category is equivalent to the [audioProcessing](../avfaudio/avaudiosession/category-swift.struct/audioprocessing.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_AmbientSound](kaudiosessioncategory_ambientsound.md): Deprecated. For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.
- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md): For playing recorded music or other sounds that are central to the successful use of your app.
- [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md): For recording audio; this category silences playback audio. Recording continues with the screen locked.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.

# kAudioSessionCategory_AudioProcessing (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.

## Declaration

```objectivec
kAudioSessionCategory_AudioProcessing
```

<a id="Discussion"></a>

## Discussion

This category disables playback (audio output) and disables recording (audio input).

Audio processing does not normally continue when your app is in the background. However, when your app moves to the background, you can request additional time to complete processing. for more information, see [Internationalizing Your App](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/ExpectedAppBehaviors/ExpectedAppBehaviors.html#//apple_ref/doc/uid/TP40007072-CH3-SW10) in [App Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007072).

This category is equivalent to the [AVAudioSessionCategoryAudioProcessing](../avfaudio/avaudiosession/category-swift.struct/audioprocessing.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_AmbientSound](kaudiosessioncategory_ambientsound.md): Deprecated. For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.
- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md): For playing recorded music or other sounds that are central to the successful use of your app.
- [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md): For recording audio; this category silences playback audio. Recording continues with the screen locked.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.
