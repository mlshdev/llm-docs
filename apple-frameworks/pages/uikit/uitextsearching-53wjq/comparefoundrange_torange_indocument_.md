> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/comparefoundrange:torange:indocument:](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/comparefoundrange:torange:indocument:)

# compareFoundRange:toRange:inDocument:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Compares ranges from the set of matches the aggregator provides to determine navigation order.

## Declaration

```objectivec
- (NSComparisonResult) compareFoundRange:(UITextRange *) foundRange toRange:(UITextRange *) toRange inDocument:(UITextSearchDocumentIdentifier) document;
```

## Parameters

- `foundRange`: The range of characters in a text container to compare from.
- `toRange`: The range of characters in a text container to compare to.
- `document`: A string that uniquely identifies the document containing the text ranges. `Nil` when searching a single document.

<a id="return-value"></a>

## Return Value

Returns the result of comparing the two text ranges.

<a id="Discussion"></a>

## Discussion

The system calls this method during a find session to determine which [UITextRange](../uitextrange.md) to highlight next when a user taps the “next” or “previous” button.

## See Also

### Handling searches

- [performTextSearchWithQueryString:usingOptions:resultAggregator:](performtextsearchwithquerystring_usingoptions_resultaggregator_.md): Searches for ranges of text matching the string across all searchable documents and collects results in the aggregator.
- [UITextSearchAggregator](../uitextsearchaggregator-c.protocol.md): The methods you use on a find session’s aggregator to collect matching text ranges for a search.
- [compareOrderFromDocument:toDocument:](compareorderfromdocument_todocument_.md): Compares documents containing matching ranges from the set the aggregator provides to determine navigation order.
- [UITextSearchDocumentIdentifier](../uitextsearchdocumentidentifier.md): A string that uniquely identifies a specific document when searching for matching text across multiple documents.
