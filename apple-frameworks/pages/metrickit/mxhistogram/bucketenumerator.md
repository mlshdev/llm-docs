> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxhistogram/bucketenumerator

# bucketEnumerator (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

An enumerator for the buckets containing the data in the histogram.

> Use [buckets](../histogram/buckets.md) instead.

## Declaration

```swift
var bucketEnumerator: NSEnumerator { get }
```

## See Also

### Reading the buckets

- [totalBucketCount](totalbucketcount.md): Deprecated. The total number of buckets in the histogram.
- [MXHistogramBucket](../mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.

# bucketEnumerator (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

An enumerator for the buckets containing the data in the histogram.

> Use [buckets](../histogram/buckets.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSEnumerator<MXHistogramBucket<NSUnit *> *> * bucketEnumerator;
```

## See Also

### Reading the buckets

- [totalBucketCount](totalbucketcount.md): Deprecated. The total number of buckets in the histogram.
- [MXHistogramBucket](../mxhistogrambucket.md): Deprecated. An object representing a bucket of data in a histogram.
