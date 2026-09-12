> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448615-sksearchgroupcopyindexes](https://developer.apple.com/documentation/coreservices/1448615-sksearchgroupcopyindexes)

# SKSearchGroupCopyIndexes

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Obtains the indexes for a search group.

> Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

## Declaration

```objectivec
CFArrayRef SKSearchGroupCopyIndexes(SKSearchGroupRef inSearchGroup);
```

## Parameters

- `inSearchGroup`: The search group whose indexes you want to copy.

<a id="return_value"></a>

## Return Value

A CFArray object containing the indexes in the search group.

<a id="discussion"></a>

## Discussion

Although the search functions [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) and [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md) operate directly on search groups, many Search Kit functions, such as [SKIndexCompact](1443628-skindexcompact.md), operate on one index at a time. When you want to examine or manage all the indexes in a search group, use `SKSearchGroupCopyIndexes` to get the search group’s list of indexes.

## See Also

### Legacy Support for Synchronous Searching

- [SKSearchGroupCreate](1448627-sksearchgroupcreate.md): Deprecated. Creates a search group as an array of references to indexes.
- [SKSearchGroupGetTypeID](1448637-sksearchgroupgettypeid.md): Deprecated. Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md): Deprecated. Finds documents similar to given example documents.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md): Deprecated. Obtains the terms in a document that match a query.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsGetTypeID](1448603-sksearchresultsgettypeid.md): Deprecated. Gets the type identifier for Search Kit search results.
- [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md): Deprecated. Queries the indexes in a search group.
