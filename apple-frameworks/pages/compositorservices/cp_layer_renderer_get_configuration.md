> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_get_configuration](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_get_configuration)

# cp_layer_renderer_get_configuration

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Returns the configuration details for the specified layer.

## Declaration

```objectivec
cp_layer_renderer_configuration_tcp_layer_renderer_get_configuration(cp_layer_renderer_t layer_renderer);
```

## Parameters

- `layer_renderer`: The layer that contains the configuration details.

<a id="return-value"></a>

## Return Value

An opaque type you use to retrieve details about the layer’s configuration.

<a id="discussion"></a>

## Discussion

Use the returned information to set up your rendering loop. The layer ignores any modifications you make to the specified configuration data. To properly configure the layer, specify those details in the initializer for your immersive space’s content.
