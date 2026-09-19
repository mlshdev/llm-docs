> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric/totalclonesize

# totalCloneSize (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

The total size of all clone files that are attributed to your app.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```swift
var totalCloneSize: Measurement<UnitInformationStorage> { get }
```

## See Also

### Reading file sizes

- [totalBinaryFileSize](totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCacheFolderSize](totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalDataFileSize](totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.

# totalCloneSize (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.2) · visionOS 26.0+ (deprecated in 27.2)

The total size of all clone files that are attributed to your app.

> Use [TotalFileSizeMetric](../totalfilesizemetric.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalCloneSize;
```

## See Also

### Reading file sizes

- [totalBinaryFileSize](totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCacheFolderSize](totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalDataFileSize](totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.
