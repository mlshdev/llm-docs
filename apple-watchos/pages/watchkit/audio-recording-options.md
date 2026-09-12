> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/audio-recording-options](https://developer.apple.com/documentation/watchkit/audio-recording-options)

# Audio Recording Options (Swift)

**Framework:** WatchKit  
**Kind:** API Collection

Options to specify when recording audio.

## Topics

### Constants

- [WKAudioRecorderControllerOptionsActionTitleKey](wkaudiorecordercontrolleroptionsactiontitlekey.md): The title to display on the button that the user taps to accept a recording. The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. If you do not specify this option, the button title is set to “Save”.
- [WKAudioRecorderControllerOptionsAlwaysShowActionTitleKey](wkaudiorecordercontrolleroptionsalwaysshowactiontitlekey.md): The behavior for showing the action button. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface always shows the action button. When the value is [false](https://developer.apple.com/documentation/swift/false), the sheet shows the button only after the user has recorded some audio. The default value for this option is YES.
- [WKAudioRecorderControllerOptionsAutorecordKey](wkaudiorecordercontrolleroptionsautorecordkey.md): The automatic recording behavior of the action sheet. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface starts recording as soon as it is presented. When the value is [false](https://developer.apple.com/documentation/swift/false), the user must start recording manually. The default value for this option is [true](https://developer.apple.com/documentation/swift/true).
- [WKAudioRecorderControllerOptionsMaximumDurationKey](wkaudiorecordercontrolleroptionsmaximumdurationkey.md): The maximum length of recorded audio clips. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with an [TimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value containing the maximum duration in seconds. If you do not specify this option, there is no maximum recording time.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerController(with:options:completion:)](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController()](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderController(withOutputURL:preset:options:completion:)](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [dismissAudioRecorderController()](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.

# Audio Recording Options (Objective-C)

**Framework:** WatchKit  
**Kind:** API Collection

Options to specify when recording audio.

## Topics

### Constants

- [WKAudioRecorderControllerOptionsActionTitleKey](wkaudiorecordercontrolleroptionsactiontitlekey.md): The title to display on the button that the user taps to accept a recording. The value of this key is an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object. If you do not specify this option, the button title is set to “Save”.
- [WKAudioRecorderControllerOptionsAlwaysShowActionTitleKey](wkaudiorecordercontrolleroptionsalwaysshowactiontitlekey.md): The behavior for showing the action button. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface always shows the action button. When the value is [false](https://developer.apple.com/documentation/swift/false), the sheet shows the button only after the user has recorded some audio. The default value for this option is YES.
- [WKAudioRecorderControllerOptionsAutorecordKey](wkaudiorecordercontrolleroptionsautorecordkey.md): The automatic recording behavior of the action sheet. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the recording interface starts recording as soon as it is presented. When the value is [false](https://developer.apple.com/documentation/swift/false), the user must start recording manually. The default value for this option is [true](https://developer.apple.com/documentation/swift/true).
- [WKAudioRecorderControllerOptionsMaximumDurationKey](wkaudiorecordercontrolleroptionsmaximumdurationkey.md): The maximum length of recorded audio clips. The value of this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object with an [NSTimeInterval](https://developer.apple.com/documentation/foundation/timeinterval) value containing the maximum duration in seconds. If you do not specify this option, there is no maximum recording time.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerControllerWithURL:options:completion:](wkinterfacecontroller/presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController](wkinterfacecontroller/dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderControllerWithOutputURL:preset:options:completion:](wkinterfacecontroller/presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [dismissAudioRecorderController](wkinterfacecontroller/dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.
