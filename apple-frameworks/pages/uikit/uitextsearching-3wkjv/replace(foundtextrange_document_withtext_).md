> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/replace(foundtextrange:document:withtext:)](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/replace(foundtextrange:document:withtext:))

# replace(foundTextRange:document:withText:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Informs the searchable object to replace the text range for the highlighted search result.

## Declaration

```swift
func replace(foundTextRange: UITextRange, document: Self.DocumentIdentifier?, withText: String)
```

## Parameters

- `foundTextRange`: The text range to replace.
- `document`: A string that uniquely identifies a document when searching multiple documents, or `nil` when searching a single document.
- `withText`: The string to replace the text with.

<a id="Discussion"></a>

## Discussion

When [supportsTextReplacement](supportstextreplacement.md) returns `YES,` the system calls this method during a find session to request a text range to replace.

## Default Implementations

### UITextSearching Implementations

- [replace(foundTextRange:document:withText:)](replace%28foundtextrange_document_withtext_%29-4psma.md)

## See Also

### Handling replacements

- [supportsTextReplacement](supportstextreplacement.md): A Boolean value that indicates whether the searchable object supports replacing text.
- [replaceAll(queryString:options:withText:)](replaceall%28querystring_options_withtext_%29.md): Informs the searchable object to replace all matching text across all searchable documents.
- [shouldReplace(foundTextRange:document:withText:)](shouldreplace%28foundtextrange_document_withtext_%29.md): Determines whether the searchable object allows replacement of the text range you provide.
