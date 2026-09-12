> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohidelementcalibrationdeadzoneminkey](https://developer.apple.com/documentation/iokit/kiohidelementcalibrationdeadzoneminkey)

# kIOHIDElementCalibrationDeadZoneMinKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The minimum bounds near the midpoint of a logical value in which the value is ignored.

## Declaration

```objectivec
#define kIOHIDElementCalibrationDeadZoneMinKey
```

<a id="discussion"></a>

## Discussion

The dead zone property is used to allow for slight differences in the idle value returned by an element.
