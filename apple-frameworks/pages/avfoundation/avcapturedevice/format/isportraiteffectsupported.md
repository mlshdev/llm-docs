> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/isportraiteffectsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/isportraiteffectsupported)

# isPortraitEffectSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports the Portrait Effect feature.

## Declaration

```swift
var isPortraitEffectSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Enabling a Portrait Effect applies a shallow depth-of-field effect to objects in the background. See the [isPortraitEffectEnabled](../isportraiteffectenabled.md) property of [AVCaptureDevice](../../avcapturedevice.md) for more information.

## See Also

### Determining Portrait Effects support

- [isPortraitEffectsMatteStillImageDeliverySupported](isportraiteffectsmattestillimagedeliverysupported.md): A Boolean indicating whether the device supports portrait matte effects in still-image capture.
- [videoFrameRateRangeForPortraitEffect](videoframeraterangeforportraiteffect.md): The range of frame rates available when Portrait Effect is active.

# portraitEffectSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether the format supports the Portrait Effect feature.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPortraitEffectSupported) BOOL portraitEffectSupported;
```

<a id="Discussion"></a>

## Discussion

Enabling a Portrait Effect applies a shallow depth-of-field effect to objects in the background. See the [portraitEffectEnabled](../isportraiteffectenabled.md) property of [AVCaptureDevice](../../avcapturedevice.md) for more information.

## See Also

### Determining Portrait Effects support

- [portraitEffectsMatteStillImageDeliverySupported](isportraiteffectsmattestillimagedeliverysupported.md): A Boolean indicating whether the device supports portrait matte effects in still-image capture.
- [videoFrameRateRangeForPortraitEffect](videoframeraterangeforportraiteffect.md): The range of frame rates available when Portrait Effect is active.
