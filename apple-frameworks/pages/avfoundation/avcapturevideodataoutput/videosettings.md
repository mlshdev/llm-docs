> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideodataoutput/videosettings](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/videosettings)

# videoSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A dictionary that contains the compression settings for the output.

## Declaration

```swift
var videoSettings: [String : Any]! { get set }
```

<a id="Discussion"></a>

## Discussion

To receive samples in their device-native format, set this value to an empty dictionary:

**Swift**

```swift
let myVideoOutput = AVCaptureVideoDataOutput()
myVideoOutput.videoSettings = [:] // Receive samples in device format.
```

**Objective-C**

```objc
AVCaptureVideoDataOutput* myVideoOutput;
myVideoOutput.videoSettings = @{ }; // Receive samples in device format.
```

To receive samples in a default uncompressed format, set this value to `nil`. Then you can query this value to receive a dictionary of the settings the session uses.

In iOS versions prior to iOS 16, the only key supported is [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md). In iOS 16 and later, the supported keys include the following:

- For compressed video output, only use [AVVideoPixelAspectRatioKey](../avvideopixelaspectratiokey.md), [AVVideoCleanApertureKey](../avvideocleanaperturekey.md), [AVVideoScalingModeKey](../avvideoscalingmodekey.md), [AVVideoColorPropertiesKey](../avvideocolorpropertieskey.md), and [AVVideoAllowWideColorKey](../avvideoallowwidecolorkey.md).
- For uncompressed video output, you can also use [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md), [kCVPixelBufferWidthKey](../../corevideo/kcvpixelbufferwidthkey.md), and [kCVPixelBufferHeightKey](../../corevideo/kcvpixelbufferheightkey.md), in addition to the compressed video output keys.

You can use [availableVideoPixelFormatTypes](availablevideopixelformattypes.md) and [availableVideoCodecTypes](availablevideocodectypes.md) to get a list of the supported pixel formats and video codecs, respectively. The width and height need to match the [videoOrientation](../avcaptureconnection/videoorientation.md) specified in the output’s [AVCaptureConnection](../avcaptureconnection.md), otherwise the system throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md). The aspect ratio of the width and height also need to match the aspect ratio of the source’s [activeFormat](../avcapturedevice/activeformat.md), corrected for the connection’s [videoOrientation](../avcaptureconnection/videoorientation.md), otherwise the system throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md). If the width or height exceeds the source’s `activeFormat`‘s width or height, the system throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md). Don’t change the width and height if [deliversPreviewSizedOutputBuffers](deliverspreviewsizedoutputbuffers.md) is [true](https://developer.apple.com/documentation/swift/true), otherwise the system throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## See Also

### Configuring video capture

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
- [recommendedVideoSettingsForAssetWriter(writingTo:)](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.

# videoSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

A dictionary that contains the compression settings for the output.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSDictionary<NSString *,id> * videoSettings;
```

<a id="Discussion"></a>

## Discussion

To receive samples in their device-native format, set this value to an empty dictionary:

**Swift**

```swift
let myVideoOutput = AVCaptureVideoDataOutput()
myVideoOutput.videoSettings = [:] // Receive samples in device format.
```

**Objective-C**

```objc
AVCaptureVideoDataOutput* myVideoOutput;
myVideoOutput.videoSettings = @{ }; // Receive samples in device format.
```

To receive samples in a default uncompressed format, set this value to `nil`. Then you can query this value to receive a dictionary of the settings the session uses.

In iOS versions prior to iOS 16, the only key supported is [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md). In iOS 16 and later, the supported keys include the following:

- For compressed video output, only use [AVVideoPixelAspectRatioKey](../avvideopixelaspectratiokey.md), [AVVideoCleanApertureKey](../avvideocleanaperturekey.md), [AVVideoScalingModeKey](../avvideoscalingmodekey.md), [AVVideoColorPropertiesKey](../avvideocolorpropertieskey.md), and [AVVideoAllowWideColorKey](../avvideoallowwidecolorkey.md).
- For uncompressed video output, you can also use [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md), [kCVPixelBufferWidthKey](../../corevideo/kcvpixelbufferwidthkey.md), and [kCVPixelBufferHeightKey](../../corevideo/kcvpixelbufferheightkey.md), in addition to the compressed video output keys.

You can use [availableVideoPixelFormatTypes](availablevideopixelformattypes.md) and [availableVideoCodecTypes](availablevideocodectypes.md) to get a list of the supported pixel formats and video codecs, respectively. The width and height need to match the [videoOrientation](../avcaptureconnection/videoorientation.md) specified in the output’s [AVCaptureConnection](../avcaptureconnection.md), otherwise the system throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md). The aspect ratio of the width and height also need to match the aspect ratio of the source’s [activeFormat](../avcapturedevice/activeformat.md), corrected for the connection’s [videoOrientation](../avcaptureconnection/videoorientation.md), otherwise the system throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md). If the width or height exceeds the source’s `activeFormat`‘s width or height, the system throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md). Don’t change the width and height if [deliversPreviewSizedOutputBuffers](deliverspreviewsizedoutputbuffers.md) is [true](https://developer.apple.com/documentation/swift/true), otherwise the system throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md).

## See Also

### Configuring video capture

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
- [recommendedVideoSettingsForAssetWriterWithOutputFileType:](recommendedvideosettingsforassetwriter%28writingto_%29.md): Specifies the recommended settings for use with an AVAssetWriterInput.
