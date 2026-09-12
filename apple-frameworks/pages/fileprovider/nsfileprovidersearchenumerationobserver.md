> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerationobserver](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerationobserver)

# NSFileProviderSearchEnumerationObserver (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol that defines a type that receives enumerations of search results from your extension.

## Declaration

```swift
protocol NSFileProviderSearchEnumerationObserver : NSObjectProtocol
```

## Topics

### Providing search results

- [didEnumerate(\_:)](nsfileprovidersearchenumerationobserver/didenumerate%28__%29.md): Delivers an array of search results to the observer.
- [NSFileProviderSearchResult](nsfileprovidersearchresult.md): A protocol that defines properties of a search result.

### Ending enumeration

- [finishEnumerating(upTo:)](nsfileprovidersearchenumerationobserver/finishenumerating%28upto_%29.md): Finish enumerating a page of results, and optionally provide a location within the results to continue the enumeration.
- [finishEnumeratingWithError(\_:)](nsfileprovidersearchenumerationobserver/finishenumeratingwitherror%28__%29.md): Finishes a search enumeration by sending an error to the framework.

### Instance Properties

- [maximumNumberOfResultsPerPage](nsfileprovidersearchenumerationobserver/maximumnumberofresultsperpage.md): The maximum number of results to return in a single page enumeration.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Providing search results

- [enumerateSearchResults(for:startingAt:)](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md): Enumerates search results starting from the specified page, in response to a call from the framework.
- [NSFileProviderPage](nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.

# NSFileProviderSearchEnumerationObserver (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol that defines a type that receives enumerations of search results from your extension.

## Declaration

```objectivec
@protocol NSFileProviderSearchEnumerationObserver <NSObject>
```

## Topics

### Providing search results

- [didEnumerateSearchResults:](nsfileprovidersearchenumerationobserver/didenumerate%28__%29.md): Delivers an array of search results to the observer.
- [NSFileProviderSearchResult](nsfileprovidersearchresult.md): A protocol that defines properties of a search result.

### Ending enumeration

- [finishEnumeratingUpToPage:](nsfileprovidersearchenumerationobserver/finishenumerating%28upto_%29.md): Finish enumerating a page of results, and optionally provide a location within the results to continue the enumeration.
- [finishEnumeratingWithError:](nsfileprovidersearchenumerationobserver/finishenumeratingwitherror%28__%29.md): Finishes a search enumeration by sending an error to the framework.

### Instance Properties

- [maximumNumberOfResultsPerPage](nsfileprovidersearchenumerationobserver/maximumnumberofresultsperpage.md): The maximum number of results to return in a single page enumeration.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Providing search results

- [enumerateSearchResultsForObserver:startingAtPage:](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md): Enumerates search results starting from the specified page, in response to a call from the framework.
- [NSFileProviderPage](nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.
