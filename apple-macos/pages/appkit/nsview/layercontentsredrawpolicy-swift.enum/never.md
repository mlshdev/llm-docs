> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/layercontentsredrawpolicy-swift.enum/never](https://developer.apple.com/documentation/appkit/nsview/layercontentsredrawpolicy-swift.enum/never)

# NSView.LayerContentsRedrawPolicy.never (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.6+

Leave the layer’s contents alone. Never mark the layer as needing display, or draw the view’s contents to the layer. This is how developer created layers (layer-hosting views) are treated.

## Declaration

```swift
case never
```

## See Also

### Constants

- [NSView.LayerContentsRedrawPolicy.onSetNeedsDisplay](onsetneedsdisplay.md): Any of the `setNeedsDisplay` methods sent to the view will cause the view redraw the affected layer parts by invoking the view’s [draw(\_:)](../draw%28__%29.md), but neither the layer or the view are marked as needing display when the view’s size changes.
- [NSView.LayerContentsRedrawPolicy.duringViewResize](duringviewresize.md): Resize the view’s backing-layer and redraw the view to the layer when the view’s size changes. If the resize is animated, AppKit will drive the resize animation itself and will do this resize and redraw at each step of the animation. Affected parts of the layer will also be redrawn when the view is marked as needing display. This mode is a superset of [NSView.LayerContentsRedrawPolicy.onSetNeedsDisplay](onsetneedsdisplay.md). This is the way that layer-backed views are currently treated.
- [NSView.LayerContentsRedrawPolicy.beforeViewResize](beforeviewresize.md): Resize the layer and redraw the view to the layer when the view’s size changes. This will be done just once at the beginning of a resize animation, not at each frame of the animation. Affected parts of the layer will also be redrawn when the view is marked as needing display. This mode is a superset of [NSView.LayerContentsRedrawPolicy.onSetNeedsDisplay](onsetneedsdisplay.md).
- [NSView.LayerContentsRedrawPolicy.crossfade](crossfade.md): Redraw the layer contents at the new size and crossfade from the old contents to the new contents. Use this in conjunction with the [NSView.LayerContentsPlacement](../layercontentsplacement-swift.enum.md) constants to get a nice crossfade animation for complex layer-backed views that cannot update correctly at each step of the animation.

# NSViewLayerContentsRedrawNever (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

Leave the layer’s contents alone. Never mark the layer as needing display, or draw the view’s contents to the layer. This is how developer created layers (layer-hosting views) are treated.

## Declaration

```objectivec
NSViewLayerContentsRedrawNever
```

## See Also

### Constants

- [NSViewLayerContentsRedrawOnSetNeedsDisplay](onsetneedsdisplay.md): Any of the `setNeedsDisplay` methods sent to the view will cause the view redraw the affected layer parts by invoking the view’s [drawRect:](../draw%28__%29.md), but neither the layer or the view are marked as needing display when the view’s size changes.
- [NSViewLayerContentsRedrawDuringViewResize](duringviewresize.md): Resize the view’s backing-layer and redraw the view to the layer when the view’s size changes. If the resize is animated, AppKit will drive the resize animation itself and will do this resize and redraw at each step of the animation. Affected parts of the layer will also be redrawn when the view is marked as needing display. This mode is a superset of [NSViewLayerContentsRedrawOnSetNeedsDisplay](onsetneedsdisplay.md). This is the way that layer-backed views are currently treated.
- [NSViewLayerContentsRedrawBeforeViewResize](beforeviewresize.md): Resize the layer and redraw the view to the layer when the view’s size changes. This will be done just once at the beginning of a resize animation, not at each frame of the animation. Affected parts of the layer will also be redrawn when the view is marked as needing display. This mode is a superset of [NSViewLayerContentsRedrawOnSetNeedsDisplay](onsetneedsdisplay.md).
- [NSViewLayerContentsRedrawCrossfade](crossfade.md): Redraw the layer contents at the new size and crossfade from the old contents to the new contents. Use this in conjunction with the [NSViewLayerContentsPlacement](../layercontentsplacement-swift.enum.md) constants to get a nice crossfade animation for complex layer-backed views that cannot update correctly at each step of the animation.
