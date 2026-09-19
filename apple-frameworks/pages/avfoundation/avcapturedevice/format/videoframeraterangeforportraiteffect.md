> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videoframeraterangeforportraiteffect

# videoFrameRateRangeForPortraitEffect (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The range of frame rates available when Portrait Effect is active.

## Declaration

```swift
var videoFrameRateRangeForPortraitEffect: AVFrameRateRange? { get }
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited range of frame rates when Portrait Effect is active. If a device format doesn’t support Portrait Effect, the value of this property is `nil`.

## See Also

### Determining Portrait Effects support

- [isPortraitEffectSupported](isportraiteffectsupported.md): A Boolean value that indicates whether the format supports the Portrait Effect feature.
- [isPortraitEffectsMatteStillImageDeliverySupported](isportraiteffectsmattestillimagedeliverysupported.md): A Boolean indicating whether the device supports portrait matte effects in still-image capture.

# videoFrameRateRangeForPortraitEffect (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The range of frame rates available when Portrait Effect is active.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVFrameRateRange * videoFrameRateRangeForPortraitEffect;
```

<a id="Discussion"></a>

## Discussion

Devices may support a limited range of frame rates when Portrait Effect is active. If a device format doesn’t support Portrait Effect, the value of this property is `nil`.

## See Also

### Determining Portrait Effects support

- [portraitEffectSupported](isportraiteffectsupported.md): A Boolean value that indicates whether the format supports the Portrait Effect feature.
- [portraitEffectsMatteStillImageDeliverySupported](isportraiteffectsmattestillimagedeliverysupported.md): A Boolean indicating whether the device supports portrait matte effects in still-image capture.
