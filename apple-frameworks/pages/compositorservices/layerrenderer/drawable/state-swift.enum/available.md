> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/state-swift.enum/available](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/state-swift.enum/available)

# LayerRenderer.Drawable.State.available (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A drawable that’s not in use and ready for assignment to a frame.

## Declaration

```swift
case available
```

## See Also

### Getting the states

- [LayerRenderer.Drawable.State.presenting](presenting.md): A drawable that the compositor is currently displaying.
- [LayerRenderer.Drawable.State.rendering](rendering.md): A drawable that’s assigned to a frame and ready to accept your drawing commands.

# cp_drawable_state_available (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 1.0+

A drawable that’s not in use and ready for assignment to a frame.

## Declaration

```objectivec
cp_drawable_state_available
```

## See Also

### Getting the states

- [cp_drawable_state_presenting](presenting.md): A drawable that the compositor is currently displaying.
- [cp_drawable_state_rendering](rendering.md): A drawable that’s assigned to a frame and ready to accept your drawing commands.
