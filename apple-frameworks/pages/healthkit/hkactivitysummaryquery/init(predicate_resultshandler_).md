> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummaryquery/init(predicate:resultshandler:)](https://developer.apple.com/documentation/healthkit/hkactivitysummaryquery/init(predicate:resultshandler:))

# init(predicate:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Initializes a new active summary query.

## Declaration

```swift
init(predicate: NSPredicate?, resultsHandler handler: @escaping @Sendable (HKActivitySummaryQuery, [HKActivitySummary]?, (any Error)?) -> Void)
```

## Parameters

- `predicate`: A predicate that filters the activity summaries returned by the query. Pass `nil` to receive all activity samples.
- `handler`: A block that is called after the initial results have been gathered. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **activitySummaries**: An array containing the summaries returned by this query, or `nil` if an error occurred.
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized activity summary query.

## Mentioned In

- [Executing Activity Summary Queries](../executing-activity-summary-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [execute(\_:)](../hkhealthstore/execute%28__%29.md) method to run it. The queries run on an anonymous background queue. As soon as the query is complete, the results handler block is executed on the same background queue (but not necessarily the same thread). You typically dispatch these results to the main queue to update the user interface.

Activity summary queries can also act as long-running queries. If you assign an update handler before you execute the query, the query continues to monitor the HealthKit store after gathering the initial results. The update handler is called on a background queue every time a matching sample is saved or updated in the HealthKit store. You can cancel this query by calling the store’s [stop(\_:)](../hkhealthstore/stop%28__%29.md) method.

## See Also

### Creating activity summary queries

- [Executing Activity Summary Queries](../executing-activity-summary-queries.md): Create and run activity summary queries.

# initWithPredicate:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Initializes a new active summary query.

## Declaration

```objectivec
- (instancetype) initWithPredicate:(NSPredicate *) predicate resultsHandler:(void (^)(HKActivitySummaryQuery *query, NSArray<HKActivitySummary *> *activitySummaries, NSError *error)) handler;
```

## Parameters

- `predicate`: A predicate that filters the activity summaries returned by the query. Pass `nil` to receive all activity samples.
- `handler`: A block that is called after the initial results have been gathered. This block takes the following parameters:

  - **query**: A reference to the query calling this block.
  - **activitySummaries**: An array containing the summaries returned by this query, or `nil` if an error occurred.
  - **error**: If an error occurs, this parameter contains an object describing the error; otherwise, it is `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized activity summary query.

## Mentioned In

- [Executing Activity Summary Queries](../executing-activity-summary-queries.md)

<a id="Discussion"></a>

## Discussion

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [executeQuery:](../hkhealthstore/execute%28__%29.md) method to run it. The queries run on an anonymous background queue. As soon as the query is complete, the results handler block is executed on the same background queue (but not necessarily the same thread). You typically dispatch these results to the main queue to update the user interface.

Activity summary queries can also act as long-running queries. If you assign an update handler before you execute the query, the query continues to monitor the HealthKit store after gathering the initial results. The update handler is called on a background queue every time a matching sample is saved or updated in the HealthKit store. You can cancel this query by calling the store’s [stopQuery:](../hkhealthstore/stop%28__%29.md) method.

## See Also

### Creating activity summary queries

- [Executing Activity Summary Queries](../executing-activity-summary-queries.md): Create and run activity summary queries.
