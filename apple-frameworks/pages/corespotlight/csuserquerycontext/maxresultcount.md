> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquerycontext/maxresultcount](https://developer.apple.com/documentation/corespotlight/csuserquerycontext/maxresultcount)

# maxResultCount (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The maximum number of search results for the query to return.

## Declaration

```swift
var maxResultCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Spotlight returns all results that it finds by default. Set a maximum limit to terminate the search early, which can improve performance.

## See Also

### Configuring search options

- [maxSuggestionCount](maxsuggestioncount.md): The maximum number of suggested text completions for the query to return.
- [disableSemanticSearch](disablesemanticsearch.md): A Boolean value that indicates whether to exclude semantic-based search results from the output.

# maxResultCount (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The maximum number of search results for the query to return.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger maxResultCount;
```

<a id="Discussion"></a>

## Discussion

Spotlight returns all results that it finds by default. Set a maximum limit to terminate the search early, which can improve performance.

## See Also

### Configuring search options

- [maxSuggestionCount](maxsuggestioncount.md): The maximum number of suggested text completions for the query to return.
- [disableSemanticSearch](disablesemanticsearch.md): A Boolean value that indicates whether to exclude semantic-based search results from the output.
