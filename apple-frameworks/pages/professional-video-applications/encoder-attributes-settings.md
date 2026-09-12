> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional-video-applications/encoder-attributes-settings](https://developer.apple.com/documentation/professional-video-applications/encoder-attributes-settings)

# Encoder Attributes Settings (Swift)

**Framework:** Professional Video Applications  
**Kind:** API Collection

Encoder attributes specify the audio and video configuration values for the output format.

<a id="overview"></a>

## Overview

You specify the encoder attributes as the keys and values in the dictionary the [settingsAttributes()](../professional_video_applications/compressorextensionsettings/settingsattributes%28%29.md) method returns. The available encoder attribute keys are listed below.

## Topics

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](../professional_video_applications/kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](../professional_video_applications/kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEFieldOrderKey](../professional_video_applications/kcefieldorderkey.md): Specifies the output scanning method.
- [kCEColorSpaceKey](../professional_video_applications/kcecolorspacekey.md): Specifies the color space supported in the output file.
- [kCEAudioChannelLayoutKey](../professional_video_applications/kceaudiochannellayoutkey.md): Specifies the audio channel layout for the output file.
- [kCEVideoEnabledKey](../professional_video_applications/kcevideoenabledkey.md): Specifies whether video is enabled in the output file.
- [kCEAudioEnabledKey](../professional_video_applications/kceaudioenabledkey.md): Specifies whether audio is enabled in the output file.
- [kCEAudioSampleFloatKey](../professional_video_applications/kceaudiosamplefloatkey.md): Specifies whether audio samples are in floating-point value.
- [kCEAudioSampleRateKey](../professional_video_applications/kceaudiosampleratekey.md): Specifies the sample rate of audio in the output file.
- [kCEAudioSampleSizeKey](../professional_video_applications/kceaudiosamplesizekey.md): Specifies the number of bits per audio sample in the output file.
- [kCEWidthKey](../professional_video_applications/kcewidthkey.md): Specifies the width of the encoded video.
- [kCEHeightKey](../professional_video_applications/kceheightkey.md): Specifies the height of the encoded video.
- [kCEAutoRateKey](../professional_video_applications/kceautoratekey.md): Specifies whether the frame rate is set to automatic in the encoder settings.
- [kCEAutoWidthKey](../professional_video_applications/kceautowidthkey.md): Specifies whether the output file width is set to automatic in the encoder settings.
- [kCEAutoHeightKey](../professional_video_applications/kceautoheightkey.md): Specifies whether the output file height is set to automatic in the encoder settings.
- [kCEPixelAspectKey](../professional_video_applications/kcepixelaspectkey.md): Specifies the aspect ratio of the output frame pixels.
- [kCENumeratorKey](../professional_video_applications/kcenumeratorkey.md): Specifies the numerator of a ratio-based output frame rate.
- [kCEDenominatorKey](../professional_video_applications/kcedenominatorkey.md): Specifies the denominator of a ratio-based output frame rate.
- [kCEFrameRateKey](../professional_video_applications/kceframeratekey.md): Specifies the frame rate of the output file.
- [kCEMarkerURLKey](../professional_video_applications/kcemarkerurlkey.md): Specifies the chapter marker URL when the marker image comes from a file stored on the web server.
- [kCEMarkerTimeKey](../professional_video_applications/kcemarkertimekey.md): Specifies the chapter marker start time, in seconds.
- [kCEMarkerNameKey](../professional_video_applications/kcemarkernamekey.md): Specifies the chapter marker name.
- [kCEMarkerKindKey](../professional_video_applications/kcemarkerkindkey.md): Specifies the kind of marker.
- [kCEMarkerImageSourceTimeKey](../professional_video_applications/kcemarkerimagesourcetimekey.md): Specifies a source file chapter marker’s start time, in seconds.
- [kCEMarkerImageSourceFrameNumberKey](../professional_video_applications/kcemarkerimagesourceframenumberkey.md): Specifies a source file chapter marker’s start time, as a frame number.
- [kCEMarkerImageFileURLKey](../professional_video_applications/kcemarkerimagefileurlkey.md): Specifies the marker’s file URL when the marker image comes from a local file.
- [kCEMarkerFrameNumberKey](../professional_video_applications/kcemarkerframenumberkey.md): Specifies the output chapter marker’s start time, as a frame number.
- [kCEMarkerDurationKey](../professional_video_applications/kcemarkerdurationkey.md): Specifies the duration of the chapter marker, as number of frames.

