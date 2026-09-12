> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:shouldbreaklinebywordbeforecharacterat:)](https://developer.apple.com/documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:shouldbreaklinebywordbeforecharacterat:))

# layoutManager(\_:shouldBreakLineByWordBeforeCharacterAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate whether to break the line at the specified word.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, shouldBreakLineByWordBeforeCharacterAt charIndex: Int) -> Bool
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `charIndex`: Index of the character delimiting the break point search.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current line break point is acceptable; [false](https://developer.apple.com/documentation/swift/false) if the layout manager should find the next break point opportunity before `charIndex`.

## See Also

### Handling line fragments

- [layoutManager(\_:shouldBreakLineByHyphenatingBeforeCharacterAt:)](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager(\_:lineSpacingAfterGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager(\_:paragraphSpacingAfterGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager(\_:paragraphSpacingBeforeGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager(\_:boundingBoxForControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [layoutManager(\_:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:in:forGlyphRange:)](layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.

# layoutManager:shouldBreakLineByWordBeforeCharacterAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks the delegate whether to break the line at the specified word.

## Declaration

```objectivec
- (BOOL) layoutManager:(NSLayoutManager *) layoutManager shouldBreakLineByWordBeforeCharacterAtIndex:(NSUInteger) charIndex;
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `charIndex`: Index of the character delimiting the break point search.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the current line break point is acceptable; [false](https://developer.apple.com/documentation/swift/false) if the layout manager should find the next break point opportunity before `charIndex`.

## See Also

### Handling line fragments

- [layoutManager:shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager:lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager:paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager:paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [layoutManager:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:inTextContainer:forGlyphRange:](layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.
