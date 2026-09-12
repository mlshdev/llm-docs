> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanagerdelegate](https://developer.apple.com/documentation/uikit/nslayoutmanagerdelegate)

# NSLayoutManagerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of optional methods that delegates of layout manager objects implement.

## Declaration

```swift
protocol NSLayoutManagerDelegate : NSObjectProtocol
```

## Topics

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout(\_:)](nslayoutmanagerdelegate/layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager(\_:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:)](nslayoutmanagerdelegate/layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [layoutManager(\_:shouldUse:forControlCharacterAt:)](nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.
- [NSLayoutManager.ControlCharacterAction](nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

### Responding to text container layout

- [layoutManager(\_:didCompleteLayoutFor:atEnd:)](nslayoutmanagerdelegate/layoutmanager%28__didcompletelayoutfor_atend_%29.md): Informs the delegate when the layout manager finishes laying out text in the specified text container.
- [layoutManager(\_:textContainer:didChangeGeometryFrom:)](nslayoutmanagerdelegate/layoutmanager%28__textcontainer_didchangegeometryfrom_%29.md): Informs the delegate when the layout manager invalidates layout due to a change in the geometry of the specified text container.

### Handling line fragments

- [layoutManager(\_:shouldBreakLineByHyphenatingBeforeCharacterAt:)](nslayoutmanagerdelegate/layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager(\_:shouldBreakLineByWordBeforeCharacterAt:)](nslayoutmanagerdelegate/layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager(\_:lineSpacingAfterGlyphAt:withProposedLineFragmentRect:)](nslayoutmanagerdelegate/layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager(\_:paragraphSpacingAfterGlyphAt:withProposedLineFragmentRect:)](nslayoutmanagerdelegate/layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager(\_:paragraphSpacingBeforeGlyphAt:withProposedLineFragmentRect:)](nslayoutmanagerdelegate/layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager(\_:boundingBoxForControlGlyphAt:for:proposedLineFragment:glyphPosition:characterIndex:)](nslayoutmanagerdelegate/layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [layoutManager(\_:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:in:forGlyphRange:)](nslayoutmanagerdelegate/layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.

### Managing temporary attribute support

- [layoutManager(\_:shouldUseTemporaryAttributes:forDrawingToScreen:atCharacterIndex:effectiveRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanagerdelegate/layoutmanager%28_:shouldusetemporaryattributes:fordrawingtoscreen:atcharacterindex:effectiverange:%29): Asks the delegate whether to use temporary attributes when drawing the text.

### Deprecated

- [Control Characters](1619233-control-characters.md): Constants that describe actions for control characters.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the layout process

- [delegate](nslayoutmanager/delegate.md): The layout manager’s delegate.

# NSLayoutManagerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of optional methods that delegates of layout manager objects implement.

## Declaration

```objectivec
@protocol NSLayoutManagerDelegate <NSObject>
```

## Topics

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout:](nslayoutmanagerdelegate/layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:](nslayoutmanagerdelegate/layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [layoutManager:shouldUseAction:forControlCharacterAtIndex:](nslayoutmanagerdelegate/layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.
- [NSControlCharacterAction](nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

### Responding to text container layout

- [layoutManager:didCompleteLayoutForTextContainer:atEnd:](nslayoutmanagerdelegate/layoutmanager%28__didcompletelayoutfor_atend_%29.md): Informs the delegate when the layout manager finishes laying out text in the specified text container.
- [layoutManager:textContainer:didChangeGeometryFromSize:](nslayoutmanagerdelegate/layoutmanager%28__textcontainer_didchangegeometryfrom_%29.md): Informs the delegate when the layout manager invalidates layout due to a change in the geometry of the specified text container.

### Handling line fragments

- [layoutManager:shouldBreakLineByHyphenatingBeforeCharacterAtIndex:](nslayoutmanagerdelegate/layoutmanager%28__shouldbreaklinebyhyphenatingbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified character.
- [layoutManager:shouldBreakLineByWordBeforeCharacterAtIndex:](nslayoutmanagerdelegate/layoutmanager%28__shouldbreaklinebywordbeforecharacterat_%29.md): Asks the delegate whether to break the line at the specified word.
- [layoutManager:lineSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](nslayoutmanagerdelegate/layoutmanager%28__linespacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add to the end of a line.
- [layoutManager:paragraphSpacingAfterGlyphAtIndex:withProposedLineFragmentRect:](nslayoutmanagerdelegate/layoutmanager%28__paragraphspacingafterglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the end of a paragraph.
- [layoutManager:paragraphSpacingBeforeGlyphAtIndex:withProposedLineFragmentRect:](nslayoutmanagerdelegate/layoutmanager%28__paragraphspacingbeforeglyphat_withproposedlinefragmentrect_%29.md): Returns the amount of space to add at the beginning of a paragraph.
- [layoutManager:boundingBoxForControlGlyphAtIndex:forTextContainer:proposedLineFragment:glyphPosition:characterIndex:](nslayoutmanagerdelegate/layoutmanager%28__boundingboxforcontrolglyphat_for_proposedlinefragment_glyphposition_characterindex_%29.md): Returns the bounding rectangle for the specified control glyph with the specified parameters.
- [layoutManager:shouldSetLineFragmentRect:lineFragmentUsedRect:baselineOffset:inTextContainer:forGlyphRange:](nslayoutmanagerdelegate/layoutmanager%28__shouldsetlinefragmentrect_linefragmentusedrect_baselineoffset_in_forglyphrange_%29.md): Customizes the line fragment geometry before committing it to the layout cache.

### Managing temporary attribute support

- [layoutManager:shouldUseTemporaryAttributes:forDrawingToScreen:atCharacterIndex:effectiveRange:](https://developer.apple.com/documentation/appkit/nslayoutmanagerdelegate/layoutmanager%28_:shouldusetemporaryattributes:fordrawingtoscreen:atcharacterindex:effectiverange:%29): Asks the delegate whether to use temporary attributes when drawing the text.

### Deprecated

- [Control Characters](1619233-control-characters.md): Constants that describe actions for control characters.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the layout process

- [delegate](nslayoutmanager/delegate.md): The layout manager’s delegate.
