> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448627-sksearchgroupcreate](https://developer.apple.com/documentation/coreservices/1448627-sksearchgroupcreate)

# SKSearchGroupCreate

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Creates a search group as an array of references to indexes.

> Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.

## Declaration

```objectivec
SKSearchGroupRef SKSearchGroupCreate(CFArrayRef inArrayOfInIndexes);
```

## Parameters

- `inArrayOfInIndexes`: A CFArray object containing the indexes to put into the search group.

<a id="return_value"></a>

## Return Value

An SKSearchGroup opaque type.

<a id="discussion"></a>

## Discussion

Creates a search group as an array of references to indexes.

You create a search group to search one or more indexes, and then typically use the resulting `SKSearchGroupRef` opaque type with [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) or [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md).

When your application no longer needs the search group, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Legacy Support for Synchronous Searching

- [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md): Deprecated. Obtains the indexes for a search group.
- [SKSearchGroupGetTypeID](1448637-sksearchgroupgettypeid.md): Deprecated. Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md): Deprecated. Finds documents similar to given example documents.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md): Deprecated. Obtains the terms in a document that match a query.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsGetTypeID](1448603-sksearchresultsgettypeid.md): Deprecated. Gets the type identifier for Search Kit search results.
- [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md): Deprecated. Queries the indexes in a search group.
