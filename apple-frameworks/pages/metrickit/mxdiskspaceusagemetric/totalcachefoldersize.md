> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskspaceusagemetric/totalcachefoldersize](https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totalcachefoldersize)

# totalCacheFolderSize (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total size of your application’s cache folder.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```swift
var totalCacheFolderSize: Measurement<UnitInformationStorage> { get }
```

<a id="discussion"></a>

## Discussion

The value of this metric represents total size of [cachesDirectory](../../foundation/url/cachesdirectory.md).

Placing files in the appropriate directories, such as the [cachesDirectory](../../foundation/url/cachesdirectory.md) and [temporaryDirectory](../../foundation/url/temporarydirectory.md), allows the system to manage and purge content when necessary, ensuring optimal disk space utilization and a better experience (see [File System Basics](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html)).

## See Also

### Reading file sizes

- [totalBinaryFileSize](totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCloneSize](totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.
- [totalDataFileSize](totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.

# totalCacheFolderSize (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total size of your application’s cache folder.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalCacheFolderSize;
```

<a id="discussion"></a>

## Discussion

The value of this metric represents total size of [cachesDirectory](../../foundation/url/cachesdirectory.md).

Placing files in the appropriate directories, such as the [cachesDirectory](../../foundation/url/cachesdirectory.md) and [temporaryDirectory](../../foundation/url/temporarydirectory.md), allows the system to manage and purge content when necessary, ensuring optimal disk space utilization and a better experience (see [File System Basics](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html)).

## See Also

### Reading file sizes

- [totalBinaryFileSize](totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCloneSize](totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.
- [totalDataFileSize](totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.
