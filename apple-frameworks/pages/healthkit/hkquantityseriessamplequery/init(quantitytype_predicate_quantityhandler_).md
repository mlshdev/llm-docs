> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequery/init(quantitytype:predicate:quantityhandler:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequery/init(quantitytype:predicate:quantityhandler:))

# init(quantityType:predicate:quantityHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new query for a series of the specified quantity type.

## Declaration

```swift
init(quantityType: HKQuantityType, predicate: NSPredicate?, quantityHandler: @escaping @Sendable (HKQuantitySeriesSampleQuery, HKQuantity?, DateInterval?, HKQuantitySample?, Bool, (any Error)?) -> Void)
```

## Parameters

- `quantityType`: The quantity type.
- `predicate`: A predicate used to filter the results. To query for all the quantity objects for a specific [HKQuantitySample](../hkquantitysample.md), see [predicateForObject(with:)](../hkquery/predicateforobject%28with_%29.md).
- `quantityHandler`: A handler called by the query with the results. The query calls the block multiple times until either the `done` parameter is [true](../../foundation/nsexpression/true.md), or you call the HealthKit store’s [stop(\_:)](../hkhealthstore/stop%28__%29.md) method. The handler takes the following arguments:

  - **`query`**: The query that generated the results.
  - **`quantity`**: The next quantity in the series.
  - **`dateInterval`**: The quantity’s date interval.
  - **`quantitySample`**: The quantity sample that owns the series. This parameter is set to `nil` unless [includeSample](includesample.md) is true.
  - **`done`**: A Boolean value that indicates whether you have reached the end of the series.
  - **`error`**: If an error occurs, this parameter describes the error. Otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

HealthKit returns quantities in ascending order, based on their start date.

## See Also

### Creating a Series Query

- [includeSample](includesample.md): A Boolean value that determines whether the query should return the series sample.
- [orderByQuantitySampleStartDate](orderbyquantitysamplestartdate.md): A Boolean value that determines whether the query groups the results based on the quantity sample’s start date.

# initWithQuantityType:predicate:quantityHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new query for a series of the specified quantity type.

## Declaration

```objectivec
- (instancetype) initWithQuantityType:(HKQuantityType *) quantityType predicate:(NSPredicate *) predicate quantityHandler:(void (^)(HKQuantitySeriesSampleQuery *query, HKQuantity *quantity, NSDateInterval *dateInterval, HKQuantitySample *quantitySample, BOOL done, NSError *error)) quantityHandler;
```

## Parameters

- `quantityType`: The quantity type.
- `predicate`: A predicate used to filter the results. To query for all the quantity objects for a specific [HKQuantitySample](../hkquantitysample.md), see [predicateForObjectWithUUID:](../hkquery/predicateforobject%28with_%29.md).
- `quantityHandler`: A handler called by the query with the results. The query calls the block multiple times until either the `done` parameter is [trueExpression](../../foundation/nsexpression/true.md), or you call the HealthKit store’s [stopQuery:](../hkhealthstore/stop%28__%29.md) method. The handler takes the following arguments:

  - **`query`**: The query that generated the results.
  - **`quantity`**: The next quantity in the series.
  - **`dateInterval`**: The quantity’s date interval.
  - **`quantitySample`**: The quantity sample that owns the series. This parameter is set to `nil` unless [includeSample](includesample.md) is true.
  - **`done`**: A Boolean value that indicates whether you have reached the end of the series.
  - **`error`**: If an error occurs, this parameter describes the error. Otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

HealthKit returns quantities in ascending order, based on their start date.

## See Also

### Creating a Series Query

- [includeSample](includesample.md): A Boolean value that determines whether the query should return the series sample.
- [orderByQuantitySampleStartDate](orderbyquantitysamplestartdate.md): A Boolean value that determines whether the query groups the results based on the quantity sample’s start date.
