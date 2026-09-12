> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/compareorderfromdocument:todocument:](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/compareorderfromdocument:todocument:)

# compareOrderFromDocument:toDocument:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Compares documents containing matching ranges from the set the aggregator provides to determine navigation order.

## Declaration

```objectivec
- (NSComparisonResult) compareOrderFromDocument:(UITextSearchDocumentIdentifier) fromDocument toDocument:(UITextSearchDocumentIdentifier) toDocument;
```

## Parameters

- `fromDocument`: A string that uniquely identifies the document to compare from.
- `toDocument`: A string that uniquely identifies the document to compare to.

<a id="return-value"></a>

## Return Value

Returns the result of comparing the two documents.

<a id="Discussion"></a>

## Discussion

The system calls this method during a find session to determine which document’s ranges to highlight next when a user taps the “next” or “previous” button. Return [NSOrderedAscending](../../foundation/comparisonresult/orderedascending.md) if the text ranges found in the `fromDocument` come before those found in the `toDocument` in your view. Otherwise, return [NSOrderedDescending](../../foundation/comparisonresult/ordereddescending.md).

The system only calls this method if you provide document identifiers to the session’s result aggregator.

## See Also

### Handling searches

- [performTextSearchWithQueryString:usingOptions:resultAggregator:](performtextsearchwithquerystring_usingoptions_resultaggregator_.md): Searches for ranges of text matching the string across all searchable documents and collects results in the aggregator.
- [UITextSearchAggregator](../uitextsearchaggregator-c.protocol.md): The methods you use on a find session’s aggregator to collect matching text ranges for a search.
- [compareFoundRange:toRange:inDocument:](comparefoundrange_torange_indocument_.md): Compares ranges from the set of matches the aggregator provides to determine navigation order.
- [UITextSearchDocumentIdentifier](../uitextsearchdocumentidentifier.md): A string that uniquely identifies a specific document when searching for matching text across multiple documents.
