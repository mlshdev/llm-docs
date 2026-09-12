> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearching/searchenumerator(for:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearching/searchenumerator(for:))

# searchEnumerator(for:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Provides an object that enumerates over search results, in response to a call from the system.

## Declaration

```swift
func searchEnumerator(for request: NSFileProviderStringSearchRequest) -> any NSFileProviderSearchEnumerator
```

## Parameters

- `request`: An [NSFileProviderStringSearchRequest](../nsfileproviderstringsearchrequest.md) that contains the search query.

<a id="return-value"></a>

## Return Value

An [NSFileProviderSearchEnumerator](../nsfileprovidersearchenumerator.md) that you implement to provide search results to the system.

## See Also

### Implementing search

- [NSFileProviderStringSearchRequest](../nsfileproviderstringsearchrequest.md): A type that contains details of a string-based search request.
- [NSFileProviderSearchEnumerator](../nsfileprovidersearchenumerator.md): A protocol that defines methods for providing search results and canceling searches.

# searchEnumeratorForStringSearchRequest: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Provides an object that enumerates over search results, in response to a call from the system.

## Declaration

```objectivec
- (id<NSFileProviderSearchEnumerator>) searchEnumeratorForStringSearchRequest:(NSFileProviderStringSearchRequest *) request;
```

## Parameters

- `request`: An [NSFileProviderStringSearchRequest](../nsfileproviderstringsearchrequest.md) that contains the search query.

<a id="return-value"></a>

## Return Value

An [NSFileProviderSearchEnumerator](../nsfileprovidersearchenumerator.md) that you implement to provide search results to the system.

## See Also

### Implementing search

- [NSFileProviderStringSearchRequest](../nsfileproviderstringsearchrequest.md): A type that contains details of a string-based search request.
- [NSFileProviderSearchEnumerator](../nsfileprovidersearchenumerator.md): A protocol that defines methods for providing search results and canceling searches.
