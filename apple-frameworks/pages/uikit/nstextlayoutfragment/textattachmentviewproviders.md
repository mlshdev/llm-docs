> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/textattachmentviewproviders](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/textattachmentviewproviders)

# textAttachmentViewProviders (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
