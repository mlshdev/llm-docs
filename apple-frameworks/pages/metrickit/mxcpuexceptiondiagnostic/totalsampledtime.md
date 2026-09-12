> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcpuexceptiondiagnostic/totalsampledtime](https://developer.apple.com/documentation/metrickit/mxcpuexceptiondiagnostic/totalsampledtime)

# totalSampledTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time the app was sampled during the exception.

> Use [totalSampledTime](../cpuexceptiondiagnostic/totalsampledtime.md) instead.

## Declaration

```swift
var totalSampledTime: Measurement<UnitDuration> { get }
```

## See Also

### Viewing app CPU time

- [totalCPUTime](totalcputime.md): Deprecated. The total CPU time used during the exception.

# totalSampledTime (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total time the app was sampled during the exception.

> Use [totalSampledTime](../cpuexceptiondiagnostic/totalsampledtime.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * totalSampledTime;
```

## See Also

### Viewing app CPU time

- [totalCPUTime](totalcputime.md): Deprecated. The total CPU time used during the exception.
