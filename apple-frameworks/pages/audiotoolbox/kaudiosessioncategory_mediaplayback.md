> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessioncategory_mediaplayback](https://developer.apple.com/documentation/audiotoolbox/kaudiosessioncategory_mediaplayback)

# kAudioSessionCategory_MediaPlayback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For playing recorded music or other sounds that are central to the successful use of your app.

## Declaration

```swift
var kAudioSessionCategory_MediaPlayback: Int { get }
```

<a id="Discussion"></a>

## Discussion

When using this category, your app audio continues with the Silent switch set to silent or when the screen locks. (The switch is called the *Ring/Silent switch* on iPhone.)

This category normally prevents audio from other apps from mixing with your app’s audio. To allow mixing for this category, use the [kAudioSessionProperty_OverrideCategoryMixWithOthers](kaudiosessionproperty_overridecategorymixwithothers.md) property.

This category is equivalent to the [playback](../avfaudio/avaudiosession/category-swift.struct/playback.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_AmbientSound](kaudiosessioncategory_ambientsound.md): Deprecated. For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.
- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md): For recording audio; this category silences playback audio. Recording continues with the screen locked.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.
- [kAudioSessionCategory_AudioProcessing](kaudiosessioncategory_audioprocessing.md): For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.

# kAudioSessionCategory_MediaPlayback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For playing recorded music or other sounds that are central to the successful use of your app.

## Declaration

```objectivec
kAudioSessionCategory_MediaPlayback
```

<a id="Discussion"></a>

## Discussion

When using this category, your app audio continues with the Silent switch set to silent or when the screen locks. (The switch is called the *Ring/Silent switch* on iPhone.)

This category normally prevents audio from other apps from mixing with your app’s audio. To allow mixing for this category, use the [kAudioSessionProperty_OverrideCategoryMixWithOthers](kaudiosessionproperty_overridecategorymixwithothers.md) property.

This category is equivalent to the [AVAudioSessionCategoryPlayback](../avfaudio/avaudiosession/category-swift.struct/playback.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_AmbientSound](kaudiosessioncategory_ambientsound.md): Deprecated. For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.
- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_RecordAudio](kaudiosessioncategory_recordaudio.md): For recording audio; this category silences playback audio. Recording continues with the screen locked.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.
- [kAudioSessionCategory_AudioProcessing](kaudiosessioncategory_audioprocessing.md): For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.