# Encoder Attributes Settings (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** API Collection

Encoder attributes specify the audio and video configuration values for the output format.

<a id="overview"></a>

## Overview

You specify the encoder attributes as the keys and values in the dictionary the [settingsAttributes](../professional_video_applications/compressorextensionsettings/settingsattributes%28%29.md) method returns. The available encoder attribute keys are listed below.

## Topics

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](../professional_video_applications/kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](../professional_video_applications/kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEFieldOrderKey](../professional_video_applications/kcefieldorderkey.md): Specifies the output scanning method.
- [kCEColorSpaceKey](../professional_video_applications/kcecolorspacekey.md): Specifies the color space supported in the output file.
- [kCEAudioChannelLayoutKey](../professional_video_applications/kceaudiochannellayoutkey.md): Specifies the audio channel layout for the output file.
- [kCEVideoEnabledKey](../professional_video_applications/kcevideoenabledkey.md): Specifies whether video is enabled in the output file.
- [kCEAudioEnabledKey](../professional_video_applications/kceaudioenabledkey.md): Specifies whether audio is enabled in the output file.
- [kCEAudioSampleFloatKey](../professional_video_applications/kceaudiosamplefloatkey.md): Specifies whether audio samples are in floating-point value.
- [kCEAudioSampleRateKey](../professional_video_applications/kceaudiosampleratekey.md): Specifies the sample rate of audio in the output file.
- [kCEAudioSampleSizeKey](../professional_video_applications/kceaudiosamplesizekey.md): Specifies the number of bits per audio sample in the output file.
- [kCEWidthKey](../professional_video_applications/kcewidthkey.md): Specifies the width of the encoded video.
- [kCEHeightKey](../professional_video_applications/kceheightkey.md): Specifies the height of the encoded video.
- [kCEAutoRateKey](../professional_video_applications/kceautoratekey.md): Specifies whether the frame rate is set to automatic in the encoder settings.
- [kCEAutoWidthKey](../professional_video_applications/kceautowidthkey.md): Specifies whether the output file width is set to automatic in the encoder settings.
- [kCEAutoHeightKey](../professional_video_applications/kceautoheightkey.md): Specifies whether the output file height is set to automatic in the encoder settings.
- [kCEPixelAspectKey](../professional_video_applications/kcepixelaspectkey.md): Specifies the aspect ratio of the output frame pixels.
- [kCENumeratorKey](../professional_video_applications/kcenumeratorkey.md): Specifies the numerator of a ratio-based output frame rate.
- [kCEDenominatorKey](../professional_video_applications/kcedenominatorkey.md): Specifies the denominator of a ratio-based output frame rate.
- [kCEFrameRateKey](../professional_video_applications/kceframeratekey.md): Specifies the frame rate of the output file.
- [kCEMarkerURLKey](../professional_video_applications/kcemarkerurlkey.md): Specifies the chapter marker URL when the marker image comes from a file stored on the web server.
- [kCEMarkerTimeKey](../professional_video_applications/kcemarkertimekey.md): Specifies the chapter marker start time, in seconds.
- [kCEMarkerNameKey](../professional_video_applications/kcemarkernamekey.md): Specifies the chapter marker name.
- [kCEMarkerKindKey](../professional_video_applications/kcemarkerkindkey.md): Specifies the kind of marker.
- [kCEMarkerImageSourceTimeKey](../professional_video_applications/kcemarkerimagesourcetimekey.md): Specifies a source file chapter marker’s start time, in seconds.
- [kCEMarkerImageSourceFrameNumberKey](../professional_video_applications/kcemarkerimagesourceframenumberkey.md): Specifies a source file chapter marker’s start time, as a frame number.
- [kCEMarkerImageFileURLKey](../professional_video_applications/kcemarkerimagefileurlkey.md): Specifies the marker’s file URL when the marker image comes from a local file.
- [kCEMarkerFrameNumberKey](../professional_video_applications/kcemarkerframenumberkey.md): Specifies the output chapter marker’s start time, as a frame number.
- [kCEMarkerDurationKey](../professional_video_applications/kcemarkerdurationkey.md): Specifies the duration of the chapter marker, as number of frames.
