> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskspaceusagemetric](https://developer.apple.com/documentation/metrickit/mxdiskspaceusagemetric)

# MXDiskSpaceUsageMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

An object representing metrics about your app’s disk space usage.

> Use [MetricResult](metricresult.md), and read the [TotalFileCountMetric](totalfilecountmetric.md), [TotalFileSizeMetric](totalfilesizemetric.md), or [TotalDiskSpaceCapacityMetric](totaldiskspacecapacitymetric.md) cases instead.

## Declaration

```swift
class MXDiskSpaceUsageMetric
```

<a id="Overview"></a>

## Overview

This object provides insights on how your app utilizes disk space and related storage technologies, such as cache folders and clone files.

Disk space is a limited resource shared by many apps. Optimize your app’s disk space usage to provide a better customer experience. People can inspect your app’s disk footprint in Settings, and excessive usage may force them to remove your app to install new apps or perform system updates.

> **Note**

> MetricKit reports MXDiskSpaceUsageMetric on devices running iOS 26 or later.

<a id="Disk-Space-Measurements"></a>

### Disk Space Measurements

Modern file systems such APFS provide enhanced features to maximize space utilization, such as file cloning. The disk space usage metric reports size accurately without double counting the cloned files.

For example, if you copy a file using [copyItem(at:to:)](../foundation/filemanager/copyitem%28at_to_%29.md), the file system shows two separate files. However, due to the file system optimization, the copied file shares the same storage space with the original file. If you manually calculate the size of all your files, your calculation may also include the copied file, resulting in a larger size than expected.

<a id="Storing-App-Specific-Files"></a>

### Storing App-Specific Files

Use the [totalCacheFolderSize](mxdiskspaceusagemetric/totalcachefoldersize.md) property of MXDiskSpaceUsageMetric to gain insights into how the operating system manages your app’s cached content in the field. Placing files in the appropriate directories, such as the [cachesDirectory](../foundation/url/cachesdirectory.md) and [temporaryDirectory](../foundation/url/temporarydirectory.md) (see [File System Basics](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html)), allows the system to intelligently manage and purge content when necessary, ensuring optimal disk space utilization and a better user experience.

## Topics

### Reading file counts

- [totalBinaryFileCount](mxdiskspaceusagemetric/totalbinaryfilecount.md): Deprecated. The total number of your app’s binary files.
- [totalDataFileCount](mxdiskspaceusagemetric/totaldatafilecount.md): Deprecated. The total number of data files in your app’s container(s).

### Reading file sizes

- [totalBinaryFileSize](mxdiskspaceusagemetric/totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCacheFolderSize](mxdiskspaceusagemetric/totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalCloneSize](mxdiskspaceusagemetric/totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.
- [totalDataFileSize](mxdiskspaceusagemetric/totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.

### Reading disk capacity and space

- [totalDiskSpaceCapacity](mxdiskspaceusagemetric/totaldiskspacecapacity.md): Deprecated. The total disk space capacity of the current device.
- [totalDiskSpaceUsedSize](mxdiskspaceusagemetric/totaldiskspaceusedsize.md): Deprecated. The total amount of used disk storage on the current device.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Disk metrics

- [MXDiskIOMetric](mxdiskiometric.md): Deprecated. An object representing metrics about disk usage.

# MXDiskSpaceUsageMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 26.0+ (deprecated in 27.0) · iPadOS 26.0+ (deprecated in 27.0) · Mac Catalyst 26.0+ (deprecated in 27.0) · macOS 26.0+ (deprecated in 27.0) · visionOS 26.0+ (deprecated in 27.0)

An object representing metrics about your app’s disk space usage.

> Use [MetricResult](metricresult.md), and read the [TotalFileCountMetric](totalfilecountmetric.md), [TotalFileSizeMetric](totalfilesizemetric.md), or [TotalDiskSpaceCapacityMetric](totaldiskspacecapacitymetric.md) cases instead.

## Declaration

```objectivec
@interface MXDiskSpaceUsageMetric : MXMetric
```

<a id="Overview"></a>

## Overview

This object provides insights on how your app utilizes disk space and related storage technologies, such as cache folders and clone files.

Disk space is a limited resource shared by many apps. Optimize your app’s disk space usage to provide a better customer experience. People can inspect your app’s disk footprint in Settings, and excessive usage may force them to remove your app to install new apps or perform system updates.

> **Note**

> MetricKit reports MXDiskSpaceUsageMetric on devices running iOS 26 or later.

<a id="Disk-Space-Measurements"></a>

### Disk Space Measurements

Modern file systems such APFS provide enhanced features to maximize space utilization, such as file cloning. The disk space usage metric reports size accurately without double counting the cloned files.

For example, if you copy a file using [copyItemAtURL:toURL:error:](../foundation/filemanager/copyitem%28at_to_%29.md), the file system shows two separate files. However, due to the file system optimization, the copied file shares the same storage space with the original file. If you manually calculate the size of all your files, your calculation may also include the copied file, resulting in a larger size than expected.

<a id="Storing-App-Specific-Files"></a>

### Storing App-Specific Files

Use the [totalCacheFolderSize](mxdiskspaceusagemetric/totalcachefoldersize.md) property of MXDiskSpaceUsageMetric to gain insights into how the operating system manages your app’s cached content in the field. Placing files in the appropriate directories, such as the [cachesDirectory](../foundation/url/cachesdirectory.md) and [temporaryDirectory](../foundation/url/temporarydirectory.md) (see [File System Basics](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html)), allows the system to intelligently manage and purge content when necessary, ensuring optimal disk space utilization and a better user experience.

## Topics

### Reading file counts

- [totalBinaryFileCount](mxdiskspaceusagemetric/totalbinaryfilecount.md): Deprecated. The total number of your app’s binary files.
- [totalDataFileCount](mxdiskspaceusagemetric/totaldatafilecount.md): Deprecated. The total number of data files in your app’s container(s).

### Reading file sizes

- [totalBinaryFileSize](mxdiskspaceusagemetric/totalbinaryfilesize.md): Deprecated. The total size of disk space your app’s binary files occupy.
- [totalCacheFolderSize](mxdiskspaceusagemetric/totalcachefoldersize.md): Deprecated. The total size of your application’s cache folder.
- [totalCloneSize](mxdiskspaceusagemetric/totalclonesize.md): Deprecated. The total size of all clone files that are attributed to your app.
- [totalDataFileSize](mxdiskspaceusagemetric/totaldatafilesize.md): Deprecated. The total size of disk space your app uses for storing data files.

### Reading disk capacity and space

- [totalDiskSpaceCapacity](mxdiskspaceusagemetric/totaldiskspacecapacity.md): Deprecated. The total disk space capacity of the current device.
- [totalDiskSpaceUsedSize](mxdiskspaceusagemetric/totaldiskspaceusedsize.md): Deprecated. The total amount of used disk storage on the current device.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Disk metrics

- [MXDiskIOMetric](mxdiskiometric.md): Deprecated. An object representing metrics about disk usage.
