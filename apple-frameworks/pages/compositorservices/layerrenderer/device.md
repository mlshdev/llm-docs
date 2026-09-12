> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/device](https://developer.apple.com/documentation/compositorservices/layerrenderer/device)

# device (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The GPU device that the layer renderer uses for drawing operations

## Declaration

```swift
var device: any MTLDevice { get }
```

<a id="discussion"></a>

## Discussion

You can inspect the device for any information you might need. The system uses it to create the textures for drawing, and also to create synchronization events for the layer.

# cp_layer_renderer_get_device (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

The GPU device that the layer renderer uses for drawing operations

## Declaration

```objectivec
id<MTLDevice>cp_layer_renderer_get_device(cp_layer_renderer_t layer_renderer);
```

## Parameters

- `layer_renderer`: The layer the method queries.

<a id="return-value"></a>

## Return Value

The Metal device you need to use for drawing operations.

<a id="discussion"></a>

## Discussion

You can inspect the device for any information you might need. The system uses it to create the textures for drawing, and also to create synchronization events for the layer.
