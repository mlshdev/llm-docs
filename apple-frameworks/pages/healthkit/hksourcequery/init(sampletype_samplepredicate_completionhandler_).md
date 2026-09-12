> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcequery/init(sampletype:samplepredicate:completionhandler:)](https://developer.apple.com/documentation/healthkit/hksourcequery/init(sampletype:samplepredicate:completionhandler:))

# init(sampleType:samplePredicate:completionHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Instantiates and returns a source query.

## Declaration

```swift
init(sampleType: HKSampleType, samplePredicate objectPredicate: NSPredicate?, completionHandler: @escaping @Sendable (HKSourceQuery, Set<HKSource>?, (any Error)?) -> Void)
```

## Parameters

- `sampleType`: The type of sample to search for. This query supports all sample types. Specifically, you can pass any concrete subclass of the [HKSampleType](../hksampletype.md) class (the [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md),  and [HKCorrelationType](../hkcorrelationtype.md) classes).
- `objectPredicate`: A predicate that limits the samples matched by the query. Pass `nil` if you want to receive the sources for all the samples of the specified type.
- `completionHandler`: A block that is called when the query finishes executing. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **results**: A set containing the sources for all the samples that match both the sample type and the object predicate, or `nil` if an error occurred.
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized sample query object.

## Mentioned In

- [Executing Source Queries](../executing-source-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [execute(\_:)](../hkhealthstore/execute%28__%29.md) method to run this query. Queries run on an anonymous background queue. As soon as the query is complete, the results handler is executed on the same background queue (but not necessarily on the same thread).

## See Also

### Creating Source Queries

- [Executing Source Queries](../executing-source-queries.md): Create and run source queries.

# initWithSampleType:samplePredicate:completionHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Instantiates and returns a source query.

## Declaration

```objectivec
- (instancetype) initWithSampleType:(HKSampleType *) sampleType samplePredicate:(NSPredicate *) objectPredicate completionHandler:(void (^)(HKSourceQuery *query, NSSet<HKSource *> *sources, NSError *error)) completionHandler;
```

## Parameters

- `sampleType`: The type of sample to search for. This query supports all sample types. Specifically, you can pass any concrete subclass of the [HKSampleType](../hksampletype.md) class (the [HKQuantityType](../hkquantitytype.md), [HKCategoryType](../hkcategorytype.md), [HKWorkoutType](../hkworkouttype.md),  and [HKCorrelationType](../hkcorrelationtype.md) classes).
- `objectPredicate`: A predicate that limits the samples matched by the query. Pass `nil` if you want to receive the sources for all the samples of the specified type.
- `completionHandler`: A block that is called when the query finishes executing. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **results**: A set containing the sources for all the samples that match both the sample type and the object predicate, or `nil` if an error occurred.
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized sample query object.

## Mentioned In

- [Executing Source Queries](../executing-source-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [executeQuery:](../hkhealthstore/execute%28__%29.md) method to run this query. Queries run on an anonymous background queue. As soon as the query is complete, the results handler is executed on the same background queue (but not necessarily on the same thread).

## See Also

### Creating Source Queries

- [Executing Source Queries](../executing-source-queries.md): Create and run source queries.
