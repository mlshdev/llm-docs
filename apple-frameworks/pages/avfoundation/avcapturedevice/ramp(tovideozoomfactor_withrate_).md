> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/ramp(tovideozoomfactor:withrate:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/ramp(tovideozoomfactor:withrate:))

# ramp(toVideoZoomFactor:withRate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Begins a smooth transition from the current zoom factor to another.

## Declaration

```swift
func ramp(toVideoZoomFactor factor: CGFloat, withRate rate: Float)
```

## Parameters

- `factor`: The new magnification factor.
- `rate`: The rate at which to transition to the new magnification factor, specified in powers of two per second.

<a id="Discussion"></a>

## Discussion

Allowed values for `factor` range from `1.0` (full field of view) to the [videoMaxZoomFactor](format/videomaxzoomfactor.md) specified by the active capture format.

During a ramp, the zoom factor changes at an exponential rate, but this yields a visually linear transition. The `rate` parameter controls the speed of this transition independent of direction; for example, a value of `1.0` causes zoom factor to double every second if zooming in (that’s, if the specified `factor` is greater than the current [videoZoomFactor](videozoomfactor.md)) or halve every second if zooming out.

Before calling this method, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. If you don’t, calling this method raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## See Also

### Adjusting zoom

- [videoZoomFactor](videozoomfactor.md): A value that controls the cropping and enlargement of images captured by the device.
- [cancelVideoZoomRamp()](cancelvideozoomramp%28%29.md): Smoothly ends a zoom transition in progress.

# rampToVideoZoomFactor:withRate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Begins a smooth transition from the current zoom factor to another.

## Declaration

```objectivec
- (void) rampToVideoZoomFactor:(CGFloat) factor withRate:(float) rate;
```

## Parameters

- `factor`: The new magnification factor.
- `rate`: The rate at which to transition to the new magnification factor, specified in powers of two per second.

<a id="Discussion"></a>

## Discussion

Allowed values for `factor` range from `1.0` (full field of view) to the [videoMaxZoomFactor](format/videomaxzoomfactor.md) specified by the active capture format.

During a ramp, the zoom factor changes at an exponential rate, but this yields a visually linear transition. The `rate` parameter controls the speed of this transition independent of direction; for example, a value of `1.0` causes zoom factor to double every second if zooming in (that’s, if the specified `factor` is greater than the current [videoZoomFactor](videozoomfactor.md)) or halve every second if zooming out.

Before calling this method, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. If you don’t, calling this method raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## See Also

### Adjusting zoom

- [videoZoomFactor](videozoomfactor.md): A value that controls the cropping and enlargement of images captured by the device.
- [cancelVideoZoomRamp](cancelvideozoomramp%28%29.md): Smoothly ends a zoom transition in progress.
