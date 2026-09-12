> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442083-sksearchcancel](https://developer.apple.com/documentation/coreservices/1442083-sksearchcancel)

# SKSearchCancel(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Cancels an asynchronous search request.

## Declaration

```swift
func SKSearchCancel(_ inSearch: SKSearch!)
```

## Parameters

- `inSearch`: The search object whose associated asynchronous search you want to cancel.

<a id="discussion"></a>

## Discussion

Call this function when you want to cancel an asynchronous search that you initiated with [SKSearchCreate(\_:\_:\_:)](1443079-sksearchcreate.md). This function stops the search process if it is still in progress at the time. It does not dispose of the search object (SKSearchRef).

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Fast Asynchronous Searching

- [SKSearchCreate(\_:\_:\_:)](1443079-sksearchcreate.md): Creates an asynchronous search object for querying an index, and initiates search.
- [SKSearchFindMatches(\_:\_:\_:\_:\_:\_:)](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchGetTypeID()](1448621-sksearchgettypeid.md): Gets the type identifier for Search Kit search objects.

# SKSearchCancel (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Cancels an asynchronous search request.

## Declaration

```objectivec
void SKSearchCancel(SKSearchRef inSearch);
```

## Parameters

- `inSearch`: The search object whose associated asynchronous search you want to cancel.

<a id="discussion"></a>

## Discussion

Call this function when you want to cancel an asynchronous search that you initiated with [SKSearchCreate](1443079-sksearchcreate.md). This function stops the search process if it is still in progress at the time. It does not dispose of the search object (SKSearchRef).

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

## See Also

### Fast Asynchronous Searching

- [SKSearchCreate](1443079-sksearchcreate.md): Creates an asynchronous search object for querying an index, and initiates search.
- [SKSearchFindMatches](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchGetTypeID](1448621-sksearchgettypeid.md): Gets the type identifier for Search Kit search objects.
