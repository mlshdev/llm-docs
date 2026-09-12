> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerationobserver/finishenumeratingwitherror(_:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerationobserver/finishenumeratingwitherror(_:))

# finishEnumeratingWithError(\_:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Finishes a search enumeration by sending an error to the framework.

## Declaration

```swift
func finishEnumeratingWithError(_ error: any Error)
```

<a id="discussion"></a>

## Discussion

Finishing with an error causes the system to stop requesting additional pages of results. The system doesn’t retry after you call this method. If an error is potentially recoverable, you can perform your own retry in your implementation of [enumerateSearchResults(for:startingAt:)](../nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) and continue if successful, or end the query by calling this method.

## See Also

### Ending enumeration

- [finishEnumerating(upTo:)](finishenumerating%28upto_%29.md): Finish enumerating a page of results, and optionally provide a location within the results to continue the enumeration.

# finishEnumeratingWithError: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Finishes a search enumeration by sending an error to the framework.

## Declaration

```objectivec
- (void) finishEnumeratingWithError:(NSError *) error;
```

<a id="discussion"></a>

## Discussion

Finishing with an error causes the system to stop requesting additional pages of results. The system doesn’t retry after you call this method. If an error is potentially recoverable, you can perform your own retry in your implementation of [enumerateSearchResultsForObserver:startingAtPage:](../nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) and continue if successful, or end the query by calling this method.

## See Also

### Ending enumeration

- [finishEnumeratingUpToPage:](finishenumerating%28upto_%29.md): Finish enumerating a page of results, and optionally provide a location within the results to continue the enumeration.
