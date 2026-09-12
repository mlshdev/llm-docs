> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspresentationintent/paragraphintentwithidentity:nestedinsideintent:](https://developer.apple.com/documentation/foundation/nspresentationintent/paragraphintentwithidentity:nestedinsideintent:)

# paragraphIntentWithIdentity:nestedInsideIntent:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a  paragraph intent with the provided information.

## Declaration

```objectivec
+ (NSPresentationIntent *) paragraphIntentWithIdentity:(NSInteger) identity nestedInsideIntent:(NSPresentationIntent *) parent;
```

## Parameters

- `identity`: The unique identifier for the intent.
- `parent`: The parent intent of the paragraph.

<a id="return-value"></a>

## Return Value

A new intent with the kind set to [NSPresentationIntentKindParagraph](../nspresentationintentkind/nspresentationintentkindparagraph.md).

## See Also

### Creating a presentation intent

- [headerIntentWithIdentity:level:nestedInsideIntent:](headerintentwithidentity_level_nestedinsideintent_.md): Creates a header intent with the provided information.
- [orderedListIntentWithIdentity:nestedInsideIntent:](orderedlistintentwithidentity_nestedinsideintent_.md): Creates an ordered-list intent with the provided information.
- [unorderedListIntentWithIdentity:nestedInsideIntent:](unorderedlistintentwithidentity_nestedinsideintent_.md): Creates an unordered-list intent with the provided information.
- [listItemIntentWithIdentity:ordinal:nestedInsideIntent:](listitemintentwithidentity_ordinal_nestedinsideintent_.md): Creates an item for an ordered list with the provided information.
- [codeBlockIntentWithIdentity:languageHint:nestedInsideIntent:](codeblockintentwithidentity_languagehint_nestedinsideintent_.md): Creates an code-block intent with the provided information.
- [blockQuoteIntentWithIdentity:nestedInsideIntent:](blockquoteintentwithidentity_nestedinsideintent_.md): Creates a block-quote intent with the provided information.
- [thematicBreakIntentWithIdentity:nestedInsideIntent:](thematicbreakintentwithidentity_nestedinsideintent_.md): Creates a thematic break intent with the provided information.
- [tableIntentWithIdentity:columnCount:alignments:nestedInsideIntent:](tableintentwithidentity_columncount_alignments_nestedinsideintent_.md): Creates a table intent with the provided information.
- [tableHeaderRowIntentWithIdentity:nestedInsideIntent:](tableheaderrowintentwithidentity_nestedinsideintent_.md): Creates a table header intent with the provided information.
- [tableRowIntentWithIdentity:row:nestedInsideIntent:](tablerowintentwithidentity_row_nestedinsideintent_.md): Creates a table row intent with the provided information.
- [tableCellIntentWithIdentity:column:nestedInsideIntent:](tablecellintentwithidentity_column_nestedinsideintent_.md): Creates a table cell intent with the provided information.
