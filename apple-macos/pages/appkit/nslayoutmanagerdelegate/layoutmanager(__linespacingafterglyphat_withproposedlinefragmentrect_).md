> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:linespacingafterglyphat:withproposedlinefragmentrect:)](https://developer.apple.com/documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:linespacingafterglyphat:withproposedlinefragmentrect:))

# layoutManager(\_:lineSpacingAfterGlyphAt:withProposedLineFragmentRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the amount of space to add to the end of a line.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, lineSpacingAfterGlyphAt glyphIndex: Int, withProposedLineFragmentRect rect: NSRect) -> CGFloat
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `glyphIndex`: The index of the glyph at the end of the line.
- `rect`: The proposed line fragment rectangle for the current line.

<a id="return-value"></a>

## Return Value

The line spacing after the current line.

<a id="Discussion"></a>

## Discussion

This message is sent while each line is laid out to enable the layout manager delegate to customize the shape of line.

## See Also

### Handling line fragments

- [layoutManager(\_:shouldBreakLineByHyphenatingBeforeCharacterAt:)](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager(\_:shouldBreakLineByWordBeforeCharacterAt:)](layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager(\_:paragraphSpacingAfterGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager(\_:paragraphSpacingBeforeGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager(\_:boundingBoxForControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [layoutManager(\_:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:in:forGlyphRange:)](layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.

# layoutManager:lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Returns the amount of space to add to the end of a line.

## Declaration

```objectivec
- (CGFloat) layoutManager:(NSLayoutManager *) layoutManager lineSpacingAfterGlyphAtIndex:(NSUInteger) glyphIndex withProposedLineFragmentRect:(NSRect) rect;
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `glyphIndex`: The index of the glyph at the end of the line.
- `rect`: The proposed line fragment rectangle for the current line.

<a id="return-value"></a>

## Return Value

The line spacing after the current line.

<a id="Discussion"></a>

## Discussion

This message is sent while each line is laid out to enable the layout manager delegate to customize the shape of line.

## See Also

### Handling line fragments

- [layoutManager:shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager:shouldBreakLineByWordBeforeCharacterAtIndex:](layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager:paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager:paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [layoutManager:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:inTextContainer:forGlyphRange:](layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.
