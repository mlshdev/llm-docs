> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm/twelveptmovingwindowaverage

# TwelvePtMovingWindowAverage

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

This clock algorithm uses a 12-point moving window average to filter the time stamps returned from `GetCurrentZeroTimestamp()`.

## Declaration

```objectivec
TwelvePtMovingWindowAverage
```

## See Also

### Clock algorithms

- [Raw](raw.md): Beta. When this value for the clock algorithm is specified, the Host will not apply any filtering to the time stamps returned from `GetCurrentZeroTimeStamp()`, and the values will be used as-is.
- [SimpleIIR](simpleiir.md): Beta. When this value for the clock algorithm is specified, the Host applies a simple IIR filter to the time stamp stream.
