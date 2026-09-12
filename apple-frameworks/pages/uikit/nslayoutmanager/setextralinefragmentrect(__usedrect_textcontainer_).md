> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/setextralinefragmentrect(_:usedrect:textcontainer:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/setextralinefragmentrect(_:usedrect:textcontainer:))

# setExtraLineFragmentRect(\_:usedRect:textContainer:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the bounds and container for the extra line fragment.

## Declaration

```swift
func setExtraLineFragmentRect(_ fragmentRect: CGRect, usedRect: CGRect, textContainer container: NSTextContainer)
```

## Parameters

- `fragmentRect`: The rectangle to set.
- `usedRect`: Indicates where the insertion point is drawn.
- `container`: The text container where the rectangle is to be laid out.

<a id="Discussion"></a>

## Discussion

The extra line fragment is used when the text backing ends with a hard line break or when the text backing is totally empty, to define the extra line which needs to be displayed at the end of the text. If the text backing is not empty and does not end with a hard line break, this should be set to [NSZeroRect](../../foundation/nszerorect.md) and `nil`.

Line fragment rectangles and line fragment used rectangles are always in container coordinates.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Setting layout information

- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment(\_:forGlyphAt:)](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:)](setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setLocation(\_:forStartOfGlyphRange:)](setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute(\_:forGlyphAt:)](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

# setExtraLineFragmentRect:usedRect:textContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the bounds and container for the extra line fragment.

## Declaration

```objectivec
- (void) setExtraLineFragmentRect:(CGRect) fragmentRect usedRect:(CGRect) usedRect textContainer:(NSTextContainer *) container;
```

## Parameters

- `fragmentRect`: The rectangle to set.
- `usedRect`: Indicates where the insertion point is drawn.
- `container`: The text container where the rectangle is to be laid out.

<a id="Discussion"></a>

## Discussion

The extra line fragment is used when the text backing ends with a hard line break or when the text backing is totally empty, to define the extra line which needs to be displayed at the end of the text. If the text backing is not empty and does not end with a hard line break, this should be set to [NSZeroRect](../../foundation/nszerorect.md) and `nil`.

Line fragment rectangles and line fragment used rectangles are always in container coordinates.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Setting layout information

- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment:forGlyphAtIndex:](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setLineFragmentRect:forGlyphRange:usedRect:](setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setLocation:forStartOfGlyphRange:](setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute:forGlyphAtIndex:](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.
