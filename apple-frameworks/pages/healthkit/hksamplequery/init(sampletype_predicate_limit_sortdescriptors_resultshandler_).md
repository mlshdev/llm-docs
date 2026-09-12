> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequery/init(sampletype:predicate:limit:sortdescriptors:resultshandler:)](https://developer.apple.com/documentation/healthkit/hksamplequery/init(sampletype:predicate:limit:sortdescriptors:resultshandler:))

# init(sampleType:predicate:limit:sortDescriptors:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Instantiates and returns a sample query.

## Declaration

```swift
init(sampleType: HKSampleType, predicate: NSPredicate?, limit: Int, sortDescriptors: [NSSortDescriptor]?, resultsHandler: @escaping @Sendable (HKSampleQuery, [HKSample]?, (any Error)?) -> Void)
```

## Parameters

- `sampleType`: The type of sample to search for. This object can be an instance of the [HKCategoryType](../hkcategorytype.md), [HKCorrelationType](../hkcorrelationtype.md), [HKQuantityType](../hkquantitytype.md), or [HKWorkoutType](../hkworkouttype.md) class.
- `predicate`: A predicate that limits the results returned by the query. Pass `nil` to receive all the samples of the specified type.
- `limit`: The maximum number of samples returned by the query. If you want to return all matching samples, use [HKObjectQueryNoLimit](../hkobjectquerynolimit.md).
- `sortDescriptors`: An array of sort descriptors that specify the order of the results returned by this query. Pass `nil` if you don’t need the results in a specific order.

  > **Note**

  >  HealthKit defines a number of sort identifiers (for example, [HKSampleSortIdentifierStartDate](../hksamplesortidentifierstartdate.md) and [HKWorkoutSortIdentifierDuration](../hkworkoutsortidentifierduration.md)). Use the sort descriptors you create with these identifiers only in queries. You cannot use them to perform an in-memory sort of an array of samples.
- `resultsHandler`: A block that is called when the query finishes executing.

  This block takes the following parameters:

  - **query**: A reference to the query that called this block.
  - **results**: An array containing the samples found by the query, or `nil` if an error occurs.
  - **error**: If an error occurs, this parameter contains an object describing the error. Otherwise, its value is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized sample query object.

## Mentioned In

- [Executing Sample Queries](../executing-sample-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [execute(\_:)](../hkhealthstore/execute%28__%29.md) method to run this query. Queries run on an anonymous background queue. As soon as the query is complete, the results handler is executed on the background queue. You typically dispatch these results to the main queue to update the user interface.

## See Also

### Creating Sample Queries

- [Executing Sample Queries](../executing-sample-queries.md): Create, run, and sort sample queries.
- [init(queryDescriptors:limit:resultsHandler:)](init%28querydescriptors_limit_resultshandler_%29.md): Creates a query for samples that match any of the descriptors you provided.
- [init(queryDescriptors:limit:sortDescriptors:resultsHandler:)](init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](../hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](../healthkit-sort-descriptors.md): Identifiers for sorting results.

# initWithSampleType:predicate:limit:sortDescriptors:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a sample query.

## Declaration

```objectivec
- (instancetype) initWithSampleType:(HKSampleType *) sampleType predicate:(NSPredicate *) predicate limit:(NSUInteger) limit sortDescriptors:(NSArray<NSSortDescriptor *> *) sortDescriptors resultsHandler:(void (^)(HKSampleQuery *query, NSArray<__kindof HKSample *> *results, NSError *error)) resultsHandler;
```

## Parameters

- `sampleType`: The type of sample to search for. This object can be an instance of the [HKCategoryType](../hkcategorytype.md), [HKCorrelationType](../hkcorrelationtype.md), [HKQuantityType](../hkquantitytype.md), or [HKWorkoutType](../hkworkouttype.md) class.
- `predicate`: A predicate that limits the results returned by the query. Pass `nil` to receive all the samples of the specified type.
- `limit`: The maximum number of samples returned by the query. If you want to return all matching samples, use [HKObjectQueryNoLimit](../hkobjectquerynolimit.md).
- `sortDescriptors`: An array of sort descriptors that specify the order of the results returned by this query. Pass `nil` if you don’t need the results in a specific order.

  > **Note**

  >  HealthKit defines a number of sort identifiers (for example, [HKSampleSortIdentifierStartDate](../hksamplesortidentifierstartdate.md) and [HKWorkoutSortIdentifierDuration](../hkworkoutsortidentifierduration.md)). Use the sort descriptors you create with these identifiers only in queries. You cannot use them to perform an in-memory sort of an array of samples.
- `resultsHandler`: A block that is called when the query finishes executing.

  This block takes the following parameters:

  - **query**: A reference to the query that called this block.
  - **results**: An array containing the samples found by the query, or `nil` if an error occurs.
  - **error**: If an error occurs, this parameter contains an object describing the error. Otherwise, its value is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized sample query object.

## Mentioned In

- [Executing Sample Queries](../executing-sample-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [executeQuery:](../hkhealthstore/execute%28__%29.md) method to run this query. Queries run on an anonymous background queue. As soon as the query is complete, the results handler is executed on the background queue. You typically dispatch these results to the main queue to update the user interface.

## See Also

### Creating Sample Queries

- [Executing Sample Queries](../executing-sample-queries.md): Create, run, and sort sample queries.
- [initWithQueryDescriptors:limit:resultsHandler:](init%28querydescriptors_limit_resultshandler_%29.md): Creates a query for samples that match any of the descriptors you provided.
- [initWithQueryDescriptors:limit:sortDescriptors:resultsHandler:](init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](../hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](../healthkit-sort-descriptors.md): Identifiers for sorting results.
