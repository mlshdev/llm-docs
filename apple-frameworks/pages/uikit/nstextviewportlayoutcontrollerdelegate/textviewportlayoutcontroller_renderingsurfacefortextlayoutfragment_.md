> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller:renderingsurfacefortextlayoutfragment:](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller:renderingsurfacefortextlayoutfragment:)

# textViewportLayoutController:renderingSurfaceForTextLayoutFragment:

**Interface language:** Objective-C

**Framework:** UIKit  
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
