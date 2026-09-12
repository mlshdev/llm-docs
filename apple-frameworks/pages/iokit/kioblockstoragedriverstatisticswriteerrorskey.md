> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kioblockstoragedriverstatisticswriteerrorskey](https://developer.apple.com/documentation/iokit/kioblockstoragedriverstatisticswriteerrorskey)

# kIOBlockStorageDriverStatisticsWriteErrorsKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Describes the number of write errors encountered since the block storage driver was instantiated.

## Declaration

```objectivec
#define kIOBlockStorageDriverStatisticsWriteErrorsKey
```

<a id="discussion"></a>

## Discussion

This property describes the number of write errors encountered since the block storage driver was instantiated. It is one of the statistic entries listed under the top-level kIOBlockStorageDriverStatisticsKey property table. It has an OSNumber value.
