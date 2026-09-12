> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448610-sksearchresultscreatewithquery](https://developer.apple.com/documentation/coreservices/1448610-sksearchresultscreatewithquery)

# SKSearchResultsCreateWithQuery

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Queries the indexes in a search group.

> Use [SKSearchCreate](1443079-sksearchcreate.md) instead.

## Declaration

```objectivec
SKSearchResultsRef SKSearchResultsCreateWithQuery(SKSearchGroupRef inSearchGroup, CFStringRef inQuery, SKSearchType inSearchType, CFIndex inMaxFoundDocuments, void *inContext, SKSearchResultsFilterCallBack inFilterCallBack);
```

## Parameters

- `inSearchGroup`: The search group to query.
- `inQuery`: The query string to search for.
- `inSearchType`: The category of search to perform. See the [SKSearchType](sksearchtype.md) enumeration for options.
- `inMaxFoundDocuments`: The maximum number of found items to return. Your application must pass in a positive integer value.
- `inContext`: An application-specified context for use by the [SKSearchResultsFilterCallBack](sksearchresultsfiltercallback.md). Can be `NULL`, but if you want to use the callback you must supply a context.
- `inFilterCallBack`: A callback function for hit testing during searching. Can be `NULL`, in which case your application receives the returned results directly and without any custom postprocessing. If non-`NULL`, you must supply a context. See [SKSearchResultsFilterCallBack](sksearchresultsfiltercallback.md).

<a id="return_value"></a>

## Return Value

A search results object.

<a id="discussion"></a>

## Discussion

This function searches the on-disk indexes in a search group. Before invoking a search, call [SKIndexFlush](1450667-skindexflush.md) on all indexes in the search group to ensure that changes to the indexes have been flushed to disk.

Once you’ve obtained the results of a search, get the specifics—including which documents match the user’s query, and the ranking scores for each document—by calling [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md). You can extract other information by calling [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md) and [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md).

When your application no longer needs the search result, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

<a id="1681502"></a>

### Special Considerations

This deprecated function performs searches synchronously. Apple recommends using the asynchronous [SKSearchCreate](1443079-sksearchcreate.md) function instead.

In the current implementation of Search Kit, unary Boolean operators are not implemented. A search, for example, for ‘not blue’, returns zero documents no matter what their content.

## See Also

### Legacy Support for Synchronous Searching

- [SKSearchGroupCreate](1448627-sksearchgroupcreate.md): Deprecated. Creates a search group as an array of references to indexes.
- [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md): Deprecated. Obtains the indexes for a search group.
- [SKSearchGroupGetTypeID](1448637-sksearchgroupgettypeid.md): Deprecated. Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md): Deprecated. Finds documents similar to given example documents.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md): Deprecated. Obtains the terms in a document that match a query.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsGetTypeID](1448603-sksearchresultsgettypeid.md): Deprecated. Gets the type identifier for Search Kit search results.
