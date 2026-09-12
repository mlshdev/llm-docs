> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchresult](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchresult)

# NSFileProviderSearchResult (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol that defines properties of a search result.

## Declaration

```swift
protocol NSFileProviderSearchResult
```

## Topics

### Identifying the item

- [itemIdentifier](nsfileprovidersearchresult/itemidentifier.md): The identifier for this search result.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [filename](nsfileprovidersearchresult/filename.md): The result’s file name.

### Accessing file metadata

- [creationDate](nsfileprovidersearchresult/creationdate.md): The result file’s creation date.
- [contentModificationDate](nsfileprovidersearchresult/contentmodificationdate.md): The result file’s content modification date.
- [lastUsedDate](nsfileprovidersearchresult/lastuseddate.md): The result file’s last-used date.
- [contentType](nsfileprovidersearchresult/contenttype.md): The result file’s content type.
- [documentSize](nsfileprovidersearchresult/documentsize.md): The result file’s size.

## See Also

### Providing search results

- [didEnumerate(\_:)](nsfileprovidersearchenumerationobserver/didenumerate%28__%29.md): Delivers an array of search results to the observer.

# NSFileProviderSearchResult (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 26.0+

A protocol that defines properties of a search result.

## Declaration

```objectivec
@protocol NSFileProviderSearchResult
```

## Topics

### Identifying the item

- [itemIdentifier](nsfileprovidersearchresult/itemidentifier.md): The identifier for this search result.
- [NSFileProviderItemIdentifier](nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [filename](nsfileprovidersearchresult/filename.md): The result’s file name.

### Accessing file metadata

- [creationDate](nsfileprovidersearchresult/creationdate.md): The result file’s creation date.
- [contentModificationDate](nsfileprovidersearchresult/contentmodificationdate.md): The result file’s content modification date.
- [lastUsedDate](nsfileprovidersearchresult/lastuseddate.md): The result file’s last-used date.
- [contentType](nsfileprovidersearchresult/contenttype.md): The result file’s content type.
- [documentSize](nsfileprovidersearchresult/documentsize.md): The result file’s size.

## See Also

### Providing search results

- [didEnumerateSearchResults:](nsfileprovidersearchenumerationobserver/didenumerate%28__%29.md): Delivers an array of search results to the observer.
