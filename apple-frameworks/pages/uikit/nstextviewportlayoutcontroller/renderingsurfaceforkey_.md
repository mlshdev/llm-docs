> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontroller/renderingsurfaceforkey:](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontroller/renderingsurfaceforkey:)

# renderingSurfaceForKey:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method

Returns a rendering surface corresponding to the specified key.

## Declaration

```objectivec
- (id<NSTextViewportRenderingSurface>) renderingSurfaceForKey:(id<NSTextViewportRenderingSurfaceKey>) key;
```

## Parameters

- `key`: The key identifying the rendering surface.

<a id="return-value"></a>

## Return Value

The rendering surface, or `nil`.

<a id="discussion"></a>

## Discussion

The mapping is registered via the returned rendering surfaces from `textViewportLayoutController:renderingSurfaceForTextLayoutFragment:`. In addition, it can return auxiliary rendering surfaces registered through `addRenderingSurface:key:group:placement:`. The mappings are cleared at the beginning of each [layoutViewport](layoutviewport%28%29.md).
