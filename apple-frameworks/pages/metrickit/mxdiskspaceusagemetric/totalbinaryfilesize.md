> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskspaceusagemetric/totalbinaryfilesize](https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totalbinaryfilesize)

# totalBinaryFileSize (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total size of disk space your app’s binary files occupy.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```swift
var totalBinaryFileSize: Measurement<UnitInformationStorage> { get }
```

<a id="discussion"></a>

## Discussion

Binary files include the application’s executables, frameworks, and other constant files that are generated during the build process.

## See Also

### Reading file sizes

- [totalCacheFolderSize](totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalCloneSize](totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.
- [totalDataFileSize](totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.

# totalBinaryFileSize (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

The total size of disk space your app’s binary files occupy.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalBinaryFileSize;
```

<a id="discussion"></a>

## Discussion

Binary files include the application’s executables, frameworks, and other constant files that are generated during the build process.

## See Also

### Reading file sizes

- [totalCacheFolderSize](totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalCloneSize](totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.
- [totalDataFileSize](totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.
