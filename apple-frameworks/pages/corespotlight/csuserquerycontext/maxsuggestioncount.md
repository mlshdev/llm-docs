> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquerycontext/maxsuggestioncount](https://developer.apple.com/documentation/corespotlight/csuserquerycontext/maxsuggestioncount)

# maxSuggestionCount (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The maximum number of suggested text completions for the query to return.

## Declaration

```swift
var maxSuggestionCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

You might specify different limits to account for the amount of available space.

## See Also

### Configuring search options

- [maxResultCount](maxresultcount.md): The maximum number of search results for the query to return.
- [disableSemanticSearch](disablesemanticsearch.md): A Boolean value that indicates whether to exclude semantic-based search results from the output.

# maxSuggestionCount (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The maximum number of suggested text completions for the query to return.

## Declaration

```objectivec
@property (nonatomic, assign) NSInteger maxSuggestionCount;
```

<a id="Discussion"></a>

## Discussion

You might specify different limits to account for the amount of available space.

## See Also

### Configuring search options

- [maxResultCount](maxresultcount.md): The maximum number of search results for the query to return.
- [disableSemanticSearch](disablesemanticsearch.md): A Boolean value that indicates whether to exclude semantic-based search results from the output.
