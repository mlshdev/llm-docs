> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm/twelveptmovingwindowaverage](https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm/twelveptmovingwindowaverage)

# TwelvePtMovingWindowAverage

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+

This clock algorithm uses a 12-point moving window average to filter the time stamps returned from `GetCurrentZeroTimestamp()`.

## Declaration

```objectivec
TwelvePtMovingWindowAverage
```

## See Also

### Clock algorithms

- [Raw](raw.md): When this value for the clock algorithm is specified, the Host will not apply any filtering to the time stamps returned from `GetCurrentZeroTimeStamp()`, and the values will be used as-is.
- [SimpleIIR](simpleiir.md): When this value for the clock algorithm is specified, the Host applies a simple IIR filter to the time stamp stream.
