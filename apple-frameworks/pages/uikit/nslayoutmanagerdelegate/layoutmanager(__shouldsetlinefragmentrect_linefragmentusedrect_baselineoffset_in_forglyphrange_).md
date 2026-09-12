> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:shouldsetlinefragmentrect:linefragmentusedrect:baselineoffset:in:forglyphrange:)](https://developer.apple.com/documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:shouldsetlinefragmentrect:linefragmentusedrect:baselineoffset:in:forglyphrange:))

# layoutManager(\_:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:in:forGlyphRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Customizes the line fragment geometry before committing it to the layout cache.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, shouldSetLineFragmentRect lineFragmentRect: UnsafeMutablePointer<CGRect>, lineFragmentUsedRect: UnsafeMutablePointer<CGRect>, baselineOffset: UnsafeMutablePointer<CGFloat>, in textContainer: NSTextContainer, forGlyphRange glyphRange: NSRange) -> Bool
```

## Parameters

- `layoutManager`: The layout manager doing the work.
- `lineFragmentRect`: The proposed rectangle that contains the glyphs. You may modify this rectangle as needed.
- `lineFragmentUsedRect`: The portion of `lineFragmentRect` that actually contains glyphs or other rendered marks, including the text container’s line fragment padding. This rectangle must be equal to `lineFragmentRect` or wholly contained by it. You may modify this rectangle as needed.
- `baselineOffset`: The vertical distance (in pixels) from the line fragment origin to the baseline on which the glyphs align.
- `textContainer`: The text container for the line fragments.
- `glyphRange`: The range of glyphs being laid out.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you modified the layout information and want your modifications to be used or [false](https://developer.apple.com/documentation/swift/false) if the original layout information should be used.

<a id="Discussion"></a>

## Discussion

Use this method to modify the line fragment rectangles associated with the text container. It is your responsibility to ensure that the modified rectangles remain valid and still lie within the text container.

## See Also

### Handling line fragments

- [layoutManager(\_:shouldBreakLineByHyphenatingBeforeCharacterAt:)](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager(\_:shouldBreakLineByWordBeforeCharacterAt:)](layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager(\_:lineSpacingAfterGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager(\_:paragraphSpacingAfterGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager(\_:paragraphSpacingBeforeGlyphAt:withProposedLineFragmentRect:)](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager(\_:boundingBoxForControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.

# layoutManager:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:inTextContainer:forGlyphRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Customizes the line fragment geometry before committing it to the layout cache.

## Declaration

```objectivec
- (BOOL) layoutManager:(NSLayoutManager *) layoutManager shouldSetLineFragmentRect:(CGRect *) lineFragmentRect lineFragmentUsedRect:(CGRect *) lineFragmentUsedRect baselineOffset:(CGFloat *) baselineOffset inTextContainer:(NSTextContainer *) textContainer forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `layoutManager`: The layout manager doing the work.
- `lineFragmentRect`: The proposed rectangle that contains the glyphs. You may modify this rectangle as needed.
- `lineFragmentUsedRect`: The portion of `lineFragmentRect` that actually contains glyphs or other rendered marks, including the text container’s line fragment padding. This rectangle must be equal to `lineFragmentRect` or wholly contained by it. You may modify this rectangle as needed.
- `baselineOffset`: The vertical distance (in pixels) from the line fragment origin to the baseline on which the glyphs align.
- `textContainer`: The text container for the line fragments.
- `glyphRange`: The range of glyphs being laid out.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you modified the layout information and want your modifications to be used or [false](https://developer.apple.com/documentation/swift/false) if the original layout information should be used.

<a id="Discussion"></a>

## Discussion

Use this method to modify the line fragment rectangles associated with the text container. It is your responsibility to ensure that the modified rectangles remain valid and still lie within the text container.

## See Also

### Handling line fragments

- [layoutManager:shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager:shouldBreakLineByWordBeforeCharacterAtIndex:](layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager:lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager:paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager:paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
