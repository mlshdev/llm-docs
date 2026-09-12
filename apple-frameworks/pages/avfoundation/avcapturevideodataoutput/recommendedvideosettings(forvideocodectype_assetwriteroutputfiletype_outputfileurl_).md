> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:outputfileurl:)](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:outputfileurl:))

# recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:outputFileURL:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.

## Declaration

```swift
func recommendedVideoSettings(forVideoCodecType videoCodecType: AVVideoCodecType, assetWriterOutputFileType outputFileType: AVFileType, outputFileURL: URL?) -> [String : Any]?
```

## Parameters

- `videoCodecType`: The type of video codec to use.
- `outputFileType`: The type of output file to write.
- `outputFileURL`: The URL of the output file to write.

<a id="return-value"></a>

## Return Value

A fully populated output settings dictionary suitable for configuring an asset writer input.

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
- [recommendedVideoSettingsForAssetWriter(writingTo:)](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.

# recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:outputFileURL: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) recommendedVideoSettingsForVideoCodecType:(AVVideoCodecType) videoCodecType assetWriterOutputFileType:(AVFileType) outputFileType outputFileURL:(NSURL *) outputFileURL;
```

## Parameters

- `videoCodecType`: The type of video codec to use.
- `outputFileType`: The type of output file to write.
- `outputFileURL`: The URL of the output file to write.

<a id="return-value"></a>

## Return Value

A fully populated output settings dictionary suitable for configuring an asset writer input.

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
- [recommendedVideoSettingsForAssetWriterWithOutputFileType:](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.
