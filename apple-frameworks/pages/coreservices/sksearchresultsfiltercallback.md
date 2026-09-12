> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/sksearchresultsfiltercallback](https://developer.apple.com/documentation/coreservices/sksearchresultsfiltercallback)

# SKSearchResultsFilterCallBack (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Deprecated. Use `SKSearchCreate` and `SKSearchFindMatches` instead, which do not use a callback.

## Declaration

```swift
typealias SKSearchResultsFilterCallBack = (SKIndex?, SKDocument?, UnsafeMutableRawPointer?) -> DarwinBoolean
```

## Parameters

- `inIndex`: The index you are searching.
- `inDocument`: The document URL object within the index you are searching.
- `inContext`: An application-specified context which you set when calling [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) or [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md).

<a id="return_value"></a>

## Return Value

A Boolean value of `true` for a successful search hit, or `false` otherwise.

<a id="discussion"></a>

## Discussion

Deprecated. Defines a pointer to a search-results filtering callback function for hit testing and processing during a search. Use this callback function to perform custom filtering on the search hits returned by the [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) and [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md) functions. Return `true` to keep this document URL object (SKDocumentRef) in the results, `false` to filter it out.

# SKSearchResultsFilterCallBack (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Deprecated. Use `SKSearchCreate` and `SKSearchFindMatches` instead, which do not use a callback.

## Declaration

```objectivec
typedef Boolean (*SKSearchResultsFilterCallBack)(SKIndexRef inIndex, SKDocumentRef inDocument, void *inContext);
```

## Parameters

- `inIndex`: The index you are searching.
- `inDocument`: The document URL object within the index you are searching.
- `inContext`: An application-specified context which you set when calling [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) or [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md).

<a id="return_value"></a>

## Return Value

A Boolean value of `true` for a successful search hit, or `false` otherwise.

<a id="discussion"></a>

## Discussion

Deprecated. Defines a pointer to a search-results filtering callback function for hit testing and processing during a search. Use this callback function to perform custom filtering on the search hits returned by the [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) and [SKSearchResultsCreateWithDocuments](1448629-sksearchresultscreatewithdocumen.md) functions. Return `true` to keep this document URL object (SKDocumentRef) in the results, `false` to filter it out.
