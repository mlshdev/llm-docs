> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/layoutfragmentframe](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/layoutfragmentframe)

# layoutFragmentFrame (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.

## Declaration

```swift
var layoutFragmentFrame: CGRect { get }
```

## See Also

### Drawing the fragment and attachments

- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [draw(at:in:)](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.
- [frameForTextAttachment(at:)](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.

# layoutFragmentFrame (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.

## Declaration

```objectivec
@property (readonly) CGRect layoutFragmentFrame;
```

## See Also

### Drawing the fragment and attachments

- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [drawAtPoint:inContext:](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.
- [frameForTextAttachmentAtLocation:](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.
