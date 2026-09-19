> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxhistogram/totalbucketcount

# totalBucketCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total number of buckets in the histogram.

> Use [buckets](../histogram/buckets.md) instead.

## Declaration

```swift
var totalBucketCount: Int { get }
```

## See Also

### Reading the buckets

- [bucketEnumerator](bucketenumerator.md): Deprecated. An enumerator for the buckets containing the data in the histogram.
- [MXHistogramBucket](../mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.

# totalBucketCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total number of buckets in the histogram.

> Use [buckets](../histogram/buckets.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger totalBucketCount;
```

## See Also

### Reading the buckets

- [bucketEnumerator](bucketenumerator.md): Deprecated. An enumerator for the buckets containing the data in the histogram.
- [MXHistogramBucket](../mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
