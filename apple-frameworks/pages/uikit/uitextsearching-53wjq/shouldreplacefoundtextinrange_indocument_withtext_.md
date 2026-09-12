> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/shouldreplacefoundtextinrange:indocument:withtext:](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/shouldreplacefoundtextinrange:indocument:withtext:)

# shouldReplaceFoundTextInRange:inDocument:withText:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Determines whether the searchable object allows replacement of the text range you provide.

## Declaration

```objectivec
- (BOOL) shouldReplaceFoundTextInRange:(UITextRange *) range inDocument:(UITextSearchDocumentIdentifier) document withText:(NSString *) replacementText;
```

## Parameters

- `range`: The range of characters in a text container to consider a replacement for.
- `document`: A string that uniquely identifies the document containing the text range.
- `replacementText`: The string to replace the text with.

<a id="return-value"></a>

## Return Value

Return `No` to prevent the replacement of a particular text range.

<a id="Discussion"></a>

## Discussion

Returning `NO` from this method disables the “replace” button in the find panel. If you don’t implement this method, the system assumes all results are replacable.

## See Also

### Handling replacements

- [supportsTextReplacement](supportstextreplacement.md): A Boolean value that indicates whether the searchable object supports replacing text.
- [replaceFoundTextInRange:inDocument:withText:](replacefoundtextinrange_indocument_withtext_.md): Informs the searchable object to replace the text range for the highlighted search result.
- [replaceAllOccurrencesOfQueryString:usingOptions:withText:](replacealloccurrencesofquerystring_usingoptions_withtext_.md): Informs the searchable object to replace all matching text across all searchable documents.
