> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettingsforassetwriter(writingto:)](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettingsforassetwriter(writingto:))

# recommendedVideoSettingsForAssetWriter(writingTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Specifies the recommended settings for use with an AVAssetWriterInput.

## Declaration

```swift
func recommendedVideoSettingsForAssetWriter(writingTo outputFileType: AVFileType) -> [String : Any]?
```

## Parameters

- `outputFileType`: The Uniform Type Identifier of the file type to write. See `File Format UTIs` for supported types.

<a id="return-value"></a>

## Return Value

A fully populated dictionary of keys and values that are compatible with [AVAssetWriter](../avassetwriter.md).

<a id="Discussion"></a>

## Discussion

This dictionary contains keys and values described in [Video settings](../video-settings.md) and is suitable for use when creating an [AVAssetWriterInput](../avassetwriterinput.md) with the [init(mediaType:outputSettings:)](../avassetwriterinput/init%28mediatype_outputsettings_%29.md) initializer. For QuickTime movie and ISO file types, the recommended video settings produce output comparable to that of [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md).

Note that the dictionary of settings is dependent on the current configuration of the output’s [AVCaptureSession](../avcapturesession.md) and its inputs. The settings dictionary may change if the session’s configuration changes. As such, configure your session first, then query the recommended video settings.

> **Note**

>  This method returns appropriate settings based on the device’s default video recording codec, but that default can differ between devices. Use the [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md) method to obtain video settings appropriate for a specific codec.

## See Also

### Configuring video capture

- [videoSettings](videosettings.md): A dictionary that contains the compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.
- [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md): Indicates whether to drop video frames if they arrive late.
- [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md): A Boolean value that indicates whether the output automatically configures the size of output buffers.
- [deliversPreviewSizedOutputBuffers](deliverspreviewsizedoutputbuffers.md): A Boolean value that indicates whether the output is configured to deliver preview-sized buffers.
- [preparesCellularRadioForNetworkConnection](preparescellularradiofornetworkconnection.md): Indicates whether the receiver should prepare the cellular radio for imminent network activity.
- [preservesDynamicHDRMetadata](preservesdynamichdrmetadata.md): Indicates whether the receiver should preserve dynamic HDR metadata as an attachment on the output sample buffer’s underlying pixel buffer.
- [recommendedMediaTimeScaleForAssetWriter](recommendedmediatimescaleforassetwriter.md): Indicates the recommended media timescale for the video track.
- [recommendedMovieMetadata(forVideoCodecType:assetWriterOutputFileType:)](recommendedmoviemetadata%28forvideocodectype_assetwriteroutputfiletype_%29.md): Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:outputFileURL:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.

# recommendedVideoSettingsForAssetWriterWithOutputFileType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Specifies the recommended settings for use with an AVAssetWriterInput.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) recommendedVideoSettingsForAssetWriterWithOutputFileType:(AVFileType) outputFileType;
```

## Parameters

- `outputFileType`: The Uniform Type Identifier of the file type to write. See `File Format UTIs` for supported types.

<a id="return-value"></a>

## Return Value

A fully populated dictionary of keys and values that are compatible with [AVAssetWriter](../avassetwriter.md).

<a id="Discussion"></a>

## Discussion

This dictionary contains keys and values described in [Video settings](../video-settings.md) and is suitable for use when creating an [AVAssetWriterInput](../avassetwriterinput.md) with the [initWithMediaType:outputSettings:](../avassetwriterinput/init%28mediatype_outputsettings_%29.md) initializer. For QuickTime movie and ISO file types, the recommended video settings produce output comparable to that of [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md).

Note that the dictionary of settings is dependent on the current configuration of the output’s [AVCaptureSession](../avcapturesession.md) and its inputs. The settings dictionary may change if the session’s configuration changes. As such, configure your session first, then query the recommended video settings.

> **Note**

>  This method returns appropriate settings based on the device’s default video recording codec, but that default can differ between devices. Use the [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md) method to obtain video settings appropriate for a specific codec.

## See Also

### Configuring video capture

- [videoSettings](videosettings.md): A dictionary that contains the compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.
- [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md): Indicates whether to drop video frames if they arrive late.
- [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md): A Boolean value that indicates whether the output automatically configures the size of output buffers.
- [deliversPreviewSizedOutputBuffers](deliverspreviewsizedoutputbuffers.md): A Boolean value that indicates whether the output is configured to deliver preview-sized buffers.
- [minFrameDuration](minframeduration.md): Deprecated. The minimum frame duration.
- [preparesCellularRadioForNetworkConnection](preparescellularradiofornetworkconnection.md): Indicates whether the receiver should prepare the cellular radio for imminent network activity.
- [preservesDynamicHDRMetadata](preservesdynamichdrmetadata.md): Indicates whether the receiver should preserve dynamic HDR metadata as an attachment on the output sample buffer’s underlying pixel buffer.
- [recommendedMediaTimeScaleForAssetWriter](recommendedmediatimescaleforassetwriter.md): Indicates the recommended media timescale for the video track.
- [recommendedMovieMetadataForVideoCodecType:assetWriterOutputFileType:](recommendedmoviemetadata%28forvideocodectype_assetwriteroutputfiletype_%29.md): Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:outputFileURL:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
