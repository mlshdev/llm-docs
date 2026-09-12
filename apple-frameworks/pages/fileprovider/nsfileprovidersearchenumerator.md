> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchenumerator](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchenumerator)

# NSFileProviderSearchEnumerator (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol that defines methods for providing search results and canceling searches.

## Declaration

```swift
protocol NSFileProviderSearchEnumerator : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol by implementing the [enumerateSearchResults(for:startingAt:)](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) method to perform your search and deliver pages of results to the [NSFileProviderSearchEnumerationObserver](nsfileprovidersearchenumerationobserver.md) that you receive as the first parameter.

## Topics

### Providing search results

- [enumerateSearchResults(for:startingAt:)](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md): Enumerates search results starting from the specified page, in response to a call from the framework.
- [NSFileProviderSearchEnumerationObserver](nsfileprovidersearchenumerationobserver.md): A protocol that defines a type that receives enumerations of search results from your extension.
- [NSFileProviderPage](nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.

### Canceling a search

- [invalidate()](nsfileprovidersearchenumerator/invalidate%28%29.md): Cancels a currently-running enumeration, in respone to a call from the framework.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Implementing search

- [searchEnumerator(for:)](nsfileprovidersearching/searchenumerator%28for_%29.md): Provides an object that enumerates over search results, in response to a call from the system.
- [NSFileProviderStringSearchRequest](nsfileproviderstringsearchrequest.md): A type that contains details of a string-based search request.

# NSFileProviderSearchEnumerator (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol that defines methods for providing search results and canceling searches.

## Declaration

```objectivec
@protocol NSFileProviderSearchEnumerator <NSObject>
```

<a id="overview"></a>

## Overview

Implement this protocol by implementing the [enumerateSearchResultsForObserver:startingAtPage:](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) method to perform your search and deliver pages of results to the [NSFileProviderSearchEnumerationObserver](nsfileprovidersearchenumerationobserver.md) that you receive as the first parameter.

## Topics

### Providing search results

- [enumerateSearchResultsForObserver:startingAtPage:](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md): Enumerates search results starting from the specified page, in response to a call from the framework.
- [NSFileProviderSearchEnumerationObserver](nsfileprovidersearchenumerationobserver.md): A protocol that defines a type that receives enumerations of search results from your extension.
- [NSFileProviderPage](nsfileproviderpage.md): A synchronization point that represents the next batch of items to be returned by an enumerator.

### Canceling a search

- [invalidate](nsfileprovidersearchenumerator/invalidate%28%29.md): Cancels a currently-running enumeration, in respone to a call from the framework.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Implementing search

- [searchEnumeratorForStringSearchRequest:](nsfileprovidersearching/searchenumerator%28for_%29.md): Provides an object that enumerates over search results, in response to a call from the system.
- [NSFileProviderStringSearchRequest](nsfileproviderstringsearchrequest.md): A type that contains details of a string-based search request.
