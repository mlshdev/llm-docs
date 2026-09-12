> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/renderingsurfacebounds](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/renderingsurfacebounds)

# renderingSurfaceBounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The bounds defining the area required for rendering the contents.

## Declaration

```swift
var renderingSurfaceBounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The coordinate system is vertically flipped from the `layoutFragmentFrame` origin ({`0`,`0`} is at the upper-left corner). The size should be larger than `layoutFragmentFrame.size`. The origin could be in the negative coordinate since the rendering could stretch out of `layoutFragmentFrame`. Only valid when `state` greater than [NSTextLayoutFragment.State.estimatedUsageBounds](state-swift.enum/estimatedusagebounds.md).

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [draw(at:in:)](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.
- [frameForTextAttachment(at:)](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.

# renderingSurfaceBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The bounds defining the area required for rendering the contents.

## Declaration

```objectivec
@property (readonly) CGRect renderingSurfaceBounds;
```

<a id="Discussion"></a>

## Discussion

The coordinate system is vertically flipped from the `layoutFragmentFrame` origin ({`0`,`0`} is at the upper-left corner). The size should be larger than `layoutFragmentFrame.size`. The origin could be in the negative coordinate since the rendering could stretch out of `layoutFragmentFrame`. Only valid when `state` greater than [NSTextLayoutFragmentStateEstimatedUsageBounds](state-swift.enum/estimatedusagebounds.md).

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [drawAtPoint:inContext:](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.
- [frameForTextAttachmentAtLocation:](framefortextattachment%28at_%29.md): Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.
