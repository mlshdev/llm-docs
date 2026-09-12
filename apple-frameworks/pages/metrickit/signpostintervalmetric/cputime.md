> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/signpostintervalmetric/cputime](https://developer.apple.com/documentation/metrickit/signpostintervalmetric/cputime)

# cpuTime

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The total amount of CPU time used during the logged intervals.

## Declaration

```swift
let cpuTime: Measurement<UnitDuration>?
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

## See Also

### Additional measurements

- [averageMemory](averagememory.md): The average memory used during the logged intervals.
- [logicalWrites](logicalwrites.md): The total amount of data written to disk or other long term storage during the logged intervals.
- [hitchTimeRatio](hitchtimeratio.md): The ratio of the total time spent hitching to the total time spent animating during the logged intervals.
- [totalHitchTime](totalhitchtime.md): The total time spent hitching during the logged intervals.
- [totalAnimationTime](totalanimationtime.md): The total time spent animating during the logged intervals.
