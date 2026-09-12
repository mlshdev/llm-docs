> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kioblockstoragedriverstatisticslatentwritetimekey](https://developer.apple.com/documentation/iokit/kioblockstoragedriverstatisticslatentwritetimekey)

# kIOBlockStorageDriverStatisticsLatentWriteTimeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Describes the number of nanoseconds of latency during writes since the block storage driver was instantiated.

## Declaration

```objectivec
#define kIOBlockStorageDriverStatisticsLatentWriteTimeKey
```

<a id="discussion"></a>

## Discussion

This property describes the number of nanoseconds of latency during writes since the block storage driver was instantiated. It is one of the statistic entries listed under the top-level kIOBlockStorageDriverStatisticsKey property table. It has an OSNumber value.
