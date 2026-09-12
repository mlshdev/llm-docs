> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskspaceusagemetric/totalbinaryfilecount](https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totalbinaryfilecount)

# totalBinaryFileCount (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total number of your app’s binary files.

> Use [TotalFileCountMetric](../totalfilecountmetric.md) instead.

## Declaration

```swift
var totalBinaryFileCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Binary files include the application’s executables, frameworks, and other constant files that are generated during the build process.

## See Also

### Reading file counts

- [totalDataFileCount](totaldatafilecount.md): Deprecated. The total number of data files in your app’s container(s).

# totalBinaryFileCount (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total number of your app’s binary files.

> Use [TotalFileCountMetric](../totalfilecountmetric.md) instead.

## Declaration

```objectivec
@property (readonly) NSInteger totalBinaryFileCount;
```

<a id="discussion"></a>

## Discussion

Binary files include the application’s executables, frameworks, and other constant files that are generated during the build process.

## See Also

### Reading file counts

- [totalDataFileCount](totaldatafilecount.md): Deprecated. The total number of data files in your app’s container(s).
