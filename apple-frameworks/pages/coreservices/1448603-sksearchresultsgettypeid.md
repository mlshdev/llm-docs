> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448603-sksearchresultsgettypeid](https://developer.apple.com/documentation/coreservices/1448603-sksearchresultsgettypeid)

# SKSearchResultsGetTypeID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Gets the type identifier for Search Kit search results.

> Use [SKSearchCreate](1443079-sksearchcreate.md) instead.

## Declaration

```objectivec
CFTypeID SKSearchResultsGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

A CFTypeID object containing the type identifier for the SKSearchResults opaque type.

<a id="discussion"></a>

## Discussion

Search Kit represents search results with search results objects ([SKSearchResultsRef](sksearchresultsref.md) opaque types). If your code needs to determine whether a particular data type is a search result, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the search result type ID because it can change from one release of macOS to another.

## See Also

### Legacy Support for Synchronous Searching

- [SKSearchGroupCreate](1448627-sksearchgroupcreate.md): Deprecated. Creates a search group as an array of references to indexes.
- [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md): Deprecated. Obtains the indexes for a search group.
- [SKSearchGroupGetTypeID](1448637-sksearchgroupgettypeid.md): Deprecated. Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md): Deprecated. Finds documents similar to given example documents.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md): Deprecated. Obtains the terms in a document that match a query.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md): Deprecated. Queries the indexes in a search group.
