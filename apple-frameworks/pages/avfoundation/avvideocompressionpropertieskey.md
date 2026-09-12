> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompressionpropertieskey](https://developer.apple.com/documentation/avfoundation/avvideocompressionpropertieskey)

# AVVideoCompressionPropertiesKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key to access the dictionary of compression properties for a video asset.

## Declaration

```swift
let AVVideoCompressionPropertiesKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of [NSDictionary](../foundation/nsdictionary.md). Add entries to this dictionary to manually change bit rate, B-frame delivery, I-frame interval, and codec quality. Querying the [supportedOutputSettingsKeys(for:)](avcapturemoviefileoutput/supportedoutputsettingskeys%28for_%29.md) method reveals the keys supported for the current release and configuration.

## See Also

### Compression

- [AVVideoDecompressionPropertiesKey](avvideodecompressionpropertieskey.md): The key that indicates the video decompression properties to pass to the video decoder.
- [AVVideoAverageBitRateKey](avvideoaveragebitratekey.md): A key to access the average bit rate—as bits per second—used in compressing video.
- [AVVideoQualityKey](avvideoqualitykey.md): A key to set the JPEG compression quality of the video.
- [AVVideoMaxKeyFrameIntervalKey](avvideomaxkeyframeintervalkey.md): A key to access the maximum interval between keyframes.
- [AVVideoMaxKeyFrameIntervalDurationKey](avvideomaxkeyframeintervaldurationkey.md): A key to access the maximum interval duration between keyframes.
- [AVVideoAllowFrameReorderingKey](avvideoallowframereorderingkey.md): A key to access permission to reorder frames.
- [AVVideoAppleProRAWBitDepthKey](avvideoappleprorawbitdepthkey.md): A key to access the Apple ProRAW bit depth.

# AVVideoCompressionPropertiesKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key to access the dictionary of compression properties for a video asset.

## Declaration

```objectivec
extern NSString * const AVVideoCompressionPropertiesKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of [NSDictionary](../foundation/nsdictionary.md). Add entries to this dictionary to manually change bit rate, B-frame delivery, I-frame interval, and codec quality. Querying the [supportedOutputSettingsKeysForConnection:](avcapturemoviefileoutput/supportedoutputsettingskeys%28for_%29.md) method reveals the keys supported for the current release and configuration.

## See Also

### Compression

- [AVVideoDecompressionPropertiesKey](avvideodecompressionpropertieskey.md): The key that indicates the video decompression properties to pass to the video decoder.
- [AVVideoAverageBitRateKey](avvideoaveragebitratekey.md): A key to access the average bit rate—as bits per second—used in compressing video.
- [AVVideoQualityKey](avvideoqualitykey.md): A key to set the JPEG compression quality of the video.
- [AVVideoMaxKeyFrameIntervalKey](avvideomaxkeyframeintervalkey.md): A key to access the maximum interval between keyframes.
- [AVVideoMaxKeyFrameIntervalDurationKey](avvideomaxkeyframeintervaldurationkey.md): A key to access the maximum interval duration between keyframes.
- [AVVideoAllowFrameReorderingKey](avvideoallowframereorderingkey.md): A key to access permission to reorder frames.
- [AVVideoAppleProRAWBitDepthKey](avvideoappleprorawbitdepthkey.md): A key to access the Apple ProRAW bit depth.
