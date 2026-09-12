> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm)

# IOUserVideoClockAlgorithm

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 27.0+

Clock smoothing algorithm selectors.

## Declaration

```objectivec
enum IOUserVideoClockAlgorithm : uint32_t;
```

<a id="overview"></a>

## Overview

These are the valid values for [IOUserVideoClockAlgorithm](iouservideoclockalgorithm.md).

## Topics

### Clock algorithms

- [Raw](iouservideoclockalgorithm/raw.md): When this value for the clock algorithm is specified, the Host will not apply any filtering to the time stamps returned from `GetCurrentZeroTimeStamp()`, and the values will be used as-is.
- [SimpleIIR](iouservideoclockalgorithm/simpleiir.md): When this value for the clock algorithm is specified, the Host applies a simple IIR filter to the time stamp stream.
- [TwelvePtMovingWindowAverage](iouservideoclockalgorithm/twelveptmovingwindowaverage.md): This clock algorithm uses a 12-point moving window average to filter the time stamps returned from `GetCurrentZeroTimestamp()`.

## See Also

### Working with clock device behavior

- [SetClockAlgorithm](../iouservideoclockdevice/setclockalgorithm.md): Sets the algorithm for the video clock device.
- [GetClockAlgorithm](../iouservideoclockdevice/getclockalgorithm.md): Gets the clock algorithm of the clock device.
- [SetClockIsStable](../iouservideoclockdevice/setclockisstable.md): Sets the clock stability of the clock device.
- [GetClockIsStable](../iouservideoclockdevice/getclockisstable.md): Gets a Boolean value for clock stability of the clock device.
