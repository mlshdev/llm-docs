> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter](https://developer.apple.com/documentation/appkit/nstypesetter)

# NSTypesetter (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that performs various type layout tasks.

## Declaration

```swift
class NSTypesetter
```

<a id="overview"></a>

## Overview

[NSLayoutManager](nslayoutmanager.md) uses concrete subclasses of [NSTypesetter](nstypesetter.md) to perform line layout, which includes word wrapping, hyphenation, and line breaking in either vertical or horizontal rectangles. By default, the text system uses the concrete subclass [NSATSTypesetter](nsatstypesetter.md).

> **Note**

>  Use this class with [NSLayoutManager](nslayoutmanager.md) in macOS11 and earlier. In macOS12 and later, consider using [NSLayoutManager](nslayoutmanager.md) which provides improved support for international scripts.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSTypesetter` provides concrete subclasses with default implementation interfacing with the Cocoa text system. By subclassing `NSTypesetter`, an application can override the [layoutParagraph(at:)](nstypesetter/layoutparagraph%28at_%29.md) method to integrate a custom typesetting engine into the Cocoa text system. On the other hand, an application can subclass [NSATSTypesetter](nsatstypesetter.md) and override the glyph storage interface to integrate the concrete subclass into its own custom layout system.

`NSTypesetter` methods belong to three categories: glyph storage interface methods, layout phase interface methods, and core typesetter methods. The glyph storage interface methods map to [NSLayoutManager](nslayoutmanager.md) methods. The typesetter itself calls these methods, and their default implementations call the Cocoa layout manager. An `NSTypesetter` subclass can override these methods to call its own glyph storage facility, in which case it should override all of them. (This doesn’t preclude the overridden method calling its superclass implementation if appropriate).

The layout phase interface provides control points similar to delegate methods; if implemented, the system invokes these methods to notify an `NSTypesetter` subclass of events in the layout process so it can intervene as needed.

The remainder of the `NSTypesetter` methods are primitive, core typesetter methods. The core typesetter methods correlate with typesetting state attributes; the layout manager calls these methods to store its values before starting the layout process. If you subclass `NSTypesetter` and override the glyph storage interface methods, you can call the core methods to control the typesetter directly.

<a id="Glyph-Storage-Interface"></a>

#### Glyph Storage Interface

Override these methods to use `NSTypesetter`’s built-in concrete subclass, [NSATSTypesetter](nsatstypesetter.md), with a custom glyph storage and layout system other than the Cocoa layout manager and text container mechanism.

- [characterRange(forGlyphRange:actualGlyphRange:)](nstypesetter/characterrange%28forglyphrange_actualglyphrange_%29.md)
- [glyphRange(forCharacterRange:actualCharacterRange:)](nstypesetter/glyphrange%28forcharacterrange_actualcharacterrange_%29.md)
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](nstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md)
- [getLineFragmentRect(\_:usedRect:remaining:forStartingGlyphAt:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:)](nstypesetter/getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md)
- [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](nstypesetter/setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md)
- [substituteGlyphs(in:withGlyphs:)](nstypesetter/substituteglyphs%28in_withglyphs_%29.md)
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](nstypesetter/insertglyph%28__atglyphindex_characterindex_%29.md)
- [deleteGlyphs(in:)](nstypesetter/deleteglyphs%28in_%29.md)
- [setNotShownAttribute(\_:forGlyphRange:)](nstypesetter/setnotshownattribute%28__forglyphrange_%29.md)
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](nstypesetter/setdrawsoutsidelinefragment%28__forglyphrange_%29.md)
- [setLocation(\_:withAdvancements:forStartOfGlyphRange:)](nstypesetter/setlocation%28__withadvancements_forstartofglyphrange_%29.md)
- [setAttachmentSize(\_:forGlyphRange:)](nstypesetter/setattachmentsize%28__forglyphrange_%29.md)
- [setBidiLevels(\_:forGlyphRange:)](nstypesetter/setbidilevels%28__forglyphrange_%29.md)

<a id="Layout-Phase-Interface"></a>

#### Layout Phase Interface

Override these methods to customize the text layout process, including modifying line fragments, controlling line breaking and hyphenation, and controlling the behavior of tabs and other control glyphs.

- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](nstypesetter/willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md)
- [shouldBreakLine(byWordBeforeCharacterAt:)](nstypesetter/shouldbreakline%28bywordbeforecharacterat_%29.md)
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](nstypesetter/shouldbreakline%28byhyphenatingbeforecharacterat_%29.md)
- [hyphenationFactor(forGlyphAt:)](nstypesetter/hyphenationfactor%28forglyphat_%29.md)
- [hyphenCharacter(forGlyphAt:)](nstypesetter/hyphencharacter%28forglyphat_%29.md)
- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md)

## Topics

### Getting a typesetter

- [sharedSystemTypesetter](nstypesetter/sharedsystemtypesetter.md): Returns a shared instance of a reentrant typesetter.
- [sharedSystemTypesetter(for:)](nstypesetter/sharedsystemtypesetter%28for_%29.md): Returns a shared instance of a reentrant typesetter that implements typesetting with the specified behavior.

### Getting information about a typesetter

- [defaultTypesetterBehavior](nstypesetter/defaulttypesetterbehavior.md): Returns the default typesetter behavior.

### Getting information about glyphs

- [printingAdjustment(in:forNominallySpacedGlyphRange:packedGlyphs:count:)](nstypesetter/printingadjustment%28in_fornominallyspacedglyphrange_packedglyphs_count_%29.md): Returns the interglyph spacing in the specified range when sent to a printer.
- [baselineOffset(in:glyphIndex:)](nstypesetter/baselineoffset%28in_glyphindex_%29.md): Returns the distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.

### Accessing the layout manager

- [layoutManager](nstypesetter/layoutmanager.md): Returns the layout manager for the text being typeset.
- [usesFontLeading](nstypesetter/usesfontleading.md): Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.
- [typesetterBehavior](nstypesetter/typesetterbehavior.md): Returns the current typesetter behavior.
- [hyphenationFactor](nstypesetter/hyphenationfactor.md): Returns the current hyphenation factor.

### Managing text containers

- [currentTextContainer](nstypesetter/currenttextcontainer.md): Returns the text container for the text being typeset.
- [textContainers](nstypesetter/textcontainers.md): Returns an array containing the text containers belonging to the current layout manager.
- [lineFragmentPadding](nstypesetter/linefragmentpadding.md): Returns the current line fragment padding, in points.

### Performing font substitution

- [substituteFont(for:)](nstypesetter/substitutefont%28for_%29.md): Returns a screen font suitable for use in place of a given font.

### Getting the location of text tabs

- [textTab(forGlyphLocation:writingDirection:maxLocation:)](nstypesetter/texttab%28forglyphlocation_writingdirection_maxlocation_%29.md): Returns the text tab next closest to a given glyph location within the given parameters.

### Bidirectional text processing

- [bidiProcessingEnabled](nstypesetter/bidiprocessingenabled.md): Returns whether bidirectional text processing is enabled.

### Accessing paragraph typesetting information

- [currentParagraphStyle](nstypesetter/currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](nstypesetter/attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange(\_:separatorGlyphRange:)](nstypesetter/setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](nstypesetter/paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](nstypesetter/paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](nstypesetter/paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](nstypesetter/paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](nstypesetter/attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.

### Getting spacing information

- [lineSpacing(afterGlyphAt:withProposedLineFragmentRect:)](nstypesetter/linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacing(afterGlyphAt:withProposedLineFragmentRect:)](nstypesetter/paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the paragraph spacing that is in effect after the specified glyph.
- [paragraphSpacing(beforeGlyphAt:withProposedLineFragmentRect:)](nstypesetter/paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space—added before a paragraph—that is in effect before the specified glyph.

### Laying out a paragraph

- [layoutParagraph(at:)](nstypesetter/layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph()](nstypesetter/beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph()](nstypesetter/endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLine(withGlyphAt:)](nstypesetter/beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLine(withGlyphRange:)](nstypesetter/endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.

### Laying out characters

- [layoutCharacters(in:for:maximumNumberOfLineFragments:)](nstypesetter/layoutcharacters%28in_for_maximumnumberoflinefragments_%29.md): Lays out characters in the given character range for the specified layout manager.

### Laying out glyphs

- [layoutGlyphs(in:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:)](nstypesetter/layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBox(forControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect(\_:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:)](nstypesetter/getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [getLineFragmentRect(\_:usedRect:remaining:forStartingGlyphAt:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:)](nstypesetter/getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md): Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.
- [hyphenCharacter(forGlyphAt:)](nstypesetter/hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph.
- [hyphenationFactor(forGlyphAt:)](nstypesetter/hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLine(byHyphenatingBeforeCharacterAt:)](nstypesetter/shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [shouldBreakLine(byWordBeforeCharacterAt:)](nstypesetter/shouldbreakline%28bywordbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by a word break at the specified character.
- [willSetLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](nstypesetter/willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation(\_:forGlyphRange:)](nstypesetter/sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.

### Interfacing with Glyph Storage

- [characterRange(forGlyphRange:actualGlyphRange:)](nstypesetter/characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRange(forCharacterRange:actualCharacterRange:)](nstypesetter/glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize(\_:forGlyphRange:)](nstypesetter/setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels(\_:forGlyphRange:)](nstypesetter/setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](nstypesetter/setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](nstypesetter/setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation(\_:withAdvancements:forStartOfGlyphRange:)](nstypesetter/setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute(\_:forGlyphRange:)](nstypesetter/setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

### Deprecated

- [actionForControlCharacter(at:)](nstypesetter/actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphs(in:)](nstypesetter/deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphs(in:withGlyphs:)](nstypesetter/substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](nstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](nstypesetter/insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacter(at:)](nstypesetter/actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSATSTypesetter](nsatstypesetter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.
- [NSATSTypesetter](nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.

# NSTypesetter (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An abstract class that performs various type layout tasks.

## Declaration

```objectivec
@interface NSTypesetter : NSObject
```

<a id="overview"></a>

## Overview

[NSLayoutManager](nslayoutmanager.md) uses concrete subclasses of [NSTypesetter](nstypesetter.md) to perform line layout, which includes word wrapping, hyphenation, and line breaking in either vertical or horizontal rectangles. By default, the text system uses the concrete subclass [NSATSTypesetter](nsatstypesetter.md).

> **Note**

>  Use this class with [NSLayoutManager](nslayoutmanager.md) in macOS11 and earlier. In macOS12 and later, consider using [NSLayoutManager](nslayoutmanager.md) which provides improved support for international scripts.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

`NSTypesetter` provides concrete subclasses with default implementation interfacing with the Cocoa text system. By subclassing `NSTypesetter`, an application can override the [layoutParagraphAtPoint:](nstypesetter/layoutparagraph%28at_%29.md) method to integrate a custom typesetting engine into the Cocoa text system. On the other hand, an application can subclass [NSATSTypesetter](nsatstypesetter.md) and override the glyph storage interface to integrate the concrete subclass into its own custom layout system.

`NSTypesetter` methods belong to three categories: glyph storage interface methods, layout phase interface methods, and core typesetter methods. The glyph storage interface methods map to [NSLayoutManager](nslayoutmanager.md) methods. The typesetter itself calls these methods, and their default implementations call the Cocoa layout manager. An `NSTypesetter` subclass can override these methods to call its own glyph storage facility, in which case it should override all of them. (This doesn’t preclude the overridden method calling its superclass implementation if appropriate).

The layout phase interface provides control points similar to delegate methods; if implemented, the system invokes these methods to notify an `NSTypesetter` subclass of events in the layout process so it can intervene as needed.

The remainder of the `NSTypesetter` methods are primitive, core typesetter methods. The core typesetter methods correlate with typesetting state attributes; the layout manager calls these methods to store its values before starting the layout process. If you subclass `NSTypesetter` and override the glyph storage interface methods, you can call the core methods to control the typesetter directly.

<a id="Glyph-Storage-Interface"></a>

#### Glyph Storage Interface

Override these methods to use `NSTypesetter`’s built-in concrete subclass, [NSATSTypesetter](nsatstypesetter.md), with a custom glyph storage and layout system other than the Cocoa layout manager and text container mechanism.

- [characterRangeForGlyphRange:actualGlyphRange:](nstypesetter/characterrange%28forglyphrange_actualglyphrange_%29.md)
- [glyphRangeForCharacterRange:actualCharacterRange:](nstypesetter/glyphrange%28forcharacterrange_actualcharacterrange_%29.md)
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](nstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md)
- [getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:](nstypesetter/getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md)
- [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](nstypesetter/setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md)
- [substituteGlyphsInRange:withGlyphs:](nstypesetter/substituteglyphs%28in_withglyphs_%29.md)
- [insertGlyph:atGlyphIndex:characterIndex:](nstypesetter/insertglyph%28__atglyphindex_characterindex_%29.md)
- [deleteGlyphsInRange:](nstypesetter/deleteglyphs%28in_%29.md)
- [setNotShownAttribute:forGlyphRange:](nstypesetter/setnotshownattribute%28__forglyphrange_%29.md)
- [setDrawsOutsideLineFragment:forGlyphRange:](nstypesetter/setdrawsoutsidelinefragment%28__forglyphrange_%29.md)
- [setLocation:withAdvancements:forStartOfGlyphRange:](nstypesetter/setlocation%28__withadvancements_forstartofglyphrange_%29.md)
- [setAttachmentSize:forGlyphRange:](nstypesetter/setattachmentsize%28__forglyphrange_%29.md)
- [setBidiLevels:forGlyphRange:](nstypesetter/setbidilevels%28__forglyphrange_%29.md)

<a id="Layout-Phase-Interface"></a>

#### Layout Phase Interface

Override these methods to customize the text layout process, including modifying line fragments, controlling line breaking and hyphenation, and controlling the behavior of tabs and other control glyphs.

- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](nstypesetter/willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md)
- [shouldBreakLineByWordBeforeCharacterAtIndex:](nstypesetter/shouldbreakline%28bywordbeforecharacterat_%29.md)
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](nstypesetter/shouldbreakline%28byhyphenatingbeforecharacterat_%29.md)
- [hyphenationFactorForGlyphAtIndex:](nstypesetter/hyphenationfactor%28forglyphat_%29.md)
- [hyphenCharacterForGlyphAtIndex:](nstypesetter/hyphencharacter%28forglyphat_%29.md)
- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md)

## Topics

### Getting a typesetter

- [sharedSystemTypesetter](nstypesetter/sharedsystemtypesetter.md): Returns a shared instance of a reentrant typesetter.
- [sharedSystemTypesetterForBehavior:](nstypesetter/sharedsystemtypesetter%28for_%29.md): Returns a shared instance of a reentrant typesetter that implements typesetting with the specified behavior.

### Getting information about a typesetter

- [defaultTypesetterBehavior](nstypesetter/defaulttypesetterbehavior.md): Returns the default typesetter behavior.

### Getting information about glyphs

- [printingAdjustmentInLayoutManager:forNominallySpacedGlyphRange:packedGlyphs:count:](nstypesetter/printingadjustment%28in_fornominallyspacedglyphrange_packedglyphs_count_%29.md): Returns the interglyph spacing in the specified range when sent to a printer.
- [baselineOffsetInLayoutManager:glyphIndex:](nstypesetter/baselineoffset%28in_glyphindex_%29.md): Returns the distance from the bottom of the line fragment rectangle in which the glyph resides to the glyph baseline.

### Accessing the layout manager

- [layoutManager](nstypesetter/layoutmanager.md): Returns the layout manager for the text being typeset.
- [usesFontLeading](nstypesetter/usesfontleading.md): Returns whether the typesetter uses the leading (or line gap) value specified in the font metric information of the current font.
- [typesetterBehavior](nstypesetter/typesetterbehavior.md): Returns the current typesetter behavior.
- [hyphenationFactor](nstypesetter/hyphenationfactor.md): Returns the current hyphenation factor.

### Managing text containers

- [currentTextContainer](nstypesetter/currenttextcontainer.md): Returns the text container for the text being typeset.
- [textContainers](nstypesetter/textcontainers.md): Returns an array containing the text containers belonging to the current layout manager.
- [lineFragmentPadding](nstypesetter/linefragmentpadding.md): Returns the current line fragment padding, in points.

### Performing font substitution

- [substituteFontForFont:](nstypesetter/substitutefont%28for_%29.md): Returns a screen font suitable for use in place of a given font.

### Getting the location of text tabs

- [textTabForGlyphLocation:writingDirection:maxLocation:](nstypesetter/texttab%28forglyphlocation_writingdirection_maxlocation_%29.md): Returns the text tab next closest to a given glyph location within the given parameters.

### Bidirectional text processing

- [bidiProcessingEnabled](nstypesetter/bidiprocessingenabled.md): Returns whether bidirectional text processing is enabled.

### Accessing paragraph typesetting information

- [currentParagraphStyle](nstypesetter/currentparagraphstyle.md): Returns the paragraph style object for the text being typeset.
- [attributedString](nstypesetter/attributedstring.md): Returns the text backing store, usually an instance of `NSTextStorage`.
- [setParagraphGlyphRange:separatorGlyphRange:](nstypesetter/setparagraphglyphrange%28__separatorglyphrange_%29.md): Sets the current glyph range being processed.
- [paragraphGlyphRange](nstypesetter/paragraphglyphrange.md): Returns the glyph range currently being processed.
- [paragraphSeparatorGlyphRange](nstypesetter/paragraphseparatorglyphrange.md): Returns the current paragraph separator range.
- [paragraphCharacterRange](nstypesetter/paragraphcharacterrange.md): Returns the character range currently being processed.
- [paragraphSeparatorCharacterRange](nstypesetter/paragraphseparatorcharacterrange.md): Returns the current paragraph separator character range.
- [attributesForExtraLineFragment](nstypesetter/attributesforextralinefragment.md): Returns the attributes used to lay out the extra line fragment.

### Getting spacing information

- [lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](nstypesetter/linespacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the line spacing in effect following the specified glyph.
- [paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](nstypesetter/paragraphspacing%28afterglyphat_withproposedlinefragmentrect_%29.md): Returns the paragraph spacing that is in effect after the specified glyph.
- [paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](nstypesetter/paragraphspacing%28beforeglyphat_withproposedlinefragmentrect_%29.md): Returns the number of points of space—added before a paragraph—that is in effect before the specified glyph.

### Laying out a paragraph

- [layoutParagraphAtPoint:](nstypesetter/layoutparagraph%28at_%29.md): Lays out glyphs in the current glyph range until the next paragraph separator is reached.
- [beginParagraph](nstypesetter/beginparagraph%28%29.md): Sets up layout parameters at the beginning of a paragraph.
- [endParagraph](nstypesetter/endparagraph%28%29.md): Sets up layout parameters at the end of a paragraph.
- [beginLineWithGlyphAtIndex:](nstypesetter/beginline%28withglyphat_%29.md): Sets up layout parameters at the beginning of a line during typesetting.
- [endLineWithGlyphRange:](nstypesetter/endline%28withglyphrange_%29.md): Sets up layout parameters at the end of a line during typesetting.

### Laying out characters

- [layoutCharactersInRange:forLayoutManager:maximumNumberOfLineFragments:](nstypesetter/layoutcharacters%28in_for_maximumnumberoflinefragments_%29.md): Lays out characters in the given character range for the specified layout manager.

### Laying out glyphs

- [layoutGlyphsInLayoutManager:startingAtGlyphIndex:maxNumberOfLineFragments:nextGlyphIndex:](nstypesetter/layoutglyphs%28in_startingatglyphindex_maxnumberoflinefragments_nextglyphindex_%29.md): Deprecated. Lays out glyphs in the specified layout manager starting at a specified glyph.
- [boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nstypesetter/boundingbox%28forcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [getLineFragmentRect:usedRect:forParagraphSeparatorGlyphRange:atProposedOrigin:](nstypesetter/getlinefragmentrect%28__usedrect_forparagraphseparatorglyphrange_atproposedorigin_%29.md): Calculates the line fragment rectangle and line fragment used rectangle for blank lines.
- [getLineFragmentRect:usedRect:remainingRect:forStartingGlyphAtIndex:proposedRect:lineSpacing:paragraphSpacingBefore:paragraphSpacingAfter:](nstypesetter/getlinefragmentrect%28__usedrect_remaining_forstartingglyphat_proposedrect_linespacing_paragraphspacingbefore_paragraphspacingafter_%29.md): Calculates line fragment rectangle, line fragment used rectangle, and remaining rectangle for a line fragment.
- [hyphenCharacterForGlyphAtIndex:](nstypesetter/hyphencharacter%28forglyphat_%29.md): Returns the hyphen character to be inserted after the specified glyph.
- [hyphenationFactorForGlyphAtIndex:](nstypesetter/hyphenationfactor%28forglyphat_%29.md): Returns the hyphenation factor in effect at a specified location.
- [shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](nstypesetter/shouldbreakline%28byhyphenatingbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by hyphenating at the specified character.
- [shouldBreakLineByWordBeforeCharacterAtIndex:](nstypesetter/shouldbreakline%28bywordbeforecharacterat_%29.md): Returns whether the line being laid out should be broken by a word break at the specified character.
- [willSetLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](nstypesetter/willsetlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Called by the typesetter just prior to storing the actual line fragment rectangle location in the layout manager.
- [setHardInvalidation:forGlyphRange:](nstypesetter/sethardinvalidation%28__forglyphrange_%29.md): Sets whether to force the layout manager to invalidate the specified portion of the glyph cache when invalidating layout.

### Interfacing with Glyph Storage

- [characterRangeForGlyphRange:actualGlyphRange:](nstypesetter/characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRangeForCharacterRange:actualCharacterRange:](nstypesetter/glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize:forGlyphRange:](nstypesetter/setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels:forGlyphRange:](nstypesetter/setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment:forGlyphRange:](nstypesetter/setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](nstypesetter/setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation:withAdvancements:forStartOfGlyphRange:](nstypesetter/setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute:forGlyphRange:](nstypesetter/setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

### Deprecated

- [actionForControlCharacterAtIndex:](nstypesetter/actionforcontrolcharacter%28at_%29.md): Returns the action associated with a control character.
- [deleteGlyphsInRange:](nstypesetter/deleteglyphs%28in_%29.md): Deprecated. Deletes the specified glyphs from the glyph cache maintained by the layout manager.
- [substituteGlyphsInRange:withGlyphs:](nstypesetter/substituteglyphs%28in_withglyphs_%29.md): Deprecated. Replaces the specified glyphs with specified replacement glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](nstypesetter/getglyphs%28in_glyphs_characterindexes_glyphinscriptions_elasticbits_bidilevels_%29.md): Deprecated. Extracts the information needed to lay out the provided glyphs from the provided range.
- [insertGlyph:atGlyphIndex:characterIndex:](nstypesetter/insertglyph%28__atglyphindex_characterindex_%29.md): Deprecated. Enables the typesetter to insert a new glyph into the stream.
- [NSTypesetterControlCharacterAction](nstypesettercontrolcharacteraction.md): The following constants are possible values returned by the [actionForControlCharacterAtIndex:](nstypesetter/actionforcontrolcharacter%28at_%29.md) method to determine the action associated with a control character.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSATSTypesetter](nsatstypesetter.md)

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.
- [NSATSTypesetter](nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.
- [NSLineSweepDirection](nslinesweepdirection.md): Deprecated. Values that describe the progression of text on a page.
- [NSLineMovementDirection](nslinemovementdirection.md): Deprecated. The direction in which a line moves.
