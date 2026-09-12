> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kcecolorspacekey](https://developer.apple.com/documentation/professional_video_applications/kcecolorspacekey)

# kCEColorSpaceKey (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** ProVideo Encoder Extensions 1.0+

Specifies the color space supported in the output file.

## Declaration

```swift
var kCEColorSpaceKey: String { get }
```

<a id="discussion"></a>

## Discussion

The value can be one of the integers representing a color space from [eCEColorSpace](ececolorspace.md). If you don’t provide this key, the output file uses the same color space as the source file.

## See Also

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEFieldOrderKey](kcefieldorderkey.md): Specifies the output scanning method.
- [kCEAudioChannelLayoutKey](kceaudiochannellayoutkey.md): Specifies the audio channel layout for the output file.
- [kCEVideoEnabledKey](kcevideoenabledkey.md): Specifies whether video is enabled in the output file.
- [kCEAudioEnabledKey](kceaudioenabledkey.md): Specifies whether audio is enabled in the output file.
- [kCEAudioSampleFloatKey](kceaudiosamplefloatkey.md): Specifies whether audio samples are in floating-point value.
- [kCEAudioSampleRateKey](kceaudiosampleratekey.md): Specifies the sample rate of audio in the output file.
- [kCEAudioSampleSizeKey](kceaudiosamplesizekey.md): Specifies the number of bits per audio sample in the output file.
- [kCEWidthKey](kcewidthkey.md): Specifies the width of the encoded video.
- [kCEHeightKey](kceheightkey.md): Specifies the height of the encoded video.
- [kCEAutoRateKey](kceautoratekey.md): Specifies whether the frame rate is set to automatic in the encoder settings.
- [kCEAutoWidthKey](kceautowidthkey.md): Specifies whether the output file width is set to automatic in the encoder settings.
- [kCEAutoHeightKey](kceautoheightkey.md): Specifies whether the output file height is set to automatic in the encoder settings.
- [kCEPixelAspectKey](kcepixelaspectkey.md): Specifies the aspect ratio of the output frame pixels.

# kCEColorSpaceKey (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

Specifies the color space supported in the output file.

## Declaration

```objectivec
#define kCEColorSpaceKey
```

<a id="discussion"></a>

## Discussion

The value can be one of the integers representing a color space from [eCEColorSpace](ececolorspace.md). If you don’t provide this key, the output file uses the same color space as the source file.

## See Also

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEFieldOrderKey](kcefieldorderkey.md): Specifies the output scanning method.
- [kCEAudioChannelLayoutKey](kceaudiochannellayoutkey.md): Specifies the audio channel layout for the output file.
- [kCEVideoEnabledKey](kcevideoenabledkey.md): Specifies whether video is enabled in the output file.
- [kCEAudioEnabledKey](kceaudioenabledkey.md): Specifies whether audio is enabled in the output file.
- [kCEAudioSampleFloatKey](kceaudiosamplefloatkey.md): Specifies whether audio samples are in floating-point value.
- [kCEAudioSampleRateKey](kceaudiosampleratekey.md): Specifies the sample rate of audio in the output file.
- [kCEAudioSampleSizeKey](kceaudiosamplesizekey.md): Specifies the number of bits per audio sample in the output file.
- [kCEWidthKey](kcewidthkey.md): Specifies the width of the encoded video.
- [kCEHeightKey](kceheightkey.md): Specifies the height of the encoded video.
- [kCEAutoRateKey](kceautoratekey.md): Specifies whether the frame rate is set to automatic in the encoder settings.
- [kCEAutoWidthKey](kceautowidthkey.md): Specifies whether the output file width is set to automatic in the encoder settings.
- [kCEAutoHeightKey](kceautoheightkey.md): Specifies whether the output file height is set to automatic in the encoder settings.
- [kCEPixelAspectKey](kcepixelaspectkey.md): Specifies the aspect ratio of the output frame pixels.
