> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kcefieldorderkey](https://developer.apple.com/documentation/professional_video_applications/kcefieldorderkey)

# kCEFieldOrderKey (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** ProVideo Encoder Extensions 1.0+

Specifies the output scanning method.

## Declaration

```swift
var kCEFieldOrderKey: String { get }
```

<a id="discussion"></a>

## Discussion

The value of this key can be 0 (progressive), 1 (top-field), or 2 (bottom-field).

## See Also

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEColorSpaceKey](kcecolorspacekey.md): Specifies the color space supported in the output file.
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

# kCEFieldOrderKey (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

Specifies the output scanning method.

## Declaration

```objectivec
#define kCEFieldOrderKey
```

<a id="discussion"></a>

## Discussion

The value of this key can be 0 (progressive), 1 (top-field), or 2 (bottom-field).

## See Also

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEColorSpaceKey](kcecolorspacekey.md): Specifies the color space supported in the output file.
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
