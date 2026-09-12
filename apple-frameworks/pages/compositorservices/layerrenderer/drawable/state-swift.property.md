> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/state-swift.property](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/state-swift.property)

# state (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The current operational state of a drawable instance.

## Declaration

```swift
var state: LayerRenderer.Drawable.State { get }
```

<a id="discussion"></a>

## Discussion

A state value of [LayerRenderer.Drawable.State.rendering](state-swift.enum/rendering.md) indicates the drawable type is ready for you to draw your content. Other values indicate that Compositor Services currently owns the drawable.

Compositor Services reuses the underlying data structures associated with drawable types. The drawable’s state indicates whether it’s ready for you to draw to it. Run your drawing operations only when the drawable’s state is equal to [LayerRenderer.Drawable.State.rendering](state-swift.enum/rendering.md).

## See Also

### Managing the state machine

- [LayerRenderer.Drawable.State](state-swift.enum.md): The state of ownership for the drawable.

# cp_drawable_get_state (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The current operational state of a drawable instance.

## Declaration

```objectivec
enum cp_drawable_state cp_drawable_get_state(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable to test.

<a id="return-value"></a>

## Return Value

A [cp_drawable_state](state-swift.enum.md) instance that represents the drawable’s state.

<a id="discussion"></a>

## Discussion

A state value of [cp_drawable_state_rendering](state-swift.enum/rendering.md) indicates the drawable type is ready for you to draw your content. Other values indicate that Compositor Services currently owns the drawable.

Compositor Services reuses the underlying data structures associated with drawable types. The drawable’s state indicates whether it’s ready for you to draw to it. Run your drawing operations only when the drawable’s state is equal to [cp_drawable_state_rendering](state-swift.enum/rendering.md).

## See Also

### Managing the state machine

- [cp_drawable_state](state-swift.enum.md): The state of ownership for the drawable.
