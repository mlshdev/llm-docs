> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearching](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearching)

# NSFileProviderSearching (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol you implement to support searching in your file provider.

## Declaration

```swift
protocol NSFileProviderSearching : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol in your provider’s principal class to support searching files in cloud storage. To make search available to the person using the device, also set the property [supportsStringSearchRequest](nsfileproviderdomain/supportsstringsearchrequest.md) to `true`.

> **Tip**

> You don’t need to implement this protocol if you only want to expose the contents of the working set to system search.

When the person using the device performs a search, the system calls the `NSFileProviderSearching` implementation for all the accounts they’ve chosen to search. Your implementation returns a [NSFileProviderSearchEnumerator](nsfileprovidersearchenumerator.md), which receives repeated callbacks to [enumerateSearchResults(for:startingAt:)](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) until one of the following occurs:

- The system has received enough results.
- The system has received all results.
- The person enters another character into the query string, thereby canceling this search and starting another.
- The person explicitly cancels the search.

## Topics

### Implementing search

- [searchEnumerator(for:)](nsfileprovidersearching/searchenumerator%28for_%29.md): Provides an object that enumerates over search results, in response to a call from the system.
- [NSFileProviderStringSearchRequest](nsfileproviderstringsearchrequest.md): A type that contains details of a string-based search request.
- [NSFileProviderSearchEnumerator](nsfileprovidersearchenumerator.md): A protocol that defines methods for providing search results and canceling searches.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# NSFileProviderSearching (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol you implement to support searching in your file provider.

## Declaration

```objectivec
@protocol NSFileProviderSearching <NSObject>
```

<a id="overview"></a>

## Overview

Implement this protocol in your provider’s principal class to support searching files in cloud storage. To make search available to the person using the device, also set the property [supportsStringSearchRequest](nsfileproviderdomain/supportsstringsearchrequest.md) to `true`.

> **Tip**

> You don’t need to implement this protocol if you only want to expose the contents of the working set to system search.

When the person using the device performs a search, the system calls the `NSFileProviderSearching` implementation for all the accounts they’ve chosen to search. Your implementation returns a [NSFileProviderSearchEnumerator](nsfileprovidersearchenumerator.md), which receives repeated callbacks to [enumerateSearchResultsForObserver:startingAtPage:](nsfileprovidersearchenumerator/enumeratesearchresults%28for_startingat_%29.md) until one of the following occurs:

- The system has received enough results.
- The system has received all results.
- The person enters another character into the query string, thereby canceling this search and starting another.
- The person explicitly cancels the search.

## Topics

### Implementing search

- [searchEnumeratorForStringSearchRequest:](nsfileprovidersearching/searchenumerator%28for_%29.md): Provides an object that enumerates over search results, in response to a call from the system.
- [NSFileProviderStringSearchRequest](nsfileproviderstringsearchrequest.md): A type that contains details of a string-based search request.
- [NSFileProviderSearchEnumerator](nsfileprovidersearchenumerator.md): A protocol that defines methods for providing search results and canceling searches.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
