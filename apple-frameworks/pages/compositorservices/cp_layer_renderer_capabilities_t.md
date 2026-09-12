> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_layer_renderer_capabilities_t](https://developer.apple.com/documentation/compositorservices/cp_layer_renderer_capabilities_t)

# cp_layer_renderer_capabilities_t

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Type Alias  
**Availability:** macOS 26.0+ · visionOS 1.0+

A type that stores the texture formats and options the layer supports.

## Declaration

```objectivec
typedef CP_OBJECT_cp_layer_renderer_capabilities * cp_layer_renderer_capabilities_t;
```

<a id="discussion"></a>

## Discussion

A [cp_layer_renderer_capabilities_t](cp_layer_renderer_capabilities_t.md) type  stores information about what options the layer currently supports. When specifying the configuration details for your layer, use the information in this type to verify your configuration is valid.
