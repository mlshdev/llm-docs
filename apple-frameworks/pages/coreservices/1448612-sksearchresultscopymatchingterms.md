> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448612-sksearchresultscopymatchingterms](https://developer.apple.com/documentation/coreservices/1448612-sksearchresultscopymatchingterms)

# SKSearchResultsCopyMatchingTerms

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Obtains the terms in a document that match a query.

> Use [SKSearchCreate](1443079-sksearchcreate.md) instead.

## Declaration

```objectivec
CFArrayRef SKSearchResultsCopyMatchingTerms(SKSearchResultsRef inSearchResults, CFIndex inItem);
```

## Parameters

- `inSearchResults`: The search results to examine.
- `inItem`: An integer that corresponds to a document URL object (SKDocumentRef) in the search results. A value of ‘1’ identifies the first document URL object in the search results, a value of ‘2’ identifies the second, and so on.

  If you’ve created the search results using [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md), the document URL objects are sorted in ranking order with the top-ranked one first. See [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md) for a description of how to get a particular document URL object, or set of them, from a search result.

<a id="return_value"></a>

## Return Value

A CFArray object containing term IDs.

<a id="discussion"></a>

## Discussion

When using a prefix search, or a search for which the user entered more than one word, there may be multiple terms that match the query. This function returns an array of the term IDs corresponding to these matches.

For example, a user could enter ‘App’ when performing a prefix search. If a document represented in the search group contains the words ‘Apple,’ ‘application,’ and ‘appendectomy,’ the IDs for all of these terms would then appear in the CFArray object that `SKSearchResultsCopyMatchingTerms` returns.

See [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) for a description of how to perform a search and get search results. See [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md) for how to extract information, including document URL objects, from a search result. See [SKSearchType](sksearchtype.md) for a description of the various categories of search.

## See Also

### Legacy Support for Synchronous Searching

- [SKSearchGroupCreate](1448627-sksearchgroupcreate.md): Deprecated. Creates a search group as an array of references to indexes.
- [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md): Deprecated. Obtains the indexes for a search group.
- [SKSearchGroupGetTypeID](1448637-sksearchgroupgettypeid.md): Deprecated. Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md): Deprecated. Finds documents similar to given example documents.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsGetTypeID](1448603-sksearchresultsgettypeid.md): Deprecated. Gets the type identifier for Search Kit search results.
- [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md): Deprecated. Queries the indexes in a search group.
