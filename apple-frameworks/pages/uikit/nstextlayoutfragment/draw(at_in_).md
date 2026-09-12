> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/draw(at:in:)](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/draw(at:in:))

# draw(at:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Renders the visual representation of this element in the specified graphics context.

## Declaration

```swift
func draw(at point: CGPoint, in context: CGContext)
```

## Parameters

- `point`: The origin as a [CGPoint](../../corefoundation/cgpoint.md).
- `context`: The rendering context.

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.
- [frameForTextAttachment(at:)](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.

# drawAtPoint:inContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Renders the visual representation of this element in the specified graphics context.

## Declaration

```objectivec
- (void) drawAtPoint:(CGPoint) point inContext:(CGContextRef) context;
```

## Parameters

- `point`: The origin as a [CGPoint](../../corefoundation/cgpoint.md).
- `context`: The rendering context.

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [invalidateLayout](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.
- [frameForTextAttachmentAtLocation:](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.
