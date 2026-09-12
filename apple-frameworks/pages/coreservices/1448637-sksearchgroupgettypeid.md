> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448637-sksearchgroupgettypeid](https://developer.apple.com/documentation/coreservices/1448637-sksearchgroupgettypeid)

# SKSearchGroupGetTypeID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

## Declaration

```objectivec
CFTypeID SKSearchGroupGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

A CFTypeID object containing the type identifier for the SKSearchGroup opaque type.

<a id="discussion"></a>

## Discussion

Gets the type identifier for Search Kit search groups.

Search Kit represents search groups with the [SKSearchGroupRef](sksearchgroupref.md) opaque type. If your code needs to determine whether a particular data type is a search group, you can use this function along with the [CFGetTypeID(\_:)](../corefoundation/cfgettypeid%28__%29.md) function and perform a comparison.

Never hard-code the search group type ID because it can change from one release of macOS to another.

## See Also

### Legacy Support for Synchronous Searching

- [SKSearchGroupCreate](1448627-sksearchgroupcreate.md): Deprecated. Creates a search group as an array of references to indexes.
- [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md): Deprecated. Obtains the indexes for a search group.
- [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md): Deprecated. Finds documents similar to given example documents.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md): Deprecated. Obtains the terms in a document that match a query.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsGetTypeID](1448603-sksearchresultsgettypeid.md): Deprecated. Gets the type identifier for Search Kit search results.
- [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md): Deprecated. Queries the indexes in a search group.
