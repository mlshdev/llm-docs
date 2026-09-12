> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessioncategory_recordaudio](https://developer.apple.com/documentation/audiotoolbox/kaudiosessioncategory_recordaudio)

# kAudioSessionCategory_RecordAudio (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For recording audio; this category silences playback audio. Recording continues with the screen locked.

## Declaration

```swift
var kAudioSessionCategory_RecordAudio: Int { get }
```

<a id="Discussion"></a>

## Discussion

This category is equivalent to the [record](../avfaudio/avaudiosession/category-swift.struct/record.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_AmbientSound](kaudiosessioncategory_ambientsound.md): Deprecated. For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.
- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md): For playing recorded music or other sounds that are central to the successful use of your app.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.
- [kAudioSessionCategory_AudioProcessing](kaudiosessioncategory_audioprocessing.md): For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.

# kAudioSessionCategory_RecordAudio (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

For recording audio; this category silences playback audio. Recording continues with the screen locked.

## Declaration

```objectivec
kAudioSessionCategory_RecordAudio
```

<a id="Discussion"></a>

## Discussion

This category is equivalent to the [AVAudioSessionCategoryRecord](../avfaudio/avaudiosession/category-swift.struct/record.md) category provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionCategory_AmbientSound](kaudiosessioncategory_ambientsound.md): Deprecated. For an app in which sound playback is nonprimary—that is, your app can be used successfully with the sound turned off.
- [kAudioSessionCategory_SoloAmbientSound](kaudiosessioncategory_soloambientsound.md): The default category, used unless you set a category with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md): For playing recorded music or other sounds that are central to the successful use of your app.
- [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md): Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) app.
- [kAudioSessionCategory_AudioProcessing](kaudiosessioncategory_audioprocessing.md): For using an audio hardware codec or signal processor while not playing or recording audio. Use this category, for example, when performing offline audio format conversion.
