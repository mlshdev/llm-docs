> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kioblockstoragedriverstatisticskey](https://developer.apple.com/documentation/iokit/kioblockstoragedriverstatisticskey)

# kIOBlockStorageDriverStatisticsKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Holds a table of numeric values describing the driver's operating statistics.

## Declaration

```objectivec
#define kIOBlockStorageDriverStatisticsKey
```

<a id="discussion"></a>

## Discussion

This property holds a table of numeric values describing the driver's operating statistics. The table is an OSDictionary, where each entry describes one given statistic.
