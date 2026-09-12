> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/textcontainers](https://developer.apple.com/documentation/uikit/nslayoutmanager/textcontainers)

# textContainers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current text containers of the layout manager.

## Declaration

```swift
var textContainers: [NSTextContainer] { get }
```

## See Also

### Managing the text containers

- [addTextContainer(\_:)](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer(\_:at:)](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainer(at:)](removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [setTextContainer(\_:forGlyphRange:)](settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry(\_:)](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView(\_:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/textcontainerchangedtextview%28_:%29): Updates the information necessary to manage text view objects for the specified text container.
- [textContainer(forGlyphAt:effectiveRange:)](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainer(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRect(for:)](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

# textContainers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current text containers of the layout manager.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSTextContainer *> * textContainers;
```

## See Also

### Managing the text containers

- [addTextContainer:](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer:atIndex:](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainerAtIndex:](removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [setTextContainer:forGlyphRange:](settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry:](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView:](https://developer.apple.com/documentation/appkit/nslayoutmanager/textcontainerchangedtextview%28_:%29): Updates the information necessary to manage text view objects for the specified text container.
- [textContainerForGlyphAtIndex:effectiveRange:](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainerForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRectForTextContainer:](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.
