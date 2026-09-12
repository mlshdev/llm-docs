> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager](https://developer.apple.com/documentation/appkit/nslayoutmanager)

# NSLayoutManager (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that coordinates the layout and display of text characters.

## Declaration

```swift
class NSLayoutManager
```

<a id="overview"></a>

## Overview

[NSLayoutManager](nslayoutmanager.md) maps Unicode character codes to glyphs, sets the glyphs in a series of [NSTextContainer](nstextcontainer.md) objects, and displays them in a series of [NSTextView](nstextview.md) objects. In addition to its core function of laying out text, a layout manager object coordinates its text view objects, provides services to those text views to support [NSRulerView](nsrulerview.md) instances for editing paragraph styles, and handles the layout and display of text attributes not inherent in glyphs (such as underline or strikethrough). You can create a subclass of [NSLayoutManager](nslayoutmanager.md) to handle additional text attributes, whether inherent or not.

<a id="Text-Antialiasing"></a>

### Text Antialiasing

[NSLayoutManager](nslayoutmanager.md) provides the threshold for text antialiasing. It looks at the `AppleAntiAliasingThreshold` default value. If the font size is smaller than or equal to this threshold size, the text is rendered aliased by [NSLayoutManager](nslayoutmanager.md). In macOS, you can change the threshold value from the Appearance pane of System Preferences.

<a id="Thread-Safety-of-NSLayoutManager"></a>

### Thread Safety of NSLayoutManager

Generally speaking, a specific layout manager (and associated objects) should not be used in more than one block, operation, or thread at a time. Most layout managers are used on the main thread, since it is the main thread on which their text views are displayed, and since background layout occurs on the main thread.

If you want to use a layout manager on a background thread, first make sure that text views associated with that layout manager (if any) are not displayed while the layout manager is being used on the background thread, and, second, turn off background layout for that layout manager while it is being used on the background thread. The most effective way to ensure that no text view is displayed, without knowing deep implementation, is just not to connect a text view to the layout manager.

<a id="Noncontiguous-Layout"></a>

### Noncontiguous Layout

Noncontiguous layout is an optional layout manager behavior. Previously, both glyph generation and layout were always performed, in order, from the beginning to the end of the document. When noncontiguous layout is turned on, however, the layout manager gains the option of performing glyph generation or layout for one portion of the document without having done so for previous sections. This can provide significant performance improvements for large documents.

Noncontiguous layout is not turned on automatically because direct clients of `NSLayoutManager` typically have relied on the previous behavior—for example, by forcing layout for a specific glyph range, and then assuming that previous glyphs would therefore be laid out. Clients who use [NSLayoutManager](nslayoutmanager.md) only indirectly—for example, those who use [NSTextView](nstextview.md) without directly calling the underlying layout manager—can usually turn on noncontiguous layout without difficulty. Clients using [NSLayoutManager](nslayoutmanager.md) directly need to examine their usage before turning on noncontiguous layout.

Enable noncontiguous layout using the [allowsNonContiguousLayout](nslayoutmanager/allowsnoncontiguouslayout.md) property. In addition, see the other methods in [Causing glyph generation and layout](nslayoutmanager.md#Causing-glyph-generation-and-layout), many of which enable you to ensure that glyph generation and layout are performed for specified portions of the text. The behavior of a number of other layout manager methods is affected by the state of noncontiguous layout, as noted in the discussion sections of those method descriptions.

## Topics

### Creating a layout manager

- [init()](nslayoutmanager/init%28%29.md): Initializes a newly created layout manager object.
- [init(coder:)](nslayoutmanager/init%28coder_%29.md): Creates a layout manager from data in an unarchiver.

### Managing the layout process

- [delegate](nslayoutmanager/delegate.md): The layout manager’s delegate.
- [NSLayoutManagerDelegate](nslayoutmanagerdelegate.md): A set of optional methods that delegates of layout manager objects implement.

### Accessing the text storage

- [textStorage](nslayoutmanager/textstorage.md): The text storage object that contains the content to lay out.
- [replaceTextStorage(\_:)](nslayoutmanager/replacetextstorage%28__%29.md): Replaces the layout manager’s current text storage object with the specified object.

### Configuring the global layout manager options

- [allowsNonContiguousLayout](nslayoutmanager/allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [hasNonContiguousLayout](nslayoutmanager/hasnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.
- [showsInvisibleCharacters](nslayoutmanager/showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](nslayoutmanager/showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](nslayoutmanager/usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](nslayoutmanager/backgroundlayoutenabled.md): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [limitsLayoutForSuspiciousContents](nslayoutmanager/limitslayoutforsuspiciouscontents.md): A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.
- [usesDefaultHyphenation](nslayoutmanager/usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.

### Managing the text containers

- [textContainers](nslayoutmanager/textcontainers.md): The current text containers of the layout manager.
- [addTextContainer(\_:)](nslayoutmanager/addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer(\_:at:)](nslayoutmanager/inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainer(at:)](nslayoutmanager/removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [setTextContainer(\_:forGlyphRange:)](nslayoutmanager/settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry(\_:)](nslayoutmanager/textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView(\_:)](nslayoutmanager/textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainer(forGlyphAt:effectiveRange:)](nslayoutmanager/textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainer(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](nslayoutmanager/textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRect(for:)](nslayoutmanager/usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

### Invalidating glyphs and layout

- [invalidateDisplay(forCharacterRange:)](nslayoutmanager/invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplay(forGlyphRange:)](nslayoutmanager/invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphs(forCharacterRange:changeInLength:actualCharacterRange:)](nslayoutmanager/invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayout(forCharacterRange:actualCharacterRange:)](nslayoutmanager/invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](nslayoutmanager/processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

### Causing glyph generation and layout

- [ensureGlyphs(forCharacterRange:)](nslayoutmanager/ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphs(forGlyphRange:)](nslayoutmanager/ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayout(forBoundingRect:in:)](nslayoutmanager/ensurelayout%28forboundingrect_in_%29.md): Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.
- [ensureLayout(forCharacterRange:)](nslayoutmanager/ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayout(forGlyphRange:)](nslayoutmanager/ensurelayout%28forglyphrange_%29.md): Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.
- [ensureLayout(for:)](nslayoutmanager/ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.
- [glyphGenerator](nslayoutmanager/glyphgenerator.md): The glyph generator that the layout manager uses.

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](nslayoutmanager/getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:)](nslayoutmanager/cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [cgGlyph(at:isValidIndex:)](nslayoutmanager/cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](nslayoutmanager/setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyph(at:)](nslayoutmanager/characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](nslayoutmanager/glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](nslayoutmanager/isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](nslayoutmanager/numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](nslayoutmanager/propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSLayoutManager.GlyphProperty](nslayoutmanager/glyphproperty.md): Glyph properties.

### Setting layout information

- [setAttachmentSize(\_:forGlyphRange:)](nslayoutmanager/setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment(\_:forGlyphAt:)](nslayoutmanager/setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect(\_:usedRect:textContainer:)](nslayoutmanager/setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:)](nslayoutmanager/setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setLocation(\_:forStartOfGlyphRange:)](nslayoutmanager/setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute(\_:forGlyphAt:)](nslayoutmanager/setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

### Getting layout information

- [attachmentSize(forGlyphAt:)](nslayoutmanager/attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [drawsOutsideLineFragment(forGlyphAt:)](nslayoutmanager/drawsoutsidelinefragment%28forglyphat_%29.md): Indicates whether the glyph draws outside its line fragment rectangle.
- [extraLineFragmentRect](nslayoutmanager/extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](nslayoutmanager/extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](nslayoutmanager/extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidCharacterIndex()](nslayoutmanager/firstunlaidcharacterindex%28%29.md): Returns the index for the first character in the layout manager that isn’t in the layout.
- [firstUnlaidGlyphIndex()](nslayoutmanager/firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex(\_:glyphIndex:)](nslayoutmanager/getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRect(forGlyphAt:effectiveRange:)](nslayoutmanager/linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](nslayoutmanager/linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:)](nslayoutmanager/linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](nslayoutmanager/linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [location(forGlyphAt:)](nslayoutmanager/location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttribute(forGlyphAt:)](nslayoutmanager/notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRange(inLineFragmentForGlyphAt:)](nslayoutmanager/truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

### Performing advanced layout queries

- [boundingRect(forGlyphRange:in:)](nslayoutmanager/boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndex(for:in:fractionOfDistanceBetweenInsertionPoints:)](nslayoutmanager/characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRange(forGlyphRange:actualGlyphRange:)](nslayoutmanager/characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRects(forGlyphRange:withinSelectedGlyphRange:in:using:)](nslayoutmanager/enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [enumerateLineFragments(forGlyphRange:using:)](nslayoutmanager/enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyph(for:in:)](nslayoutmanager/fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPoints(forCharacterAt:alternatePositions:inDisplayOrder:positions:characterIndexes:)](nslayoutmanager/getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndex(for:in:)](nslayoutmanager/glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndex(for:in:fractionOfDistanceThroughGlyph:)](nslayoutmanager/glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRange(forBoundingRect:in:)](nslayoutmanager/glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(forBoundingRectWithoutAdditionalLayout:in:)](nslayoutmanager/glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRange(for:)](nslayoutmanager/glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRange(forCharacterRange:actualCharacterRange:)](nslayoutmanager/glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [range(ofNominallySpacedGlyphsContaining:)](nslayoutmanager/range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.

### Drawing

- [drawBackground(forGlyphRange:at:)](nslayoutmanager/drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphs(forGlyphRange:at:)](nslayoutmanager/drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawStrikethrough(forGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](nslayoutmanager/drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderline(forGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](nslayoutmanager/drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray(\_:count:forCharacterRange:color:)](nslayoutmanager/fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs(\_:positions:count:font:textMatrix:attributes:in:)](nslayoutmanager/showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange(\_:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](nslayoutmanager/strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange(\_:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:)](nslayoutmanager/underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.

### Handling layout for text blocks

- [setLayoutRect(\_:for:glyphRange:)](nslayoutmanager/setlayoutrect%28__for_glyphrange_%29.md): Sets the layout rectangle that encloses the specified text block and glyph range.
- [layoutRect(for:glyphRange:)](nslayoutmanager/layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [setBoundsRect(\_:for:glyphRange:)](nslayoutmanager/setboundsrect%28__for_glyphrange_%29.md): Sets the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRect(for:glyphRange:)](nslayoutmanager/boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [layoutRect(for:at:effectiveRange:)](nslayoutmanager/layoutrect%28for_at_effectiverange_%29.md): Returns the rectangle for the layout of the specified text block and glyph.
- [boundsRect(for:at:effectiveRange:)](nslayoutmanager/boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.

### Managing attachments

- [defaultAttachmentScaling](nslayoutmanager/defaultattachmentscaling.md): The default amount of scaling to apply when an attachment image is too large to fit in a text container.
- [showAttachmentCell(\_:in:characterIndex:)](nslayoutmanager/showattachmentcell%28__in_characterindex_%29.md): Draws an attachment cell.

### Handling Rulers

- [rulerAccessoryView(for:paragraphStyle:ruler:enabled:)](nslayoutmanager/ruleraccessoryview%28for_paragraphstyle_ruler_enabled_%29.md): Returns the accessory view that the text system uses for its ruler.
- [rulerMarkers(for:paragraphStyle:ruler:)](nslayoutmanager/rulermarkers%28for_paragraphstyle_ruler_%29.md): Returns an array of text ruler objects for the current selection.

### Managing the responder chain

- [layoutManagerOwnsFirstResponder(in:)](nslayoutmanager/layoutmanagerownsfirstresponder%28in_%29.md): Indicates whether the first responder in the specified window is a text view for the layout manager.
- [firstTextView](nslayoutmanager/firsttextview.md): The first text view in the layout manager’s series of text views.
- [textViewForBeginningOfSelection](nslayoutmanager/textviewforbeginningofselection.md): The text view that contains the first glyph in the selection.

### Managing the typesetter

- [typesetter](nslayoutmanager/typesetter.md): The current typesetter.
- [typesetterBehavior](nslayoutmanager/typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSLayoutManager.TypesetterBehavior](nslayoutmanager/typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeight(for:)](nslayoutmanager/defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffset(for:)](nslayoutmanager/defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

### Managing temporary attribute support

- [addTemporaryAttributes(\_:forCharacterRange:)](nslayoutmanager/addtemporaryattributes%28__forcharacterrange_%29.md): Appends one or more temporary attributes to the attributes dictionary of the specified character range.
- [addTemporaryAttribute(\_:value:forCharacterRange:)](nslayoutmanager/addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [setTemporaryAttributes(\_:forCharacterRange:)](nslayoutmanager/settemporaryattributes%28__forcharacterrange_%29.md): Sets one or more temporary attributes for the specified character range.
- [removeTemporaryAttribute(\_:forCharacterRange:)](nslayoutmanager/removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute(\_:atCharacterIndex:effectiveRange:)](nslayoutmanager/temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttribute(\_:atCharacterIndex:longestEffectiveRange:in:)](nslayoutmanager/temporaryattribute%28__atcharacterindex_longesteffectiverange_in_%29.md): Returns the value for the temporary attribute of a character, and the maximum range it applies to.
- [temporaryAttributes(atCharacterIndex:effectiveRange:)](nslayoutmanager/temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributes(atCharacterIndex:longestEffectiveRange:in:)](nslayoutmanager/temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.

### Supporting types

- [NSLayoutManager.TextLayoutOrientation](nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.

### Deprecated

- [Deprecated Symbols](nslayoutmanager-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSGlyphStorage](nsglyphstorage.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSATSTypesetter](nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.
- [NSTypesetter](nstypesetter.md): An abstract class that performs various type layout tasks.

# NSLayoutManager (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that coordinates the layout and display of text characters.

## Declaration

```objectivec
@interface NSLayoutManager : NSObject
```

<a id="overview"></a>

## Overview

[NSLayoutManager](nslayoutmanager.md) maps Unicode character codes to glyphs, sets the glyphs in a series of [NSTextContainer](nstextcontainer.md) objects, and displays them in a series of [NSTextView](nstextview.md) objects. In addition to its core function of laying out text, a layout manager object coordinates its text view objects, provides services to those text views to support [NSRulerView](nsrulerview.md) instances for editing paragraph styles, and handles the layout and display of text attributes not inherent in glyphs (such as underline or strikethrough). You can create a subclass of [NSLayoutManager](nslayoutmanager.md) to handle additional text attributes, whether inherent or not.

<a id="Text-Antialiasing"></a>

### Text Antialiasing

[NSLayoutManager](nslayoutmanager.md) provides the threshold for text antialiasing. It looks at the `AppleAntiAliasingThreshold` default value. If the font size is smaller than or equal to this threshold size, the text is rendered aliased by [NSLayoutManager](nslayoutmanager.md). In macOS, you can change the threshold value from the Appearance pane of System Preferences.

<a id="Thread-Safety-of-NSLayoutManager"></a>

### Thread Safety of NSLayoutManager

Generally speaking, a specific layout manager (and associated objects) should not be used in more than one block, operation, or thread at a time. Most layout managers are used on the main thread, since it is the main thread on which their text views are displayed, and since background layout occurs on the main thread.

If you want to use a layout manager on a background thread, first make sure that text views associated with that layout manager (if any) are not displayed while the layout manager is being used on the background thread, and, second, turn off background layout for that layout manager while it is being used on the background thread. The most effective way to ensure that no text view is displayed, without knowing deep implementation, is just not to connect a text view to the layout manager.

<a id="Noncontiguous-Layout"></a>

### Noncontiguous Layout

Noncontiguous layout is an optional layout manager behavior. Previously, both glyph generation and layout were always performed, in order, from the beginning to the end of the document. When noncontiguous layout is turned on, however, the layout manager gains the option of performing glyph generation or layout for one portion of the document without having done so for previous sections. This can provide significant performance improvements for large documents.

Noncontiguous layout is not turned on automatically because direct clients of `NSLayoutManager` typically have relied on the previous behavior—for example, by forcing layout for a specific glyph range, and then assuming that previous glyphs would therefore be laid out. Clients who use [NSLayoutManager](nslayoutmanager.md) only indirectly—for example, those who use [NSTextView](nstextview.md) without directly calling the underlying layout manager—can usually turn on noncontiguous layout without difficulty. Clients using [NSLayoutManager](nslayoutmanager.md) directly need to examine their usage before turning on noncontiguous layout.

Enable noncontiguous layout using the [allowsNonContiguousLayout](nslayoutmanager/allowsnoncontiguouslayout.md) property. In addition, see the other methods in [Causing glyph generation and layout](nslayoutmanager.md#Causing-glyph-generation-and-layout), many of which enable you to ensure that glyph generation and layout are performed for specified portions of the text. The behavior of a number of other layout manager methods is affected by the state of noncontiguous layout, as noted in the discussion sections of those method descriptions.

## Topics

### Creating a layout manager

- [init](nslayoutmanager/init%28%29.md): Initializes a newly created layout manager object.
- [initWithCoder:](nslayoutmanager/init%28coder_%29.md): Creates a layout manager from data in an unarchiver.

### Managing the layout process

- [delegate](nslayoutmanager/delegate.md): The layout manager’s delegate.
- [NSLayoutManagerDelegate](nslayoutmanagerdelegate.md): A set of optional methods that delegates of layout manager objects implement.

### Accessing the text storage

- [textStorage](nslayoutmanager/textstorage.md): The text storage object that contains the content to lay out.
- [replaceTextStorage:](nslayoutmanager/replacetextstorage%28__%29.md): Replaces the layout manager’s current text storage object with the specified object.

### Configuring the global layout manager options

- [allowsNonContiguousLayout](nslayoutmanager/allowsnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager allows noncontiguous layout.
- [hasNonContiguousLayout](nslayoutmanager/hasnoncontiguouslayout.md): A Boolean value that indicates whether the layout manager currently has any areas of noncontiguous layout.
- [showsInvisibleCharacters](nslayoutmanager/showsinvisiblecharacters.md): A Boolean value that indicates whether to substitute visible glyphs for whitespace and other typically invisible characters.
- [showsControlCharacters](nslayoutmanager/showscontrolcharacters.md): A Boolean value that indicates whether the layout manager substitutes visible glyphs for control characters in the layout.
- [usesFontLeading](nslayoutmanager/usesfontleading.md): A Boolean value that indicates whether the layout manager uses the leading of the font.
- [backgroundLayoutEnabled](nslayoutmanager/backgroundlayoutenabled.md): A Boolean value that indicates whether the layout manager generates glyphs and lays them out when the app’s run loop is idle.
- [limitsLayoutForSuspiciousContents](nslayoutmanager/limitslayoutforsuspiciouscontents.md): A Boolean value that indicates whether the layout manager avoids laying out unusually long or suspicious input.
- [usesDefaultHyphenation](nslayoutmanager/usesdefaulthyphenation.md): A Boolean value that indicates whether the layout manager uses the default hyphenation rules to wrap lines.

### Managing the text containers

- [textContainers](nslayoutmanager/textcontainers.md): The current text containers of the layout manager.
- [addTextContainer:](nslayoutmanager/addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer:atIndex:](nslayoutmanager/inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainerAtIndex:](nslayoutmanager/removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [setTextContainer:forGlyphRange:](nslayoutmanager/settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry:](nslayoutmanager/textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView:](nslayoutmanager/textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainerForGlyphAtIndex:effectiveRange:](nslayoutmanager/textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainerForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](nslayoutmanager/textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRectForTextContainer:](nslayoutmanager/usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

### Invalidating glyphs and layout

- [invalidateDisplayForCharacterRange:](nslayoutmanager/invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplayForGlyphRange:](nslayoutmanager/invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphsForCharacterRange:changeInLength:actualCharacterRange:](nslayoutmanager/invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayoutForCharacterRange:actualCharacterRange:](nslayoutmanager/invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](nslayoutmanager/processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

### Causing glyph generation and layout

- [ensureGlyphsForCharacterRange:](nslayoutmanager/ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphsForGlyphRange:](nslayoutmanager/ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayoutForBoundingRect:inTextContainer:](nslayoutmanager/ensurelayout%28forboundingrect_in_%29.md): Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.
- [ensureLayoutForCharacterRange:](nslayoutmanager/ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayoutForGlyphRange:](nslayoutmanager/ensurelayout%28forglyphrange_%29.md): Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.
- [ensureLayoutForTextContainer:](nslayoutmanager/ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.
- [glyphGenerator](nslayoutmanager/glyphgenerator.md): The glyph generator that the layout manager uses.

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](nslayoutmanager/getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:](nslayoutmanager/cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [CGGlyphAtIndex:isValidIndex:](nslayoutmanager/cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](nslayoutmanager/setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyphAtIndex:](nslayoutmanager/characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](nslayoutmanager/glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](nslayoutmanager/isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](nslayoutmanager/numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](nslayoutmanager/propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.
- [NSGlyphProperty](nslayoutmanager/glyphproperty.md): Glyph properties.

### Setting layout information

- [setAttachmentSize:forGlyphRange:](nslayoutmanager/setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment:forGlyphAtIndex:](nslayoutmanager/setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect:usedRect:textContainer:](nslayoutmanager/setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLineFragmentRect:forGlyphRange:usedRect:](nslayoutmanager/setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setLocation:forStartOfGlyphRange:](nslayoutmanager/setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute:forGlyphAtIndex:](nslayoutmanager/setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

### Getting layout information

- [attachmentSizeForGlyphAtIndex:](nslayoutmanager/attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [drawsOutsideLineFragmentForGlyphAtIndex:](nslayoutmanager/drawsoutsidelinefragment%28forglyphat_%29.md): Indicates whether the glyph draws outside its line fragment rectangle.
- [extraLineFragmentRect](nslayoutmanager/extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](nslayoutmanager/extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](nslayoutmanager/extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidCharacterIndex](nslayoutmanager/firstunlaidcharacterindex%28%29.md): Returns the index for the first character in the layout manager that isn’t in the layout.
- [firstUnlaidGlyphIndex](nslayoutmanager/firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex:glyphIndex:](nslayoutmanager/getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:](nslayoutmanager/linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](nslayoutmanager/linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:](nslayoutmanager/linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](nslayoutmanager/linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [locationForGlyphAtIndex:](nslayoutmanager/location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttributeForGlyphAtIndex:](nslayoutmanager/notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRangeInLineFragmentForGlyphAtIndex:](nslayoutmanager/truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

### Performing advanced layout queries

- [boundingRectForGlyphRange:inTextContainer:](nslayoutmanager/boundingrect%28forglyphrange_in_%29.md): Returns the bounding rectangle for the specified glyphs in a container.
- [characterIndexForPoint:inTextContainer:fractionOfDistanceBetweenInsertionPoints:](nslayoutmanager/characterindex%28for_in_fractionofdistancebetweeninsertionpoints_%29.md): Returns the index of the character that lies beneath the specified point using the specified container’s coordinate system.
- [characterRangeForGlyphRange:actualGlyphRange:](nslayoutmanager/characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range of characters that correspond to the glyphs in the specified glyph range.
- [enumerateEnclosingRectsForGlyphRange:withinSelectedGlyphRange:inTextContainer:usingBlock:](nslayoutmanager/enumerateenclosingrects%28forglyphrange_withinselectedglyphrange_in_using_%29.md): Enumerates enclosing rectangles for the specified glyph range in a text container.
- [enumerateLineFragmentsForGlyphRange:usingBlock:](nslayoutmanager/enumeratelinefragments%28forglyphrange_using_%29.md): Enumerates line fragments intersecting with the specified glyph range.
- [fractionOfDistanceThroughGlyphForPoint:inTextContainer:](nslayoutmanager/fractionofdistancethroughglyph%28for_in_%29.md): Returns the fraction of the distance between the glyph at the specified point and the next glyph.
- [getLineFragmentInsertionPointsForCharacterAtIndex:alternatePositions:inDisplayOrder:positions:characterIndexes:](nslayoutmanager/getlinefragmentinsertionpoints%28forcharacterat_alternatepositions_indisplayorder_positions_characterindexes_%29.md): Returns insertion points in bulk for a specified line fragment.
- [glyphIndexForPoint:inTextContainer:](nslayoutmanager/glyphindex%28for_in_%29.md): Returns the index of the glyph at the specified location in a text container.
- [glyphIndexForPoint:inTextContainer:fractionOfDistanceThroughGlyph:](nslayoutmanager/glyphindex%28for_in_fractionofdistancethroughglyph_%29.md): Returns the index of the glyph at the specified point using the container’s coordinate system.
- [glyphRangeForBoundingRect:inTextContainer:](nslayoutmanager/glyphrange%28forboundingrect_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForBoundingRectWithoutAdditionalLayout:inTextContainer:](nslayoutmanager/glyphrange%28forboundingrectwithoutadditionallayout_in_%29.md): Returns the smallest contiguous range for glyphs lying wholly or partially within the specified rectangle of the text container.
- [glyphRangeForTextContainer:](nslayoutmanager/glyphrange%28for_%29.md): Returns the range of glyphs lying within the specified text container.
- [glyphRangeForCharacterRange:actualCharacterRange:](nslayoutmanager/glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range of glyphs that the specified range of characters generates.
- [rangeOfNominallySpacedGlyphsContainingIndex:](nslayoutmanager/range%28ofnominallyspacedglyphscontaining_%29.md): Returns the range of displayable glyphs that surround the glyph at the specified index.

### Drawing

- [drawBackgroundForGlyphRange:atPoint:](nslayoutmanager/drawbackground%28forglyphrange_at_%29.md): Draws background marks for the specified glyphs, which must lie completely within a single text container.
- [drawGlyphsForGlyphRange:atPoint:](nslayoutmanager/drawglyphs%28forglyphrange_at_%29.md): Draws the specified glyphs, which must lie completely within a single text container.
- [drawStrikethroughForGlyphRange:strikethroughType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](nslayoutmanager/drawstrikethrough%28forglyphrange_strikethroughtype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws a strikethrough for the specified glyphs.
- [drawUnderlineForGlyphRange:underlineType:baselineOffset:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](nslayoutmanager/drawunderline%28forglyphrange_underlinetype_baselineoffset_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Draws underlining for the glyphs in a specified range.
- [fillBackgroundRectArray:count:forCharacterRange:color:](nslayoutmanager/fillbackgroundrectarray%28__count_forcharacterrange_color_%29.md): Fills background rectangles with a color.
- [showCGGlyphs:positions:count:font:textMatrix:attributes:inContext:](nslayoutmanager/showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md): Renders the glyphs at the specified positions, using the specified attributes.
- [strikethroughGlyphRange:strikethroughType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](nslayoutmanager/strikethroughglyphrange%28__strikethroughtype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates and draws strikethrough for the specified glyphs.
- [underlineGlyphRange:underlineType:lineFragmentRect:lineFragmentGlyphRange:containerOrigin:](nslayoutmanager/underlineglyphrange%28__underlinetype_linefragmentrect_linefragmentglyphrange_containerorigin_%29.md): Calculates subranges to underline for the specified glyphs and draws the underlining as appropriate.

### Handling layout for text blocks

- [setLayoutRect:forTextBlock:glyphRange:](nslayoutmanager/setlayoutrect%28__for_glyphrange_%29.md): Sets the layout rectangle that encloses the specified text block and glyph range.
- [layoutRectForTextBlock:glyphRange:](nslayoutmanager/layoutrect%28for_glyphrange_%29.md): Returns the rectangle for the layout of the specified text block and glyph range.
- [setBoundsRect:forTextBlock:glyphRange:](nslayoutmanager/setboundsrect%28__for_glyphrange_%29.md): Sets the bounding rectangle that encloses the specified text block and glyph range.
- [boundsRectForTextBlock:glyphRange:](nslayoutmanager/boundsrect%28for_glyphrange_%29.md): Returns the bounding rectangle that encloses the specified text block and glyph range.
- [layoutRectForTextBlock:atIndex:effectiveRange:](nslayoutmanager/layoutrect%28for_at_effectiverange_%29.md): Returns the rectangle for the layout of the specified text block and glyph.
- [boundsRectForTextBlock:atIndex:effectiveRange:](nslayoutmanager/boundsrect%28for_at_effectiverange_%29.md): Returns the bounding rectangle for the specified text block and glyph.

### Managing attachments

- [defaultAttachmentScaling](nslayoutmanager/defaultattachmentscaling.md): The default amount of scaling to apply when an attachment image is too large to fit in a text container.
- [showAttachmentCell:inRect:characterIndex:](nslayoutmanager/showattachmentcell%28__in_characterindex_%29.md): Draws an attachment cell.

### Handling Rulers

- [rulerAccessoryViewForTextView:paragraphStyle:ruler:enabled:](nslayoutmanager/ruleraccessoryview%28for_paragraphstyle_ruler_enabled_%29.md): Returns the accessory view that the text system uses for its ruler.
- [rulerMarkersForTextView:paragraphStyle:ruler:](nslayoutmanager/rulermarkers%28for_paragraphstyle_ruler_%29.md): Returns an array of text ruler objects for the current selection.

### Managing the responder chain

- [layoutManagerOwnsFirstResponderInWindow:](nslayoutmanager/layoutmanagerownsfirstresponder%28in_%29.md): Indicates whether the first responder in the specified window is a text view for the layout manager.
- [firstTextView](nslayoutmanager/firsttextview.md): The first text view in the layout manager’s series of text views.
- [textViewForBeginningOfSelection](nslayoutmanager/textviewforbeginningofselection.md): The text view that contains the first glyph in the selection.

### Managing the typesetter

- [typesetter](nslayoutmanager/typesetter.md): The current typesetter.
- [typesetterBehavior](nslayoutmanager/typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSTypesetterBehavior](nslayoutmanager/typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeightForFont:](nslayoutmanager/defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
- [defaultBaselineOffsetForFont:](nslayoutmanager/defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

### Managing temporary attribute support

- [addTemporaryAttributes:forCharacterRange:](nslayoutmanager/addtemporaryattributes%28__forcharacterrange_%29.md): Appends one or more temporary attributes to the attributes dictionary of the specified character range.
- [addTemporaryAttribute:value:forCharacterRange:](nslayoutmanager/addtemporaryattribute%28__value_forcharacterrange_%29.md): Adds a temporary attribute to the characters in the specified range.
- [setTemporaryAttributes:forCharacterRange:](nslayoutmanager/settemporaryattributes%28__forcharacterrange_%29.md): Sets one or more temporary attributes for the specified character range.
- [removeTemporaryAttribute:forCharacterRange:](nslayoutmanager/removetemporaryattribute%28__forcharacterrange_%29.md): Removes a temporary attribute from the list of attributes for the specified character range.
- [temporaryAttribute:atCharacterIndex:effectiveRange:](nslayoutmanager/temporaryattribute%28__atcharacterindex_effectiverange_%29.md): Returns the value for the temporary attribute of a character, and the range it applies to.
- [temporaryAttribute:atCharacterIndex:longestEffectiveRange:inRange:](nslayoutmanager/temporaryattribute%28__atcharacterindex_longesteffectiverange_in_%29.md): Returns the value for the temporary attribute of a character, and the maximum range it applies to.
- [temporaryAttributesAtCharacterIndex:effectiveRange:](nslayoutmanager/temporaryattributes%28atcharacterindex_effectiverange_%29.md): Returns the dictionary of temporary attributes for the specified character range.
- [temporaryAttributesAtCharacterIndex:longestEffectiveRange:inRange:](nslayoutmanager/temporaryattributes%28atcharacterindex_longesteffectiverange_in_%29.md): Returns the temporary attributes for a character, and the maximum range they apply to.

### Supporting types

- [NSTextLayoutOrientation](nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.

### Deprecated

- [Deprecated Symbols](nslayoutmanager-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSGlyphStorage](nsglyphstorage.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### TextKit 1

- [NSTextStorage](nstextstorage.md): The fundamental storage mechanism of TextKit that contains the text managed by the system.
- [NSATSTypesetter](nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.
- [NSTypesetter](nstypesetter.md): An abstract class that performs various type layout tasks.
- [NSLineSweepDirection](nslinesweepdirection.md): Deprecated. Values that describe the progression of text on a page.
- [NSLineMovementDirection](nslinemovementdirection.md): Deprecated. The direction in which a line moves.
