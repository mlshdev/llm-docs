> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/replaceall(querystring:options:withtext:)](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/replaceall(querystring:options:withtext:))

# replaceAll(queryString:options:withText:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Informs the searchable object to replace all matching text across all searchable documents.

## Declaration

```swift
func replaceAll(queryString: String, options: UITextSearchOptions, withText: String)
```

## Parameters

- `queryString`: The string to search for and replace.
- `options`: The configurable options to use for matching words and comparing strings.
- `withText`: The string to replace the text with.

<a id="Discussion"></a>

## Discussion

When [supportsTextReplacement](supportstextreplacement.md) returns `YES,` the system calls this method during a find session to request the replacement of all text matching the query string.

## Default Implementations

### UITextSearching Implementations

- [replaceAll(queryString:options:withText:)](replaceall%28querystring_options_withtext_%29-72c3k.md)

## See Also

### Handling replacements

- [supportsTextReplacement](supportstextreplacement.md): A Boolean value that indicates whether the searchable object supports replacing text.
- [replace(foundTextRange:document:withText:)](replace%28foundtextrange_document_withtext_%29.md): Informs the searchable object to replace the text range for the highlighted search result.
- [shouldReplace(foundTextRange:document:withText:)](shouldreplace%28foundtextrange_document_withtext_%29.md): Determines whether the searchable object allows replacement of the text range you provide.
