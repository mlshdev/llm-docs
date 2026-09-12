> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/minimumframerepeatcount](https://developer.apple.com/documentation/compositorservices/layerrenderer/minimumframerepeatcount)

# minimumFrameRepeatCount (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The number of additional frames for which the system displays the same content.

## Declaration

```swift
var minimumFrameRepeatCount: Int32 { get set }
```

<a id="discussion"></a>

## Discussion

The minimum frame repeat count contains the number of additional frames that display the same content. For example, if this value is `1`, the layer displays the same content for the duration of two screen update cycles.

Use this value to determine the pacing of your drawing operations. A higher repeat count increases the amount of time you have to render each frame, and decreases the amount of power your app uses per frame. However, higher repeat counts also mean your content updates less frequently.

# cp_layer_renderer_get_minimum_frame_repeat_count (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The number of additional frames for which the system displays the same content.

## Declaration

```objectivec
int cp_layer_renderer_get_minimum_frame_repeat_count(cp_layer_renderer_t layer_renderer);
```

## Parameters

- `layer_renderer`: The layer that manages the drawing destination.

<a id="return-value"></a>

## Return Value

The number of additional frames that display the same content.

<a id="discussion"></a>

## Discussion

The minimum frame repeat count contains the number of additional frames that display the same content. For example, if this value is `1`, the layer displays the same content for the duration of two screen update cycles.

Use this value to determine the pacing of your drawing operations. A higher repeat count increases the amount of time you have to render each frame, and decreases the amount of power your app uses per frame. However, higher repeat counts also mean your content updates less frequently.
