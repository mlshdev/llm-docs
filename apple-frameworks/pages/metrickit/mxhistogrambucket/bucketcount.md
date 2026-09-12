> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxhistogrambucket/bucketcount](https://developer.apple.com/documentation/metrickit/mxhistogrambucket/bucketcount)

# bucketCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An integer representing the number of samples in the bucket.

> Use [count](../histogram/bucket/count.md) instead.

## Declaration

```swift
var bucketCount: Int { get }
```

## See Also

### Reading the Data

- [bucketStart](bucketstart.md): Deprecated. The value of the starting measurement for the bucket.
- [bucketEnd](bucketend.md): Deprecated. The value of the ending measurement for the bucket.

# bucketCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An integer representing the number of samples in the bucket.

> Use [count](../histogram/bucket/count.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger bucketCount;
```

## See Also

### Reading the Data

- [bucketStart](bucketstart.md): Deprecated. The value of the starting measurement for the bucket.
- [bucketEnd](bucketend.md): Deprecated. The value of the ending measurement for the bucket.
