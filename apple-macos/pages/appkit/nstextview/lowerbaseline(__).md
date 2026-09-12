> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/lowerbaseline(_:)](https://developer.apple.com/documentation/appkit/nstextview/lowerbaseline(_:))

# lowerBaseline(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Lowers the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.

## Declaration

```swift
func lowerBaseline(_ sender: Any?)
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

As such, this method defines a more primitive operation than subscripting.

## See Also

### Related Documentation

- [unscript(\_:)](../nstext/unscript%28__%29.md): This action method removes any superscripting or subscripting from selected text (or all text if the receiver is a plain text object).
- [subscript(\_:)](../nstext/subscript%28__%29.md): This action method applies a subscript attribute to selected text (or all text if the receiver is a plain text object), lowering its baseline offset by a predefined amount.

### Setting text attributes

- [alignJustified(\_:)](alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes(\_:)](changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor(\_:)](changecolor%28__%29.md): Sets the color of the selected text.
- [setAlignment(\_:range:)](setalignment%28__range_%29.md): Sets the alignment of the paragraphs containing characters in the specified range.
- [typingAttributes](typingattributes.md): The receiver’s typing attributes.
- [useStandardKerning(\_:)](usestandardkerning%28__%29.md): Set the receiver to use pair kerning data for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [raiseBaseline(\_:)](raisebaseline%28__%29.md): Raises the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [turnOffKerning(\_:)](turnoffkerning%28__%29.md): Sets the receiver to use nominal glyph spacing for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [loosenKerning(\_:)](loosenkerning%28__%29.md): Increases the space between glyphs in the receiver’s selection, or in all text if the receiver is a plain text view.
- [tightenKerning(\_:)](tightenkerning%28__%29.md): Decreases the space between glyphs in the receiver’s selection, or for all glyphs if the receiver is a plain text view.
- [useStandardLigatures(\_:)](usestandardligatures%28__%29.md): Sets the receiver to use the standard ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [turnOffLigatures(\_:)](turnoffligatures%28__%29.md): Sets the receiver to use only required ligatures when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [useAllLigatures(\_:)](useallligatures%28__%29.md): Sets the receiver to use all ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [toggleTraditionalCharacterShape(\_:)](toggletraditionalcharactershape%28__%29.md): Deprecated. Toggles the `NSCharacterShapeAttributeName` attribute at the current selection.

# lowerBaseline: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Lowers the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.

## Declaration

```objectivec
- (void) lowerBaseline:(id) sender;
```

## Parameters

- `sender`: The control that sent the message; may be `nil`.

<a id="Discussion"></a>

## Discussion

As such, this method defines a more primitive operation than subscripting.

## See Also

### Related Documentation

- [unscript:](../nstext/unscript%28__%29.md): This action method removes any superscripting or subscripting from selected text (or all text if the receiver is a plain text object).
- [subscript:](../nstext/subscript%28__%29.md): This action method applies a subscript attribute to selected text (or all text if the receiver is a plain text object), lowering its baseline offset by a predefined amount.

### Setting text attributes

- [alignJustified:](alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes:](changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor:](changecolor%28__%29.md): Sets the color of the selected text.
- [setAlignment:range:](setalignment%28__range_%29.md): Sets the alignment of the paragraphs containing characters in the specified range.
- [typingAttributes](typingattributes.md): The receiver’s typing attributes.
- [useStandardKerning:](usestandardkerning%28__%29.md): Set the receiver to use pair kerning data for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [raiseBaseline:](raisebaseline%28__%29.md): Raises the baseline offset of selected text by 1 point, or of all text if the receiver is a plain text view.
- [turnOffKerning:](turnoffkerning%28__%29.md): Sets the receiver to use nominal glyph spacing for the glyphs in its selection, or for all glyphs if the receiver is a plain text view.
- [loosenKerning:](loosenkerning%28__%29.md): Increases the space between glyphs in the receiver’s selection, or in all text if the receiver is a plain text view.
- [tightenKerning:](tightenkerning%28__%29.md): Decreases the space between glyphs in the receiver’s selection, or for all glyphs if the receiver is a plain text view.
- [useStandardLigatures:](usestandardligatures%28__%29.md): Sets the receiver to use the standard ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [turnOffLigatures:](turnoffligatures%28__%29.md): Sets the receiver to use only required ligatures when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [useAllLigatures:](useallligatures%28__%29.md): Sets the receiver to use all ligatures available for the fonts and languages used when setting text, for the glyphs in the selection if the receiver is a rich text view, or for all glyphs if it’s a plain text view.
- [toggleTraditionalCharacterShape:](toggletraditionalcharactershape%28__%29.md): Deprecated. Toggles the `NSCharacterShapeAttributeName` attribute at the current selection.
