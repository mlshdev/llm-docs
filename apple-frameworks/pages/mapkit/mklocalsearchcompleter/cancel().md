> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/cancel()](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/cancel())

# cancel() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Cancels an in-progress search operation.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

If a search operation is in progress, this method attempts to cancel it. If cancellation is successful, the search completer doesn’t notify its delegate. If no search operation is in progress, this method does nothing.

## See Also

### Canceling the query

- [isSearching](issearching.md): A Boolean value that indicates whether a search operation is in progress.

# cancel (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

Cancels an in-progress search operation.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

If a search operation is in progress, this method attempts to cancel it. If cancellation is successful, the search completer doesn’t notify its delegate. If no search operation is in progress, this method does nothing.

## See Also

### Canceling the query

- [searching](issearching.md): A Boolean value that indicates whether a search operation is in progress.
