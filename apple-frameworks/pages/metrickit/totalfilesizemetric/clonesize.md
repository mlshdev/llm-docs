> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/totalfilesizemetric/clonesize

# cloneSize

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The total size of all clone files that are attributed to your app.

## Declaration

```swift
let cloneSize: Measurement<UnitInformationStorage>
```

## See Also

### Measurements

- [binaryFileSize](binaryfilesize.md): The total size of disk space your app’s binary files occupy.
- [cacheFolderSize](cachefoldersize.md): The total size of your application’s cache folder.
- [dataFileSize](datafilesize.md): The total size of disk space your app uses for storing data files.
