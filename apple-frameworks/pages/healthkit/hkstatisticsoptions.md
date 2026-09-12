> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticsoptions](https://developer.apple.com/documentation/healthkit/hkstatisticsoptions)

# HKStatisticsOptions (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Options for specifying the statistic to calculate.

## Declaration

```swift
struct HKStatisticsOptions
```

<a id="overview"></a>

## Overview

You cannot combine a discrete option with a cumulative option. You can, however, combine multiple discrete options together to perform multiple calculations. You can also combine the [separateBySource](hkstatisticsoptions/separatebysource.md) option with any of the other options.

<a id="Swift"></a>

## Swift

```swift
let cumulativeActiveEnergyBurned = HKQuantityType(.activeEnergyBurned)
 
let discreteHeartRate = HKQuantityType(.heartRate)
 
// Cannot combine cumulative options with discrete options.
// However, you can combine a cumulative option and separated by source
let cumulativeQuery = HKStatisticsQuery(quantityType:cumulativeActiveEnergyBurned,
                                        quantitySamplePredicate:nil,
                                        options: [.cumulativeSum, .separateBySource]) {
                                            query, statistics, error in
                                            
                                            // ... process the results here
}
 
// You can also combine any number of discrete options
// and the separated by source option.
let discreteQuery = HKStatisticsQuery(quantityType: discreteHeartRate,
                                      quantitySamplePredicate: nil,
                                      options: [.discreteAverage, .discreteMin, .discreteMax, .separateBySource]) {
                                            query, statistics, error in
                                            
                                            // ... process the results here
}
```

<a id="Objective-C"></a>

## Objective-C

```objc
HKQuantityType *cumulativeActiveEnergyBurned =
[HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierActiveEnergyBurned];
 
HKQuantityType *discreteHeartRate =
[HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierHeartRate];
 
// Cannot combine cumulative options with discrete options.
// However, you can combine a cumulative option and seperated by source
HKStatisticsQuery *cumulativeQuery =
[[HKStatisticsQuery alloc]
 initWithQuantityType:cumulativeActiveEnergyBurned
 quantitySamplePredicate:nil
 options:HKStatisticsOptionCumulativeSum | HKStatisticsOptionSeparateBySource
 completionHandler:^(HKStatisticsQuery *query, HKStatistics *result, NSError *error) {
 
      // ... process the results here
 }];
 
// You can also combine any number of discrete options
// and the seperated by source option.
HKStatisticsQuery *discreteQuery =
[[HKStatisticsQuery alloc]
 initWithQuantityType:discreteHeartRate
 quantitySamplePredicate:nil
 options:HKStatisticsOptionDiscreteAverage | HKStatisticsOptionDiscreteMin |
 HKStatisticsOptionDiscreteMax | HKStatisticsOptionSeparateBySource
 completionHandler:^(HKStatisticsQuery *query, HKStatistics *result, NSError *error) {
 
     // ... process the results here
 }];
```

## Topics

### Constants

- [separateBySource](hkstatisticsoptions/separatebysource.md): An option indicating that the system calculates the specified statistics separately for each source.
- [discreteAverage](hkstatisticsoptions/discreteaverage.md): An option indicating that the system calculates the average quantity for the samples.
- [discreteMin](hkstatisticsoptions/discretemin.md): An option indicating that the system calculates the minimum quantity for the samples.
- [discreteMax](hkstatisticsoptions/discretemax.md): An option indicating that the system calculates the maximum quantity for the samples.
- [cumulativeSum](hkstatisticsoptions/cumulativesum.md): An option indicating that the system calculates the sum of all the quantities for the samples.
- [mostRecent](hkstatisticsoptions/mostrecent.md): An option indicating that the system returns the most recent quantity from the matching samples.
- [duration](hkstatisticsoptions/duration.md): An option indicating that the system calculates the total duration covering all the samples.

### Deprecated Constants

- [discreteMostRecent](hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

### Initializers

- [init(rawValue:)](hkstatisticsoptions/init%28rawvalue_%29.md): Returns a newly initialized statistics option using the provided integer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQueryDescriptor](hkstatisticsquerydescriptor.md): A query descriptor that calculates the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQueryDescriptor](hkstatisticscollectionquerydescriptor.md): A query descriptor that gathers a collection of statistics calculated over a series of fixed-length time intervals.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.

# HKStatisticsOptions (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Options for specifying the statistic to calculate.

## Declaration

```objectivec
enum HKStatisticsOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

You cannot combine a discrete option with a cumulative option. You can, however, combine multiple discrete options together to perform multiple calculations. You can also combine the [HKStatisticsOptionSeparateBySource](hkstatisticsoptions/separatebysource.md) option with any of the other options.

<a id="Swift"></a>

## Swift

```swift
let cumulativeActiveEnergyBurned = HKQuantityType(.activeEnergyBurned)
 
