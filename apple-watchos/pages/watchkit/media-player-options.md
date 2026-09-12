> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/media-player-options](https://developer.apple.com/documentation/watchkit/media-player-options)

# Media Player Options (Swift)

**Framework:** WatchKit  
**Kind:** API Collection

Keys indicating media playback options.

## Topics

### Constants

- [WKMediaPlayerControllerOptionsAutoplayKey](wkmediaplayercontrolleroptionsautoplaykey.md): The option to play a media file automatically when it is displayed. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a Boolean value indicating whether the media file should begin playing automatically when the interface is displayed. Playback is also contingent upon the file being available and ready to play on Apple Watch. If you do not specify this option, the user must initiate playback.
- [WKMediaPlayerControllerOptionsStartTimeKey](wkmediaplayercontrolleroptionsstarttimekey.md): The number of seconds into the media file at which to begin playback. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing an [TimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value. Playback begins at the specified number of seconds past the original start point of the media file. If you do not specify this option, playback begins at the beginning of the media file.
- [WKMediaPlayerControllerOptionsVideoGravityKey](wkmediaplayercontrolleroptionsvideogravitykey.md): The behavior for resizing the video to fit the available space. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing an appropriate constant of the [WKVideoGravity](wkvideogravity.md) type.
- [WKMediaPlayerControllerOptionsLoopsKey](wkmediaplayercontrolleroptionsloopskey.md): The behavior for playing the media in a loop. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a Boolean value. Set the value to [true](https://developer.apple.com/documentation/swift/true) to play the media file in a loop. If this key is not present, the media file plays one time and then ends.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerController(with:options:completion:)](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [dismissMediaPlayerController()](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderController(withOutputURL:preset:options:completion:)](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController()](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.

# Media Player Options (Objective-C)

**Framework:** WatchKit  
**Kind:** API Collection

Keys indicating media playback options.

## Topics

### Constants

- [WKMediaPlayerControllerOptionsAutoplayKey](wkmediaplayercontrolleroptionsautoplaykey.md): The option to play a media file automatically when it is displayed. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a Boolean value indicating whether the media file should begin playing automatically when the interface is displayed. Playback is also contingent upon the file being available and ready to play on Apple Watch. If you do not specify this option, the user must initiate playback.
- [WKMediaPlayerControllerOptionsStartTimeKey](wkmediaplayercontrolleroptionsstarttimekey.md): The number of seconds into the media file at which to begin playback. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing an [NSTimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value. Playback begins at the specified number of seconds past the original start point of the media file. If you do not specify this option, playback begins at the beginning of the media file.
- [WKMediaPlayerControllerOptionsVideoGravityKey](wkmediaplayercontrolleroptionsvideogravitykey.md): The behavior for resizing the video to fit the available space. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing an appropriate constant of the [WKVideoGravity](wkvideogravity.md) type.
- [WKMediaPlayerControllerOptionsLoopsKey](wkmediaplayercontrolleroptionsloopskey.md): The behavior for playing the media in a loop. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing a Boolean value. Set the value to [true](https://developer.apple.com/documentation/swift/true) to play the media file in a loop. If this key is not present, the media file plays one time and then ends.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerControllerWithURL:options:completion:](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [dismissMediaPlayerController](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderControllerWithOutputURL:preset:options:completion:](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.
