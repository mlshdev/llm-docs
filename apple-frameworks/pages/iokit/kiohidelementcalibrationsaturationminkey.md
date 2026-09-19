> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiohidelementcalibrationsaturationminkey

# kIOHIDElementCalibrationSaturationMinKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The mininum tolerance to be used when calibrating a logical element value.

## Declaration

```objectivec
#define kIOHIDElementCalibrationSaturationMinKey
```

<a id="discussion"></a>

## Discussion

The saturation property is used to allow for slight differences in the minimum and maximum value returned by an element.
