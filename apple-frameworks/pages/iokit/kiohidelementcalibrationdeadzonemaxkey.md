> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiohidelementcalibrationdeadzonemaxkey

# kIOHIDElementCalibrationDeadZoneMaxKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The maximum bounds near the midpoint of a logical value in which the value is ignored.

## Declaration

```objectivec
#define kIOHIDElementCalibrationDeadZoneMaxKey
```

<a id="discussion"></a>

## Discussion

The dead zone property is used to allow for slight differences in the idle value returned by an element.
