> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskspaceusagemetric/totaldatafilesize](https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totaldatafilesize)

# totalDataFileSize (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total size of disk space your app uses for storing data files.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```swift
var totalDataFileSize: Measurement<UnitInformationStorage> { get }
```

<a id="discussion"></a>

## Discussion

This includes all of the data files in your application’s container(s) (including [cachesDirectory](../../foundation/url/cachesdirectory.md)). Additionally, it includes the clone files that are attributed to your application.

## See Also

### Reading file sizes

- [totalBinaryFileSize](totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCacheFolderSize](totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalCloneSize](totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.

# totalDataFileSize (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total size of disk space your app uses for storing data files.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalDataFileSize;
```

<a id="discussion"></a>

## Discussion

This includes all of the data files in your application’s container(s) (including [cachesDirectory](../../foundation/url/cachesdirectory.md)). Additionally, it includes the clone files that are attributed to your application.

## See Also

### Reading file sizes

- [totalBinaryFileSize](totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCacheFolderSize](totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalCloneSize](totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.
