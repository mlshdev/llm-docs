> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/cancel()](https://developer.apple.com/documentation/mapkit/mklocalsearch/cancel())

# cancel() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Cancels an in-progress search operation.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

If no search operation is in progress, this method does nothing.

## See Also

### Performing the search

- [start(completionHandler:)](start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [MKLocalSearch.CompletionHandler](completionhandler.md): A completion handler block for a search operation.
- [isSearching](issearching.md): A Boolean value that indicates whether the search is in progress.

# cancel (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Cancels an in-progress search operation.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

If no search operation is in progress, this method does nothing.

## See Also

### Performing the search

- [startWithCompletionHandler:](start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [MKLocalSearchCompletionHandler](completionhandler.md): A completion handler block for a search operation.
- [searching](issearching.md): A Boolean value that indicates whether the search is in progress.
