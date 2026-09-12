> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/replacefoundtextinrange:indocument:withtext:](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/replacefoundtextinrange:indocument:withtext:)

# replaceFoundTextInRange:inDocument:withText:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Informs the searchable object to replace the text range for the highlighted search result.

## Declaration

```objectivec
- (void) replaceFoundTextInRange:(UITextRange *) range inDocument:(UITextSearchDocumentIdentifier) document withText:(NSString *) replacementText;
```

## Parameters

- `range`: The text range to replace.
- `document`: A string that uniquely identifies a document when searching multiple documents, or `nil` when searching a single document.
- `replacementText`: The string to replace the text with.

<a id="Discussion"></a>

## Discussion

When [supportsTextReplacement](supportstextreplacement.md) returns `YES,` the system calls this method during a find session to request a text range to replace.

## See Also

### Handling replacements

- [supportsTextReplacement](supportstextreplacement.md): A Boolean value that indicates whether the searchable object supports replacing text.
- [replaceAllOccurrencesOfQueryString:usingOptions:withText:](replacealloccurrencesofquerystring_usingoptions_withtext_.md): Informs the searchable object to replace all matching text across all searchable documents.
- [shouldReplaceFoundTextInRange:inDocument:withText:](shouldreplacefoundtextinrange_indocument_withtext_.md): Determines whether the searchable object allows replacement of the text range you provide.
