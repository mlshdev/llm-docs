> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquery/init(type:predicate:anchor:limit:resultshandler:)](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquery/init(type:predicate:anchor:limit:resultshandler:))

# init(type:predicate:anchor:limit:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new anchored object query.

## Declaration

```swift
init(type: HKSampleType, predicate: NSPredicate?, anchor: HKQueryAnchor?, limit: Int, resultsHandler handler: @escaping @Sendable (HKAnchoredObjectQuery, [HKSample]?, [HKDeletedObject]?, HKQueryAnchor?, (any Error)?) -> Void)
```

## Parameters

- `type`: The type of sample to search for. This query supports all subclasses of [HKSampleType](../hksampletype.md), such as [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md),  and [HKCorrelationType](../hkcorrelationtype.md).
- `predicate`: A predicate that filters both the samples and the deleted objects returned by the query.  Pass `nil` to receive all the newly added samples and recently deleted objects of the specified type.
- `anchor`: The anchor returned by the previous anchored object query. The anchor object corresponds to the last object that was returned by the previous anchored object query. The new query returns only samples and deleted objects that are newer than that object.

  Pass `nil` to receive all the matching samples and recently deleted objects currently in the HealthKit store.
- `limit`: The maximum number of samples received by the query. To receive all of the new samples, pass [HKObjectQueryNoLimit](../hkobjectquerynolimit.md).
- `handler`: A block that the system calls after gathering the initial results. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **sampleObjects**: An array containing the samples returned by this query, or `nil` if an error occurred.
  - **deletedObjects**: An array containing the deleted objects returned by this query, or `nil` if an error occurred.
  - **newAnchor**: An anchor object corresponding to the last object returned by this query. Subsequent anchor queries use this value to receive new samples and deleted objects created after the query returned its initial results.
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized anchor query object.

## Mentioned In

- [Executing Anchored Object Queries](../executing-anchored-object-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [execute(\_:)](../hkhealthstore/execute%28__%29.md) method to run it. The queries run on an anonymous background queue. As soon as the query is complete, the results handler block is executed on the same background queue (but not necessarily the same thread). Be sure to dispatch these results to the main queue before updating the user interface.

The first time you call this method, pass `nil` as the `anchor` parameter. This method returns all matching objects currently in the HealthKit store. Additionally, save the returned anchor object and pass it to the next query.

Anchor queries can also act as long-running queries. If you assign an update handler before executing the query, the query continues to monitor the HealthKit store after gathering the initial results. The system calls the update handler on a background queue whenever a matching sample is saved to or deleted from the HealthKit store. To cancel this query, call the store’s [stop(\_:)](../hkhealthstore/stop%28__%29.md) method.

## See Also

### Creating Anchored Object Queries

- [Executing Anchored Object Queries](../executing-anchored-object-queries.md): Create and run an anchored object query.
- [init(queryDescriptors:anchor:limit:resultsHandler:)](init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [HKObjectQueryNoLimit](../hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [init(type:predicate:anchor:limit:completionHandler:)](init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.

# initWithType:predicate:anchor:limit:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a new anchored object query.

## Declaration

```objectivec
- (instancetype) initWithType:(HKSampleType *) type predicate:(NSPredicate *) predicate anchor:(HKQueryAnchor *) anchor limit:(NSUInteger) limit resultsHandler:(void (^)(HKAnchoredObjectQuery *query, NSArray<__kindof HKSample *> *sampleObjects, NSArray<HKDeletedObject *> *deletedObjects, HKQueryAnchor *newAnchor, NSError *error)) handler;
```

## Parameters

- `type`: The type of sample to search for. This query supports all subclasses of [HKSampleType](../hksampletype.md), such as [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md),  and [HKCorrelationType](../hkcorrelationtype.md).
- `predicate`: A predicate that filters both the samples and the deleted objects returned by the query.  Pass `nil` to receive all the newly added samples and recently deleted objects of the specified type.
- `anchor`: The anchor returned by the previous anchored object query. The anchor object corresponds to the last object that was returned by the previous anchored object query. The new query returns only samples and deleted objects that are newer than that object.

  Pass `nil` to receive all the matching samples and recently deleted objects currently in the HealthKit store.
- `limit`: The maximum number of samples received by the query. To receive all of the new samples, pass [HKObjectQueryNoLimit](../hkobjectquerynolimit.md).
- `handler`: A block that the system calls after gathering the initial results. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **sampleObjects**: An array containing the samples returned by this query, or `nil` if an error occurred.
  - **deletedObjects**: An array containing the deleted objects returned by this query, or `nil` if an error occurred.
  - **newAnchor**: An anchor object corresponding to the last object returned by this query. Subsequent anchor queries use this value to receive new samples and deleted objects created after the query returned its initial results.
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized anchor query object.

## Mentioned In

- [Executing Anchored Object Queries](../executing-anchored-object-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [executeQuery:](../hkhealthstore/execute%28__%29.md) method to run it. The queries run on an anonymous background queue. As soon as the query is complete, the results handler block is executed on the same background queue (but not necessarily the same thread). Be sure to dispatch these results to the main queue before updating the user interface.

The first time you call this method, pass `nil` as the `anchor` parameter. This method returns all matching objects currently in the HealthKit store. Additionally, save the returned anchor object and pass it to the next query.

Anchor queries can also act as long-running queries. If you assign an update handler before executing the query, the query continues to monitor the HealthKit store after gathering the initial results. The system calls the update handler on a background queue whenever a matching sample is saved to or deleted from the HealthKit store. To cancel this query, call the store’s [stopQuery:](../hkhealthstore/stop%28__%29.md) method.

## See Also

### Creating Anchored Object Queries

- [Executing Anchored Object Queries](../executing-anchored-object-queries.md): Create and run an anchored object query.
- [initWithQueryDescriptors:anchor:limit:resultsHandler:](init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [HKObjectQueryNoLimit](../hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [initWithType:predicate:anchor:limit:completionHandler:](init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.
