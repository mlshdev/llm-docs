> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/preparescellularradiofornetworkconnection](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/preparescellularradiofornetworkconnection)

# preparesCellularRadioForNetworkConnection (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

Indicates whether the receiver should prepare the cellular radio for imminent network activity.

## Declaration

```swift
var preparesCellularRadioForNetworkConnection: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Apps that scan video data output buffers for information that will result in network activity (such as detecting a QRCode containing a URL) should set this property `true` to allow the cellular radio to prepare for an imminent network request. Enabling this property requires a lengthy reconfiguration of the capture render pipeline, so you should set this property to `true` before calling [startRunning()](../avcapturesession/startrunning%28%29.md).

Using this API requires your app to adopt the entitlement `com.apple.developer.avfoundation.video-data-output-prepares-cellular-radio-for-machine-readable-code-scanning`.

## See Also

### Configuring video capture

- [videoSettings](videosettings.md): A dictionary that contains the compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.
- [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md): Indicates whether to drop video frames if they arrive late.
- [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md): A Boolean value that indicates whether the output automatically configures the size of output buffers.
- [deliversPreviewSizedOutputBuffers](deliverspreviewsizedoutputbuffers.md): A Boolean value that indicates whether the output is configured to deliver preview-sized buffers.
- [preservesDynamicHDRMetadata](preservesdynamichdrmetadata.md): Indicates whether the receiver should preserve dynamic HDR metadata as an attachment on the output sample buffer’s underlying pixel buffer.
- [recommendedMediaTimeScaleForAssetWriter](recommendedmediatimescaleforassetwriter.md): Indicates the recommended media timescale for the video track.
- [recommendedMovieMetadata(forVideoCodecType:assetWriterOutputFileType:)](recommendedmoviemetadata%28forvideocodectype_assetwriteroutputfiletype_%29.md): Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:outputFileURL:)](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriter(writingTo:)](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.

# preparesCellularRadioForNetworkConnection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

Indicates whether the receiver should prepare the cellular radio for imminent network activity.

## Declaration

```objectivec
@property BOOL preparesCellularRadioForNetworkConnection;
```

<a id="discussion"></a>

## Discussion

Apps that scan video data output buffers for information that will result in network activity (such as detecting a QRCode containing a URL) should set this property `true` to allow the cellular radio to prepare for an imminent network request. Enabling this property requires a lengthy reconfiguration of the capture render pipeline, so you should set this property to `true` before calling [startRunning](../avcapturesession/startrunning%28%29.md).

Using this API requires your app to adopt the entitlement `com.apple.developer.avfoundation.video-data-output-prepares-cellular-radio-for-machine-readable-code-scanning`.

## See Also

### Configuring video capture

- [videoSettings](videosettings.md): A dictionary that contains the compression settings for the output.
- [Video settings](../video-settings.md): Configure video processing settings using standard key and value constants.
- [alwaysDiscardsLateVideoFrames](alwaysdiscardslatevideoframes.md): Indicates whether to drop video frames if they arrive late.
- [automaticallyConfiguresOutputBufferDimensions](automaticallyconfiguresoutputbufferdimensions.md): A Boolean value that indicates whether the output automatically configures the size of output buffers.
- [deliversPreviewSizedOutputBuffers](deliverspreviewsizedoutputbuffers.md): A Boolean value that indicates whether the output is configured to deliver preview-sized buffers.
- [minFrameDuration](minframeduration.md): Deprecated. The minimum frame duration.
- [preservesDynamicHDRMetadata](preservesdynamichdrmetadata.md): Indicates whether the receiver should preserve dynamic HDR metadata as an attachment on the output sample buffer’s underlying pixel buffer.
- [recommendedMediaTimeScaleForAssetWriter](recommendedmediatimescaleforassetwriter.md): Indicates the recommended media timescale for the video track.
- [recommendedMovieMetadataForVideoCodecType:assetWriterOutputFileType:](recommendedmoviemetadata%28forvideocodectype_assetwriteroutputfiletype_%29.md): Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_%29.md): Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.
- [recommendedVideoSettingsForVideoCodecType:assetWriterOutputFileType:outputFileURL:](recommendedvideosettings%28forvideocodectype_assetwriteroutputfiletype_outputfileurl_%29.md): Returns a dictionary of recommended output settings for writing the specified code, file type, and output URL.
- [recommendedVideoSettingsForAssetWriterWithOutputFileType:](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.
