> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsatstypesetter](https://developer.apple.com/documentation/appkit/nsatstypesetter)

# NSATSTypesetter (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A concrete typesetter object that places glyphs during the text layout process.

## Declaration

```swift
class NSATSTypesetter
```

<a id="overview"></a>

## Overview

An [NSATSTypesetter](nsatstypesetter.md) object creates line fragment rectangles, positions glyphs within the line fragments, determines line breaks by word wrapping and hyphenation, and handles tab positioning. This object encapsulates the advanced typesetting capabilities of Core Text. [NSATSTypesetter](nsatstypesetter.md) provides line and character spacing accuracy and supports many languages, including bidirectional languages.

> **Note**

>  Use this class with [NSLayoutManager](nslayoutmanager.md) in macOS11 and earlier. In macOS12 and later, consider using [NSTextLayoutManager](nstextlayoutmanager.md) which provides improved support for international scripts.

## Topics

### Getting the shared typesetter object

- [shared](nsatstypesetter/shared.md): Returns a shared instance of the typesetter.

### Accessing the layout manager

- [layoutManager](nsatstypesetter/layoutmanager.md): The layout manager for the text being typeset.
- [usesFontLeading](nsatstypesetter/usesfontleading.md): A Boolean value controlling whether the typesetter uses the leading (or line gap) value specified in the font metric information.
- [typesetterBehavior](nsatstypesetter/typesetterbehavior.md): The current typesetter behavior value.
- [hyphenationFactor](nsatstypesetter/hyphenationfactor.md): The threshold controlling when hyphenation is attempted.
- [bidiProcessingEnabled](nsatstypesetter/bidiprocessingenabled.md): A Boolean value controlling whether the typesetter performs bidirectional text processing.

### Getting the text container

- [currentTextContainer](nsatstypesetter/currenttextcontainer.md): The text container for the text being typeset.
- [lineFragmentPadding](nsatstypesetter/linefragmentpadding.md): The amount (in points) by which text is inset within line fragment rectangles.

### Performing font substitution

- [substituteFont(for:)](nsatstypesetter/substitutefont%28for_%29.md): Returns a screen font suitable for use in place of the specified original font,.

### Getting the location of text tabs

- [textTab(forGlyphLocation:writingDirection:maxLocation:)](nsatstypesetter/texttab%28forglyphlocation_writingdirection_maxlocation_%29.md): Returns the text tab closest to the specified glyph location and not beyond a maximum position.

### Accessing paragraph information

- [attributedString](nsatstypesetter/attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](nsatstypesetter/setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphGlyphRange](nsatstypesetter/paragraphglyphrange.md): The current glyph range being processed.
- [paragraphSeparatorGlyphRange](nsatstypesetter/paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.

### Laying out a paragraph

- [layoutParagraph(at:)](nsatstypesetter/layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.

### Getting Spacing Information

- [lineSpacing(afterGlyphAt:withProposedLineFragmentRect:)](nsatstypesetter/linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacing(afterGlyphAt:withProposedLineFragmentRect:)](nsatstypesetter/paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added following a paragraph, in effect after the specified glyph.
- [paragraphSpacing(beforeGlyphAt:withProposedLineFragmentRect:)](nsatstypesetter/paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added before a paragraph, which is in effect before the specified glyph.

### Laying Out Glyphs

- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](nsatstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](nsatstypesetter/getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacter(forGlyphAt:)](nsatstypesetter/hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactor(forGlyphAt:)](nsatstypesetter/hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](nsatstypesetter/shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLine(byWordBeforeCharacterAt:)](nsatstypesetter/shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](nsatstypesetter/willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation(\_:forGlyphRange:)](nsatstypesetter/sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

### Deprecated

- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:)](nsatstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_%29.md): Deprecated. Extracts the information needed to lay out the glyphs in the given glyph buffer from the given glyph range.

## Relationships

### Inherits From

- [NSTypesetter](nstypesetter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.
- [NSTypesetter](nstypesetter.md): An abstract class that performs various type layout tasks.

# NSATSTypesetter (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A concrete typesetter object that places glyphs during the text layout process.

## Declaration

```objectivec
@interface NSATSTypesetter : NSTypesetter
```

<a id="overview"></a>

## Overview

An [NSATSTypesetter](nsatstypesetter.md) object creates line fragment rectangles, positions glyphs within the line fragments, determines line breaks by word wrapping and hyphenation, and handles tab positioning. This object encapsulates the advanced typesetting capabilities of Core Text. [NSATSTypesetter](nsatstypesetter.md) provides line and character spacing accuracy and supports many languages, including bidirectional languages.

> **Note**

>  Use this class with [NSLayoutManager](nslayoutmanager.md) in macOS11 and earlier. In macOS12 and later, consider using [NSTextLayoutManager](nstextlayoutmanager.md) which provides improved support for international scripts.

## Topics

### Getting the shared typesetter object

- [sharedTypesetter](nsatstypesetter/shared.md): Returns a shared instance of the typesetter.

### Accessing the layout manager

- [layoutManager](nsatstypesetter/layoutmanager.md): The layout manager for the text being typeset.
- [usesFontLeading](nsatstypesetter/usesfontleading.md): A Boolean value controlling whether the typesetter uses the leading (or line gap) value specified in the font metric information.
- [typesetterBehavior](nsatstypesetter/typesetterbehavior.md): The current typesetter behavior value.
- [hyphenationFactor](nsatstypesetter/hyphenationfactor.md): The threshold controlling when hyphenation is attempted.
- [bidiProcessingEnabled](nsatstypesetter/bidiprocessingenabled.md): A Boolean value controlling whether the typesetter performs bidirectional text processing.

### Getting the text container

- [currentTextContainer](nsatstypesetter/currenttextcontainer.md): The text container for the text being typeset.
- [lineFragmentPadding](nsatstypesetter/linefragmentpadding.md): The amount (in points) by which text is inset within line fragment rectangles.

### Performing font substitution

- [substituteFontForFont:](nsatstypesetter/substitutefont%28for_%29.md): Returns a screen font suitable for use in place of the specified original font,.

### Getting the location of text tabs

- [textTabForGlyphLocation:writingDirection:maxLocation:](nsatstypesetter/texttab%28forglyphlocation_writingdirection_maxlocation_%29.md): Returns the text tab closest to the specified glyph location and not beyond a maximum position.

### Accessing paragraph information

- [attributedString](nsatstypesetter/attributedstring.md): The backing store that contains the text on which this typesetter operates.
- [setParagraphGlyphRange:separatorGlyphRange:](nsatstypesetter/setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the glyph range being processed and the paragraph separator glyph range (the range of the paragraph separator character or characters).
- [paragraphGlyphRange](nsatstypesetter/paragraphglyphrange.md): The current glyph range being processed.
- [paragraphSeparatorGlyphRange](nsatstypesetter/paragraphseparatorglyphrange.md): The current paragraph separator range that contains the current glyph range and extends from one paragraph separator character to the next.

### Laying out a paragraph

- [layoutParagraphAtPoint:](nsatstypesetter/layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.

### Getting Spacing Information

- [lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](nsatstypesetter/linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](nsatstypesetter/paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added following a paragraph, in effect after the specified glyph.
- [paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](nsatstypesetter/paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space added before a paragraph, which is in effect before the specified glyph.

### Laying Out Glyphs

- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nsatstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for a control glyph, at the specified glyph position and character index in the text container.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](nsatstypesetter/getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and the portion of the rectangle that contains marks.
- [hyphenCharacterForGlyphAtIndex:](nsatstypesetter/hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph when hyphenation is enabled in the layout manager.
- [hyphenationFactorForGlyphAtIndex:](nsatstypesetter/hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at the specified glyph index.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](nsatstypesetter/shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Breaks a line by hyphenating before the character at the specified index.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](nsatstypesetter/shouldbreakline%28bywordbeforecharacterat_%29.md): Breaks a line by word-wrapping before the character at the specified index.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](nsatstypesetter/willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Notifies subclasses that the typesetter is about to set a new line fragment.
- [setHardInvalidation:forGlyphRange:](nsatstypesetter/sethardinvalidation%28__forglyphrange_%29.md): Sets a Boolean value that determines whether the layout manager invalidates the specified portion of the glyph cache.

### Deprecated

- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:](nsatstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_%29.md): Deprecated. Extracts the information needed to lay out the glyphs in the given glyph buffer from the given glyph range.
- [lineFragmentRectForProposedRect:remainingRect:](nsatstypesetter/linefragmentrectforproposedrect_remainingrect_.md): Deprecated. This method has been deprecated. Use the NSTypesetter method [getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:](nstypesetter/getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md) instead.

## Relationships

### Inherits From

- [NSTypesetter](nstypesetter.md)

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.
- [NSTypesetter](nstypesetter.md): An abstract class that performs various type layout tasks.
- [NSLineSweepDirection](nslinesweepdirection.md): Deprecated. Values that describe the progression of text on a page.
- [NSLineMovementDirection](nslinemovementdirection.md): Deprecated. The direction in which a line moves.
