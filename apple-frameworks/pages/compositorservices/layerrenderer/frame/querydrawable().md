> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/querydrawable()](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/querydrawable())

# queryDrawable()

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

Retrieves the frame’s drawable, which contains the textures and drawing environment for the frame.

## Declaration

```swift
func queryDrawable() -> LayerRenderer.Drawable?
```

<a id="return-value"></a>

## Return Value

The drawable type, or `nil` if the layer is in the [LayerRenderer.State.paused](../state-swift.enum/paused.md) or [LayerRenderer.State.invalidated](../state-swift.enum/invalidated.md) state.

<a id="discussion"></a>

## Discussion

Fetch the drawable when you’re ready to encode the drawing commands for the frame. The [LayerRenderer.Drawable](../drawable.md) type contains the textures and other information you need to set up your render descriptor in Metal.

## See Also

### Getting the drawable environment

- [queryDrawables()](querydrawables%28%29.md): Returns the array of drawables expected to be used for the given frame. These drawables each have textures, transforms and timing information for drawing the frame.
