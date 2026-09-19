> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquerydescriptor/result

# HKStatisticsCollectionQueryDescriptor.Result

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A collection of results.

## Declaration

```swift
struct Result
```

<a id="overview"></a>

## Overview

The first set of results reflects the current state of the statistics collection. Additional results represent updates to the collection. When possible, HealthKit populates the `updateStatistics` property to indicate which statistics have changed.

## Topics

### Accessing Statistical Data

- [statisticsCollection](result/statisticscollection.md): A collection of statistics, representing the results calculated over separate time intervals.
- [updatedStatistics](result/updatedstatistics.md): A collection of statistics that have changed.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
