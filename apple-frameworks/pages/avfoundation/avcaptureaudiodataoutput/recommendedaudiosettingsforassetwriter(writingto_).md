> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiodataoutput/recommendedaudiosettingsforassetwriter(writingto:)](https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutput/recommendedaudiosettingsforassetwriter(writingto:))

# recommendedAudioSettingsForAssetWriter(writingTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Specifies the recommended settings for use with an `AVAssetWriterInput`.

## Declaration

```swift
func recommendedAudioSettingsForAssetWriter(writingTo outputFileType: AVFileType) -> [String : Any]?
```

## Parameters

- `outputFileType`: Specifies the UTI of the file type to be written. See `File Format UTIs` for the defined UTIs.

<a id="return-value"></a>

## Return Value

A fully populated dictionary of keys and values that are compatible with [AVAssetWriter](../avassetwriter.md).

<a id="Discussion"></a>

## Discussion

The value of this property is an `NSDictionary` containing values for compression settings keys defined in [Audio settings](../audio-settings.md). This dictionary is suitable for use as the [assetWriterInputWithMediaType:outputSettings:](../avassetwriterinput/assetwriterinputwithmediatype_outputsettings_.md) method’s `outputSettings` parameter when creating an [AVAssetWriterInputPixelBufferAdaptor](../avassetwriterinputpixelbufferadaptor.md); for example,

```objc
[AVAssetWriterInput assetWriterInputWithMediaType:AVMediaTypeAudio outputSettings:outputSettings sourceFormatHint:hint];
```

The dictionary returned contains all necessary keys and values needed to create an [AVAssetWriter](../avassetwriter.md) instance; see the [init(mediaType:outputSettings:)](../avassetwriterinput/init%28mediatype_outputsettings_%29.md) method for a more in depth discussion. For QuickTime movie and ISO files, the recommended audio settings will always produce output comparable to that of [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md).

The dictionary of settings is dependent on the current configuration of the receiver’s [AVCaptureSession](../avcapturesession.md) and its inputs. The settings dictionary may change if the session’s configuration changes. As such, you should configure your session first, then query the recommended audio settings.

## See Also

### Configuring audio capture

- [audioSettings](audiosettings.md): The settings used to decode or re-encode audio before it’s output.
- [spatialAudioChannelLayoutTag](spatialaudiochannellayouttag.md): The audio channel layout tag of the audio sample buffers produced by the audio data output.

# recommendedAudioSettingsForAssetWriterWithOutputFileType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Specifies the recommended settings for use with an `AVAssetWriterInput`.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) recommendedAudioSettingsForAssetWriterWithOutputFileType:(AVFileType) outputFileType;
```

## Parameters

- `outputFileType`: Specifies the UTI of the file type to be written. See `File Format UTIs` for the defined UTIs.

<a id="return-value"></a>

## Return Value

A fully populated dictionary of keys and values that are compatible with [AVAssetWriter](../avassetwriter.md).

<a id="Discussion"></a>

## Discussion

The value of this property is an `NSDictionary` containing values for compression settings keys defined in [Audio settings](../audio-settings.md). This dictionary is suitable for use as the [assetWriterInputWithMediaType:outputSettings:](../avassetwriterinput/assetwriterinputwithmediatype_outputsettings_.md) method’s `outputSettings` parameter when creating an [AVAssetWriterInputPixelBufferAdaptor](../avassetwriterinputpixelbufferadaptor.md); for example,

```objc
[AVAssetWriterInput assetWriterInputWithMediaType:AVMediaTypeAudio outputSettings:outputSettings sourceFormatHint:hint];
```

The dictionary returned contains all necessary keys and values needed to create an [AVAssetWriter](../avassetwriter.md) instance; see the [initWithMediaType:outputSettings:](../avassetwriterinput/init%28mediatype_outputsettings_%29.md) method for a more in depth discussion. For QuickTime movie and ISO files, the recommended audio settings will always produce output comparable to that of [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md).

The dictionary of settings is dependent on the current configuration of the receiver’s [AVCaptureSession](../avcapturesession.md) and its inputs. The settings dictionary may change if the session’s configuration changes. As such, you should configure your session first, then query the recommended audio settings.

## See Also

### Configuring audio capture

- [audioSettings](audiosettings.md): The settings used to decode or re-encode audio before it’s output.
- [spatialAudioChannelLayoutTag](spatialaudiochannellayouttag.md): The audio channel layout tag of the audio sample buffers produced by the audio data output.
