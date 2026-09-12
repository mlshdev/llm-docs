> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohidelementcalibrationsaturationmaxkey](https://developer.apple.com/documentation/iokit/kiohidelementcalibrationsaturationmaxkey)

# kIOHIDElementCalibrationSaturationMaxKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The maximum tolerance to be used when calibrating a logical element value.

## Declaration

```objectivec
#define kIOHIDElementCalibrationSaturationMaxKey
```

<a id="discussion"></a>

## Discussion

The saturation property is used to allow for slight differences in the minimum and maximum value returned by an element.
