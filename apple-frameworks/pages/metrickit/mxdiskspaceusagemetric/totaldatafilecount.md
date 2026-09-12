> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskspaceusagemetric/totaldatafilecount](https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totaldatafilecount)

# totalDataFileCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total number of data files in your app’s container(s).

> Use [TotalFileCountMetric](../totalfilecountmetric.md) instead.

## Declaration

```swift
var totalDataFileCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This includes all of the data files in your application’s container(s) (including `~/Library/Caches`). Additionally, it includes the clone files that are attributed to your application.

## See Also

### Reading file counts

- [totalBinaryFileCount](totalbinaryfilecount.md): Deprecated. The total number of your app’s binary files.

# totalDataFileCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total number of data files in your app’s container(s).

> Use [TotalFileCountMetric](../totalfilecountmetric.md) instead.

## Declaration

```objectivec
@property (readonly) NSInteger totalDataFileCount;
```

<a id="discussion"></a>

## Discussion

This includes all of the data files in your application’s container(s) (including `~/Library/Caches`). Additionally, it includes the clone files that are attributed to your application.

## See Also

### Reading file counts

- [totalBinaryFileCount](totalbinaryfilecount.md): Deprecated. The total number of your app’s binary files.
