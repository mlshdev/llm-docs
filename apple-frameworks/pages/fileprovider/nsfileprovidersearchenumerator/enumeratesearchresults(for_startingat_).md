> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerator/enumeratesearchresults(for:startingat:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerator/enumeratesearchresults(for:startingat:))

# enumerateSearchResults(for:startingAt:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Enumerates search results starting from the specified page, in response to a call from the framework.

## Declaration

```swift
func enumerateSearchResults(for observer: any NSFileProviderSearchEnumerationObserver, startingAt page: NSFileProviderPage?)
```

## Parameters

- `observer`: An [NSFileProviderSearchEnumerationObserver](../nsfileprovidersearchenumerationobserver.md), to which your extension provides search results.
- `page`: An indication of a location within the search results to resume enumeration. This parameter is non-`nil` if you previously provided a `nextPage` parameter to the observer’s [finishEnumerating(upTo:)](../nsfileprovidersearchenumerationobserver/finishenumerating%28upto_%29.md) method. Make sure the page contains whatever information you need to resume the enumeration.

<a id="discussion"></a>

## Discussion

Implement this method to perform your search and deliver pages of results to `observer`.

## See Also

### Providing search results

- [NSFileProviderSearchEnumerationObserver](../nsfileprovidersearchenumerationobserver.md): A protocol that defines a type that receives enumerations of search results from your extension.
- [NSFileProviderPage](../nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.

# enumerateSearchResultsForObserver:startingAtPage: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Enumerates search results starting from the specified page, in response to a call from the framework.

## Declaration

```objectivec
- (void) enumerateSearchResultsForObserver:(id<NSFileProviderSearchEnumerationObserver>) observer startingAtPage:(NSFileProviderPage) page;
```

## Parameters

- `observer`: An [NSFileProviderSearchEnumerationObserver](../nsfileprovidersearchenumerationobserver.md), to which your extension provides search results.
- `page`: An indication of a location within the search results to resume enumeration. This parameter is non-`nil` if you previously provided a `nextPage` parameter to the observer’s [finishEnumeratingUpToPage:](../nsfileprovidersearchenumerationobserver/finishenumerating%28upto_%29.md) method. Make sure the page contains whatever information you need to resume the enumeration.

<a id="discussion"></a>

## Discussion

Implement this method to perform your search and deliver pages of results to `observer`.

## See Also

### Providing search results

- [NSFileProviderSearchEnumerationObserver](../nsfileprovidersearchenumerationobserver.md): A protocol that defines a type that receives enumerations of search results from your extension.
- [NSFileProviderPage](../nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.
