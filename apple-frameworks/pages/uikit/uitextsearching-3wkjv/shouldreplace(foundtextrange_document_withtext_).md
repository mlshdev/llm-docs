> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/shouldreplace(foundtextrange:document:withtext:)](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/shouldreplace(foundtextrange:document:withtext:))

# shouldReplace(foundTextRange:document:withText:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Determines whether the searchable object allows replacement of the text range you provide.

## Declaration

```swift
func shouldReplace(foundTextRange: UITextRange, document: Self.DocumentIdentifier?, withText: String) -> Bool
```

## Parameters

- `foundTextRange`: The range of characters in a text container to consider a replacement for.
- `document`: A string that uniquely identifies the document containing the text range.
- `withText`: The string to replace the text with.

<a id="return-value"></a>

## Return Value

Return `No` to prevent the replacement of a particular text range.

<a id="Discussion"></a>

## Discussion

Returning `NO` from this method disables the “replace” button in the find panel. If you don’t implement this method, the system assumes all results are replacable.

## Default Implementations

### UITextSearching Implementations

- [shouldReplace(foundTextRange:document:withText:)](shouldreplace%28foundtextrange_document_withtext_%29-58mw8.md)

## See Also

### Handling replacements

- [supportsTextReplacement](supportstextreplacement.md): A Boolean value that indicates whether the searchable object supports replacing text.
- [replace(foundTextRange:document:withText:)](replace%28foundtextrange_document_withtext_%29.md): Informs the searchable object to replace the text range for the highlighted search result.
- [replaceAll(queryString:options:withText:)](replaceall%28querystring_options_withtext_%29.md): Informs the searchable object to replace all matching text across all searchable documents.
