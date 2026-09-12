> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/maxexposureduration](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/maxexposureduration)

# maxExposureDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A time value that indicates the maximum supported exposure duration.

## Declaration

```swift
var maxExposureDuration: CMTime { get }
```

## See Also

### Determining exposure support

- [systemRecommendedExposureBiasRange](systemrecommendedexposurebiasrange.md): The system’s recommended exposure bias range for this device format.
- [minISO](miniso.md): A floating-point number that indicates the minimum supported exposure ISO value.
- [maxISO](maxiso.md): A floating-point number that indicates the maximum supported exposure ISO value.
- [minExposureDuration](minexposureduration.md): A time value that indicates the minimum supported exposure duration.

# maxExposureDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A time value that indicates the maximum supported exposure duration.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime maxExposureDuration;
```

## See Also

### Determining exposure support

- [systemRecommendedExposureBiasRange](../../avcapturedeviceformat/systemrecommendedexposurebiasrange.md): The system’s recommended exposure bias range for this device format.
- [AVExposureBiasRange](../../avexposurebiasrange.md): An object that expresses an inclusive range of supported exposure bias values, in EV units.
- [minISO](miniso.md): A floating-point number that indicates the minimum supported exposure ISO value.
- [maxISO](maxiso.md): A floating-point number that indicates the maximum supported exposure ISO value.
- [minExposureDuration](minexposureduration.md): A time value that indicates the minimum supported exposure duration.
