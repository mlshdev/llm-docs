> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiohidelementcalibrationgranularitykey

# kIOHIDElementCalibrationGranularityKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The scale or level of detail returned in a calibrated element value.

## Declaration

```objectivec
#define kIOHIDElementCalibrationGranularityKey
```

<a id="discussion"></a>

## Discussion

Values are rounded off such that if granularity=0.1, values after calibration are 0, 0.1, 0.2, 0.3, etc.
