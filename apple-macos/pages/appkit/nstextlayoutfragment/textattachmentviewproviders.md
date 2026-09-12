> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/textattachmentviewproviders](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/textattachmentviewproviders)

# textAttachmentViewProviders (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The attachment view provider associated with the text layout fragment.

## Declaration

```swift
var textAttachmentViewProviders: [NSTextAttachmentViewProvider] { get }
```

<a id="Discussion"></a>

## Discussion

The property contents are only valid with [NSTextLayoutFragment.State.layoutAvailable](state-swift.enum/layoutavailable.md).

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [draw(at:in:)](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [frameForTextAttachment(at:)](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.

# textAttachmentViewProviders (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The attachment view provider associated with the text layout fragment.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSTextAttachmentViewProvider *> * textAttachmentViewProviders;
```

<a id="Discussion"></a>

## Discussion

The property contents are only valid with [NSTextLayoutFragmentStateLayoutAvailable](state-swift.enum/layoutavailable.md).

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [drawAtPoint:inContext:](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [frameForTextAttachmentAtLocation:](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.
