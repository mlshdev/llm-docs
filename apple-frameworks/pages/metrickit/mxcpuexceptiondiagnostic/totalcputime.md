> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxcpuexceptiondiagnostic/totalcputime

# totalCPUTime (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

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
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total CPU time used during the exception.

> Use [totalCPUTime](../cpuexceptiondiagnostic/totalcputime.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitDuration *> * totalCPUTime;
```

## See Also

### Viewing app CPU time

- [totalSampledTime](totalsampledtime.md): Deprecated. The total time the app was sampled during the exception.
