> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxhistogrambucket/bucketstart

# bucketStart (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The value of the starting measurement for the bucket.

> Use [lowerBound](../histogram/bucket/lowerbound.md) instead.

## Declaration

```swift
var bucketStart: Measurement<UnitType> { get }
```

## See Also

### Reading the Data

- [bucketEnd](bucketend.md): Deprecated. The value of the ending measurement for the bucket.
- [bucketCount](bucketcount.md): Deprecated. An integer representing the number of samples in the bucket.

# bucketStart (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The value of the starting measurement for the bucket.

> Use [lowerBound](../histogram/bucket/lowerbound.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnit *> * bucketStart;
```

## See Also

### Reading the Data

- [bucketEnd](bucketend.md): Deprecated. The value of the ending measurement for the bucket.
- [bucketCount](bucketcount.md): Deprecated. An integer representing the number of samples in the bucket.
