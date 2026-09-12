> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxaverage/averagemeasurement](https://developer.apple.com/documentation/metrickit/mxaverage/averagemeasurement)

# averageMeasurement (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The value of the average.

> Use [average](../averagestatistics/average.md) instead.

## Declaration

```swift
var averageMeasurement: Measurement<UnitType> { get }
```

## See Also

### Reading the data

- [sampleCount](samplecount.md): Deprecated. The number of samples used to calculate the average.
- [standardDeviation](standarddeviation.md): Deprecated. The standard deviation of the distribution of values used to calculate the average.

# averageMeasurement (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The value of the average.

> Use [average](../averagestatistics/average.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnit *> * averageMeasurement;
```

## See Also

### Reading the data

- [sampleCount](samplecount.md): Deprecated. The number of samples used to calculate the average.
- [standardDeviation](standarddeviation.md): Deprecated. The standard deviation of the distribution of values used to calculate the average.
