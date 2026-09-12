> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/dismissaudiorecordercontroller()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/dismissaudiorecordercontroller())

# dismissAudioRecorderController() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the audio recording interface controller.

## Declaration

```swift
func dismissAudioRecorderController()
```

<a id="Discussion"></a>

## Discussion

Use this method to interrupt media playback and dismiss a modal media interface controller. When you dismiss the recording interface programmatically, the recording controller passes a value of [false](https://developer.apple.com/documentation/swift/false) for the `didSave` parameter of your completion block.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerController(with:options:completion:)](presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](../media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController()](dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderController(withOutputURL:preset:options:completion:)](presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](../wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](../audio-recording-options.md): Options to specify when recording audio.

# dismissAudioRecorderController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the audio recording interface controller.

## Declaration

```objectivec
- (void) dismissAudioRecorderController;
```

<a id="Discussion"></a>

## Discussion

Use this method to interrupt media playback and dismiss a modal media interface controller. When you dismiss the recording interface programmatically, the recording controller passes a value of [false](https://developer.apple.com/documentation/swift/false) for the `didSave` parameter of your completion block.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerControllerWithURL:options:completion:](presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](../media-player-options.md): Keys indicating media playback options.
- [dismissMediaPlayerController](dismissmediaplayercontroller%28%29.md): Dismisses the media interface controller.
- [presentAudioRecorderControllerWithOutputURL:preset:options:completion:](presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](../wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](../audio-recording-options.md): Options to specify when recording audio.
