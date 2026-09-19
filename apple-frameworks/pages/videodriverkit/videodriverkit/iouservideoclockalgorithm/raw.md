> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideoclockalgorithm/raw

# Raw

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

When this value for the clock algorithm is specified, the Host will not apply any filtering to the time stamps returned from `GetCurrentZeroTimeStamp()`, and the values will be used as-is.

## Declaration

```objectivec
Raw
```

## See Also

### Clock algorithms

- [SimpleIIR](simpleiir.md): Beta. When this value for the clock algorithm is specified, the Host applies a simple IIR filter to the time stamp stream.
- [TwelvePtMovingWindowAverage](twelveptmovingwindowaverage.md): Beta. This clock algorithm uses a 12-point moving window average to filter the time stamps returned from `GetCurrentZeroTimestamp()`.
