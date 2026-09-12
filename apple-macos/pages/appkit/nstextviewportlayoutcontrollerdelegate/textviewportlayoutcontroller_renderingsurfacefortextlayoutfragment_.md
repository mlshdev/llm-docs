> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller:renderingsurfacefortextlayoutfragment:](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller:renderingsurfacefortextlayoutfragment:)

# textViewportLayoutController:renderingSurfaceForTextLayoutFragment:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method

Returns a rendering surface for the specified text layout fragment.

## Declaration

```objectivec
- (id<NSTextViewportRenderingSurface>) textViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController renderingSurfaceForTextLayoutFragment:(NSTextLayoutFragment *) textLayoutFragment;
```

## Parameters

- `textViewportLayoutController`: The viewport layout controller.
- `textLayoutFragment`: The layout fragment needing a rendering surface.

<a id="return-value"></a>

## Return Value

A rendering surface, or `nil`.

<a id="discussion"></a>

## Discussion

Invoked right before `textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:`. The returned rendering surface is registered and mapped by `renderingSurfaceForKey:`.
