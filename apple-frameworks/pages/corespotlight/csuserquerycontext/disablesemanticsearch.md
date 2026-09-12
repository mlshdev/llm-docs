> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquerycontext/disablesemanticsearch](https://developer.apple.com/documentation/corespotlight/csuserquerycontext/disablesemanticsearch)

# disableSemanticSearch (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A Boolean value that indicates whether to exclude semantic-based search results from the output.

## Declaration

```swift
var disableSemanticSearch: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Semantic searching finds matches that are related to the original term, but not necessarily a lexical match. For example, a search for the string “Sun and Moon” might also return a result with a title like “Sol and Luna”. The default value of this property is `true`, which enables the delivery of semantic search results.

You might set this property to `false` when you want to perform only a lexical match. For example, you might disable semantic search when looking for a proper name.

## See Also

### Configuring search options

- [maxResultCount](maxresultcount.md): The maximum number of search results for the query to return.
- [maxSuggestionCount](maxsuggestioncount.md): The maximum number of suggested text completions for the query to return.

# disableSemanticSearch (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

A Boolean value that indicates whether to exclude semantic-based search results from the output.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL disableSemanticSearch;
```

<a id="discussion"></a>

## Discussion

Semantic searching finds matches that are related to the original term, but not necessarily a lexical match. For example, a search for the string “Sun and Moon” might also return a result with a title like “Sol and Luna”. The default value of this property is `true`, which enables the delivery of semantic search results.

You might set this property to `false` when you want to perform only a lexical match. For example, you might disable semantic search when looking for a proper name.

## See Also

### Configuring search options

- [maxResultCount](maxresultcount.md): The maximum number of search results for the query to return.
- [maxSuggestionCount](maxsuggestioncount.md): The maximum number of suggested text completions for the query to return.
