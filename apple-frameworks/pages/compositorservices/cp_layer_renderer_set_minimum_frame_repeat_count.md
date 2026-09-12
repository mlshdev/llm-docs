> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_set_minimum_frame_repeat_count](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_set_minimum_frame_repeat_count)

# cp_layer_renderer_set_minimum_frame_repeat_count

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Sets the number of additional times the system displays a frame.

## Declaration

```objectivec
void cp_layer_renderer_set_minimum_frame_repeat_count(cp_layer_renderer_t layer_renderer, int frame_repeat_count);
```

## Parameters

- `layer_renderer`: The layer that manages the drawing destination.
- `frame_repeat_count`: The number of times to repeat the frame. Specify `0` to display a new frame for each screen update. Specify `1` to display the same frame over two screen updates. Specify higher numbers to display the frame the specified number of times.

<a id="discussion"></a>

## Discussion

Use this value to specify the pacing of your drawing operations. A higher repeat count increases the amount of time you have to render each frame and decreases the amount of power your app uses to display that frame. However, higher repeat counts mean your content updates less frequently, so increase the value only if it is appropriate for your content.

## See Also

### Configuring the frame update rate

- [cp_layer_renderer_get_minimum_frame_repeat_count](layerrenderer/minimumframerepeatcount.md): The number of additional frames for which the system displays the same content.
