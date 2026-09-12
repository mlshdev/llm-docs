> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448621-sksearchgettypeid](https://developer.apple.com/documentation/coreservices/1448621-sksearchgettypeid)

# SKSearchGetTypeID() (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets the type identifier for Search Kit search objects.

## Declaration

```swift
func SKSearchGetTypeID() -> CFTypeID
```

<a id="return_value"></a>

## Return Value

A CFTypeID object containing the type identifier for the SKSearch opaque type.

<a id="discussion"></a>

## Discussion

Search Kit represents searches with search objects ([SKSearch](sksearch.md) opaque types). If your code needs to determine whether a particular data type is a search object, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the search type ID because it can change from one release of macOS to another.

## See Also

### Fast Asynchronous Searching

- [SKSearchCreate(\_:\_:\_:)](1443079-sksearchcreate.md): Creates an asynchronous search object for querying an index, and initiates search.
- [SKSearchFindMatches(\_:\_:\_:\_:\_:\_:)](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchCancel(\_:)](1442083-sksearchcancel.md): Cancels an asynchronous search request.

# SKSearchGetTypeID (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Gets the type identifier for Search Kit search objects.

## Declaration

```objectivec
CFTypeID SKSearchGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

A CFTypeID object containing the type identifier for the SKSearch opaque type.

<a id="discussion"></a>

## Discussion

Search Kit represents searches with search objects ([SKSearchRef](sksearchref.md) opaque types). If your code needs to determine whether a particular data type is a search object, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the search type ID because it can change from one release of macOS to another.

## See Also

### Fast Asynchronous Searching

- [SKSearchCreate](1443079-sksearchcreate.md): Creates an asynchronous search object for querying an index, and initiates search.
- [SKSearchFindMatches](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchCancel](1442083-sksearchcancel.md): Cancels an asynchronous search request.
