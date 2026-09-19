> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxaverage/samplecount

# sampleCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of samples used to calculate the average.

> Use [count](../averagestatistics/count.md) instead.

## Declaration

```swift
var sampleCount: Int { get }
```

## See Also

### Reading the data

- [averageMeasurement](averagemeasurement.md): Deprecated. The value of the average.
- [standardDeviation](standarddeviation.md): Deprecated. The standard deviation of the distribution of values used to calculate the average.

# sampleCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The number of samples used to calculate the average.

> Use [count](../averagestatistics/count.md) instead.

## Declaration

```objectivec
@property (readonly) NSInteger sampleCount;
```

## See Also

### Reading the data

- [averageMeasurement](averagemeasurement.md): Deprecated. The value of the average.
- [standardDeviation](standarddeviation.md): Deprecated. The standard deviation of the distribution of values used to calculate the average.
