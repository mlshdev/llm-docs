> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/miniso](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/miniso)

# minISO (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A floating-point number that indicates the minimum supported exposure ISO value.

## Declaration

```swift
var minISO: Float { get }
```

## See Also

### Determining exposure support

- [systemRecommendedExposureBiasRange](systemrecommendedexposurebiasrange.md): The system’s recommended exposure bias range for this device format.
- [maxISO](maxiso.md): A floating-point number that indicates the maximum supported exposure ISO value.
- [minExposureDuration](minexposureduration.md): A time value that indicates the minimum supported exposure duration.
- [maxExposureDuration](maxexposureduration.md): A time value that indicates the maximum supported exposure duration.

# minISO (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A floating-point number that indicates the minimum supported exposure ISO value.

## Declaration

```objectivec
@property (nonatomic, readonly) float minISO;
```

## See Also

### Determining exposure support

- [systemRecommendedExposureBiasRange](../../avcapturedeviceformat/systemrecommendedexposurebiasrange.md): The system’s recommended exposure bias range for this device format.
- [AVExposureBiasRange](../../avexposurebiasrange.md): An object that expresses an inclusive range of supported exposure bias values, in EV units.
- [maxISO](maxiso.md): A floating-point number that indicates the maximum supported exposure ISO value.
- [minExposureDuration](minexposureduration.md): A time value that indicates the minimum supported exposure duration.
- [maxExposureDuration](maxexposureduration.md): A time value that indicates the maximum supported exposure duration.
