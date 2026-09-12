> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/frame/predicttiming()](https://developer.apple.com/documentation/compositorservices/layerrenderer/frame/predicttiming())

# predictTiming()

**Framework:** Compositor Services  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 1.0+

Computes and returns the predicted timing information for the frame.

## Declaration

```swift
func predictTiming() -> LayerRenderer.Frame.Timing?
```

<a id="return-value"></a>

## Return Value

The predicted timing information for the specified frame, or `nil` if the layer is in the `Layer.State.paused` or `Layer.State.invalidated` state.

## Mentioned In

- [Drawing fully immersive content using Metal](../../drawing-fully-immersive-content-using-metal.md)

<a id="discussion"></a>

## Discussion

The returned timing information contains the frame-related deadlines to meet during the rendering process. For example, wait until the time in `optimalInputTime` to start the submission phase of your frame update. This function updates the frame-specific timing information with the latest data from Compositor Services before it returns it.

Don’t call this function after you call [queryDrawable()](querydrawable%28%29.md) for the specified frame. After you retrieve the frame’s [LayerRenderer.Drawable](../drawable.md) type, get the timing information from the drawable’s [frameTiming](../drawable/frametiming.md) property instead.

## See Also

### Getting timing information

- [LayerRenderer.Frame.Timing](timing.md): A type that stores information about a frame’s encoding, rendering, and presentation deadlines.
