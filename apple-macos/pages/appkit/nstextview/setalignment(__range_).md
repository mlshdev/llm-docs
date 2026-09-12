> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/setalignment(_:range:)](https://developer.apple.com/documentation/appkit/nstextview/setalignment(_:range:))

# setAlignment(\_:range:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the alignment of the paragraphs containing characters in the specified range.

## Declaration

```swift
func setAlignment(_ alignment: NSTextAlignment, range: NSRange)
```

## Parameters

- `alignment`: The new alignment.
- `range`: The range of characters whose paragraphs will have their alignment set.

<a id="Discussion"></a>

## Discussion

This method does not include undo support by default. Clients must invoke [shouldChangeText(inRanges:replacementStrings:)](shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeText(in:replacementString:)](shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

## See Also

### Related Documentation

- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.

### Setting text attributes

- [alignJustified(\_:)](alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes(\_:)](changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor(\_:)](changecolor%28__%29.md): Sets the color of the selected text.
- [typingAttributes](typingattributes.md): The receiver’s typing attributes.
- [useStandardKerning(\_:)](usestandardkerning%28__%29.md): Set the receiver to use pair kerning data for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [lowerBaseline(\_:)](lowerbaseline%28__%29.md): Lowers the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [raiseBaseline(\_:)](raisebaseline%28__%29.md): Raises the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [turnOffKerning(\_:)](turnoffkerning%28__%29.md): Sets the receiver to use nominal glyph spacing for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [loosenKerning(\_:)](loosenkerning%28__%29.md): Increases the space between glyphs in the receiver’s selection, or in all text if the receiver is a plain text view.
- [tightenKerning(\_:)](tightenkerning%28__%29.md): Decreases the space between glyphs in the receiver’s selection, or for all glyphs if the receiver is a plain text view.
- [useStandardLigatures(\_:)](usestandardligatures%28__%29.md): Sets the receiver to use the standard ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [turnOffLigatures(\_:)](turnoffligatures%28__%29.md): Sets the receiver to use only required ligatures when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [useAllLigatures(\_:)](useallligatures%28__%29.md): Sets the receiver to use all ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [toggleTraditionalCharacterShape(\_:)](toggletraditionalcharactershape%28__%29.md): Deprecated. Toggles the `NSCharacterShapeAttributeName` attribute at the current selection.

# setAlignment:range: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the alignment of the paragraphs containing characters in the specified range.

## Declaration

```objectivec
- (void) setAlignment:(NSTextAlignment) alignment range:(NSRange) range;
```

## Parameters

- `alignment`: The new alignment.
- `range`: The range of characters whose paragraphs will have their alignment set.

<a id="Discussion"></a>

## Discussion

This method does not include undo support by default. Clients must invoke [shouldChangeTextInRanges:replacementStrings:](shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeTextInRange:replacementString:](shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

## See Also

### Related Documentation

- [rangeForUserParagraphAttributeChange](rangeforuserparagraphattributechange.md): The range of characters affected by an action method that changes paragraph (not character) attributes.

### Setting text attributes

- [alignJustified:](alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes:](changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor:](changecolor%28__%29.md): Sets the color of the selected text.
- [typingAttributes](typingattributes.md): The receiver’s typing attributes.
- [useStandardKerning:](usestandardkerning%28__%29.md): Set the receiver to use pair kerning data for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [lowerBaseline:](lowerbaseline%28__%29.md): Lowers the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [raiseBaseline:](raisebaseline%28__%29.md): Raises the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [turnOffKerning:](turnoffkerning%28__%29.md): Sets the receiver to use nominal glyph spacing for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [loosenKerning:](loosenkerning%28__%29.md): Increases the space between glyphs in the receiver’s selection, or in all text if the receiver is a plain text view.
- [tightenKerning:](tightenkerning%28__%29.md): Decreases the space between glyphs in the receiver’s selection, or for all glyphs if the receiver is a plain text view.
- [useStandardLigatures:](usestandardligatures%28__%29.md): Sets the receiver to use the standard ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [turnOffLigatures:](turnoffligatures%28__%29.md): Sets the receiver to use only required ligatures when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [useAllLigatures:](useallligatures%28__%29.md): Sets the receiver to use all ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [toggleTraditionalCharacterShape:](toggletraditionalcharactershape%28__%29.md): Deprecated. Toggles the `NSCharacterShapeAttributeName` attribute at the current selection.
