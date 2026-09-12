> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogramquery/result](https://developer.apple.com/documentation/healthkit/hkelectrocardiogramquery/result)

# HKElectrocardiogramQuery.Result

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS · watchOS 7.0+

Partial results for an electrocardiogram query.

## Declaration

```swift
enum Result
```

<a id="overview"></a>

## Overview

The query returns a [HKElectrocardiogramQuery.Result.measurement(\_:)](result/measurement%28__%29.md) result for each voltage measurement, followed by a [HKElectrocardiogramQuery.Result.done](result/done.md) result.

## Topics

### Results

- [HKElectrocardiogramQuery.Result.measurement(\_:)](result/measurement%28__%29.md): A single voltage measurement.
- [HKElectrocardiogramQuery.Result.done](result/done.md): The query has finished returning voltage measurements.
- [HKElectrocardiogramQuery.Result.error(\_:)](result/error%28__%29.md): An error occurred while accessing the voltage measurements.

## See Also

### Accessing the Results

- [init(electrocardiogram:dataHandler:)](init%28electrocardiogram_datahandler_%29.md): Creates a new electrocardiogram query object.
