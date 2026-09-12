> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerationobserver/finishenumerating(upto:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerationobserver/finishenumerating(upto:))

# finishEnumerating(upTo:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Finish enumerating a page of results, and optionally provide a location within the results to continue the enumeration.

## Declaration

```swift
func finishEnumerating(upTo nextPage: NSFileProviderPage?)
```

<a id="discussion"></a>

## Discussion

Call this method after you make one or more calls to [didEnumerate(\_:)](didenumerate%28__%29.md) to provide results to the observer. The collective results you provide in these calls constitues a “page” of results.

Finish your page before sending `NSFileProviderSearchEnumerationObserver/maxNumberOfResults`. If you have more results to provide, use the `nextPage` parameter to indicate where to continue in your result set. The system sends the `nextPage` parameter the next time it calls your [enumerateSearchResults(for:startingAt:)](../nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) method.

> **Note**

> The [NSFileProviderPage](../nsfileproviderpage.md) data payload is limited to 500 bytes. Sending a `nextPage` larger than this interrupts the enumeration.

## See Also

### Ending enumeration

- [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md): Finishes a search enumeration by sending an error to the framework.

# finishEnumeratingUpToPage: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Finish enumerating a page of results, and optionally provide a location within the results to continue the enumeration.

## Declaration

```objectivec
- (void) finishEnumeratingUpToPage:(NSFileProviderPage) nextPage;
```

<a id="discussion"></a>

## Discussion

Call this method after you make one or more calls to [didEnumerateSearchResults:](didenumerate%28__%29.md) to provide results to the observer. The collective results you provide in these calls constitues a “page” of results.

Finish your page before sending `NSFileProviderSearchEnumerationObserver/maxNumberOfResults`. If you have more results to provide, use the `nextPage` parameter to indicate where to continue in your result set. The system sends the `nextPage` parameter the next time it calls your [enumerateSearchResultsForObserver:startingAtPage:](../nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) method.

> **Note**

> The [NSFileProviderPage](../nsfileproviderpage.md) data payload is limited to 500 bytes. Sending a `nextPage` larger than this interrupts the enumeration.

## See Also

### Ending enumeration

- [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md): Finishes a search enumeration by sending an error to the framework.
