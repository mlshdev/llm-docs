> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerationobserver/didenumerate(_:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerationobserver/didenumerate(_:))

# didEnumerate(\_:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Delivers an array of search results to the observer.

## Declaration

```swift
func didEnumerate(_ searchResults: [any NSFileProviderSearchResult])
```

<a id="discussion"></a>

## Discussion

For files stored on your server, consult search indexes on the server and use them to create an array of [NSFileProviderSearchResult](../nsfileprovidersearchresult.md) instances that you provide to this method.

You can call this method multiple times prior to calling [finishEnumerating(upTo:)](finishenumerating%28upto_%29.md) or [finishEnumeratingWithError(\_:)](finishenumeratingwitherror%28__%29.md), as long as the total number of results doesn’t exceed `NSFileProviderSearchEnumerationObserver/maxNumberOfResults`.

## See Also

### Providing search results

- [NSFileProviderSearchResult](../nsfileprovidersearchresult.md): A protocol that defines properties of a search result.

# didEnumerateSearchResults: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Delivers an array of search results to the observer.

## Declaration

```objectivec
- (void) didEnumerateSearchResults:(NSArray<id<NSFileProviderSearchResult>> *) searchResults;
```

<a id="discussion"></a>

## Discussion

For files stored on your server, consult search indexes on the server and use them to create an array of [NSFileProviderSearchResult](../nsfileprovidersearchresult.md) instances that you provide to this method.

You can call this method multiple times prior to calling [finishEnumeratingUpToPage:](finishenumerating%28upto_%29.md) or [finishEnumeratingWithError:](finishenumeratingwitherror%28__%29.md), as long as the total number of results doesn’t exceed `NSFileProviderSearchEnumerationObserver/maxNumberOfResults`.

## See Also

### Providing search results

- [NSFileProviderSearchResult](../nsfileprovidersearchresult.md): A protocol that defines properties of a search result.
