> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceformat/systemrecommendedexposurebiasrange](https://developer.apple.com/documentation/avfoundation/avcapturedeviceformat/systemrecommendedexposurebiasrange)

# systemRecommendedExposureBiasRange

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The system’s recommended exposure bias range for this device format.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVExposureBiasRange * systemRecommendedExposureBiasRange;
```

<a id="Discussion"></a>

## Discussion

Use this value to create a slider in your app’s user interface that controls a device’s exposure bias within a system-recommended range. When a recommendation isn’t available, this property returns `nil`.

> **Note**

>  The framework uses this value to define the range of an [AVCaptureSystemExposureBiasSlider](../avcapturesystemexposurebiasslider.md) control.

## See Also

### Determining exposure support

- [AVExposureBiasRange](../avexposurebiasrange.md): An object that expresses an inclusive range of supported exposure bias values, in EV units.
- [minISO](../avcapturedevice/format/miniso.md): A floating-point number that indicates the minimum supported exposure ISO value.
- [maxISO](../avcapturedevice/format/maxiso.md): A floating-point number that indicates the maximum supported exposure ISO value.
- [minExposureDuration](../avcapturedevice/format/minexposureduration.md): A time value that indicates the minimum supported exposure duration.
- [maxExposureDuration](../avcapturedevice/format/maxexposureduration.md): A time value that indicates the maximum supported exposure duration.
