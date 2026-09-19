> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/supportstextreplacement

# supportsTextReplacement

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

A Boolean value that indicates whether the searchable object supports replacing text.

## Declaration

```swift
var supportsTextReplacement: Bool { get }
```

## Default Implementations

### UITextSearching Implementations

- [supportsTextReplacement](supportstextreplacement-68rh6.md)

## See Also

### Handling replacements

- [replace(foundTextRange:document:withText:)](replace%28foundtextrange_document_withtext_%29.md): Informs the searchable object to replace the text range for the highlighted search result.
- [replaceAll(queryString:options:withText:)](replaceall%28querystring_options_withtext_%29.md): Informs the searchable object to replace all matching text across all searchable documents.
- [shouldReplace(foundTextRange:document:withText:)](shouldreplace%28foundtextrange_document_withtext_%29.md): Determines whether the searchable object allows replacement of the text range you provide.
