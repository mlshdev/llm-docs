> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448629-sksearchresultscreatewithdocumen](https://developer.apple.com/documentation/coreservices/1448629-sksearchresultscreatewithdocumen)

# SKSearchResultsCreateWithDocuments

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.4)

Finds documents similar to given example documents.

> Use [SKSearchCreate](1443079-sksearchcreate.md) instead.

## Declaration

```objectivec
SKSearchResultsRef SKSearchResultsCreateWithDocuments(SKSearchGroupRef inSearchGroup, CFArrayRef inExampleDocuments, CFIndex inMaxFoundDocuments, void *inContext, SKSearchResultsFilterCallBack inFilterCallBack);
```

## Parameters

- `inSearchGroup`: A search group containing the indexes which, in turn, contain the document URL objects (SKDocumentRefs) representing the documents you want to search by similarity. The search group must also contains the indexes that contain the textual content of the example documents.
- `inExampleDocuments`: An array of document URL objects (SKDocumentRefs), each representing an example document.
- `inMaxFoundDocuments`: The maximum number of found items to return. Your application must pass in a positive value.
- `inContext`: An application-specified context for use by the [SKSearchResultsFilterCallBack](sksearchresultsfiltercallback.md) callback function. Can be `NULL`.
- `inFilterCallBack`: A callback function for hit testing during searching—see [SKSearchResultsFilterCallBack](sksearchresultsfiltercallback.md). In a similarity search, your application would typically use this function to exclude the example documents from the search results. This parameter can be `NULL`, in which case your application receives the returned results directly and without any custom postprocessing.

<a id="return_value"></a>

## Return Value

A search results object containing a list of document URL objects (SKDocumentRefs) representing documents similar to the example documents.

<a id="discussion"></a>

## Discussion

This function searches the on-disk indexes in a search group for document URL objects (SKDocumentRefs) representing documents similar to those provided as examples. Build the search group in three steps:

1. Collect the index IDs from the search groups you want to search: for each search group, call the [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md) function.
2. Add the document URL objects representing the example documents to a memory-based index (if they’re not already in an index) by calling [SKIndexCreateWithMutableData](1447500-skindexcreatewithmutabledata.md), and get that index’s ID.
3. Create a new search group that contains the indexes to search, and also containing the example-documents index, using [SKSearchGroupCreate](1448627-sksearchgroupcreate.md).

Before invoking a search, call [SKIndexFlush](1450667-skindexflush.md) on all indexes in the search group to ensure that changes to the indexes have been written to disk.

Once you’ve obtained the results of a search, get the specifics—including which documents match the user’s similarity query, and the ranking scores for each document—by calling [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md).

When your application no longer needs the search result, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

## See Also

### Legacy Support for Synchronous Searching

- [SKSearchGroupCreate](1448627-sksearchgroupcreate.md): Deprecated. Creates a search group as an array of references to indexes.
- [SKSearchGroupCopyIndexes](1448615-sksearchgroupcopyindexes.md): Deprecated. Obtains the indexes for a search group.
- [SKSearchGroupGetTypeID](1448637-sksearchgroupgettypeid.md): Deprecated. Deprecated. Use asynchronous searching with SKSearchCreate instead, which does not employ search groups.
- [SKSearchResultsGetInfoInRange](1448618-sksearchresultsgetinfoinrange.md): Deprecated. Extracts information from a Search Kit query result.
- [SKSearchResultsCopyMatchingTerms](1448612-sksearchresultscopymatchingterms.md): Deprecated. Obtains the terms in a document that match a query.
- [SKSearchResultsGetCount](1448598-sksearchresultsgetcount.md): Deprecated. Gets the total number of found items in a search.
- [SKSearchResultsGetTypeID](1448603-sksearchresultsgettypeid.md): Deprecated. Gets the type identifier for Search Kit search results.
- [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md): Deprecated. Queries the indexes in a search group.
