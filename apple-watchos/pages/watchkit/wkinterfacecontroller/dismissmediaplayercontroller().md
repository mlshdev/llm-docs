> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/dismissmediaplayercontroller()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/dismissmediaplayercontroller())

# dismissMediaPlayerController() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the media interface controller.

## Declaration

```swift
func dismissMediaPlayerController()
```

<a id="Discussion"></a>

## Discussion

Use this method to dismiss a modal media interface controller programmatically. When you dismiss the media interface programmatically, WatchKit passes a value of [false](https://developer.apple.com/documentation/swift/false) for the `didPlayToEnd` parameter of your completion block and passes a value of `0.0` for the`endTime` parameter.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerController(with:options:completion:)](presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](../media-player-options.md): Keys indicating media playback options.
- [presentAudioRecorderController(withOutputURL:preset:options:completion:)](presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](../wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](../audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController()](dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.

# dismissMediaPlayerController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the media interface controller.

## Declaration

```objectivec
- (void) dismissMediaPlayerController;
```

<a id="Discussion"></a>

## Discussion

Use this method to dismiss a modal media interface controller programmatically. When you dismiss the media interface programmatically, WatchKit passes a value of [false](https://developer.apple.com/documentation/swift/false) for the `didPlayToEnd` parameter of your completion block and passes a value of `0.0` for the`endTime` parameter.

## See Also

### Presenting video and audio interfaces

- [presentMediaPlayerControllerWithURL:options:completion:](presentmediaplayercontroller%28with_options_completion_%29.md): Displays a modal interface for playing the specified media file.
- [Media Player Options](../media-player-options.md): Keys indicating media playback options.
- [presentAudioRecorderControllerWithOutputURL:preset:options:completion:](presentaudiorecordercontroller%28withoutputurl_preset_options_completion_%29.md): Display a standard interface for recording audio from the user’s Apple Watch.
- [WKAudioRecorderPreset](../wkaudiorecorderpreset.md): Constants indicating the quality of audio recordings.
- [Audio Recording Options](../audio-recording-options.md): Options to specify when recording audio.
- [dismissAudioRecorderController](dismissaudiorecordercontroller%28%29.md): Dismisses the audio recording interface controller.
