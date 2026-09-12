> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/deliverspreviewsizedoutputbuffers](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/deliverspreviewsizedoutputbuffers)

# deliversPreviewSizedOutputBuffers (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the output is configured to deliver preview-sized buffers.

## Declaration

```swift
var deliversPreviewSizedOutputBuffers: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) produces preview-sized buffers, which are approximately the size of the screen, when its [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md) property is [true](https://developer.apple.com/documentation/swift/true). If you wish to manually set this property, you must first set [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md) to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring video capture

- [videoSettings](videosettings.md): A dictionary that contains the compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.
- [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md): Indicates whether to drop video frames if they arrive late.
- [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md): A Boolean value that indicates whether the output automatically configures the size of output buffers.
- [preparesCellularRadioForNetworkConnection](preparescellularradiofornetworkconnection.md): Indicates whether the receiver should prepare the cellular radio for imminent network activity.
- [preservesDynamicHDRMetadata](preservesdynamichdrmetadata.md): Indicates whether the receiver should preserve dynamic HDR metadata as an attachment on the output sample buffer’s underlying pixel buffer.
- [recommendedMediaTimeScaleForAssetWriter](recommendedmediatimescaleforassetwriter.md): Indicates the recommended media timescale for the video track.
- [recommendedMovieMetadata(forVideoCodecType:assetWriterOutputFileType:)](recommendedmoviemetadata%28forvideocodectype_assetwriteroutputfiletype_%29.md): Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:outputFileURL:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriter(writingTo:)](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.

# deliversPreviewSizedOutputBuffers (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the output is configured to deliver preview-sized buffers.

## Declaration

```objectivec
@property (nonatomic) BOOL deliversPreviewSizedOutputBuffers;
```

<a id="Discussion"></a>

## Discussion

[AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) produces preview-sized buffers, which are approximately the size of the screen, when its [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md) property is [true](https://developer.apple.com/documentation/swift/true). If you wish to manually set this property, you must first set [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md) to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring video capture

- [videoSettings](videosettings.md): A dictionary that contains the compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.
- [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md): Indicates whether to drop video frames if they arrive late.
- [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md): A Boolean value that indicates whether the output automatically configures the size of output buffers.
- [minFrameDuration](minframeduration.md): Deprecated. The minimum frame duration.
- [preparesCellularRadioForNetworkConnection](preparescellularradiofornetworkconnection.md): Indicates whether the receiver should prepare the cellular radio for imminent network activity.
- [preservesDynamicHDRMetadata](preservesdynamichdrmetadata.md): Indicates whether the receiver should preserve dynamic HDR metadata as an attachment on the output sample buffer’s underlying pixel buffer.
- [recommendedMediaTimeScaleForAssetWriter](recommendedmediatimescaleforassetwriter.md): Indicates the recommended media timescale for the video track.
- [recommendedMovieMetadataForVideoCodecType:assetWriterOutputFileType:](recommendedmoviemetadata%28forvideocodectype_assetwriteroutputfiletype_%29.md): Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:outputFileURL:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriterWithOutputFileType:](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.
