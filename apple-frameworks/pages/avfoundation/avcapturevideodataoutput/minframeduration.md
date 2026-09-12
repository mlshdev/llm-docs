> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/minframeduration](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/minframeduration)

# minFrameDuration

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 5.0) · iPadOS 4.0+ (deprecated in 5.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

The minimum frame duration.

> Use the [AVCaptureConnection](../avcaptureconnection.md) class [videoMinFrameDuration](../avcaptureconnection/videominframeduration.md) property instead.

## Declaration

```objectivec
@property (nonatomic) CMTime minFrameDuration;
```

<a id="Discussion"></a>

## Discussion

This property specifies the minimum duration of each video frame produced by the video data output, placing a lower bound on the amount of time that should separate consecutive frames. This is equivalent to the inverse of the maximum frame rate. A value of [kCMTimeZero](../../coremedia/cmtime/zero.md) or [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) indicates an unlimited maximum frame rate.

The default value is [kCMTimeInvalid](../../coremedia/cmtime/invalid.md).

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
- [recommendedMovieMetadataForVideoCodecType:assetWriterOutputFileType:](recommendedmoviemetadata%28forvideocodectype_assetwriteroutputfiletype_%29.md): Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:outputFileURL:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriterWithOutputFileType:](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.
