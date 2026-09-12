> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticsquerydescriptor/options](https://developer.apple.com/documentation/healthkit/hkstatisticsquerydescriptor/options)

# options

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A list of options that define the type of statistical calculations performed and the way in which HealthKit merges data from multiple sources.

## Declaration

```swift
var options: HKStatisticsOptions
```

<a id="Discussion"></a>

## Discussion

For a list of valid options, see [HKStatisticsOptions](../hkstatisticsoptions.md).

## See Also

### Accessing Query Properties

- [predicate](predicate.md): A predicate that defines the set of data that the query uses to calculate the statistics.
