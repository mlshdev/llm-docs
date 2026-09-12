> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/typingattributes](https://developer.apple.com/documentation/appkit/nstextview/typingattributes)

# typingAttributes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s typing attributes.

## Declaration

```swift
var typingAttributes: [NSAttributedString.Key : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

Typing attributes are reset automatically whenever the selection changes. However, if you add any user actions that change text attributes, the action should use this method to apply those attributes afterwards. User actions that change attributes should always set the typing attributes because there might not be a subsequent change in selection before the next typing.

## See Also

### Setting text attributes

- [alignJustified(\_:)](alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes(\_:)](changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor(\_:)](changecolor%28__%29.md): Sets the color of the selected text.
- [setAlignment(\_:range:)](setalignment%28__range_%29.md): Sets the alignment of the paragraphs containing characters in the specified range.
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

# typingAttributes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s typing attributes.

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,id> * typingAttributes;
```

<a id="Discussion"></a>

## Discussion

Typing attributes are reset automatically whenever the selection changes. However, if you add any user actions that change text attributes, the action should use this method to apply those attributes afterwards. User actions that change attributes should always set the typing attributes because there might not be a subsequent change in selection before the next typing.

## See Also

### Setting text attributes

- [alignJustified:](alignjustified%28__%29.md): Applies full justification to selected paragraphs (or all text, if the receiver is a plain text object).
- [changeAttributes:](changeattributes%28__%29.md): Changes the attributes of the current selection.
- [changeColor:](changecolor%28__%29.md): Sets the color of the selected text.
- [setAlignment:range:](setalignment%28__range_%29.md): Sets the alignment of the paragraphs containing characters in the specified range.
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
