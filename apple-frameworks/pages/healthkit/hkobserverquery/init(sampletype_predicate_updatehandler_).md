> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobserverquery/init(sampletype:predicate:updatehandler:)](https://developer.apple.com/documentation/healthkit/hkobserverquery/init(sampletype:predicate:updatehandler:))

# init(sampleType:predicate:updateHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a query that monitors the HealthKit store and responds to changes.

## Declaration

```swift
init(sampleType: HKSampleType, predicate: NSPredicate?, updateHandler: @escaping @Sendable (HKObserverQuery, @escaping HKObserverQueryCompletionHandler, (any Error)?) -> Void)
```

## Parameters

- `sampleType`: The type of sample to search for. This query supports all sample types. Specifically, you can pass any concrete subclass of the [HKSampleType](../hksampletype.md) class (the [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md),  and [HKCorrelationType](../hkcorrelationtype.md) classes)
- `predicate`: A predicate that limits the samples matched by the query. Pass `nil` if you want to receive updates for every new sample of the specified type.
- `updateHandler`: A block that is called when a matching sample is saved to or deleted from the HealthKit store. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **completionHandler**: If you have registered for background updates, you must call this completion handler as soon as you are done processing the incoming data. This tells HealthKit that you have successfully received the background update. Additionally, you should only call the completion handler when you are using background updates. For more information on using this completion handler, see [HKObserverQueryCompletionHandler](../hkobserverquerycompletionhandler.md).
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized observer query object.

## Mentioned In

- [Executing Observer Queries](../executing-observer-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [execute(\_:)](../hkhealthstore/execute%28__%29.md) method to run this query. Observer queries are long-running tasks. They continue to run on an anonymous background thread and call their results handler whenever they detects relevant changes to the HealthKit store. To stop a query, call the [HKHealthStore](../hkhealthstore.md) class’s [stop(\_:)](../hkhealthstore/stop%28__%29.md) method.

The provided update handler block is called every time samples matching this query are saved to or deleted from the HealthKit store. You often need to launch other queries from inside this block to get the updated data. In particular, you can use Anchored Object Queries to retrieve the list of new samples that have been added to the store. For more information, see [HKAnchoredObjectQuery](../hkanchoredobjectquery.md)

## See Also

### Creating Observer Queries

- [Executing Observer Queries](../executing-observer-queries.md): Create and run observer queries.
- [init(queryDescriptors:updateHandler:)](init%28querydescriptors_updatehandler_%29.md): Creates a query that monitors the HealthKit store and responds to any changes matching any of the query descriptors you provided.
- [HKObserverQueryCompletionHandler](../hkobserverquerycompletionhandler.md): The completion handler for background deliveries.

# initWithSampleType:predicate:updateHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a query that monitors the HealthKit store and responds to changes.

## Declaration

```objectivec
- (instancetype) initWithSampleType:(HKSampleType *) sampleType predicate:(NSPredicate *) predicate updateHandler:(void (^)(HKObserverQuery *query, HKObserverQueryCompletionHandler completionHandler, NSError *error)) updateHandler;
```

## Parameters

- `sampleType`: The type of sample to search for. This query supports all sample types. Specifically, you can pass any concrete subclass of the [HKSampleType](../hksampletype.md) class (the [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md),  and [HKCorrelationType](../hkcorrelationtype.md) classes)
- `predicate`: A predicate that limits the samples matched by the query. Pass `nil` if you want to receive updates for every new sample of the specified type.
- `updateHandler`: A block that is called when a matching sample is saved to or deleted from the HealthKit store. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **completionHandler**: If you have registered for background updates, you must call this completion handler as soon as you are done processing the incoming data. This tells HealthKit that you have successfully received the background update. Additionally, you should only call the completion handler when you are using background updates. For more information on using this completion handler, see [HKObserverQueryCompletionHandler](../hkobserverquerycompletionhandler.md).
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized observer query object.

## Mentioned In

- [Executing Observer Queries](../executing-observer-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [executeQuery:](../hkhealthstore/execute%28__%29.md) method to run this query. Observer queries are long-running tasks. They continue to run on an anonymous background thread and call their results handler whenever they detects relevant changes to the HealthKit store. To stop a query, call the [HKHealthStore](../hkhealthstore.md) class’s [stopQuery:](../hkhealthstore/stop%28__%29.md) method.

The provided update handler block is called every time samples matching this query are saved to or deleted from the HealthKit store. You often need to launch other queries from inside this block to get the updated data. In particular, you can use Anchored Object Queries to retrieve the list of new samples that have been added to the store. For more information, see [HKAnchoredObjectQuery](../hkanchoredobjectquery.md)

## See Also

### Creating Observer Queries

- [Executing Observer Queries](../executing-observer-queries.md): Create and run observer queries.
- [initWithQueryDescriptors:updateHandler:](init%28querydescriptors_updatehandler_%29.md): Creates a query that monitors the HealthKit store and responds to any changes matching any of the query descriptors you provided.
- [HKObserverQueryCompletionHandler](../hkobserverquerycompletionhandler.md): The completion handler for background deliveries.
