> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/setattachmentsize(_:forglyphrange:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/setattachmentsize(_:forglyphrange:))

# setAttachmentSize(\_:forGlyphRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the size to use when drawing a glyph that represents an attachment.

## Declaration

```swift
func setAttachmentSize(_ attachmentSize: CGSize, forGlyphRange glyphRange: NSRange)
```

## Parameters

- `attachmentSize`: The glyph size to set.
- `glyphRange`: The attachment glyph’s position in the glyph stream.

<a id="Discussion"></a>

## Discussion

For a glyph corresponding to an attachment, this method should be called to set the size for the attachment cell to occupy. The glyph’s value should be [NSControlGlyph](https://developer.apple.com/documentation/appkit/nscontrolglyph).

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Related Documentation

- [attachmentSize(forGlyphAt:)](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [defaultAttachmentScaling](https://developer.apple.com/documentation/appkit/nslayoutmanager/defaultattachmentscaling): The default amount of scaling to apply when an attachment image is too large to fit in a text container.

### Setting layout information

- [setDrawsOutsideLineFragment(\_:forGlyphAt:)](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect(\_:usedRect:textContainer:)](setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:)](setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setLocation(\_:forStartOfGlyphRange:)](setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute(\_:forGlyphAt:)](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

# setAttachmentSize:forGlyphRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the size to use when drawing a glyph that represents an attachment.

## Declaration

```objectivec
- (void) setAttachmentSize:(CGSize) attachmentSize forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `attachmentSize`: The glyph size to set.
- `glyphRange`: The attachment glyph’s position in the glyph stream.

<a id="Discussion"></a>

## Discussion

For a glyph corresponding to an attachment, this method should be called to set the size for the attachment cell to occupy. The glyph’s value should be [NSControlGlyph](https://developer.apple.com/documentation/appkit/nscontrolglyph).

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Related Documentation

- [attachmentSizeForGlyphAtIndex:](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [defaultAttachmentScaling](https://developer.apple.com/documentation/appkit/nslayoutmanager/defaultattachmentscaling): The default amount of scaling to apply when an attachment image is too large to fit in a text container.

### Setting layout information

- [setDrawsOutsideLineFragment:forGlyphAtIndex:](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect:usedRect:textContainer:](setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLineFragmentRect:forGlyphRange:usedRect:](setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setLocation:forStartOfGlyphRange:](setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute:forGlyphAtIndex:](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.
