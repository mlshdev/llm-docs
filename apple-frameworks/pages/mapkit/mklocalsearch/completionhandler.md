> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/completionhandler](https://developer.apple.com/documentation/mapkit/mklocalsearch/completionhandler)

# MKLocalSearch.CompletionHandler (Swift)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion handler block for a search operation.

## Declaration

```swift
typealias CompletionHandler = (MKLocalSearch.Response?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

This block takes two parameters:

- The `response` parameter contains the search results. If an error occurs, this parameter is `nil` and the framework provides an appropriate error object in the `error` parameter.
- The `error` parameter is `nil` if the search is successful. If an error occurs during the operation, the framework sets this parameter to an appropriate error object.

This block has no return value.

## See Also

### Performing the search

- [start(completionHandler:)](start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [isSearching](issearching.md): A Boolean value that indicates whether the search is in progress.
- [cancel()](cancel%28%29.md): Cancels an in-progress search operation.

# MKLocalSearchCompletionHandler (Objective-C)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A completion handler block for a search operation.

## Declaration

```objectivec
typedef void (^)(MKLocalSearchResponse *, NSError *) MKLocalSearchCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

This block takes two parameters:

- The `response` parameter contains the search results. If an error occurs, this parameter is `nil` and the framework provides an appropriate error object in the `error` parameter.
- The `error` parameter is `nil` if the search is successful. If an error occurs during the operation, the framework sets this parameter to an appropriate error object.

This block has no return value.

## See Also

### Performing the search

- [startWithCompletionHandler:](start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [searching](issearching.md): A Boolean value that indicates whether the search is in progress.
- [cancel](cancel%28%29.md): Cancels an in-progress search operation.
