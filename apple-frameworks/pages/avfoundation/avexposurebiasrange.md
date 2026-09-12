> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexposurebiasrange](https://developer.apple.com/documentation/avfoundation/avexposurebiasrange)

# AVExposureBiasRange

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

An object that expresses an inclusive range of supported exposure bias values, in EV units.

## Declaration

```objectivec
@interface AVExposureBiasRange : NSObject
```

<a id="overview"></a>

## Overview

A [AVCaptureSystemExposureBiasSlider](avcapturesystemexposurebiasslider.md) defines its range using this type.

## Topics

### Inspecting the exposure bias range

- [minExposureBias](avexposurebiasrange/minexposurebias.md): The minimum exposure bias in EV units that this range supports.
- [maxExposureBias](avexposurebiasrange/maxexposurebias.md): The maximum exposure bias in EV units that this range supports.
- [containsExposureBias:](avexposurebiasrange/containsexposurebias_.md): Determines whether the range contains the specified exposure bias.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Determining exposure support

- [systemRecommendedExposureBiasRange](avcapturedeviceformat/systemrecommendedexposurebiasrange.md): The system’s recommended exposure bias range for this device format.
- [minISO](avcapturedevice/format/miniso.md): A floating-point number that indicates the minimum supported exposure ISO value.
- [maxISO](avcapturedevice/format/maxiso.md): A floating-point number that indicates the maximum supported exposure ISO value.
- [minExposureDuration](avcapturedevice/format/minexposureduration.md): A time value that indicates the minimum supported exposure duration.
- [maxExposureDuration](avcapturedevice/format/maxexposureduration.md): A time value that indicates the maximum supported exposure duration.
