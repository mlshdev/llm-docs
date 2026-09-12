> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-53wjq/supportstextreplacement](https://developer.apple.com/documentation/uikit/uitextsearching-53wjq/supportstextreplacement)

# supportsTextReplacement

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the searchable object supports replacing text.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsTextReplacement;
```

## See Also

### Handling replacements

- [replaceFoundTextInRange:inDocument:withText:](replacefoundtextinrange_indocument_withtext_.md): Informs the searchable object to replace the text range for the highlighted search result.
- [replaceAllOccurrencesOfQueryString:usingOptions:withText:](replacealloccurrencesofquerystring_usingoptions_withtext_.md): Informs the searchable object to replace all matching text across all searchable documents.
- [shouldReplaceFoundTextInRange:inDocument:withText:](shouldreplacefoundtextinrange_indocument_withtext_.md): Determines whether the searchable object allows replacement of the text range you provide.
