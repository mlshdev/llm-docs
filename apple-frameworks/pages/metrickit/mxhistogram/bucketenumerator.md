> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxhistogram/bucketenumerator](https://developer.apple.com/documentation/metrickit/mxhistogram/bucketenumerator)

# bucketEnumerator (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

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
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

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