let discreteHeartRate = HKQuantityType(.heartRate)
 
// Cannot combine cumulative options with discrete options.
// However, you can combine a cumulative option and separated by source
let cumulativeQuery = HKStatisticsQuery(quantityType:cumulativeActiveEnergyBurned,
                                        quantitySamplePredicate:nil,
                                        options: [.cumulativeSum, .separateBySource]) {
                                            query, statistics, error in
                                            
                                            // ... process the results here
}
 
// You can also combine any number of discrete options
// and the separated by source option.
let discreteQuery = HKStatisticsQuery(quantityType: discreteHeartRate,
                                      quantitySamplePredicate: nil,
                                      options: [.discreteAverage, .discreteMin, .discreteMax, .separateBySource]) {
                                            query, statistics, error in
                                            
                                            // ... process the results here
}
```

<a id="Objective-C"></a>

## Objective-C

```objc
HKQuantityType *cumulativeActiveEnergyBurned =
[HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierActiveEnergyBurned];
 
HKQuantityType *discreteHeartRate =
[HKObjectType quantityTypeForIdentifier:HKQuantityTypeIdentifierHeartRate];
 
// Cannot combine cumulative options with discrete options.
// However, you can combine a cumulative option and seperated by source
HKStatisticsQuery *cumulativeQuery =
[[HKStatisticsQuery alloc]
 initWithQuantityType:cumulativeActiveEnergyBurned
 quantitySamplePredicate:nil
 options:HKStatisticsOptionCumulativeSum | HKStatisticsOptionSeparateBySource
 completionHandler:^(HKStatisticsQuery *query, HKStatistics *result, NSError *error) {
 
      // ... process the results here
 }];
 
// You can also combine any number of discrete options
// and the seperated by source option.
HKStatisticsQuery *discreteQuery =
[[HKStatisticsQuery alloc]
 initWithQuantityType:discreteHeartRate
 quantitySamplePredicate:nil
 options:HKStatisticsOptionDiscreteAverage | HKStatisticsOptionDiscreteMin |
 HKStatisticsOptionDiscreteMax | HKStatisticsOptionSeparateBySource
 completionHandler:^(HKStatisticsQuery *query, HKStatistics *result, NSError *error) {
 
     // ... process the results here
 }];
```

## Topics

### Constants

- [HKStatisticsOptionNone](hkstatisticsoptions/hkstatisticsoptionnone.md): An option indicating that the system will not calculate any statistics values.
- [HKStatisticsOptionSeparateBySource](hkstatisticsoptions/separatebysource.md): An option indicating that the system calculates the specified statistics separately for each source.
- [HKStatisticsOptionDiscreteAverage](hkstatisticsoptions/discreteaverage.md): An option indicating that the system calculates the average quantity for the samples.
- [HKStatisticsOptionDiscreteMin](hkstatisticsoptions/discretemin.md): An option indicating that the system calculates the minimum quantity for the samples.
- [HKStatisticsOptionDiscreteMax](hkstatisticsoptions/discretemax.md): An option indicating that the system calculates the maximum quantity for the samples.
- [HKStatisticsOptionCumulativeSum](hkstatisticsoptions/cumulativesum.md): An option indicating that the system calculates the sum of all the quantities for the samples.
- [HKStatisticsOptionMostRecent](hkstatisticsoptions/mostrecent.md): An option indicating that the system returns the most recent quantity from the matching samples.
- [HKStatisticsOptionDuration](hkstatisticsoptions/duration.md): An option indicating that the system calculates the total duration covering all the samples.

### Deprecated Constants

- [HKStatisticsOptionDiscreteMostRecent](hkstatisticsoptions/discretemostrecent.md): Deprecated. An option indicating that the system returns the most recent quantity from the matching samples.

## See Also

### Statistics

- [Executing Statistical Queries](executing-statistical-queries.md): Create and run statistical queries.
- [Executing Statistics Collection Queries](executing-statistics-collection-queries.md): Calculate statistical data for graphs and charts.
- [HKStatisticsQuery](hkstatisticsquery.md): A query that performs statistical calculations over a set of matching quantity samples, and returns the results.
- [HKStatisticsCollectionQuery](hkstatisticscollectionquery.md): A query that performs multiple statistics queries over a series of fixed-length time intervals.
- [HKStatistics](hkstatistics.md): An object that represents the result of calculating the minimum, maximum, average, or sum over a set of samples from the HealthKit store.
- [HKStatisticsCollection](hkstatisticscollection.md): An object that manages a collection of statistics, representing the results calculated over separate time intervals.
