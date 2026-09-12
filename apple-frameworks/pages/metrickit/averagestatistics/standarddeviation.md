> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/averagestatistics/standarddeviation](https://developer.apple.com/documentation/metrickit/averagestatistics/standarddeviation)

# standardDeviation

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The standard deviation of the distribution of values used to calculate the average.

## Declaration

```swift
let standardDeviation: Double?
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

<a id="discussion"></a>

## Discussion

This value is `nil` when the standard deviation is not available.

## See Also

### Statistics

- [average](average.md): The average measurement value.
- [count](count.md): The number of samples used to calculate the average.
