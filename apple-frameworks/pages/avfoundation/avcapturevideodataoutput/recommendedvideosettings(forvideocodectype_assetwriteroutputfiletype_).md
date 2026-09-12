> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:)](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:))

# recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.

## Declaration

```swift
func recommendedVideoSettings(forVideoCodecType videoCodecType: AVVideoCodecType, assetWriterOutputFileType outputFileType: AVFileType) -> [String : Any]?
```

## Parameters

- `videoCodecType`: The video codec type to write.
- `outputFileType`: The Uniform Type Identifier of the file type to write. See `File Format UTIs` for supported types.

<a id="return-value"></a>

## Return Value

A fully populated dictionary of keys and values that are compatible with [AVAssetWriter](../avassetwriter.md).

<a id="Discussion"></a>

## Discussion

This dictionary contains keys and values described in [Video settings](../video-settings.md) and is suitable for use when creating an [AVAssetWriterInput](../avassetwriterinput.md) with the [init(mediaType:outputSettings:)](../avassetwriterinput/init%28mediatype_outputsettings_%29.md) initializer.

For QuickTime movie and ISO file types, the recommended video settings produce output comparable to that of [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md).

Note that the dictionary of settings is dependent on the current configuration of the output’s [AVCaptureSession](../avcapturesession.md) and its inputs. The settings dictionary may change if the session’s configuration changes. As such, configure your session first, then query the recommended video settings.

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
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:outputFileURL:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriter(writingTo:)](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.

# recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) recommendedVideoSettingsForVideoCodecType:(AVVideoCodecType) videoCodecType assetWriterOutputFileType:(AVFileType) outputFileType;
```

## Parameters

- `videoCodecType`: The video codec type to write.
- `outputFileType`: The Uniform Type Identifier of the file type to write. See `File Format UTIs` for supported types.

<a id="return-value"></a>

## Return Value

A fully populated dictionary of keys and values that are compatible with [AVAssetWriter](../avassetwriter.md).

<a id="Discussion"></a>

## Discussion

This dictionary contains keys and values described in [Video settings](../video-settings.md) and is suitable for use when creating an [AVAssetWriterInput](../avassetwriterinput.md) with the [initWithMediaType:outputSettings:](../avassetwriterinput/init%28mediatype_outputsettings_%29.md) initializer.

For QuickTime movie and ISO file types, the recommended video settings produce output comparable to that of [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md).

Note that the dictionary of settings is dependent on the current configuration of the output’s [AVCaptureSession](../avcapturesession.md) and its inputs. The settings dictionary may change if the session’s configuration changes. As such, configure your session first, then query the recommended video settings.

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
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:outputFileURL:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriterWithOutputFileType:](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.
