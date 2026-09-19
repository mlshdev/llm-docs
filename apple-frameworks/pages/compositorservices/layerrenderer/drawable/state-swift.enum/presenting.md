> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/state-swift.enum/presenting

# LayerRenderer.Drawable.State.presenting (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A drawable that the compositor is currently displaying.

## Declaration

```swift
case presenting
```

## See Also

### Getting the states

- [LayerRenderer.Drawable.State.available](available.md): A drawable that’s not in use and ready for assignment to a frame.
- [LayerRenderer.Drawable.State.rendering](rendering.md): A drawable that’s assigned to a frame and ready to accept your drawing commands.

# cp_drawable_state_presenting (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A drawable that the compositor is currently displaying.

## Declaration

```objectivec
cp_drawable_state_presenting
```

## See Also

### Getting the states

- [cp_drawable_state_available](available.md): A drawable that’s not in use and ready for assignment to a frame.
- [cp_drawable_state_rendering](rendering.md): A drawable that’s assigned to a frame and ready to accept your drawing commands.
