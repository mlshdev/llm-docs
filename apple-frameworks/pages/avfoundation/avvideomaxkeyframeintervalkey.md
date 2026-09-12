> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideomaxkeyframeintervalkey](https://developer.apple.com/documentation/avfoundation/avvideomaxkeyframeintervalkey)

# AVVideoMaxKeyFrameIntervalKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key to access the maximum interval between keyframes.

## Declaration

```swift
let AVVideoMaxKeyFrameIntervalKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of `NSNumber`. A value of `1` signifies keyframes only.

## See Also

### Compression

- [AVVideoCompressionPropertiesKey](avvideocompressionpropertieskey.md): A key to access the dictionary of compression properties for a video asset.
- [AVVideoDecompressionPropertiesKey](avvideodecompressionpropertieskey.md): The key that indicates the video decompression properties to pass to the video decoder.
- [AVVideoAverageBitRateKey](avvideoaveragebitratekey.md): A key to access the average bit rate—as bits per second—used in compressing video.
- [AVVideoQualityKey](avvideoqualitykey.md): A key to set the JPEG compression quality of the video.
- [AVVideoMaxKeyFrameIntervalDurationKey](avvideomaxkeyframeintervaldurationkey.md): A key to access the maximum interval duration between keyframes.
- [AVVideoAllowFrameReorderingKey](avvideoallowframereorderingkey.md): A key to access permission to reorder frames.
- [AVVideoAppleProRAWBitDepthKey](avvideoappleprorawbitdepthkey.md): A key to access the Apple ProRAW bit depth.

# AVVideoMaxKeyFrameIntervalKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A key to access the maximum interval between keyframes.

## Declaration

```objectivec
extern NSString * const AVVideoMaxKeyFrameIntervalKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an instance of `NSNumber`. A value of `1` signifies keyframes only.

## See Also

### Compression

- [AVVideoCompressionPropertiesKey](avvideocompressionpropertieskey.md): A key to access the dictionary of compression properties for a video asset.
- [AVVideoDecompressionPropertiesKey](avvideodecompressionpropertieskey.md): The key that indicates the video decompression properties to pass to the video decoder.
- [AVVideoAverageBitRateKey](avvideoaveragebitratekey.md): A key to access the average bit rate—as bits per second—used in compressing video.
- [AVVideoQualityKey](avvideoqualitykey.md): A key to set the JPEG compression quality of the video.
- [AVVideoMaxKeyFrameIntervalDurationKey](avvideomaxkeyframeintervaldurationkey.md): A key to access the maximum interval duration between keyframes.
- [AVVideoAllowFrameReorderingKey](avvideoallowframereorderingkey.md): A key to access permission to reorder frames.
- [AVVideoAppleProRAWBitDepthKey](avvideoappleprorawbitdepthkey.md): A key to access the Apple ProRAW bit depth.
