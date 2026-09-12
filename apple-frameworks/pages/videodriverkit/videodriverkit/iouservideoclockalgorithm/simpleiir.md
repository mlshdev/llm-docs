> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm/simpleiir](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm/simpleiir)

# SimpleIIR

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

When this value for the clock algorithm is specified, the Host applies a simple IIR filter to the time stamp stream.

## Declaration

```objectivec
SimpleIIR
```

<a id="discussion"></a>

## Discussion

This is the default algorithm used for devices that don’t implement `DevicePropertyClockAlgorithm`.

## See Also

### Clock algorithms

- [Raw](raw.md): When this value for the clock algorithm is specified, the Host will not apply any filtering to the time stamps returned from `GetCurrentZeroTimeStamp()`, and the values will be used as-is.
- [TwelvePtMovingWindowAverage](twelveptmovingwindowaverage.md): This clock algorithm uses a 12-point moving window average to filter the time stamps returned from `GetCurrentZeroTimestamp()`.
