> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequery](https://developer.apple.com/documentation/healthkit/hksamplequery)

# HKSampleQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.

## Declaration

```swift
class HKSampleQuery
```

## Mentioned In

- [Executing Observer Queries](executing-observer-queries.md)

<a id="overview"></a>

## Overview

You can use sample queries to search for any concrete subclasses of the [HKSample](hksample.md) class, including [HKCategorySample](hkcategorysample.md), [HKCorrelation](hkcorrelation.md), [HKQuantitySample](hkquantitysample.md), and [HKWorkout](hkworkout.md) objects.

The sample query returns sample objects that match the provided type and predicate. You can provide a sort order for the returned samples, or limit the number of samples returned. Other query classes can be used to perform more specialized searches and calculations. For more information, see [HKQuery](hkquery.md).

Sample queries are immutable: The query’s properties are set when the query is first created, and they can’t change.

> **Note**

>  As with many HealthKit classes, don’t subclass the [HKSampleQuery](hksamplequery.md) class.

## Topics

### Creating Sample Queries

- [Executing Sample Queries](executing-sample-queries.md): Create, run, and sort sample queries.
- [init(sampleType:predicate:limit:sortDescriptors:resultsHandler:)](hksamplequery/init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md): Instantiates and returns a sample query.
- [init(queryDescriptors:limit:resultsHandler:)](hksamplequery/init%28querydescriptors_limit_resultshandler_%29.md): Creates a query for samples that match any of the descriptors you provided.
- [init(queryDescriptors:limit:sortDescriptors:resultsHandler:)](hksamplequery/init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](healthkit-sort-descriptors.md): Identifiers for sorting results.

### Getting Property Data

- [limit](hksamplequery/limit.md): The maximum number of samples that this query returns.
- [sortDescriptors](hksamplequery/sortdescriptors.md): The sort descriptors that specify the order of the results returned by this query.

### Setting Limits

- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Basic queries

- [HKSampleQueryDescriptor](hksamplequerydescriptor.md): A query interface that reads samples using Swift concurrency.
- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQueryDescriptor](hkquerydescriptor.md): A descriptor that specifies a set of samples based on the data type and a predicate.
- [HKQuery](hkquery.md): An abstract class for all the query classes in HealthKit.

# HKSampleQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A general query that returns a snapshot of all the matching samples currently saved in the HealthKit store.

## Declaration

```objectivec
@interface HKSampleQuery : HKQuery
```

## Mentioned In

- [Executing Observer Queries](executing-observer-queries.md)

<a id="overview"></a>

## Overview

You can use sample queries to search for any concrete subclasses of the [HKSample](hksample.md) class, including [HKCategorySample](hkcategorysample.md), [HKCorrelation](hkcorrelation.md), [HKQuantitySample](hkquantitysample.md), and [HKWorkout](hkworkout.md) objects.

The sample query returns sample objects that match the provided type and predicate. You can provide a sort order for the returned samples, or limit the number of samples returned. Other query classes can be used to perform more specialized searches and calculations. For more information, see [HKQuery](hkquery.md).

Sample queries are immutable: The query’s properties are set when the query is first created, and they can’t change.

> **Note**

>  As with many HealthKit classes, don’t subclass the [HKSampleQuery](hksamplequery.md) class.

## Topics

### Creating Sample Queries

- [Executing Sample Queries](executing-sample-queries.md): Create, run, and sort sample queries.
- [initWithSampleType:predicate:limit:sortDescriptors:resultsHandler:](hksamplequery/init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md): Instantiates and returns a sample query.
- [initWithQueryDescriptors:limit:resultsHandler:](hksamplequery/init%28querydescriptors_limit_resultshandler_%29.md): Creates a query for samples that match any of the descriptors you provided.
- [initWithQueryDescriptors:limit:sortDescriptors:resultsHandler:](hksamplequery/init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](healthkit-sort-descriptors.md): Identifiers for sorting results.

### Getting Property Data

- [limit](hksamplequery/limit.md): The maximum number of samples that this query returns.
- [sortDescriptors](hksamplequery/sortdescriptors.md): The sort descriptors that specify the order of the results returned by this query.

### Setting Limits

- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Basic queries

- [HKCorrelationQuery](hkcorrelationquery.md): A query that performs complex searches based on the correlation’s contents, and returns a snapshot of all matching samples.
- [HKQueryDescriptor](hkquerydescriptor.md): A descriptor that specifies a set of samples based on the data type and a predicate.
- [HKQuery](hkquery.md): An abstract class for all the query classes in HealthKit.
