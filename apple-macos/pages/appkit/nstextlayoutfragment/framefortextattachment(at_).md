> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/framefortextattachment(at:)](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/framefortextattachment(at:))

# frameForTextAttachment(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.

## Declaration

```swift
func frameForTextAttachment(at location: any NSTextLocation) -> CGRect
```

## Parameters

- `location`: The [NSTextLocation](../nstextlocation.md) that describes the location in the text layout fragment.

<a id="return-value"></a>

## Return Value

The frame rectangle that describes the text layout fragment.

<a id="Discussion"></a>

## Discussion

Returns [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero) if `location` isn’t with any attachment or the state isn’t [NSTextLayoutFragment.State.layoutAvailable](state-swift.enum/layoutavailable.md).

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [draw(at:in:)](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout()](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.

# frameForTextAttachmentAtLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the frame in the text layout fragment coordinate system for the attachment at the location you specify.

## Declaration

```objectivec
- (CGRect) frameForTextAttachmentAtLocation:(id<NSTextLocation>) location;
```

## Parameters

- `location`: The [NSTextLocation](../nstextlocation.md) that describes the location in the text layout fragment.

<a id="return-value"></a>

## Return Value

The frame rectangle that describes the text layout fragment.

<a id="Discussion"></a>

## Discussion

Returns [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero) if `location` isn’t with any attachment or the state isn’t [NSTextLayoutFragmentStateLayoutAvailable](state-swift.enum/layoutavailable.md).

## See Also

### Drawing the fragment and attachments

- [layoutFragmentFrame](layoutfragmentframe.md): The rectangle the framework uses for tiling the layout fragment inside the target layout coordinate system.
- [renderingSurfaceBounds](renderingsurfacebounds.md): The bounds defining the area required for rendering the contents.
- [drawAtPoint:inContext:](draw%28at_in_%29.md): Renders the visual representation of this element in the specified graphics context.
- [invalidateLayout](invalidatelayout%28%29.md): Invalidates any layout information associated with the text layout fragment.
- [textAttachmentViewProviders](textattachmentviewproviders.md): The attachment view provider associated with the text layout fragment.
