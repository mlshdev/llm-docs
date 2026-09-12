> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:boundingboxforcontrolglyphat:for:proposedlinefragment:glyphposition:characterindex:)](https://developer.apple.com/documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:boundingboxforcontrolglyphat:for:proposedlinefragment:glyphposition:characterindex:))

# layoutManager(\_:boundingBoxForControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the bounding rectangle for the specified control glyph with the specified parameters.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, boundingBoxForControlGlyphAt glyphIndex: Int, for textContainer: NSTextContainer, proposedLineFragment proposedRect: CGRect, glyphPosition: CGPoint, characterIndex charIndex: Int) -> CGRect
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `glyphIndex`: The index of the control glyph in question.
- `textContainer`: The text container to use to calculate the position.
- `proposedRect`: The proposed line fragment rectangle.
- `glyphPosition`: The position of the glyph in `textContainer`.
- `charIndex`: The character index in `textContainer`.

<a id="return-value"></a>

## Return Value

The bounding rectangle for the specified control glyph with the specified parameters.

<a id="Discussion"></a>

## Discussion

Sent for resolving the glyph metrics for [NSControlCharacterWhitespaceAction](../nscontrolcharacterwhitespaceaction.md) control character.

## See Also

### Handling line fragments

- [layoutManager(\_:shouldBreakLineByHyphenatingBeforeCharacterAt:)](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager(\_:shouldBreakLineByWordBeforeCharacterAt:)](layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager(\_:lineSpacingAfterGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager(\_:paragraphSpacingAfterGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager(\_:paragraphSpacingBeforeGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager(\_:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:in:forGlyphRange:)](layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.

# layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the bounding rectangle for the specified control glyph with the specified parameters.

## Declaration

```objectivec
- (CGRect) layoutManager:(NSLayoutManager *) layoutManager boundingBoxForControlGlyphAtIndex:(NSUInteger) glyphIndex forTextContainer:(NSTextContainer *) textContainer proposedLineFragment:(CGRect) proposedRect glyphPosition:(CGPoint) glyphPosition characterIndex:(NSUInteger) charIndex;
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `glyphIndex`: The index of the control glyph in question.
- `textContainer`: The text container to use to calculate the position.
- `proposedRect`: The proposed line fragment rectangle.
- `glyphPosition`: The position of the glyph in `textContainer`.
- `charIndex`: The character index in `textContainer`.

<a id="return-value"></a>

## Return Value

The bounding rectangle for the specified control glyph with the specified parameters.

<a id="Discussion"></a>

## Discussion

Sent for resolving the glyph metrics for [NSControlCharacterWhitespaceAction](../nscontrolcharacterwhitespaceaction.md) control character.

## See Also

### Handling line fragments

- [layoutManager:shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager:shouldBreakLineByWordBeforeCharacterAtIndex:](layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager:lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager:paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager:paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:inTextContainer:forGlyphRange:](layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.
