> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcpuexceptiondiagnostic/totalcputime](https://developer.apple.com/documentation/metrickit/mxcpuexceptiondiagnostic/totalcputime)

# totalCPUTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total CPU time used during the exception.

> Use [totalCPUTime](../cpuexceptiondiagnostic/totalcputime.md) instead.

## Declaration

```swift
var totalCPUTime: Measurement<UnitDuration> { get }
```

## See Also

### Viewing app CPU time

- [totalSampledTime](totalsampledtime.md): Deprecated. The total time the app was sampled during the exception.

# totalCPUTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total CPU time used during the exception.

> Use [totalCPUTime](../cpuexceptiondiagnostic/totalcputime.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * totalCPUTime;
```

## See Also

### Viewing app CPU time

- [totalSampledTime](totalsampledtime.md): Deprecated. The total time the app was sampled during the exception.
