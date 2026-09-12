> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiodataoutput/audiosettings](https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/audiosettings)

# audioSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The settings used to decode or re-encode audio before it’s output.

## Declaration

```swift
var audioSettings: [String : Any]! { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a dictionary containing values for audio settings keys defined in [Audio settings](../audio-settings.md).

If the value of this property is `nil`, samples are output in their device native format.

## See Also

### Configuring audio capture

- [recommendedAudioSettingsForAssetWriter(writingTo:)](recommendedaudiosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an `AVAssetWriterInput`.
- [spatialAudioChannelLayoutTag](spatialaudiochannellayouttag.md): The audio channel layout tag of the audio sample buffers produced by the audio data output.

# audioSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The settings used to decode or re-encode audio before it’s output.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSDictionary<NSString *,id> * audioSettings;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a dictionary containing values for audio settings keys defined in [Audio settings](../audio-settings.md).

If the value of this property is `nil`, samples are output in their device native format.

## See Also

### Configuring audio capture

- [recommendedAudioSettingsForAssetWriterWithOutputFileType:](recommendedaudiosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an `AVAssetWriterInput`.
- [spatialAudioChannelLayoutTag](spatialaudiochannellayouttag.md): The audio channel layout tag of the audio sample buffers produced by the audio data output.
