> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/kcemarkerkindkey](https://developer.apple.com/documentation/professional_video_applications/kcemarkerkindkey)

# kCEMarkerKindKey (Swift)

**Framework:** Professional Video Applications  
**Kind:** Global Variable  
**Availability:** ProVideo Encoder Extensions 1.0+

Specifies the kind of marker.

## Declaration

```swift
var kCEMarkerKindKey: String { get }
```

<a id="discussion"></a>

## Discussion

The [setChapters(\_:)](compressorextensionencoder/setchapters%28__%29.md) method supports only chapter markers type markers.

See the [Compressor User Guide](https://support.apple.com/guide/compressor/add-markers-cpsr0ca43996/mac) for the types of markers available.

## See Also

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEFieldOrderKey](kcefieldorderkey.md): Specifies the output scanning method.
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

# kCEMarkerKindKey (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Macro

Specifies the kind of marker.

## Declaration

```objectivec
#define kCEMarkerKindKey
```

<a id="discussion"></a>

## Discussion

The [setChapters:](compressorextensionencoder/setchapters%28__%29.md) method supports only chapter markers type markers.

See the [Compressor User Guide](https://support.apple.com/guide/compressor/add-markers-cpsr0ca43996/mac) for the types of markers available.

## See Also

### Encoder Attribute Keys

- [kCEAllowsSegmentationKey](kceallowssegmentationkey.md): Specifies whether the extension supports segmentation of the source media.
- [kCEFileExtensionKey](kcefileextensionkey.md): Specifies the extension of the output file.
- [kCEFieldOrderKey](kcefieldorderkey.md): Specifies the output scanning method.
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
