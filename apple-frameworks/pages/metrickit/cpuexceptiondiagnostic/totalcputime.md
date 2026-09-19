> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/cpuexceptiondiagnostic/totalcputime

# totalCPUTime

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Total CPU time consumed in the scope of this CPU exception.

## Declaration

```swift
let totalCPUTime: Measurement<UnitDuration>
```

## See Also

### CPU exception details

- [totalSampledTime](totalsampledtime.md): Total time that the application was sampled for during the CPU exception.
