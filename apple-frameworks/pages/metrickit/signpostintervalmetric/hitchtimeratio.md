> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/signpostintervalmetric/hitchtimeratio](https://developer.apple.com/documentation/metrickit/signpostintervalmetric/hitchtimeratio)

# hitchTimeRatio

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The ratio of the total time spent hitching to the total time spent animating during the logged intervals.

## Declaration

```swift
let hitchTimeRatio: Measurement<HitchTimeRatio>?
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)
- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

## See Also

### Additional measurements

- [averageMemory](averagememory.md): The average memory used during the logged intervals.
- [cpuTime](cputime.md): The total amount of CPU time used during the logged intervals.
- [logicalWrites](logicalwrites.md): The total amount of data written to disk or other long term storage during the logged intervals.
- [totalHitchTime](totalhitchtime.md): The total time spent hitching during the logged intervals.
- [totalAnimationTime](totalanimationtime.md): The total time spent animating during the logged intervals.
