> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquery/start()](https://developer.apple.com/documentation/foundation/nsmetadataquery/start())

# start() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to start the query.

## Declaration

```swift
func start() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

A query may fail to start if it does not specify a [predicate](predicate.md), or if the query has already been started.

<a id="discussion"></a>

## Discussion

A query can’t be started if the receiver is already running a query or no predicate has been specified.

This method must be called from the receiver’s [operationQueue](operationqueue.md) or on the main thread. For example:

**Swift**

```swift
let query: NSMetadataQuery = // Initialize and set up a query
    query.operationQueue?.addOperationWithBlock {
        query.startQuery()
}
```

**Objective-C**

```objc
NSMetadataQuery *query = // Initialize and set up a query
[query.operationQueue addOperationWithBlock:^{
    [query startQuery];
}];
```

## See Also

### Running queries

- [isStarted](isstarted.md): A Boolean value that indicates whether the query has started. (read-only)
- [isGathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [isStopped](isstopped.md): A Boolean value that indicates whether the query has stopped.
- [stop()](stop%28%29.md): Stops the receiver’s current query from gathering any further results.

# startQuery (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to start the query.

## Declaration

```objectivec
- (BOOL) startQuery;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

A query may fail to start if it does not specify a [predicate](predicate.md), or if the query has already been started.

<a id="discussion"></a>

## Discussion

A query can’t be started if the receiver is already running a query or no predicate has been specified.

This method must be called from the receiver’s [operationQueue](operationqueue.md) or on the main thread. For example:

**Swift**

```swift
let query: NSMetadataQuery = // Initialize and set up a query
    query.operationQueue?.addOperationWithBlock {
        query.startQuery()
}
```

**Objective-C**

```objc
NSMetadataQuery *query = // Initialize and set up a query
[query.operationQueue addOperationWithBlock:^{
    [query startQuery];
}];
```

## See Also

### Running queries

- [started](isstarted.md): A Boolean value that indicates whether the query has started. (read-only)
- [gathering](isgathering.md): A Boolean value that indicates whether the receiver is in the initial gathering phase of the query. (read-only)
- [stopped](isstopped.md): A Boolean value that indicates whether the query has stopped.
- [stopQuery](stop%28%29.md): Stops the receiver’s current query from gathering any further results.
