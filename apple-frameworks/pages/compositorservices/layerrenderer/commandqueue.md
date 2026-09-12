> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/commandqueue](https://developer.apple.com/documentation/compositorservices/layerrenderer/commandqueue)

# commandQueue (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the command queue that the layer uses for drawing operations.

## Declaration

```swift
var commandQueue: any MTL4CommandQueue { get }
```

<a id="discussion"></a>

## Discussion

Should only be called with when supporting Metal4 through configuration. [cp_layer_renderer_configuration_set_supports_mtl4](../cp_layer_renderer_configuration_set_supports_mtl4.md)

# cp_layer_renderer_get_mtl4_command_queue (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 26.0+

Returns the command queue that the layer uses for drawing operations.

## Declaration

```objectivec
id<MTL4CommandQueue>cp_layer_renderer_get_mtl4_command_queue(cp_layer_renderer_t layer_renderer);
```

<a id="discussion"></a>

## Discussion

Should only be called with when supporting Metal4 through configuration. [cp_layer_renderer_configuration_set_supports_mtl4](../cp_layer_renderer_configuration_set_supports_mtl4.md)
