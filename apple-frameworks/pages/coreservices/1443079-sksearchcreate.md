> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1443079-sksearchcreate](https://developer.apple.com/documentation/coreservices/1443079-sksearchcreate)

# SKSearchCreate(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates an asynchronous search object for querying an index, and initiates search.

## Declaration

```swift
func SKSearchCreate(_ inIndex: SKIndex!, _ inQuery: CFString!, _ inSearchOptions: SKSearchOptions) -> Unmanaged<SKSearch>!
```

## Parameters

- `inIndex`: The index to query.
- `inQuery`: The query string to search for.
- `inSearchOptions`: The search options. May be `NULL`. See the [SKSearchOptions](sksearchoptions.md) enumeration for a description of the available options.

<a id="return_value"></a>

## Return Value

A search object.

<a id="discussion"></a>

## Discussion

This function creates an asynchronous search object for querying the document contents in an index. It also initiates the search on a separate thread.

After you create the search object, call [SKSearchFindMatches(\_:\_:\_:\_:\_:\_:)](1448608-sksearchfindmatches.md) to retrieve results. You can call [SKSearchFindMatches(\_:\_:\_:\_:\_:\_:)](1448608-sksearchfindmatches.md) immediately. To cancel a search, call [SKSearchCancel(\_:)](1442083-sksearchcancel.md).

For normal (non-similarity-based) queries, Search Kit discerns the type of query—Boolean, prefix, phrase, and so on—from the syntax of the query itself. Moreover, Search Kit supports multiple query types within a single search. For example, the following query includes Boolean, prefix, and suffix searching:

<a id="2557262"></a>

**Listing 1**

```occ
appl* OR *ing
```

This query will return documents containing words that begin with “appl” as well as documents that contain words that end with “ing”.

For similarity searches, specified with the `kSKSearchOptionFindSimilar` flag in the `inSearchOptions` parameter, `SKSearchCreate` ignores all query operators.

The query operators that `SKSearchCreate` recognizes for non-similarity searching are:

| Operator | meaning |
| --- | --- |
| `AND` | Boolean `AND` |
| `&` | Boolean `AND` |
| `<space>` | Boolean `AND` by default when no other operator is present, or Boolean `OR` if specified by `kSKSearchOptionSpaceMeansOR`. |
| `OR` | Boolean inclusive `OR` |
| `\|` | Boolean inclusive `OR` |
| `NOT` | Boolean `NOT` (see Special Considerations) |
| `!` | Boolean `NOT` (see Special Considerations) |
| \* | Wildcard for prefix or suffix; surround term with wildcard characters for substring search. Ignored in phrase searching. |
| ( | Begin logical grouping |
| ) | End logical grouping |
| " | delimiter for phrase searching |

The operators `AND`, `OR`, and `NOT` are case sensitive.

Search Kit performs Unicode normalization on query strings and on the text placed into indexes. It uses Unicode Normalization Form KC (NFKC, compatibility decomposition followed by canonical composition) as documented in Unicode Standard Annex #15. For example, the a-grave character, ‘à’, can be written as the two Unicode characters (`0x0061`, `0x0300`) or as the single Unicode character `0x00E0`. Search Kit will normalize (`0x0061, 0x0300`) to `0x00E0`. For more information on Unicode normalization, see [http://unicode.org/reports/tr15](http://unicode.org/reports/tr15/).

Search Kit further normalizes query strings and indexes by stripping diacritical marks and by forcing characters to lowercase. For example, Search Kit normalizes each of the following characters to ‘a’: ‘a’, ‘à’, ‘A’, and ‘À’.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

When your application no longer needs the search object, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

<a id="1968657"></a>

### Special Considerations

Search Kit supports logical exclusion. The `NOT` and `!` operators behave as though they were `EXCLUDE` operators. For example, a search for ‘red `NOT` blue’ returns all documents that contain the word ‘red’ and do not contain the word ‘blue’.

Unary Boolean operators, however, are not currently implemented in Search Kit. A search, for example, for ‘`NOT` blue’, returns zero documents no matter what their content. 

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with SKSearch objects. In a garbage-collected environment, you must use [CFRelease](../corefoundation/cfrelease.md) to dispose of an SKSearch object.

<a id="1968658"></a>

### Version-Notes

OS X version 10.4 uses a completely revised, and far more powerful, query approach than did earlier versions of macOS. Refer to the Discussion in this function for details. Refer to [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) (deprecated) for a description of Search Kit’s behavior in earlier versions of macOS.

In versions of macOS prior to version 10.4, Search Kit did not perform Unicode normalization, and did not remove diacritical marks.

## See Also

### Fast Asynchronous Searching

- [SKSearchFindMatches(\_:\_:\_:\_:\_:\_:)](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchCancel(\_:)](1442083-sksearchcancel.md): Cancels an asynchronous search request.
- [SKSearchGetTypeID()](1448621-sksearchgettypeid.md): Gets the type identifier for Search Kit search objects.

# SKSearchCreate (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates an asynchronous search object for querying an index, and initiates search.

## Declaration

```objectivec
SKSearchRef SKSearchCreate(SKIndexRef inIndex, CFStringRef inQuery, SKSearchOptions inSearchOptions);
```

## Parameters

- `inIndex`: The index to query.
- `inQuery`: The query string to search for.
- `inSearchOptions`: The search options. May be `NULL`. See the [SKSearchOptions](sksearchoptions.md) enumeration for a description of the available options.

<a id="return_value"></a>

## Return Value

A search object.

<a id="discussion"></a>

## Discussion

This function creates an asynchronous search object for querying the document contents in an index. It also initiates the search on a separate thread.

After you create the search object, call [SKSearchFindMatches](1448608-sksearchfindmatches.md) to retrieve results. You can call [SKSearchFindMatches](1448608-sksearchfindmatches.md) immediately. To cancel a search, call [SKSearchCancel](1442083-sksearchcancel.md).

For normal (non-similarity-based) queries, Search Kit discerns the type of query—Boolean, prefix, phrase, and so on—from the syntax of the query itself. Moreover, Search Kit supports multiple query types within a single search. For example, the following query includes Boolean, prefix, and suffix searching:

<a id="2557262"></a>

**Listing 1**

```occ
appl* OR *ing
```

This query will return documents containing words that begin with “appl” as well as documents that contain words that end with “ing”.

For similarity searches, specified with the `kSKSearchOptionFindSimilar` flag in the `inSearchOptions` parameter, `SKSearchCreate` ignores all query operators.

The query operators that `SKSearchCreate` recognizes for non-similarity searching are:

| Operator | meaning |
| --- | --- |
| `AND` | Boolean `AND` |
| `&` | Boolean `AND` |
| `<space>` | Boolean `AND` by default when no other operator is present, or Boolean `OR` if specified by `kSKSearchOptionSpaceMeansOR`. |
| `OR` | Boolean inclusive `OR` |
| `\|` | Boolean inclusive `OR` |
| `NOT` | Boolean `NOT` (see Special Considerations) |
| `!` | Boolean `NOT` (see Special Considerations) |
| \* | Wildcard for prefix or suffix; surround term with wildcard characters for substring search. Ignored in phrase searching. |
| ( | Begin logical grouping |
| ) | End logical grouping |
| " | delimiter for phrase searching |

The operators `AND`, `OR`, and `NOT` are case sensitive.

Search Kit performs Unicode normalization on query strings and on the text placed into indexes. It uses Unicode Normalization Form KC (NFKC, compatibility decomposition followed by canonical composition) as documented in Unicode Standard Annex #15. For example, the a-grave character, ‘à’, can be written as the two Unicode characters (`0x0061`, `0x0300`) or as the single Unicode character `0x00E0`. Search Kit will normalize (`0x0061, 0x0300`) to `0x00E0`. For more information on Unicode normalization, see [http://unicode.org/reports/tr15](http://unicode.org/reports/tr15/).

Search Kit further normalizes query strings and indexes by stripping diacritical marks and by forcing characters to lowercase. For example, Search Kit normalizes each of the following characters to ‘a’: ‘a’, ‘à’, ‘A’, and ‘À’.

Search Kit is thread-safe. You can use separate indexing and searching threads. Your application is responsible for ensuring that no more than one process is open at a time for writing to an index.

When your application no longer needs the search object, dispose of it by calling [CFRelease](../corefoundation/cfrelease.md).

<a id="1968657"></a>

### Special Considerations

Search Kit supports logical exclusion. The `NOT` and `!` operators behave as though they were `EXCLUDE` operators. For example, a search for ‘red `NOT` blue’ returns all documents that contain the word ‘red’ and do not contain the word ‘blue’.

Unary Boolean operators, however, are not currently implemented in Search Kit. A search, for example, for ‘`NOT` blue’, returns zero documents no matter what their content. 

You cannot use [CFMakeCollectable](../corefoundation/cfmakecollectable.md) with SKSearch objects. In a garbage-collected environment, you must use [CFRelease](../corefoundation/cfrelease.md) to dispose of an SKSearch object.

<a id="1968658"></a>

### Version-Notes

OS X version 10.4 uses a completely revised, and far more powerful, query approach than did earlier versions of macOS. Refer to the Discussion in this function for details. Refer to [SKSearchResultsCreateWithQuery](1448610-sksearchresultscreatewithquery.md) (deprecated) for a description of Search Kit’s behavior in earlier versions of macOS.

In versions of macOS prior to version 10.4, Search Kit did not perform Unicode normalization, and did not remove diacritical marks.

## See Also

### Fast Asynchronous Searching

- [SKSearchFindMatches](1448608-sksearchfindmatches.md): Extracts search result information from a search object.
- [SKSearchCancel](1442083-sksearchcancel.md): Cancels an asynchronous search request.
- [SKSearchGetTypeID](1448621-sksearchgettypeid.md): Gets the type identifier for Search Kit search objects.
