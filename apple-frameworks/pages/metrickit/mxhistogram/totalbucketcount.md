> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxhistogram/totalbucketcount](https://developer.apple.com/documentation/metrickit/mxhistogram/totalbucketcount)

# totalBucketCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

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
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

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
