> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/recommendedmoviemetadata(forvideocodectype:assetwriteroutputfiletype:)](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/recommendedmoviemetadata(forvideocodectype:assetwriteroutputfiletype:))

# recommendedMovieMetadata(forVideoCodecType:assetWriterOutputFileType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.

## Declaration

```swift
func recommendedMovieMetadata(forVideoCodecType videoCodecType: AVVideoCodecType, assetWriterOutputFileType outputFileType: AVFileType) -> [AVMetadataItem]?
```

## Parameters

- `videoCodecType`: The desired [AVVideoCodecKey](../avvideocodeckey.md) to be used for compression (see [Video settings](../video-settings.md)).
- `outputFileType`: Specifies the UTI of the file type to be written (see [AVFileType](../avfiletype.md)).

<a id="return-value"></a>

## Return Value

A fully populated array of [AVMetadataItem](../avmetadataitem.md) objects compatible with [AVAssetWriter](../avassetwriter.md).

<a id="discussion"></a>

## Discussion

The value of this property is an array of [AVMetadataItem](../avmetadataitem.md) objects representing the collection of top-level metadata to be written in each output file. This array is suitable to use as the [metadata](../avassetwriter/metadata.md) property before you have called [startWriting()](../avassetwriter/startwriting%28%29.md). For more details see [startWriting()](../avassetwriter/startwriting%28%29.md).

The `videoCodecType` string you provide must be present in [availableVideoCodecTypesForAssetWriter(writingTo:)](availablevideocodectypesforassetwriter%28writingto_%29.md) array, or an `NSInvalidArgumentException` is thrown.

For clients writing files using a ProRes Raw codec type, white balance must be locked (call [setWhiteBalanceModeLocked(with:completionHandler:)](../avcapturedevice/setwhitebalancemodelocked%28with_completionhandler_%29.md)) before querying this property, or an `NSIvalidArgumentException` is thrown.

> **Note**

> The array of metadata is dependent on the current configuration of the receiver’s [AVCaptureSession](../avcapturesession.md) and its inputs. The array may change when the session’s configuration changes. As such, you should configure and start your session first, then query this method.

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
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:outputFileURL:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriter(writingTo:)](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.

# recommendedMovieMetadataForVideoCodecType:assetWriterOutputFileType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.

## Declaration

```objectivec
- (NSArray<AVMetadataItem *> *) recommendedMovieMetadataForVideoCodecType:(AVVideoCodecType) videoCodecType assetWriterOutputFileType:(AVFileType) outputFileType;
```

## Parameters

- `videoCodecType`: The desired [AVVideoCodecKey](../avvideocodeckey.md) to be used for compression (see [Video settings](../video-settings.md)).
- `outputFileType`: Specifies the UTI of the file type to be written (see [AVFileType](../avfiletype.md)).

<a id="return-value"></a>

## Return Value

A fully populated array of [AVMetadataItem](../avmetadataitem.md) objects compatible with [AVAssetWriter](../avassetwriter.md).

<a id="discussion"></a>

## Discussion

The value of this property is an array of [AVMetadataItem](../avmetadataitem.md) objects representing the collection of top-level metadata to be written in each output file. This array is suitable to use as the [metadata](../avassetwriter/metadata.md) property before you have called [startWriting](../avassetwriter/startwriting%28%29.md). For more details see [startWriting](../avassetwriter/startwriting%28%29.md).

The `videoCodecType` string you provide must be present in [availableVideoCodecTypesForAssetWriterWithOutputFileType:](availablevideocodectypesforassetwriter%28writingto_%29.md) array, or an `NSInvalidArgumentException` is thrown.

For clients writing files using a ProRes Raw codec type, white balance must be locked (call [setWhiteBalanceModeLockedWithDeviceWhiteBalanceGains:completionHandler:](../avcapturedevice/setwhitebalancemodelocked%28with_completionhandler_%29.md)) before querying this property, or an `NSIvalidArgumentException` is thrown.

> **Note**

> The array of metadata is dependent on the current configuration of the receiver’s [AVCaptureSession](../avcapturesession.md) and its inputs. The array may change when the session’s configuration changes. As such, you should configure and start your session first, then query this method.

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
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:outputFileURL:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriterWithOutputFileType:](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.
